import { clamp, fmtTime, fmtDelta } from './util.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export class UI {
  constructor(track, audio, input, handlers = {}) {
    this.track = track;
    this.audio = audio;
    this.input = input;
    this.handlers = handlers;
    this.current = 'title';
    this.previous = 'title';
    this.settings = null;
    this.last = {};
    this.hintTimer = 0;
    this.deltaTimer = 0;
    this.countdownText = '';

    this.hud = $('#hud');
    this.screens = {
      title: $('#screen-title'),
      how: $('#screen-how'),
      settings: $('#screen-settings'),
      pause: $('#screen-pause'),
      results: $('#screen-results'),
    };

    this.el = {
      lap: $('#lap-value'),
      position: $('#position-value'),
      time: $('#time-value'),
      best: $('#best-value'),
      delta: $('#delta'),
      speed: $('#speed-value'),
      boost: $('#boost-fill'),
      boostPct: $('#boost-pct'),
      style: $('#style-value'),
      chain: $('#chain'),
      chainMult: $('#chain-mult'),
      chainTime: $('#chain-time'),
      toasts: $('#toasts'),
      hint: $('#hint'),
      countdown: $('#countdown'),
      recover: $('#recover'),
      cp: $('#cp-count'),
      titleBest: $('#title-best'),
      pauseSub: $('#pause-sub'),
      pauseTime: $('#pause-time'),
      pauseBest: $('#pause-best'),
      fade: $('#fade'),
      touch: $('#touch'),
    };

    this.bindStatic();
    this.bindTouch();
    this.setupMinimap();
    this.updateTouchVisibility(false);
  }

  bindStatic() {
    $$('[data-action]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const action = btn.dataset.action;
        this.audio?.uiClick();
        this.handleAction(action);
      });
    });

    $('#btn-pause')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.audio?.uiClick();
      this.handlers.onPause?.();
    });

    const assist = $('#toggle-assist');
    assist?.addEventListener('click', () => {
      const next = assist.getAttribute('aria-checked') !== 'true';
      assist.setAttribute('aria-checked', String(next));
      this.audio?.uiClick();
      this.handlers.onAssist?.(next);
    });

    $$('#seg-camera button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.cam);
        $$('#seg-camera button').forEach((b) => b.classList.toggle('is-on', b === btn));
        this.audio?.uiClick();
        this.handlers.onCamera?.(idx, true);
      });
    });

    const music = $('#slider-music');
    music?.addEventListener('input', () => {
      $('#music-val').textContent = music.value;
      this.handlers.onMusic?.(Number(music.value) / 100);
    });
    const sfx = $('#slider-sfx');
    sfx?.addEventListener('input', () => {
      $('#sfx-val').textContent = sfx.value;
      this.handlers.onSfx?.(Number(sfx.value) / 100);
    });

    const touchToggle = $('#toggle-touch');
    touchToggle?.addEventListener('click', () => {
      const next = touchToggle.getAttribute('aria-checked') !== 'true';
      this.audio?.uiClick();
      this.handlers.onTouchToggle?.(next);
    });
  }

  handleAction(action) {
    switch (action) {
      case 'start':
        this.handlers.onStart?.();
        break;
      case 'pause':
        this.handlers.onPause?.();
        break;
      case 'resume':
        this.handlers.onResume?.();
        break;
      case 'restart':
        this.handlers.onRestart?.();
        break;
      case 'quit':
        this.handlers.onQuit?.();
        break;
      case 'reset-records':
        this.handlers.onResetRecords?.();
        this.toast('Records cleared', { label: '', value: 'OK', big: false });
        break;
      case 'settings':
        this.openSettings();
        break;
      case 'how':
        this.openHow();
        break;
      case 'back':
        this.audio?.uiBack();
        this.back();
        break;
      default:
        break;
    }
  }

  openSettings() {
    this.previous = this.current === 'settings' ? this.previous : this.current;
    this.showScreen('settings');
  }

  openHow() {
    this.previous = this.current;
    this.showScreen('how');
  }

  back() {
    const target = this.previous && this.previous !== 'settings' && this.previous !== 'how' ? this.previous : 'title';
    this.showScreen(target);
  }

  showScreen(name) {
    this.current = name || null;
    for (const [key, el] of Object.entries(this.screens)) {
      el.classList.toggle('is-hidden', key !== name);
    }
    document.body.dataset.screen = name || 'race';
    this.hud.classList.toggle('is-off', !!name && name !== 'pause');
  }

  setHUD(visible) {
    this.hud.classList.toggle('is-hidden', !visible);
  }

  setScreen(name) {
    this.showScreen(name);
  }

  updateTouchVisibility(show) {
    this.el.touch.classList.toggle('is-on', !!show);
  }

  setSettings(settings) {
    this.settings = settings;
    const assist = $('#toggle-assist');
    if (assist) assist.setAttribute('aria-checked', String(!!settings.assist));
    $$('#seg-camera button').forEach((b) =>
      b.classList.toggle('is-on', Number(b.dataset.cam) === (settings.camera || 0))
    );
    const music = $('#slider-music');
    if (music) {
      music.value = Math.round((settings.music ?? 0.65) * 100);
      $('#music-val').textContent = music.value;
    }
    const sfx = $('#slider-sfx');
    if (sfx) {
      sfx.value = Math.round((settings.sfx ?? 0.8) * 100);
      $('#sfx-val').textContent = sfx.value;
    }
    const touchToggle = $('#toggle-touch');
    if (touchToggle) touchToggle.setAttribute('aria-checked', String(!!settings.touch));
  }

  // ------------------------------------------------------------------ title
  setTitleBest(best) {
    this.el.titleBest.textContent = best && best.lap ? `BEST LAP ${fmtTime(best.lap)}` : 'BEST LAP —';
  }

  // ------------------------------------------------------------------ race HUD
  updateHUD(state) {
    const el = this.el;
    const lapText = `${state.lap}<i>/${state.totalLaps}</i>`;
    if (this.last.lap !== lapText) {
      el.lap.innerHTML = lapText;
      this.last.lap = lapText;
    }
    const timeText = fmtTime(state.time);
    if (this.last.time !== timeText) {
      el.time.textContent = timeText;
      this.last.time = timeText;
    }
    const positionText = `${state.position}<i>/${state.totalRacers}</i>`;
    if (this.last.position !== positionText) {
      el.position.innerHTML = positionText;
      this.last.position = positionText;
    }
    const bestText = state.bestLap ? fmtTime(state.bestLap) : '—';
    if (this.last.best !== bestText) {
      el.best.textContent = bestText;
      this.last.best = bestText;
    }
    const speed = Math.round(Math.max(0, state.speed * 3.6));
    if (this.last.speed !== speed) {
      el.speed.textContent = String(speed);
      this.last.speed = speed;
    }
    const boost = clamp(state.boost, 0, 100);
    const boostPct = Math.round(boost);
    if (this.last.boost !== boostPct) {
      el.boost.style.width = `${boost}%`;
      el.boostPct.textContent = `${boostPct}%`;
      el.boost.classList.toggle('is-low', boost < 18);
      this.last.boost = boostPct;
    }
    const style = Math.round(state.style);
    if (this.last.style !== style) {
      el.style.textContent = style.toLocaleString('en-US');
      this.last.style = style;
    }
    const cpText = `CP ${state.checkpoint}/${state.totalCheckpoints}`;
    if (this.last.cp !== cpText) {
      el.cp.textContent = cpText;
      this.last.cp = cpText;
    }
    const chainActive = !!state.chain.active && state.chain.chain > 0.28;
    el.chain.classList.toggle('is-on', chainActive);
    if (chainActive) {
      const mult = `x${state.chain.mult}`;
      if (el.chainMult.textContent !== mult) el.chainMult.textContent = mult;
      el.chainTime.textContent = `${state.chain.chain.toFixed(1)}s`;
    }
  }

  showDelta(delta) {
    const el = this.el.delta;
    el.textContent = fmtDelta(delta);
    el.classList.remove('fast', 'slow');
    el.classList.add(delta <= 0 ? 'fast' : 'slow');
    el.classList.add('is-on');
    clearTimeout(this.deltaTimer);
    this.deltaTimer = setTimeout(() => el.classList.remove('is-on'), 2800);
  }

  countdown(text, isGo = false) {
    const el = this.el.countdown;
    if (!text) {
      el.classList.remove('is-on', 'pop', 'go', 'word');
      el.textContent = '';
      this.countdownText = '';
      return;
    }
    el.classList.remove('is-on', 'pop', 'go', 'word');
    el.textContent = text;
    void el.offsetWidth;
    el.classList.add('is-on', 'pop');
    el.classList.toggle('go', isGo);
    el.classList.toggle('word', text.length > 3);
    this.countdownText = text;
  }

  recover(on) {
    this.el.recover.classList.toggle('is-on', on);
  }

  toast(label, opts = {}) {
    const { value = '', cls = '', big = false, duration = 1.9 } = opts;
    if (!label && !value) return;
    const el = document.createElement('div');
    el.className = `toast ${cls} ${big ? 'big' : ''}`.trim();
    el.innerHTML = value ? `<b>${value}</b>${label}` : label;
    this.el.toasts.appendChild(el);
    while (this.el.toasts.children.length > 3) {
      this.el.toasts.removeChild(this.el.toasts.firstElementChild);
    }
    setTimeout(() => el.remove(), Math.max(900, duration * 1000));
  }

  hint(html, duration = 4) {
    const el = this.el.hint;
    if (!html) {
      el.classList.remove('is-on');
      return;
    }
    el.innerHTML = html;
    el.classList.add('is-on');
    clearTimeout(this.hintTimer);
    this.hintTimer = setTimeout(() => el.classList.remove('is-on'), duration * 1000);
  }

  // ------------------------------------------------------------------ screens
  setPauseInfo({ lap, totalLaps, time, bestLap }) {
    this.el.pauseSub.textContent = `Sunbreak Canyon · Lap ${lap} of ${totalLaps}`;
    this.el.pauseTime.textContent = fmtTime(time);
    this.el.pauseBest.textContent = bestLap ? fmtTime(bestLap) : '—';
  }

  setResults(data) {
    $('#results-title').innerHTML = data.title || 'Sunbreak <em>Flyer</em>';
    $('#results-total').textContent = fmtTime(data.total);
    $('#results-record').classList.toggle('is-on', !!data.newBest);
    const rows = $('#results-lap-rows');
    rows.innerHTML = '';
    const bestLap = data.best;
    data.laps.forEach((lap, i) => {
      if (!isFinite(lap)) return;
      const isBest = Math.abs(lap - bestLap) < 0.001;
      const row = document.createElement('div');
      row.className = `results-lap${isBest ? ' is-best' : ''}`;
      const d = lap - bestLap;
      row.innerHTML = `
        <span>LAP ${i + 1}</span>
        <strong>${fmtTime(lap)}</strong>
        <span class="lap-delta ${d < -0.001 ? 'fast' : d > 0.001 ? 'slow' : ''}">${
          isBest ? 'BEST' : fmtDelta(d)
        }</span>`;
      rows.appendChild(row);
    });
    $('#results-best').textContent = fmtTime(bestLap);
    $('#results-best-delta').textContent = data.bestLabel || '';
    $('#stat-style').textContent = Math.round(data.style).toLocaleString('en-US');
    $('#stat-speed').innerHTML = `${Math.round(data.topSpeed)} <i>km/h</i>`;
    $('#stat-chain').innerHTML = `${data.bestChain.toFixed(1)} <i>s</i>`;
    $('#stat-air').innerHTML = `${data.airTime.toFixed(1)} <i>s</i>`;
    $('#stat-near').textContent = String(data.nearMisses);
    $('#stat-land').textContent = String(data.cleanLandings);
  }

  // ------------------------------------------------------------------ minimap
  setupMinimap() {
    const canvas = $('#minimap');
    if (!canvas) return;
    this.map = canvas;
    this.mapCtx = canvas.getContext('2d');
    this.mapW = canvas.width;
    this.mapH = canvas.height;
    const pts = this.track.mapPoints;
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    for (const p of pts) {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minZ = Math.min(minZ, p.z);
      maxZ = Math.max(maxZ, p.z);
    }
    const pad = 34;
    const scale = Math.min(
      (this.mapW - pad * 2) / Math.max(1, maxX - minX),
      (this.mapH - pad * 2) / Math.max(1, maxZ - minZ)
    );
    const cx = (minX + maxX) / 2;
    const cz = (minZ + maxZ) / 2;
    this.mapScale = scale;
    this.mapCenter = { x: cx, z: cz };
    this.toMap = (x, z) => ({
      x: this.mapW / 2 + (x - cx) * scale,
      y: this.mapH / 2 + (z - cz) * scale,
    });

    const off = document.createElement('canvas');
    off.width = this.mapW;
    off.height = this.mapH;
    const ctx = off.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    const path = new Path2D();
    pts.forEach((p, i) => {
      const q = this.toMap(p.x, p.z);
      if (i === 0) path.moveTo(q.x, q.y);
      else path.lineTo(q.x, q.y);
    });
    path.closePath();

    ctx.strokeStyle = 'rgba(20, 9, 5, 0.55)';
    ctx.lineWidth = 18;
    ctx.stroke(path);
    ctx.strokeStyle = 'rgba(255, 168, 84, 0.16)';
    ctx.lineWidth = 13;
    ctx.stroke(path);
    ctx.strokeStyle = 'rgba(244, 227, 194, 0.34)';
    ctx.lineWidth = 7;
    ctx.stroke(path);
    ctx.strokeStyle = 'rgba(255, 218, 158, 0.92)';
    ctx.lineWidth = 3;
    ctx.stroke(path);

    // Gates
    this.gateMap = this.track.gateS.map((s) => {
      const p = this.track.samplePos(s, 0);
      return this.toMap(p.x, p.z);
    });
    for (const g of this.gateMap) {
      ctx.beginPath();
      ctx.arc(g.x, g.y, 3.1, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(30, 16, 10, 0.9)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(g.x, g.y, 1.7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 203, 110, 0.85)';
      ctx.fill();
    }

    // Start / finish stripe
    const sp = this.toMap(this.track.samplePos(this.track.gateS[0], 0).x, this.track.samplePos(this.track.gateS[0], 0).z);
    ctx.save();
    ctx.translate(sp.x, sp.y);
    ctx.rotate(-0.5);
    ctx.fillStyle = '#8cf5d9';
    ctx.fillRect(-5, -1.2, 10, 2.4);
    ctx.restore();
    this.mapBase = off;
  }

  drawMinimap(car, nextGate = 0) {
    if (!this.mapCtx) return;
    const ctx = this.mapCtx;
    ctx.clearRect(0, 0, this.mapW, this.mapH);
    ctx.drawImage(this.mapBase, 0, 0);

    if (this.gateMap && this.gateMap[nextGate]) {
      const g = this.gateMap[nextGate];
      ctx.beginPath();
      ctx.arc(g.x, g.y, 7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 203, 110, 0.55)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    const p = this.toMap(car.pos.x, car.pos.z);
    const dirX = Math.sin(car.yaw);
    const dirY = Math.cos(car.yaw);
    const ang = Math.atan2(dirY, dirX) + Math.PI / 2;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(ang);
    ctx.shadowColor = 'rgba(255, 160, 70, 0.95)';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(0, -7.5);
    ctx.lineTo(5.2, 5.2);
    ctx.lineTo(0, 2.6);
    ctx.lineTo(-5.2, 5.2);
    ctx.closePath();
    ctx.fillStyle = '#ffb356';
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(34, 15, 8, 0.85)';
    ctx.stroke();
    ctx.restore();
  }

  // ------------------------------------------------------------------ touch
  bindTouch() {
    const buttons = $$('#touch [data-touch]');
    const active = new Map();
    for (const btn of buttons) {
      const name = btn.dataset.touch;
      const press = (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.add('is-held');
        btn.setPointerCapture?.(e.pointerId);
        active.set(e.pointerId, name);
        this.input.setTouch(name, true);
        this.audio?.uiClick();
      };
      const release = (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.remove('is-held');
        this.input.setTouch(name, false);
        active.delete(e.pointerId);
      };
      btn.addEventListener('pointerdown', press);
      btn.addEventListener('pointerup', release);
      btn.addEventListener('pointercancel', release);
      btn.addEventListener('lostpointercapture', release);
      btn.addEventListener('contextmenu', (e) => e.preventDefault());
    }
  }

  fade(on) {
    this.el.fade.classList.toggle('is-on', !!on);
  }
}
