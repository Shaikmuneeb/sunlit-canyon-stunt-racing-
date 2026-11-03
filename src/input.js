import { clamp, damp } from './util.js';

const KEYMAP = {
  ArrowUp: 'throttle',
  KeyW: 'throttle',
  ArrowDown: 'brake',
  KeyS: 'brake',
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
  Space: 'drift',
  ShiftLeft: 'boost',
  ShiftRight: 'boost',
  KeyC: 'camera',
  KeyR: 'restart',
  Escape: 'pause',
  KeyP: 'pause',
  KeyM: 'mute',
  Enter: 'confirm',
  KeyH: 'help',
  Tab: 'help',
};

const ACTION_KEYS = {
  pause: ['Escape', 'KeyP'],
  camera: ['KeyC'],
  restart: ['KeyR'],
  confirm: ['Enter', 'NumpadEnter'],
  back: ['Escape', 'Backspace'],
  help: ['KeyH', 'Tab'],
  mute: ['KeyM'],
  up: ['ArrowUp', 'KeyW'],
  down: ['ArrowDown', 'KeyS'],
  left: ['ArrowLeft', 'KeyA'],
  right: ['ArrowRight', 'KeyD'],
};

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.buffer = new Map();
    this.state = { steer: 0, throttle: 0, brake: 0, handbrake: false, boost: false };
    this.rawSteer = 0;
    this.touch = { left: false, right: false, throttle: false, brake: false, drift: false, boost: false };
    this.mouse = { down: false, right: false, x: 0.5, y: 0.5, active: false };
    this.gamepadIndex = null;
    this.pad = { steer: 0, throttle: 0, brake: 0, drift: false, boost: false };
    this.boostLatch = 0;
    this.driftLatch = 0;
    this.lastDevice = 'keyboard';
    this.onFirstInput = null;
    this.interacted = false;

    window.addEventListener('keydown', (e) => this.onKeyDown(e), { passive: false });
    window.addEventListener('keyup', (e) => this.onKeyUp(e));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.state.handbrake = false;
      this.state.boost = false;
    });

    canvas.addEventListener('pointerdown', (e) => {
      this.notify();
      if (e.button === 0) {
        this.mouse.down = true;
        this.mouse.active = true;
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.lastDevice = 'mouse';
        canvas.setPointerCapture?.(e.pointerId);
      } else if (e.button === 2) {
        this.mouse.right = true;
      }
    });
    canvas.addEventListener('pointerup', (e) => {
      if (e.button === 0) this.mouse.down = false;
      if (e.button === 2) this.mouse.right = false;
    });
    canvas.addEventListener('pointercancel', () => {
      this.mouse.down = false;
      this.mouse.right = false;
    });
    canvas.addEventListener('pointermove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      if (this.mouse.down) this.mouse.active = true;
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('gamepadconnected', (e) => {
      this.gamepadIndex = e.gamepad.index;
      this.lastDevice = 'gamepad';
      this.notify();
    });
    window.addEventListener('gamepaddisconnected', () => {
      this.gamepadIndex = null;
    });

    window.addEventListener('pointerdown', () => this.notify(), { once: true });
    window.addEventListener('keydown', () => this.notify(), { once: true });
  }

  notify() {
    this.interacted = true;
    this.onFirstInput?.();
  }

  onKeyDown(e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
    const mapped = KEYMAP[e.code];
    if (mapped) {
      if (['throttle', 'brake', 'left', 'right', 'drift', 'boost', 'help'].includes(mapped) || e.code === 'Space') {
        e.preventDefault();
      }
      if (!this.keys.has(e.code)) {
        if (mapped === 'boost') this.boostLatch = 0.18;
        if (mapped === 'drift') this.driftLatch = 0.18;
        for (const [action, keys] of Object.entries(ACTION_KEYS)) {
          if (keys.includes(e.code)) this.buffer.set(action, performance.now());
        }
        if (e.code === 'Space') this.buffer.set('confirm', performance.now());
      }
      this.keys.add(e.code);
      this.lastDevice = 'keyboard';
      this.mouse.active = false;
    }
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
      this.buffer.set(e.code.replace('Arrow', '').toLowerCase(), performance.now());
    }
  }

  onKeyUp(e) {
    this.keys.delete(e.code);
  }

  key(...codes) {
    return codes.some((c) => this.keys.has(c));
  }

  consume(action, windowMs = 220) {
    const t = this.buffer.get(action);
    if (t === undefined) return false;
    if (performance.now() - t > windowMs) {
      this.buffer.delete(action);
      return false;
    }
    this.buffer.delete(action);
    return true;
  }

  clearBuffer() {
    this.buffer.clear();
  }

  setTouch(name, value) {
    if (name in this.touch) this.touch[name] = value;
    if (value) this.lastDevice = 'touch';
  }

  resetTouch() {
    for (const k of Object.keys(this.touch)) this.touch[k] = false;
  }

  pollGamepad() {
    if (!navigator.getGamepads) return;
    const pads = navigator.getGamepads();
    let pad = this.gamepadIndex !== null ? pads[this.gamepadIndex] : null;
    if (!pad) {
      for (const p of pads) {
        if (p && p.connected) {
          pad = p;
          this.gamepadIndex = p.index;
          break;
        }
      }
    }
    if (!pad || !pad.connected) {
      this.pad.steer = 0;
      this.pad.throttle = 0;
      this.pad.brake = 0;
      this.pad.drift = false;
      this.pad.boost = false;
      return;
    }
    const ax = pad.axes[0] || 0;
    const dead = 0.16;
    let steer = Math.abs(ax) < dead ? 0 : (Math.sign(ax) * (Math.abs(ax) - dead)) / (1 - dead);
    steer = Math.sign(steer) * Math.pow(Math.abs(steer), 1.35);
    this.pad.steer = steer;
    this.pad.throttle = pad.buttons[7]?.value || 0;
    this.pad.brake = pad.buttons[6]?.value || 0;
    const pressed = (i) => !!pad.buttons[i]?.pressed;
    this.pad.drift = pressed(0);
    this.pad.boost = pressed(1) || pressed(5);
    if (this.pad.drift || this.pad.boost || Math.abs(steer) > 0.2 || this.pad.throttle > 0.1) {
      this.lastDevice = 'gamepad';
    }
    if (pad.buttons[0]?.pressed) this.buffer.set('confirm', performance.now());
    if (pad.buttons[9]?.pressed) this.buffer.set('pause', performance.now());
    if (pad.buttons[3]?.pressed) this.buffer.set('restart', performance.now());
    if (pad.buttons[2]?.pressed) this.buffer.set('camera', performance.now());
    const ay = pad.axes[1] || 0;
    if (ay < -0.6) this.buffer.set('up', performance.now());
    if (ay > 0.6) this.buffer.set('down', performance.now());
    if (pad.buttons[12]?.pressed) this.buffer.set('up', performance.now());
    if (pad.buttons[13]?.pressed) this.buffer.set('down', performance.now());
    if (pad.buttons[14]?.pressed) this.buffer.set('left', performance.now());
    if (pad.buttons[15]?.pressed) this.buffer.set('right', performance.now());
  }

  update(dt) {
    this.pollGamepad();
    const touch = this.touch;
    const keyLeft = this.key('ArrowLeft', 'KeyA');
    const keyRight = this.key('ArrowRight', 'KeyD');
    let steerTarget = (keyRight ? 1 : 0) - (keyLeft ? 1 : 0);
    if (keyLeft || keyRight) this.lastDevice = 'keyboard';

    const mouseSteer =
      this.mouse.down && this.mouse.active && this.lastDevice === 'mouse'
        ? clamp(this.mouse.x * 1.5, -1, 1)
        : null;
    const padSteer = Math.abs(this.pad.steer) > 0.02 ? this.pad.steer : null;

    let target;
    let rate = 8;
    if (touch.left || touch.right) {
      target = (touch.right ? 1 : 0) - (touch.left ? 1 : 0);
      rate = 9;
    } else if (mouseSteer !== null) {
      target = mouseSteer;
      rate = 12;
      this.lastDevice = 'mouse';
    } else if (padSteer !== null) {
      target = padSteer;
      rate = 13;
    } else {
      target = steerTarget;
      rate = steerTarget === 0 ? 13 : 7.2;
    }
    this.rawSteer = target;
    this.state.steer = damp(this.state.steer, target, rate, dt);

    const keyThrottle = this.key('ArrowUp', 'KeyW');
    const keyBrake = this.key('ArrowDown', 'KeyS');
    let throttleTarget = keyThrottle ? 1 : 0;
    let brakeTarget = keyBrake ? 1 : 0;
    if (this.mouse.down) throttleTarget = 1;
    if (this.mouse.right) brakeTarget = 1;
    if (this.pad.throttle > 0.05) throttleTarget = Math.max(throttleTarget, this.pad.throttle);
    if (this.pad.brake > 0.05) brakeTarget = Math.max(brakeTarget, this.pad.brake);
    if (touch.throttle) throttleTarget = 1;
    if (touch.brake) brakeTarget = 1;

    this.state.throttle = damp(this.state.throttle, throttleTarget, throttleTarget > this.state.throttle ? 10 : 16, dt);
    this.state.brake = damp(this.state.brake, brakeTarget, brakeTarget > this.state.brake ? 14 : 18, dt);

    this.boostLatch = Math.max(0, this.boostLatch - dt);
    this.driftLatch = Math.max(0, this.driftLatch - dt);
    this.state.boost = this.key('ShiftLeft', 'ShiftRight') || this.pad.boost || touch.boost || this.boostLatch > 0;
    this.state.handbrake =
      this.key('Space') || this.pad.drift || touch.drift || this.driftLatch > 0;
    for (const [action, t] of this.buffer) {
      if (performance.now() - t > 900) this.buffer.delete(action);
    }
  }

  getDrivingState() {
    return {
      steer: this.state.steer,
      throttle: this.state.throttle,
      brake: this.state.brake,
      handbrake: this.state.handbrake,
      boost: this.state.boost,
    };
  }
}
