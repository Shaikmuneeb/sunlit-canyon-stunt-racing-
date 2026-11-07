import * as THREE from 'three';
import { Track } from './track.js';
import { Environment } from './environment.js';
import { CarModel, Car } from './car.js';
import { Effects } from './effects.js';
import { CameraRig } from './camera.js';
import { AudioEngine } from './audio.js';
import { Input } from './input.js';
import { UI } from './ui.js';
import { clamp, fmtTime } from './util.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const TOTAL_LAPS = 3;
const CHECKPOINTS = 6;
const TOTAL_RACERS = 8;
const SETTINGS_KEY = 'sunbreak.settings.v1';
const RECORDS_KEY = 'sunbreak.records.v1';
const STEP = 1 / 120;

const NEUTRAL_INPUT = { steer: 0, throttle: 0, brake: 0, handbrake: false, boost: false };

function readStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage can be unavailable in private mode */
  }
}

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.time = 0;
    this.state = 'title';

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.25, 1800);
    this.setupPost();

    this.track = new Track(this.scene);
    this.env = new Environment(this.scene, this.track);
    this.effects = new Effects(this.scene);
    this.model = new CarModel(this.scene);
    this.rivals = this.createRivals();
    this.audio = new AudioEngine();
    this.input = new Input(canvas);
    this.rig = new CameraRig(this.camera, this.track, this.env);

    this.settings = {
      assist: true,
      music: 0.65,
      sfx: 0.8,
      camera: 0,
      touch: this.isCoarsePointer(),
      seenTutorial: false,
      ...readStore(SETTINGS_KEY, {}),
    };
    this.settings.camera = clamp(Number(this.settings.camera) || 0, 0, 2);
    if (typeof this.settings.touch !== 'boolean') this.settings.touch = this.isCoarsePointer();

    this.records = {
      bestLap: null,
      bestSplits: [],
      bestTotal: null,
      ...readStore(RECORDS_KEY, {}),
    };
    this.recordsAtStart = { ...this.records };

    this.laps = [];
    this.lap = 1;
    this.checkpoint = 0;
    this.lapActive = false;
    this.raceStarted = false;
    this.raceTime = 0;
    this.lapTime = 0;
    this.accum = 0;
    this.countdownTimer = 0;
    this.countdownShown = 0;
    this.style = 0;
    this.splits = [];
    this.stats = { topSpeed: 0, nearMisses: 0, cleanLandings: 0, bestChain: 0, airTime: 0 };
    this.finishTimer = 0;
    this.goTimer = 0;
    this.hintClock = 0;
    this.wasBoosting = false;
    this.recoverTimer = 0;
    this.muted = false;
    this.lastRacePosition = TOTAL_RACERS;
    this.pausedFrom = 'racing';
    this.tutorialHints = !this.settings.seenTutorial;
    this.hintStage = 0;
    this.finishedResults = null;

    this.car = new Car(this.track, this.model, this.buildCarEvents());

    this.ui = new UI(this.track, this.audio, this.input, {
      onStart: () => this.startRace(),
      onPause: () => this.togglePause(),
      onResume: () => this.resume(),
      onRestart: () => this.startRace(),
      onQuit: () => this.enterTitle(),
      onAssist: (value) => {
        this.settings.assist = value;
        this.saveSettings();
      },
      onCamera: (index, fromSettings) => {
        this.settings.camera = index;
        this.rig.setMode(index);
        this.saveSettings();
        if (!fromSettings) this.ui.toast(`CAMERA · ${this.rig.mode.toUpperCase()}`);
      },
      onMusic: (value) => {
        this.settings.music = value;
        this.audio.setVolumes(this.settings.music, this.settings.sfx);
        this.saveSettings();
      },
      onSfx: (value) => {
        this.settings.sfx = value;
        this.audio.setVolumes(this.settings.music, this.settings.sfx);
        this.saveSettings();
      },
      onTouchToggle: (value) => {
        this.settings.touch = value;
        this.saveSettings();
        this.syncTouchControls();
      },
      onResetRecords: () => {
        this.records = { bestLap: null, bestSplits: [], bestTotal: null };
        writeStore(RECORDS_KEY, this.records);
        this.ui.setTitleBest(this.records);
      },
    });

    this.ui.setSettings(this.settings);
    this.ui.setTitleBest(this.records);

    this.input.onFirstInput = () => {
      this.audio.init();
      this.audio.setVolumes(this.settings.music, this.settings.sfx);
      this.audio.resume();
    };

    this.resize();
    this.enterTitle();
  }

  createRivals() {
    const palettes = [
      { body: '#d9433f', bodyDark: '#8e242b', accent: '#ffb13b', emissive: '#ff4b1f', trim: '#ffe0a2' },
      { body: '#4f6ee8', bodyDark: '#263c9a', accent: '#ff5d8f', emissive: '#ff244d', trim: '#b8c9ff' },
      { body: '#e4a634', bodyDark: '#9f5d1e', accent: '#f6f0d0', emissive: '#ffc84a', trim: '#fff0a6' },
      { body: '#d967b8', bodyDark: '#7a2f76', accent: '#65e4ff', emissive: '#28c9ff', trim: '#d6fbff' },
      { body: '#f1eee4', bodyDark: '#6c6b70', accent: '#ff5a36', emissive: '#ff2a19', trim: '#ffffff' },
      { body: '#805bd8', bodyDark: '#39266f', accent: '#9bff72', emissive: '#59dc49', trim: '#e7ddff' },
      { body: '#45a7a2', bodyDark: '#1d5c66', accent: '#f5d15b', emissive: '#ffae28', trim: '#d9fff2' },
    ];
    return palettes.map((palette, index) => {
      const model = new CarModel(this.scene, palette);
      const car = new Car(this.track, model, {});
      model.group.visible = false;
      model.group.scale.setScalar(0.92);
      // Rivals use the same base pace as the player’s non-boost car. Their
      // color and grid line add variety; no rival receives a hidden stat buff.
      return {
        model,
        car,
        index,
        distance: 0,
        speed: 66,
        lat: index % 2 ? 3.8 : -3.8,
        targetLat: index % 2 ? 3.8 : -3.8,
        shortcutLap: -1,
      };
    });
  }

  resetRivals(startS) {
    const gridOffsets = [-58, 34, 86, -112, 142, -166, 205];
    this.playerStartS = startS;
    this.rivals.forEach((rival, index) => {
      rival.distance = gridOffsets[index];
      const s = ((startS + rival.distance) % this.track.length + this.track.length) % this.track.length;
      rival.car.reset(s, rival.lat);
      rival.car.assist = 0.35;
      rival.model.group.visible = true;
      rival.car.model.group.position.copy(rival.car.pos);
      rival.car.model.group.rotation.y = rival.car.yaw;
    });
  }

  updateRivals(dt) {
    if (this.state !== 'racing') return;
    const playerDistance = this.playerRaceDistance();
    const shortcut = this.track.ramps.find((ramp) => ramp.shortCut);
    this.rivals.forEach((rival, index) => {
      const ai = rival.car;
      if (ai.needsRecovery) {
        const rescueS = ((ai.s - 20) % this.track.length + this.track.length) % this.track.length;
        ai.reset(rescueS, index % 2 ? 3.8 : -3.8);
      }
      const s = ((ai.s % this.track.length) + this.track.length) % this.track.length;
      const ds = ((s - shortcut.s + this.track.length * 1.5) % this.track.length) - this.track.length * 0.5;
      const rivalLap = Math.floor(rival.distance / this.track.length);
      rival.targetLat = Math.sin(this.time * 0.35 + index * 1.9) * 3.2;
      if (Math.abs(ds) < 34 && rival.shortcutLap !== rivalLap) {
        rival.targetLat = shortcut.lat;
        if (Math.abs(ds) < 5 && Math.abs(rival.lat - shortcut.lat) < 2.8) {
          rival.distance += 16;
          rival.shortcutLap = rivalLap;
        }
      }
      if (Math.abs(rival.distance - playerDistance) < 24) {
        rival.targetLat = clamp(rival.targetLat + (index % 2 ? -5 : 5), -8.5, 8.5);
      }
      rival.lat += (rival.targetLat - rival.lat) * clamp(dt * 4.5, 0, 1);
      const targetS = ai.s + 22;
      const target = this.track.samplePos(targetS, rival.lat);
      const dx = target.x - ai.pos.x;
      const dz = target.z - ai.pos.z;
      const desiredYaw = Math.atan2(dx, dz);
      const yawError = Math.atan2(Math.sin(desiredYaw - ai.yaw), Math.cos(desiredYaw - ai.yaw));
      const steer = clamp(yawError * 1.55, -1, 1);
      const cornering = Math.abs(yawError);
      const handbrake = cornering > 0.82 && ai.speed > 24;
      const boost = cornering < 0.35 && ai.boostMeter > 28 && (Math.abs(rival.distance - playerDistance) > 18);
      ai.update(dt, {
        steer,
        throttle: cornering > 1.25 ? 0.72 : 1,
        brake: cornering > 1.35 ? 0.25 : 0,
        handbrake,
        boost,
      }, 0.35);
      rival.distance += Math.max(0, ai.forwardSpeed) * dt;
      rival.speed = ai.speed;
    });
  }

  resolveVehicleCollisions() {
    const vehicles = [
      { car: this.car, model: this.model, player: true },
      ...this.rivals.map((rival) => ({ car: rival.car, model: rival.model, player: false })),
    ];
    const radius = 1.62;
    const minDistance = radius * 2;
    const restitution = 0.42;
    const friction = 0.18;

    for (let i = 0; i < vehicles.length - 1; i++) {
      const a = vehicles[i].car;
      for (let j = i + 1; j < vehicles.length; j++) {
        const b = vehicles[j].car;
        const dy = Math.abs(a.pos.y - b.pos.y);
        if (dy > 2.4 || (!a.grounded && !b.grounded && dy > 1.2)) continue;

        let nx = b.pos.x - a.pos.x;
        let nz = b.pos.z - a.pos.z;
        let distance = Math.hypot(nx, nz);
        if (distance < 0.001) {
          const angle = a.yaw || 0;
          nx = Math.sin(angle);
          nz = Math.cos(angle);
          distance = 0.001;
        } else {
          nx /= distance;
          nz /= distance;
        }
        if (distance >= minDistance) continue;

        const overlap = minDistance - distance;
        const halfPush = overlap * 0.52;
        a.pos.x -= nx * halfPush;
        a.pos.z -= nz * halfPush;
        b.pos.x += nx * halfPush;
        b.pos.z += nz * halfPush;

        const rvx = b.vel.x - a.vel.x;
        const rvz = b.vel.z - a.vel.z;
        const closingSpeed = rvx * nx + rvz * nz;
        if (closingSpeed < 0) {
          const impulse = -(1 + restitution) * closingSpeed * 0.5;
          a.vel.x -= nx * impulse;
          a.vel.z -= nz * impulse;
          b.vel.x += nx * impulse;
          b.vel.z += nz * impulse;

          const tx = -nz;
          const tz = nx;
          const tangentSpeed = rvx * tx + rvz * tz;
          const tangentImpulse = tangentSpeed * friction * 0.5;
          a.vel.x += tx * tangentImpulse;
          a.vel.z += tz * tangentImpulse;
          b.vel.x -= tx * tangentImpulse;
          b.vel.z -= tz * tangentImpulse;
        }

        for (const vehicle of [vehicles[i], vehicles[j]]) {
          const car = vehicle.car;
          car.impactTimer = Math.max(car.impactTimer, 0.16);
          car.model.addSuspensionKick(-0.45);
          const forward = new THREE.Vector3(Math.sin(car.yaw), 0, Math.cos(car.yaw));
          car.forwardSpeed = car.vel.x * forward.x + car.vel.z * forward.z;
          car.speed = Math.hypot(car.vel.x, car.vel.z);
          car.model.group.position.copy(car.pos);
        }
      }
    }
  }

  playerRaceDistance() {
    const delta = ((this.car.s - this.playerStartS) % this.track.length + this.track.length) % this.track.length;
    return Math.max(0, (this.lap - 1) * this.track.length + delta);
  }

  racerPosition() {
    const playerDistance = this.playerRaceDistance();
    return 1 + this.rivals.filter((rival) => rival.distance > playerDistance).length;
  }

  checkShortcutLine() {
    const ramp = this.track.ramps.find((item) => item.shortCut);
    if (!ramp || this.shortcutClaimedLap === this.lap) return;
    const ds = ((this.car.s - ramp.s + this.track.length * 1.5) % this.track.length) - this.track.length * 0.5;
    if (Math.abs(ds) < ramp.length * 0.52 && (this.car.route === 'branch' || Math.abs(this.car.lat - ramp.lat) < ramp.width * 0.46) && this.car.speed > 24) {
      this.shortcutClaimedLap = this.lap;
      this.car.addBoost(16);
      this.style += 240;
      this.audio.boostWhoosh();
      this.audio.branchCue();
      this.effects.addRing(this.car.pos, '#ffd166', 12);
      this.ui.toast('CANYON CUT', { value: '+240', cls: 'good' });
    }
  }

  titlePose() {
    const s = ((this.track.findS(96, -29) - 22) % this.track.length + this.track.length) % this.track.length;
    const pos = this.track.samplePos(s, 0);
    const { a } = this.track.getSample(s);
    return { s, pos, yaw: Math.atan2(a.tan.x, a.tan.z) };
  }

  setupPost() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    // Subtle contact shading gives the low-poly geometry weight without the
    // unstable full-screen distortion used by the old speed heat effect.
    this.ssaoPass = new SSAOPass(this.scene, this.camera, 1, 1);
    this.ssaoPass.kernelRadius = 5.5;
    this.ssaoPass.minDistance = 0.0015;
    this.ssaoPass.maxDistance = 0.12;
    this.ssaoPass.output = SSAOPass.OUTPUT.Default;
    this.composer.addPass(this.ssaoPass);
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.34, 0.48, 0.78);
    this.composer.addPass(this.bloomPass);

    const GradeShader = {
      uniforms: {
        tDiffuse: { value: null },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D tDiffuse;
        varying vec2 vUv;
        void main() {
          vec3 col = texture2D(tDiffuse, vUv).rgb;
          // Warm highlights, protected shadow detail, and restrained contrast.
          col = mix(col, col * vec3(1.06, 0.93, 0.86), 0.22);
          col = max(col - vec3(0.012, 0.006, 0.004), 0.0);
          float vig = smoothstep(0.98, 0.35, length((vUv - 0.5) * vec2(1.08, 1.0)));
          col *= mix(0.88, 1.0, vig);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    };
    this.gradePass = new ShaderPass(GradeShader);
    this.composer.addPass(this.gradePass);
    this.composer.addPass(new OutputPass());
  }

  isCoarsePointer() {
    return (
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
      (navigator.maxTouchPoints || 0) > 0
    );
  }

  saveSettings() {
    writeStore(SETTINGS_KEY, this.settings);
  }

  saveRecords() {
    writeStore(RECORDS_KEY, this.records);
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    if (this.composer) this.composer.setSize(w, h);
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
  }

  syncTouchControls() {
    const inRace = ['countdown', 'racing', 'paused'].includes(this.state);
    this.ui.updateTouchVisibility(this.settings.touch && inRace);
  }

  // ------------------------------------------------------------------ state
  enterTitle() {
    this.state = 'title';
    this.rivals.forEach((rival) => { rival.model.group.visible = false; });
    this.audio.setPaused(false);
    this.ui.setHUD(false);
    this.audio.setPhase('menu');
    this.ui.showScreen('title');
    this.ui.setTitleBest(this.records);
    this.ui.updateTouchVisibility(false);
    this.ui.countdown('');
    this.ui.recover(false);
    this.ui.hint('');
    this.ui.setSettings(this.settings);
    this.input.resetTouch();
    this.input.clearBuffer();
    this.audio.setPaused(false);
    this.audio.setIntensity(0);
    this.audio.updateEngine({ active: false, speed: 0 });
    this.track.setStartLights(0);
    this.rig.setMode(this.settings.camera);
    this.rig.reset();

    const pose = this.titlePose();
    this.car.reset(pose.s, 0);
    this.car.yaw = pose.yaw;
    this.car.model.group.position.copy(this.car.pos);
    this.car.model.group.rotation.y = pose.yaw;
    this.effects.reset();
    this.rig.introAngle = 0;
    this.rig.snapped = false;
    this.finishTimer = 0;
    this.recoverTimer = 0;
  }

  startRace() {
    this.audio.init();
    this.audio.resume();
    this.audio.setPaused(false);
    this.audio.setIntensity(1);
    this.audio.setPhase('race');
    this.audio.setVolumes(this.settings.music, this.settings.sfx);

    this.ui.fade(true);
    setTimeout(() => this.ui.fade(false), 140);

    this.ui.showScreen(null);
    this.ui.setHUD(true);
    this.ui.countdown('');
    this.ui.recover(false);
    this.ui.hint('');
    this.ui.setSettings(this.settings);
    this.syncTouchControls();

    const pose = this.track.startPose();
    this.resetRivals(pose.s);
    this.car.reset(pose.s, 0);
    this.car.yaw = pose.yaw;
    this.car.model.group.position.copy(this.car.pos);
    this.car.model.group.rotation.y = pose.yaw;
    this.car.controlLock = 0;

    this.effects.reset();
    this.laps = [];
    this.lap = 1;
    this.checkpoint = 0;
    this.lapActive = false;
    this.raceStarted = false;
    this.raceTime = 0;
    this.lapTime = 0;
    this.accum = 0;
    this.style = 0;
    this.splits = [];
    this.stats = { topSpeed: 0, nearMisses: 0, cleanLandings: 0, bestChain: 0, airTime: 0 };
    this.recordsAtStart = {
      bestLap: this.records.bestLap,
      bestSplits: [...(this.records.bestSplits || [])],
      bestTotal: this.records.bestTotal,
    };
    this.countdownTimer = 3.0;
    this.countdownShown = 3;
    this.finishTimer = 0;
    this.recoverTimer = 0;
    this.finishedResults = null;
    this.hintStage = 0;
    this.shortcutClaimedLap = -1;
    this.lastRacePosition = TOTAL_RACERS;
    this.hintClock = 0;
    this.goTimer = 0;
    this.wasBoosting = false;
    this.tutorialHints = !this.settings.seenTutorial;
    this.pausedFrom = 'racing';
    this.state = 'countdown';
    this.syncTouchControls();

    this.ui.countdown('3');
    this.ui.hint('');
    this.audio.countdown(false);
    this.track.setStartLights(1);

    this.rig.setMode(this.settings.camera);
    this.rig.reset();
    this.rig.snapTo(this.car, 8.6);

    this.input.resetTouch();
    this.input.clearBuffer();
  }

  togglePause() {
    if (this.state === 'paused') {
      this.resume();
      return;
    }
    if (this.state !== 'racing' && this.state !== 'countdown') return;
    this.pausedFrom = this.state;
    this.state = 'paused';
    this.audio.setPaused(true);
    this.input.resetTouch();
    this.input.clearBuffer();
    this.ui.setPauseInfo({
      lap: this.lap,
      totalLaps: TOTAL_LAPS,
      time: this.raceTime,
      bestLap: this.currentBestLap(),
    });
    this.ui.showScreen('pause');
    this.ui.setHUD(true);
    this.syncTouchControls();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = this.pausedFrom;
    this.audio.setPaused(false);
    this.ui.showScreen(null);
    this.ui.setHUD(true);
    this.input.resetTouch();
    this.input.clearBuffer();
    this.syncTouchControls();
    this.ui.setPauseInfo?.({
      lap: this.lap,
      totalLaps: TOTAL_LAPS,
      time: this.raceTime,
      bestLap: this.currentBestLap(),
    });
  }

  currentBestLap() {
    let best = this.records.bestLap && isFinite(this.records.bestLap) ? this.records.bestLap : Infinity;
    for (const lap of this.laps) if (lap < best) best = lap;
    return isFinite(best) ? best : null;
  }

  // ------------------------------------------------------------------ events
  buildCarEvents() {
    return {
      onLand: (impact, pos, slip, airTime) => {
        const strength = clamp(impact / 22, 0.25, 1.2);
        this.effects.landingDust(pos, impact);
        this.effects.addRing(pos, '#ffd296', 10 + strength * 6);
        this.audio.landing(impact);
        this.rig.addShake(0.12 + strength * 0.4);
        this.stats.airTime += airTime;
      },
      onCrash: (severity, pos) => {
        const forward = new THREE.Vector3(Math.sin(this.car.yaw), 0, Math.cos(this.car.yaw));
        this.effects.crashBurst(pos, forward);
        this.audio.impact(severity);
        this.rig.addShake(0.45 + severity * 0.5);
        this.effects.endSkid();
      },
      onWallSpark: (pos, side, smp) => {
        this.effects.wallSparks(pos, side, smp ? smp.tan : null);
        this.audio.wallScrape();
      },
      onWallRide: () => {
        this.style += 20 / 60;
      },
      onWallHit: (pos, speed) => {
        if (speed > 30) this.rig.addShake(0.18);
      },
      onPropHit: () => {
        this.audio.impact(0.5);
        this.rig.addShake(0.35);
        this.ui.toast('ROCK CONTACT', { cls: '' });
      },
      onNearMiss: (pos) => {
        this.style += 150;
        this.stats.nearMisses += 1;
        this.audio.nearMiss();
        this.effects.sparks.spawn({
          x: pos.x,
          y: pos.y + 1,
          z: pos.z,
          vx: 0,
          vy: 1,
          vz: 0,
          life: 0.1,
          size0: 0.1,
          size1: 0.1,
          r: 1,
          g: 1,
          b: 1,
          alpha: 0,
        });
        this.ui.toast('NEAR MISS', { value: '+150', cls: 'good' });
      },
      onDriftStart: () => {},
      onDriftEnd: (chain, mult) => {
        if (chain > 0.55) {
          const points = Math.round(chain * mult * 26);
          this.style += points;
          this.ui.toast('CHAIN BANKED', { value: `+${points}`, cls: 'big' });
          this.effects.endSkid();
        }
      },
      onChainStep: (mult) => {
        this.audio.driftChain(mult);
        if (mult > 1) this.ui.toast(`CHAIN x${mult}`, { cls: 'big' });
      },
      onDriftTick: (chain, slip) => {
        this.stats.bestChain = Math.max(this.stats.bestChain, chain);
      },
      onCleanLanding: (impact) => {
        this.style += 100;
        this.stats.cleanLandings += 1;
        this.ui.toast('CLEAN LANDING', { value: '+100', cls: 'good' });
      },
      onAirtime: (airTime) => {
        this.style += 80;
        this.ui.toast('BIG AIR', { value: '+80', cls: 'good' });
      },
      onOffRoad: () => {},
    };
  }

  // ------------------------------------------------------------------ update
  update(dtRaw) {
    const dt = clamp(dtRaw, 0, 0.05);
    this.time += dt;
    this.input.update(dt);

    this.handleGlobalInput();

    switch (this.state) {
      case 'title':
        this.updateTitle(dt);
        break;
      case 'countdown':
        this.updateCountdown(dt);
        break;
      case 'racing':
        this.updateRacing(dt);
        break;
      case 'paused':
        this.updatePaused(dt);
        break;
      case 'finished':
        this.updateFinished(dt);
        break;
      default:
        break;
    }

    this.env.update(dt, this.camera.position, this.time);
    this.env.updateSun(this.car.pos);
    this.effects.update(dt);
    this.effects.updateRings(dt);
    this.updateRecoverBanner(dt);
  }

  handleGlobalInput() {
    if (this.input.consume('mute')) {
      this.muted = !this.muted;
      if (this.audio.ready) {
        this.audio.master.gain.setTargetAtTime(
          this.muted ? 0 : 0.9,
          this.audio.ctx.currentTime,
          0.05
        );
      }
      this.ui.toast(this.muted ? 'SOUND OFF' : 'SOUND ON', { cls: '' });
    }

    const screen = this.ui.current;
    if (screen === 'settings' || screen === 'how') {
      if (this.input.consume('back') || this.input.consume('pause')) {
        this.input.clearBuffer();
        this.audio.uiBack();
        this.ui.back();
      }
      return;
    }

    if (this.input.consume('pause')) {
      if (this.state === 'paused') this.resume();
      else if (this.state === 'racing' || this.state === 'countdown') this.togglePause();
      return;
    }

    if (this.state === 'title' && this.input.consume('confirm')) {
      this.startRace();
      return;
    }

    if (this.state === 'finished' && this.input.consume('confirm') && this.finishTimer <= 0) {
      this.startRace();
      return;
    }

    if (this.state === 'racing' || this.state === 'countdown') {
      if (this.input.consume('camera')) {
        const mode = this.rig.cycle();
        this.settings.camera = this.rig.modeIndex;
        this.saveSettings();
        this.ui.toast(`CAMERA · ${mode.toUpperCase()}`);
      }
      if (this.input.consume('restart')) {
        this.startRace();
      }
    } else if (this.state === 'paused' && this.input.consume('restart')) {
      this.startRace();
    }
  }

  updateTitle(dt) {
    this.car.update(dt, NEUTRAL_INPUT, this.assistValue());
    this.rig.update(dt, this.car, { intro: true });
    this.audio.updateEngine({ active: false, speed: 0 });
    this.ui.drawMinimap(this.car, 0);
  }

  updatePaused(dt) {
    this.rig.update(dt, this.car, { paused: true });
    this.audio.updateEngine({ active: false, speed: 0 });
  }

  updateCountdown(dt) {
    this.audio.updateEngine({
      active: true,
      speed: 0,
      throttle: this.input.state.throttle,
      grounded: true,
      slipFactor: 0,
    });
    this.car.update(dt, NEUTRAL_INPUT, this.assistValue());
    this.rig.update(dt, this.car, {});

    this.countdownTimer -= dt;
    const n = Math.ceil(this.countdownTimer);
    if (n !== this.countdownShown) {
      if (n >= 1 && n <= 3) {
        this.ui.countdown(String(n));
        this.audio.countdown(false);
        this.track.setStartLights(n === 3 ? 1 : n === 2 ? 3 : 5);
      } else if (n <= 0) {
        this.ui.countdown('GO!', true);
        this.audio.countdown(true);
        this.track.setStartLights(5, true);
        this.state = 'racing';
        this.raceStarted = true;
        this.goTimer = 0.75;
      }
      this.countdownShown = n;
    }
    if (this.countdownTimer < -0.7) this.ui.countdown('');

    this.ui.updateHUD(this.hudState());
    this.ui.drawMinimap(this.car, 0);
  }

  updateRacing(dt) {
    const drive = this.input.getDrivingState();
    const assist = this.assistValue();
    this.hintClock += dt;
    if (this.goTimer > 0) {
      this.goTimer -= dt;
      if (this.goTimer <= 0) {
        this.ui.countdown('');
        this.track.setStartLights(0);
      }
    }

    this.accum += dt;
    let iterations = 0;
    while (this.accum >= STEP && iterations < 8 && this.state === 'racing') {
      if (this.lapActive) {
        this.raceTime += STEP;
        this.lapTime += STEP;
      }
      const before = this.car.s;
      this.car.update(STEP, drive, assist);
      this.checkShortcutLine();
      this.checkGates(before, this.car.s);
      if (this.car.needsRecovery) this.handleRecovery();
      this.accum -= STEP;
      iterations += 1;
    }
    if (iterations === 8) this.accum = 0;

    this.rig.update(dt, this.car, {});
    this.updateRivals(dt);
    this.resolveVehicleCollisions();
    const racePosition = this.racerPosition();
    if (racePosition !== this.lastRacePosition) {
      const movedUp = racePosition < this.lastRacePosition;
      this.audio.rivalPass();
      this.ui.toast(movedUp ? 'OVERTAKE' : 'POSITION LOST', {
        value: `${racePosition}/${TOTAL_RACERS}`,
        cls: movedUp ? 'good' : '',
      });
      this.lastRacePosition = racePosition;
    }
    this.emitEffects(dt, drive);

    const speed = this.car.speed;
    this.stats.topSpeed = Math.max(this.stats.topSpeed, speed * 3.6);
    this.stats.bestChain = Math.max(this.stats.bestChain, this.car.driftChain);

    this.audio.updateEngine({
      active: true,
      speed,
      throttle: drive.throttle,
      boosting: this.car.boosting,
      slip: this.car.slip,
      slipFactor: Math.abs(this.car.slip),
      grounded: this.car.grounded,
      offRoad: this.car.offRoad,
    });

    this.ui.updateHUD(this.hudState());
    this.ui.drawMinimap(this.car, this.checkpoint >= CHECKPOINTS ? 0 : this.checkpoint + 1);

    this.updateHints();
  }

  updateFinished(dt) {
    this.rig.update(dt, this.car, { finished: true });
    this.audio.updateEngine({ active: false, speed: 0 });

    if (this.finishTimer > 0) {
      this.finishTimer -= dt;
      if (this.finishTimer <= 0) {
        this.ui.countdown('');
        this.ui.setResults(this.finishedResults);
        this.ui.showScreen('results');
        this.ui.setHUD(false);
        this.ui.updateTouchVisibility(false);
        this.audio.setIntensity(0);
      }
    }
  }

  assistValue() {
    return this.settings.assist ? 0.55 : 0;
  }

  hudState() {
    const playerDistance = this.playerRaceDistance();
    const nearby = this.rivals
      .map((rival) => rival.distance - playerDistance)
      .filter((gap) => Math.abs(gap) > 0.5)
      .sort((a, b) => Math.abs(a) - Math.abs(b))[0];
    const splitTarget = this.records.bestSplits?.[Math.max(0, this.checkpoint - 1)];
    return {
      lap: Math.min(this.lap, TOTAL_LAPS),
      totalLaps: TOTAL_LAPS,
      time: this.raceTime,
      bestLap: this.currentBestLap(),
      speed: this.car.speed,
      boost: this.car.boostMeter,
      style: this.style + this.car.driftScore * 0.55,
      chain: {
        active: this.car.drifting,
        chain: this.car.driftChain,
        mult: this.car.chainMultiplier,
      },
      checkpoint: this.checkpoint,
      totalCheckpoints: CHECKPOINTS,
      position: this.racerPosition(),
      totalRacers: TOTAL_RACERS,
      sector: Math.min(this.checkpoint + 1, CHECKPOINTS),
      sectorDelta: isFinite(splitTarget) ? this.lapTime - splitTarget : null,
      rivalGap: nearby ?? null,
    };
  }

  // ------------------------------------------------------------------ gates
  checkGates(fromS, toS) {
    const L = this.track.length;
    let d = toS - fromS;
    if (d > L / 2) d -= L;
    if (d < -L / 2) d += L;
    if (d <= 0 || Math.abs(d) > 90) return;

    const gates = this.track.gateS;
    const crossings = [];
    for (let i = 0; i < gates.length; i++) {
      let rel = ((gates[i] - fromS) % L + L) % L;
      if (rel <= d + 0.001) crossings.push({ i, rel });
    }
    crossings.sort((a, b) => a.rel - b.rel);
    for (const c of crossings) this.onGate(c.i);
  }

  onGate(index) {
    if (!this.raceStarted) return;

    if (index === 0) {
      if (!this.lapActive) {
        this.lapActive = true;
        this.lapTime = 0;
        this.raceTime = 0;
        this.checkpoint = 0;
        this.splits = [];
        this.laps = [];
        this.ui.toast('LIGHTS OUT · GO', { cls: 'big' });
        return;
      }
      if (this.checkpoint >= CHECKPOINTS) {
        this.completeLap();
      }
      return;
    }

    if (!this.lapActive) return;
    if (index === this.checkpoint + 1 && index <= CHECKPOINTS) {
      this.checkpoint = index;
      this.audio.checkpoint();
      this.splits[index - 1] = this.lapTime;
      const bestSplit = this.records.bestSplits?.[index - 1];
      if (isFinite(bestSplit)) {
        this.ui.showDelta(this.lapTime - bestSplit);
      }
      this.ui.toast(`CHECKPOINT ${index}/${CHECKPOINTS}`, {
        value: fmtTime(this.lapTime),
      });
    }
  }

  completeLap() {
    const lapTime = this.lapTime;
    this.laps.push(lapTime);
    this.lapActive = false;

    const previousBest = this.records.bestLap;
    const lapSplits = this.splits.slice();
    const isBest = !previousBest || lapTime < previousBest;
    if (isBest) {
      this.records.bestLap = lapTime;
      this.records.bestSplits = lapSplits;
    }

    if (this.lap >= TOTAL_LAPS) {
      this.finishRace();
      return;
    }

    this.ui.toast(`LAP ${this.lap} COMPLETE`, { value: fmtTime(lapTime), cls: 'big' });
    this.audio.lap();
    this.lap += 1;
    this.shortcutClaimedLap = -1;
    this.checkpoint = 0;
    this.lapTime = 0;
    this.splits = [];
    this.lapActive = true;
    if (previousBest) this.ui.showDelta(lapTime - previousBest);
    if (this.lap === TOTAL_LAPS) {
      this.audio.setIntensity(2);
      this.audio.setPhase('final');
      this.ui.toast('FINAL LAP · SEND IT', { cls: 'big' });
    }
    this.saveRecords();
  }

  finishRace() {
    this.state = 'finished';
    this.lap = TOTAL_LAPS;
    this.records.bestTotal =
      !this.records.bestTotal || this.raceTime < this.records.bestTotal
        ? this.raceTime
        : this.records.bestTotal;
    this.saveRecords();

    const best = Math.min(...this.laps);
    const newBestLap = this.recordsAtStart.bestLap
      ? best < this.recordsAtStart.bestLap - 0.001
      : true;
    const newBestTotal = this.recordsAtStart.bestTotal
      ? this.raceTime < this.recordsAtStart.bestTotal - 0.001
      : true;

    const title = newBestLap
      ? 'Canyon <em>Legend</em>'
      : newBestTotal
        ? 'New <em>Benchmark</em>'
        : 'Sunbreak <em>Flyer</em>';

    this.finishedResults = {
      laps: this.laps.slice(),
      best,
      total: this.raceTime,
      style: this.style + this.car.driftScore * 0.55,
      topSpeed: this.stats.topSpeed,
      bestChain: this.stats.bestChain,
      airTime: this.stats.airTime,
      nearMisses: this.stats.nearMisses,
      cleanLandings: this.stats.cleanLandings,
      newBest: newBestLap || newBestTotal,
      newBestLap,
      title,
      bestLabel: newBestLap
        ? 'NEW PERSONAL BEST'
        : this.recordsAtStart.bestLap
          ? `RECORD ${fmtTime(this.recordsAtStart.bestLap)}`
          : '',
    };

    this.finishTimer = 2.1;
    this.audio.setPhase('results');
    this.ui.countdown('FINISH', true);
    this.audio.finish();
    this.effects.addRing(this.car.pos, '#8cf5d9', 20);
    this.effects.crashBurst(
      this.car.pos,
      new THREE.Vector3(Math.sin(this.car.yaw), 0, Math.cos(this.car.yaw))
    );
    this.ui.hint('');
    this.ui.recover(false);
    this.input.resetTouch();
    this.ui.updateTouchVisibility(false);
  }

  // ------------------------------------------------------------------ recovery
  handleRecovery() {
    const reason = this.car.recoveryReason;
    let s = this.car.s;
    if (reason === 'fall' || this.track.isGap(s)) {
      s = this.track.gap.start - 20;
    }
    for (let i = 0; i < 50 && this.track.isGap(s); i++) s -= 4;
    const L = this.track.length;
    s = ((s % L) + L) % L;

    this.car.reset(s, 0);
    this.car.boostMeter = Math.max(this.car.boostMeter, 35);
    this.car.controlLock = 0.55;
    this.car.needsRecovery = false;
    this.car.model.group.position.copy(this.car.pos);
    this.car.model.group.rotation.y = this.car.yaw;
    this.effects.endSkid();
    this.effects.landingDust(this.car.pos, 8);
    this.rig.snapTo(this.car, 8.4);
    this.audio.landing(6);
    this.recoverTimer = 1.5;
    this.ui.recover(true);
    this.ui.toast('BACK ON THE LINE', { value: 'GO', cls: '' });
  }

  updateRecoverBanner(dt) {
    if (this.recoverTimer > 0) {
      this.recoverTimer -= dt;
      if (this.recoverTimer <= 0) this.ui.recover(false);
    }
  }

  // ------------------------------------------------------------------ effects
  emitEffects(dt, drive) {
    const car = this.car;
    const forward = new THREE.Vector3(Math.sin(car.yaw), 0, Math.cos(car.yaw));
    const right = new THREE.Vector3(forward.z, 0, -forward.x);
    this.model.group.updateMatrixWorld(true);

    const sliding = car.grounded && (car.drifting || drive.handbrake) && car.speed > 7;
    if (sliding) {
      const strength = clamp(Math.abs(car.slip) * 1.6, 0.25, 1);
      for (const index of [2, 3]) {
        this.model.wheelWorld(index, this._wheelPos || (this._wheelPos = new THREE.Vector3()));
        this.effects.skidTrail(index, this._wheelPos, forward, strength);
        this.effects.driftSmoke(this._wheelPos, index === 2 ? -1 : 1, car.vel, strength);
      }
    } else {
      this.effects.endSkid();
    }

    if (car.offRoad && car.grounded && car.speed > 3) {
      const rear = new THREE.Vector3().copy(car.pos).addScaledVector(forward, -1.4);
      if (Math.random() < 0.75) this.effects.tireDust(rear, car.vel, 1);
    }

    if (car.boosting) {
      this.effects.boostTrail(car.pos, forward, 1);
      if (Math.random() < 0.4) this.rig.addShake(0.035);
      if (!this.wasBoosting) this.audio.boostWhoosh();
    }
    this.wasBoosting = car.boosting;

    if (!car.grounded && car.airTime > 0.15 && Math.random() < 0.4) {
      this.effects.jumpDust(new THREE.Vector3().copy(car.pos).addScaledVector(forward, -1.2));
    }
  }

  // ------------------------------------------------------------------ hints
  updateHints() {
    if (!this.tutorialHints) return;
    const touch = this.settings.touch;
    if (this.hintStage === 0 && this.hintClock > 0.8) {
      this.hintStage = 1;
      this.ui.hint(
        touch
          ? 'Hold <b>GAS</b> to launch · <b>DRIFT</b> through the first corner'
          : 'Hold <b>W</b> / <b>↑</b> to launch · <b>SPACE</b> to drift',
        5.5
      );
    } else if (this.hintStage === 1 && this.hintClock > 7) {
      this.hintStage = 2;
      this.ui.hint(
        touch
          ? 'Slides fill your <b>BOOST</b> meter · tap <b>BOOST</b> on the straights'
          : 'Drifting fills <b>BOOST</b> · hit <b>SHIFT</b> on the straights',
        5.5
      );
    } else if (this.hintStage === 2 && this.hintClock > 15) {
      this.hintStage = 3;
      this.ui.hint(
        touch
          ? 'Steer with the arrows · <b>DRIFT</b> + <b>BOOST</b> wins races'
          : '<b>C</b> camera · <b>R</b> restart · <b>ESC</b> pause',
        4.5
      );
    } else if (this.hintStage === 3 && this.hintClock > 21) {
      this.hintStage = 4;
      this.ui.hint('');
      this.tutorialHints = false;
      this.settings.seenTutorial = true;
      this.saveSettings();
    }
  }

  render() {
    this.composer.render();
  }

  onVisibilityHidden() {
    if (this.state === 'racing' || this.state === 'countdown') this.togglePause();
  }
}
