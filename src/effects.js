import * as THREE from 'three';
import { clamp } from './util.js';

const PARTICLE_VERT = /* glsl */ `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vAlpha = aAlpha;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (320.0 / max(0.1, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`;

const PARTICLE_FRAG = /* glsl */ `
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.06, d) * vAlpha;
    gl_FragColor = vec4(vColor, a);
  }
`;

class ParticlePool {
  constructor(scene, capacity, additive, tint) {
    this.capacity = capacity;
    this.additive = additive;
    this.tint = tint;
    this.count = 0;
    const geo = new THREE.BufferGeometry();
    this.positions = new Float32Array(capacity * 3);
    this.colors = new Float32Array(capacity * 3);
    this.sizes = new Float32Array(capacity);
    this.alphas = new Float32Array(capacity);
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: PARTICLE_VERT,
      fragmentShader: PARTICLE_FRAG,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 3 : 2;
    scene.add(this.points);
    this.geo = geo;
    this.data = [];
    for (let i = 0; i < capacity; i++) {
      this.data.push({
        alive: false,
        x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
        life: 0, maxLife: 1, size0: 1, size1: 1,
        r: 1, g: 1, b: 1, drag: 1, gravity: 0, alpha: 1,
      });
    }
    this.cursor = 0;
  }

  spawn(opts) {
    const p = this.data[this.cursor];
    this.cursor = (this.cursor + 1) % this.capacity;
    p.alive = true;
    p.x = opts.x; p.y = opts.y; p.z = opts.z;
    p.vx = opts.vx || 0; p.vy = opts.vy || 0; p.vz = opts.vz || 0;
    p.life = 0;
    p.maxLife = opts.life || 1;
    p.size0 = opts.size0 || 1;
    p.size1 = opts.size1 || p.size0;
    p.r = opts.r ?? 1; p.g = opts.g ?? 1; p.b = opts.b ?? 1;
    p.drag = opts.drag ?? 1.5;
    p.gravity = opts.gravity ?? 0;
    p.alpha = opts.alpha ?? 1;
    p.additive = this.additive;
  }

  update(dt) {
    let any = false;
    for (let i = 0; i < this.capacity; i++) {
      const p = this.data[i];
      if (!p.alive) {
        this.alphas[i] = 0;
        this.sizes[i] = 0;
        continue;
      }
      any = true;
      p.life += dt;
      if (p.life >= p.maxLife) {
        p.alive = false;
        this.alphas[i] = 0;
        this.sizes[i] = 0;
        continue;
      }
      const damp = Math.exp(-p.drag * dt);
      p.vx *= damp;
      p.vz *= damp;
      p.vy = p.vy * damp - p.gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      const t = p.life / p.maxLife;
      this.positions[i * 3] = p.x;
      this.positions[i * 3 + 1] = p.y;
      this.positions[i * 3 + 2] = p.z;
      this.colors[i * 3] = p.r;
      this.colors[i * 3 + 1] = p.g;
      this.colors[i * 3 + 2] = p.b;
      this.sizes[i] = p.size0 + (p.size1 - p.size0) * t;
      this.alphas[i] = p.alpha * (1 - t) * Math.min(1, t * 12);
    }
    if (any || this._hadAny) {
      this.geo.attributes.position.needsUpdate = true;
      this.geo.attributes.aColor.needsUpdate = true;
      this.geo.attributes.aSize.needsUpdate = true;
      this.geo.attributes.aAlpha.needsUpdate = true;
      this._hadAny = any;
    }
  }
}

