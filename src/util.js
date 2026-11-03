export const TAU = Math.PI * 2;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => (v - a) / (b - a);
export const smoothstep = (t) => {
  t = clamp(t, 0, 1);
  return t * t * (3 - 2 * t);
};
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const wrapAngle = (a) => {
  a = (a + Math.PI) % TAU;
  if (a < 0) a += TAU;
  return a - Math.PI;
};
export const angleDiff = (a, b) => wrapAngle(a - b);
export const sign = (v) => (v < 0 ? -1 : 1);
export const fmtTime = (t, decimals = 2) => {
  if (!isFinite(t) || t < 0) return '--:--.--';
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s.toFixed(decimals).padStart(decimals ? 3 + decimals : 2, '0')}`;
};
export const fmtDelta = (t) => {
  if (!isFinite(t)) return '--';
  const s = t >= 0 ? '+' : '-';
  const v = Math.abs(t);
  return `${s}${v.toFixed(2)}`;
};

// Small, fast deterministic PRNG so the canyon is identical every run.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Cheap smooth 2D value noise (used for rock jitter and terrain).
export function makeNoise2D(seed = 1) {
  const perm = new Uint8Array(512);
  const rnd = mulberry32(seed);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = p[i];
    p[i] = p[j];
    p[j] = tmp;
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const v = (i) => (perm[i] / 255) * 2 - 1;
  return function (x, y) {
    const xi = Math.floor(x) & 255;
    const yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const w = fade(yf);
    const aa = v(perm[xi] + yi);
    const ab = v(perm[xi] + yi + 1);
    const ba = v(perm[xi + 1] + yi);
    const bb = v(perm[xi + 1] + yi + 1);
    return lerp(lerp(aa, ba, u), lerp(ab, bb, u), w);
  };
}
