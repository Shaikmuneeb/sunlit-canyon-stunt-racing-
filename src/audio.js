import { clamp, lerp } from './util.js';

const MIDI = (n) => 440 * Math.pow(2, (n - 69) / 12);

// Original score: "Sunbreak" — E phrygian dominant, 124 BPM.
const SCALE = [0, 1, 4, 5, 7, 8, 10]; // E F G# A B C D
const BASS_PATTERN = [
  40, -1, 40, 41, 40, -1, 43, 40,
  38, -1, 40, 41, 43, 45, 40, 47,
];
const LEAD_A = [
  64, -1, 68, 69, 71, 69, 68, 64,
  65, -1, 64, 62, -1, 64, 65, 68,
];
const LEAD_B = [
  69, 71, 72, 74, 72, 71, 69, 68,
  65, 64, 65, 68, 69, -1, 68, 64,
];

export class AudioEngine {
  constructor() {
    this.ready = false;
    this.musicVolume = 0.65;
    this.sfxVolume = 0.8;
    this.intensity = 0;
    this.paused = false;
    this.step = 0;
    this.nextNoteTime = 0;
    this.timer = null;
    this.musicStarted = false;
    this.engineRpm = 0;
    this.muted = false;
  }

  init() {
    if (this.ready) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    const ctx = this.ctx;

    this.master = ctx.createGain();
    this.master.gain.value = 0.9;
    this.limiter = ctx.createDynamicsCompressor();
    this.limiter.threshold.value = -12;
    this.limiter.knee.value = 20;
    this.limiter.ratio.value = 4;
    this.limiter.attack.value = 0.004;
    this.limiter.release.value = 0.22;
    this.master.connect(this.limiter);
    this.limiter.connect(ctx.destination);

    this.sfxBus = ctx.createGain();
    this.sfxBus.gain.value = this.sfxVolume;
    this.sfxBus.connect(this.master);

    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.0;
    this.musicBus.connect(this.master);

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(1.7, 2.6);
    this.reverbGain = ctx.createGain();
    this.reverbGain.gain.value = 0.24;
    this.reverb.connect(this.reverbGain);
    this.reverbGain.connect(this.master);
    this.musicReverb = ctx.createGain();
    this.musicReverb.gain.value = 0.16;
    this.musicReverb.connect(this.reverb);

    this.noiseBuffer = this.makeNoise(2.5);
    this.setupEngine();
    this.setupTires();
    this.setupWind();
    this.setupBoost();
    this.ready = true;
    this.startMusic();
    this.musicBus.gain.setTargetAtTime(this.musicVolume * 0.5, ctx.currentTime, 2.0);
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  makeNoise(seconds) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = 0.96 * last + 0.04 * white;
      data[i] = white * 0.7 + last * 3.2;
    }
    return buffer;
  }

  makeImpulse(duration, decay) {
    const ctx = this.ctx;
    const rate = ctx.sampleRate;
    const len = Math.floor(rate * duration);
    const impulse = ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const data = impulse.getChannelData(c);
      for (let i = 0; i < len; i++) {
        data[i] =
          (Math.random() * 2 - 1) *
          Math.pow(1 - i / len, decay) *
          (i < rate * 0.01 ? i / (rate * 0.01) : 1);
      }
    }
    return impulse;
  }

  makeLoopNoise() {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    src.start();
    return src;
  }

  setupEngine() {
    const ctx = this.ctx;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0.0;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 800;
    this.engineFilter.Q.value = 4;
    this.engineGain.connect(this.engineFilter);
    this.engineFilter.connect(this.sfxBus);

    this.osc1 = ctx.createOscillator();
    this.osc1.type = 'sawtooth';
    this.osc1.frequency.value = 60;
    this.osc2 = ctx.createOscillator();
    this.osc2.type = 'sawtooth';
    this.osc2.frequency.value = 62;
    this.osc2.detune.value = 9;
    this.osc3 = ctx.createOscillator();
    this.osc3.type = 'square';
    this.osc3.frequency.value = 30;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.55;
    this.osc1.connect(this.engineFilter);
    this.osc2.connect(this.engineFilter);
    this.osc3.connect(subGain);
    subGain.connect(this.engineFilter);
    this.osc1.start();
    this.osc2.start();
    this.osc3.start();

    // Gritty intake noise.
    this.engineNoise = this.makeLoopNoise();
    this.engineNoiseGain = ctx.createGain();
    this.engineNoiseGain.gain.value = 0.0;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 420;
    bp.Q.value = 1.1;
    this.engineNoise.connect(bp);
    bp.connect(this.engineNoiseGain);
    this.engineNoiseGain.connect(this.sfxBus);
    this.engineNoiseBp = bp;
  }

  setupTires() {
    const ctx = this.ctx;
    this.tireNoise = this.makeLoopNoise();
    this.tireFilter = ctx.createBiquadFilter();
    this.tireFilter.type = 'bandpass';
    this.tireFilter.frequency.value = 1700;
    this.tireFilter.Q.value = 7;
    this.tireGain = ctx.createGain();
    this.tireGain.gain.value = 0;
    this.tireNoise.connect(this.tireFilter);
    this.tireFilter.connect(this.tireGain);
    this.tireGain.connect(this.sfxBus);
    this.tireGain.connect(this.reverb);

    this.sandNoise = this.makeLoopNoise();
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 520;
    this.sandGain = ctx.createGain();
    this.sandGain.gain.value = 0;
    this.sandNoise.connect(lp);
    lp.connect(this.sandGain);
    this.sandGain.connect(this.sfxBus);
  }

  setupWind() {
    const ctx = this.ctx;
    this.windNoise = this.makeLoopNoise();
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 700;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 120;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0.02;
    this.windNoise.connect(hp);
    hp.connect(lp);
    lp.connect(this.windGain);
    this.windGain.connect(this.sfxBus);
  }

  setupBoost() {
    const ctx = this.ctx;
    this.boostNoise = this.makeLoopNoise();
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 900;
    bp.Q.value = 1.4;
    this.boostGain = ctx.createGain();
    this.boostGain.gain.value = 0;
    this.boostNoise.connect(bp);
    bp.connect(this.boostGain);
    this.boostGain.connect(this.sfxBus);
    this.boostFilter = bp;
  }

  // Live engine / tire / wind mix. Called every frame.
  updateEngine(state) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { speed = 0, throttle = 0, boosting = false, slip = 0, grounded = true, offRoad = false, slipFactor = 0, active = true } = state;
    const kmh = speed * 3.6;
    const gear = clamp(Math.floor(kmh / 52), 0, 5);
    const withinGear = (kmh - gear * 52) / 52;
    const rpm = clamp(0.16 + withinGear * 0.84 + throttle * 0.06, 0, 1.1);
    const targetFreq = 44 + rpm * (86 + gear * 9) + (boosting ? 16 : 0);
    this.engineFilter.frequency.setTargetAtTime(500 + rpm * 1500 + throttle * 700, t, 0.06);
    this.osc1.frequency.setTargetAtTime(targetFreq, t, 0.045);
    this.osc2.frequency.setTargetAtTime(targetFreq * 1.01, t, 0.045);
    this.osc3.frequency.setTargetAtTime(targetFreq * 0.5, t, 0.045);
    this.engineNoiseBp.frequency.setTargetAtTime(300 + rpm * 800, t, 0.08);
    const vol = active ? (0.11 + throttle * 0.1 + rpm * 0.05) * (this.paused ? 0.4 : 1) : 0;
    this.engineGain.gain.setTargetAtTime(vol, t, 0.1);
    this.engineNoiseGain.gain.setTargetAtTime(active ? 0.035 + throttle * 0.03 : 0, t, 0.1);

    const tire = grounded ? clamp((slipFactor - 0.08) * 0.55, 0, 0.28) * clamp(speed / 22, 0, 1) : 0;
    this.tireGain.gain.setTargetAtTime(active ? tire : 0, t, 0.05);
    this.tireFilter.frequency.setTargetAtTime(1400 + slipFactor * 900, t, 0.1);
    this.sandGain.gain.setTargetAtTime(active && offRoad ? 0.16 : 0, t, 0.1);

    const wind = clamp(speed / 78, 0, 1);
    this.windGain.gain.setTargetAtTime(0.015 + wind * wind * 0.16, t, 0.2);

    this.boostGain.gain.setTargetAtTime(boosting ? 0.15 : 0, t, 0.09);
    this.boostFilter.frequency.setTargetAtTime(boosting ? 1500 : 500, t, 0.2);
  }

  boostWhoosh() {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(400, t);
    bp.frequency.exponentialRampToValueAtTime(2600, t + 0.35);
    bp.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.34, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    src.connect(bp);
    bp.connect(g);
    g.connect(this.sfxBus);
    src.start(t);
    src.stop(t + 0.55);
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(90, t);
    osc.frequency.exponentialRampToValueAtTime(220, t + 0.4);
    const og = ctx.createGain();
    og.gain.setValueAtTime(0.08, t);
    og.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    osc.connect(og);
    og.connect(this.sfxBus);
    osc.start(t);
    osc.stop(t + 0.5);
  }

  tone({ freq = 440, type = 'sine', dur = 0.2, gain = 0.1, when = 0, slide = null, filter = null }) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + when;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    let node = osc;
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = filter;
      osc.connect(f);
      node = f;
    }
    node.connect(g);
    g.connect(this.sfxBus);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  noiseBurst({ dur = 0.2, gain = 0.2, freq = 1200, type = 'bandpass', q = 1, when = 0 }) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + when;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.sfxBus);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  landing(impact = 10) {
    const s = clamp(impact / 20, 0.2, 1.3);
    this.tone({ freq: 120, slide: 40, type: 'sine', dur: 0.28, gain: 0.22 * s });
    this.noiseBurst({ dur: 0.22, gain: 0.18 * s, freq: 420, q: 0.7 });
  }

  impact(severity = 1) {
    this.noiseBurst({ dur: 0.32, gain: 0.3 * severity, freq: 240, q: 0.8 });
    this.tone({ freq: 90, slide: 30, type: 'square', dur: 0.25, gain: 0.16 * severity });
    this.tone({ freq: 2400, slide: 900, type: 'triangle', dur: 0.12, gain: 0.05 * severity });
  }

  wallScrape() {
    this.noiseBurst({ dur: 0.1, gain: 0.08, freq: 3200, q: 6 });
  }

  checkpoint() {
    this.tone({ freq: 740, type: 'triangle', dur: 0.16, gain: 0.14 });
    this.tone({ freq: 988, type: 'triangle', dur: 0.22, gain: 0.12, when: 0.09 });
    this.tone({ freq: 1480, type: 'sine', dur: 0.3, gain: 0.08, when: 0.18 });
  }

  lap() {
    const notes = [659, 784, 988, 1319];
    notes.forEach((n, i) =>
      this.tone({ freq: n, type: 'triangle', dur: 0.3, gain: 0.13, when: i * 0.11 })
    );
  }

  driftChain(level = 2) {
    const base = 520 + level * 90;
    this.tone({ freq: base, type: 'sine', dur: 0.12, gain: 0.07 });
    this.tone({ freq: base * 1.5, type: 'sine', dur: 0.16, gain: 0.05, when: 0.05 });
  }

  nearMiss() {
    this.tone({ freq: 1800, slide: 900, type: 'sine', dur: 0.16, gain: 0.07 });
    this.noiseBurst({ dur: 0.16, gain: 0.05, freq: 2600, q: 2 });
  }

  countdown(isGo = false) {
    if (isGo) {
      this.tone({ freq: 880, type: 'square', dur: 0.5, gain: 0.15, filter: 3000 });
      this.tone({ freq: 1320, type: 'triangle', dur: 0.6, gain: 0.1 });
      this.noiseBurst({ dur: 0.5, gain: 0.1, freq: 800, q: 0.7 });
    } else {
      this.tone({ freq: 440, type: 'square', dur: 0.18, gain: 0.13, filter: 2200 });
    }
  }

  uiClick() {
    this.tone({ freq: 520, type: 'triangle', dur: 0.06, gain: 0.07 });
  }

  uiBack() {
    this.tone({ freq: 380, slide: 240, type: 'triangle', dur: 0.1, gain: 0.06 });
  }

  finish() {
    const notes = [523, 659, 784, 1046, 1319, 1568];
    notes.forEach((n, i) =>
      this.tone({ freq: n, type: 'triangle', dur: 0.5, gain: 0.12, when: i * 0.14 })
    );
    this.noiseBurst({ dur: 1.2, gain: 0.08, freq: 700, q: 0.6, when: 0.1 });
  }

  setPaused(paused) {
    this.paused = paused;
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    this.musicBus.gain.setTargetAtTime(
      paused ? this.musicVolume * 0.12 : this.musicVolume * (this.intensity > 0 ? 0.5 : 0.62),
      t,
      0.3
    );
    this.sfxBus.gain.setTargetAtTime(paused ? 0.0 : this.sfxVolume, t, 0.2);
    this.engineGain.gain.setTargetAtTime(0, t, 0.1);
  }

  setVolumes(music, sfx) {
    this.musicVolume = music;
    this.sfxVolume = sfx;
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    this.musicBus.gain.setTargetAtTime(
      this.paused ? music * 0.12 : music * (this.intensity > 0 ? 0.5 : 0.62),
      t,
      0.2
    );
    this.sfxBus.gain.setTargetAtTime(this.paused ? 0 : sfx, t, 0.15);
  }

  setIntensity(level) {
    this.intensity = level;
    if (this.ready) {
      this.musicBus.gain.setTargetAtTime(
        this.paused ? this.musicVolume * 0.12 : this.musicVolume * (level > 0 ? 0.52 : 0.62),
        this.ctx.currentTime,
        1.2
      );
    }
  }

  // ---- music sequencer ----------------------------------------------------
  startMusic() {
    if (!this.ready || this.musicStarted) return;
    this.musicStarted = true;
    this.nextNoteTime = this.ctx.currentTime + 0.15;
    this.step = 0;
    this.timer = setInterval(() => this.scheduler(), 25);
    this.scheduler();
  }

  scheduler() {
    if (!this.ready) return;
    const stepDur = 60 / 124 / 4;
    while (this.nextNoteTime < this.ctx.currentTime + 0.16) {
      this.playStep(this.step, this.nextNoteTime, stepDur);
      this.nextNoteTime += stepDur;
      this.step = (this.step + 1) % 64;
    }
  }

  playStep(step, time, stepDur) {
    const ctx = this.ctx;
    const bar = Math.floor(step / 16);
    const s = step % 16;
    const intensity = this.intensity;
    const high = intensity >= 2;

    // Kick
    if (s === 0 || s === 6 || s === 8 || (s === 14 && intensity > 0) || (s === 11 && high)) {
      this.musicKick(time);
    }
    // Snare / clap
    if (s === 4 || s === 12) this.musicSnare(time, high);
    // Hats
    if (s % 2 === 0 && intensity > 0) {
      this.musicHat(time, s % 4 === 0 ? 0.06 : 0.035);
    } else if (intensity === 0 && s % 4 === 2) {
      this.musicHat(time, 0.02);
    }
    // Shaker sixteenths on final lap
    if (high && s % 2 === 1) this.musicHat(time, 0.018);

    // Bass
    const bassNote = BASS_PATTERN[s];
    if (bassNote >= 0) this.musicBass(time, bassNote, stepDur * 1.7, intensity);

    // Pad, one chord per bar
    if (s === 0) {
      const chordRoot = [40, 41, 40, 38][bar % 4];
      this.musicPad(time, [chordRoot, chordRoot + 7, chordRoot + 12, chordRoot + 15], stepDur * 16);
    }

    // Lead
    if (intensity >= 1) {
      const phrase = bar % 4 < 2 ? LEAD_A : LEAD_B;
      const note = phrase[s];
      if (note > 0) this.musicLead(time, note + (bar % 2 === 1 ? 12 : 0), stepDur * (high ? 1.4 : 2.0), intensity);
    } else if (bar % 2 === 0) {
      const phrase = LEAD_A;
      const note = phrase[s];
      if (note > 0 && s % 4 === 0) this.musicLead(time, note, stepDur * 3, 0);
    }

    // Tom fill into the downbeat
    if (intensity > 0 && s >= 13 && bar % 4 === 3) {
      this.musicTom(time, 120 + (15 - s) * 20, 0.09);
    }
  }

  musicKick(time) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.16);
    gain.gain.setValueAtTime(0.55, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);
    osc.connect(gain);
    gain.connect(this.musicBus);
    osc.start(time);
    osc.stop(time + 0.32);
  }

  musicSnare(time, high) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 2100;
    f.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(high ? 0.22 : 0.15, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
    src.connect(f);
    f.connect(g);
    g.connect(this.musicBus);
    src.start(time);
    src.stop(time + 0.2);
    const body = ctx.createOscillator();
    const bg = ctx.createGain();
    body.type = 'triangle';
    body.frequency.setValueAtTime(190, time);
    bg.gain.setValueAtTime(0.09, time);
    bg.gain.exponentialRampToValueAtTime(0.001, time + 0.12);
    body.connect(bg);
    bg.connect(this.musicBus);
    body.start(time);
    body.stop(time + 0.14);
  }

  musicHat(time, gainValue) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = 7200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gainValue, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    src.connect(f);
    f.connect(g);
    g.connect(this.musicBus);
    src.start(time);
    src.stop(time + 0.06);
  }

  musicBass(time, midi, dur, intensity) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc2.type = 'square';
    osc.frequency.value = MIDI(midi);
    osc2.frequency.value = MIDI(midi) * 0.5;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(1200, time);
    f.frequency.exponentialRampToValueAtTime(260, time + dur);
    f.Q.value = 5;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(intensity > 0 ? 0.24 : 0.14, time + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc.connect(f);
    osc2.connect(f);
    f.connect(g);
    g.connect(this.musicBus);
    osc.start(time);
    osc2.start(time);
    osc.stop(time + dur + 0.02);
    osc2.stop(time + dur + 0.02);
  }

  musicPad(time, midis, dur) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(0.055, time + 0.8);
    g.gain.linearRampToValueAtTime(0.0, time + dur);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.7;
    g.connect(filter);
    filter.connect(this.musicBus);
    filter.connect(this.musicReverb);
    for (const m of midis) {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = MIDI(m);
      osc.detune.value = (Math.random() - 0.5) * 14;
      osc.connect(g);
      osc.start(time);
      osc.stop(time + dur + 0.1);
    }
  }

  musicLead(time, midi, dur, intensity) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    const vel = intensity > 0 ? 0.085 : 0.05;
    g.gain.setValueAtTime(0, time);
    g.gain.linearRampToValueAtTime(vel, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, time + dur);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(3200, time);
    f.frequency.exponentialRampToValueAtTime(1400, time + dur);
    f.Q.value = 2;
    g.connect(f);
    f.connect(this.musicBus);
    f.connect(this.musicReverb);
    for (const [type, detune, mult] of [
      ['sawtooth', 0, 1],
      ['triangle', 7, 2],
    ]) {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = MIDI(midi) * mult;
      osc.detune.value = detune;
      osc.connect(g);
      osc.start(time);
      osc.stop(time + dur + 0.05);
    }
  }

  musicTom(time, freq, gainValue) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.55, time + 0.16);
    g.gain.setValueAtTime(gainValue, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
    osc.connect(g);
    g.connect(this.musicBus);
    osc.start(time);
    osc.stop(time + 0.22);
  }
}