class SkidMarks {
  constructor(scene, capacity = 900) {
    this.capacity = capacity;
    const geo = new THREE.BufferGeometry();
    this.positions = new Float32Array(capacity * 4 * 3);
    this.alphas = new Float32Array(capacity * 4);
    const index = [];
    for (let i = 0; i < capacity; i++) {
      const b = i * 4;
      index.push(b, b + 1, b + 2, b, b + 2, b + 3);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1));
    geo.setIndex(index);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      vertexShader: /* glsl */ `
        attribute float aAlpha;
        varying float vA;
        void main() {
          vA = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vA;
        void main() {
          gl_FragColor = vec4(0.09, 0.065, 0.055, vA * 0.65);
        }
      `,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = 1;
    scene.add(mesh);
    this.geo = geo;
    this.cursor = 0;
    this.data = [];
    for (let i = 0; i < capacity; i++) {
      this.data.push({ life: 0, maxLife: 14, alive: false });
    }
  }

  add(x, z, y, dirX, dirZ, width = 0.34, alpha = 0.9) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.capacity;
    const b = i * 4;
    const px = -dirZ * width * 0.5;
    const pz = dirX * width * 0.5;
    const arr = this.positions;
    arr[b * 3] = x - px;
    arr[b * 3 + 1] = y;
    arr[b * 3 + 2] = z - pz;
    arr[(b + 1) * 3] = x + px;
    arr[(b + 1) * 3 + 1] = y;
    arr[(b + 1) * 3 + 2] = z + pz;
    arr[(b + 2) * 3] = x + px + dirX * 0.9;
    arr[(b + 2) * 3 + 1] = y;
    arr[(b + 2) * 3 + 2] = z + pz + dirZ * 0.9;
    arr[(b + 3) * 3] = x - px + dirX * 0.9;
    arr[(b + 3) * 3 + 1] = y;
    arr[(b + 3) * 3 + 2] = z - pz + dirZ * 0.9;
    for (let k = 0; k < 4; k++) this.alphas[b + k] = alpha;
    this.data[i].life = 0;
    this.data[i].maxLife = 14;
    this.data[i].alive = true;
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
  }

  update(dt) {
    let changed = false;
    const arr = this.positions;
    for (let i = 0; i < this.capacity; i++) {
      const d = this.data[i];
      if (!d.alive) continue;
      d.life += dt;
      if (d.life >= d.maxLife) {
        d.alive = false;
        const b = i * 4;
        for (let k = 0; k < 4; k++) this.alphas[b + k] = 0;
        changed = true;
      } else if (d.life > d.maxLife - 3) {
        const b = i * 4;
        const a = ((d.maxLife - d.life) / 3) * 0.8;
        for (let k = 0; k < 4; k++) this.alphas[b + k] = a;
        changed = true;
      }
    }
    if (changed) this.geo.attributes.aAlpha.needsUpdate = true;
  }

  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.data[i].alive = false;
      for (let k = 0; k < 4; k++) this.alphas[i * 4 + k] = 0;
    }
    this.geo.attributes.aAlpha.needsUpdate = true;
  }
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.dust = new ParticlePool(scene, 900, false);
    this.sparks = new ParticlePool(scene, 500, true);
    this.rings = [];
    this.skid = new SkidMarks(scene);
    this.lastSkid = [null, null];
  }

  update(dt) {
    this.dust.update(dt);
    this.sparks.update(dt);
    this.skid.update(dt);
  }

  reset() {
    this.skid.clear();
    this.lastSkid = [null, null];
  }

  driftSmoke(pos, side, vel, strength = 1) {
    const n = 1 + Math.floor(strength * 1.1);
    for (let i = 0; i < n; i++) {
      this.dust.spawn({
        x: pos.x + (Math.random() - 0.5) * 0.7,
        y: pos.y + 0.18,
        z: pos.z + (Math.random() - 0.5) * 0.7,
        vx: vel.x * 0.14 + (Math.random() - 0.5) * 1.8,
        vy: 0.8 + Math.random() * 1.0,
        vz: vel.z * 0.14 + (Math.random() - 0.5) * 1.8,
        life: 0.8 + Math.random() * 0.9,
        size0: 0.45,
        size1: 1.9 + Math.random() * 1.1,
        r: 0.8, g: 0.68, b: 0.52,
        alpha: 0.13 + Math.random() * 0.09,
        drag: 1.9,
        gravity: -0.5,
      });
    }
  }

  tireDust(pos, vel, side = 1) {
    for (let i = 0; i < 2; i++) {
      this.dust.spawn({
        x: pos.x + (Math.random() - 0.5) * 1.4,
        y: pos.y + 0.25,
        z: pos.z + (Math.random() - 0.5) * 1.4,
        vx: vel.x * 0.22 + (Math.random() - 0.5) * 3,
        vy: 0.8 + Math.random() * 1.6,
        vz: vel.z * 0.22 + (Math.random() - 0.5) * 3,
        life: 1.0 + Math.random() * 0.7,
        size0: 0.5,
        size1: 2.4,
        r: 0.76, g: 0.61, b: 0.45,
        alpha: 0.16,
        drag: 1.7,
        gravity: -0.4,
      });
    }
  }

  landingDust(pos, impact = 8) {
    const count = clamp(Math.floor(impact * 1.4), 6, 26);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + Math.random() * 0.4;
      const sp = 2 + Math.random() * 4;
      this.dust.spawn({
        x: pos.x + Math.cos(a) * 1.2,
        y: pos.y + 0.15,
        z: pos.z + Math.sin(a) * 1.2,
        vx: Math.cos(a) * sp + (Math.random() - 0.5),
        vy: 0.6 + Math.random() * 1.8,
        vz: Math.sin(a) * sp + (Math.random() - 0.5),
        life: 1.1 + Math.random() * 0.8,
        size0: 0.8,
        size1: 3.1,
        r: 0.8, g: 0.66, b: 0.5,
        alpha: 0.2,
        drag: 2.2,
        gravity: -0.3,
      });
    }
  }

  wallSparks(pos, side, tangent) {
    for (let i = 0; i < 14; i++) {
      const t = tangent || { x: 0, z: 1 };
      this.sparks.spawn({
        x: pos.x,
        y: pos.y + 0.5 + Math.random() * 0.8,
        z: pos.z,
        vx: -side * Math.cos(Math.random() * 1.4) * (2 + Math.random() * 5) + t.x * 8,
        vy: 1 + Math.random() * 4,
        vz: -side * Math.sin(Math.random() * 1.4) * (2 + Math.random() * 5) + t.z * 8,
        life: 0.35 + Math.random() * 0.5,
        size0: 0.35,
        size1: 0.05,
        r: 1, g: 0.72, b: 0.25,
        alpha: 1,
        drag: 0.7,
        gravity: 16,
      });
    }
  }

  boostTrail(pos, forward, side) {
    for (let i = 0; i < 2; i++) {
      const ox = pos.x - forward.x * 2.4 + side * 0.42 + (Math.random() - 0.5) * 0.3;
      const oz = pos.z - forward.z * 2.4 + (Math.random() - 0.5) * 0.3;
      this.sparks.spawn({
        x: ox,
        y: pos.y + 0.5 + Math.random() * 0.2,
        z: oz,
        vx: -forward.x * 6 + (Math.random() - 0.5) * 1.5,
        vy: 0.2 + Math.random() * 1,
        vz: -forward.z * 6 + (Math.random() - 0.5) * 1.5,
        life: 0.25 + Math.random() * 0.25,
        size0: 0.9,
        size1: 0.1,
        r: 0.35, g: 0.95, b: 0.95,
        alpha: 0.85,
        drag: 2,
        gravity: -1,
      });
    }
    for (let i = 0; i < 1; i++) {
      this.dust.spawn({
        x: pos.x - forward.x * 2.2,
        y: pos.y + 0.4,
        z: pos.z - forward.z * 2.2,
        vx: -forward.x * 3,
        vy: 0.6,
        vz: -forward.z * 3,
        life: 0.5,
        size0: 0.6,
        size1: 2.2,
        r: 1, g: 0.75, b: 0.5,
        alpha: 0.18,
        drag: 2,
      });
    }
  }

  crashBurst(pos, forward) {
    for (let i = 0; i < 22; i++) {
      this.sparks.spawn({
        x: pos.x + (Math.random() - 0.5),
        y: pos.y + 0.8,
        z: pos.z + (Math.random() - 0.5),
        vx: (Math.random() - 0.5) * 14 + forward.x * 4,
        vy: 3 + Math.random() * 7,
        vz: (Math.random() - 0.5) * 14 + forward.z * 4,
        life: 0.4 + Math.random() * 0.5,
        size0: 0.5,
        size1: 0.05,
        r: 1, g: 0.6, b: 0.2,
        alpha: 1,
        drag: 0.8,
        gravity: 15,
      });
    }
    this.landingDust(pos, 18);
  }

  jumpDust(pos) {
    for (let i = 0; i < 8; i++) {
      this.dust.spawn({
        x: pos.x + (Math.random() - 0.5) * 2,
        y: pos.y + 0.3,
        z: pos.z + (Math.random() - 0.5) * 2,
        vx: (Math.random() - 0.5) * 4,
        vy: 0.4 + Math.random() * 2,
        vz: (Math.random() - 0.5) * 4,
        life: 0.7,
        size0: 0.8,
        size1: 3,
        r: 0.8, g: 0.68, b: 0.52,
        alpha: 0.22,
        drag: 2,
      });
    }
  }

  addRing(pos, color = '#ffd08a', maxScale = 14) {
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.6, 1.0, 32), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(pos.x, pos.y + 0.2, pos.z);
    this.scene.add(mesh);
    this.rings.push({ mesh, life: 0, maxLife: 0.8, maxScale });
  }

  updateRings(dt) {
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.life += dt;
      const t = r.life / r.maxLife;
      const s = 1 + t * r.maxScale;
      r.mesh.scale.set(s, s, s);
      r.mesh.material.opacity = 0.5 * (1 - t);
      if (t >= 1) {
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
        this.rings.splice(i, 1);
      }
    }
  }

  skidTrail(index, pos, forward, strength = 1) {
    const last = this.lastSkid[index];
    const y = pos.y + 0.045;
    if (!last) {
      this.lastSkid[index] = { x: pos.x, z: pos.z, y };
      return;
    }
    const dx = pos.x - last.x;
    const dz = pos.z - last.z;
    const d = Math.hypot(dx, dz);
    if (d > 0.34 && d < 4) {
      this.skid.add(last.x, last.z, y, dx / d, dz / d, 0.3, 0.8 * strength);
      this.skid.add(
        last.x + forward.x * 0.55,
        last.z + forward.z * 0.55,
        y,
        dx / d,
        dz / d,
        0.24,
        0.7 * strength
      );
      this.lastSkid[index] = { x: pos.x, z: pos.z, y };
    }
  }

  endSkid() {
    this.lastSkid = [null, null];
  }
}
