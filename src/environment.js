import * as THREE from 'three';
import { clamp, lerp, mulberry32, makeNoise2D, TAU } from './util.js';

export class Environment {
  constructor(scene, track) {
    this.scene = scene;
    this.track = track;
    this.rng = mulberry32(4242);
    this.noise = makeNoise2D(771);
    this.buildSky();
    this.buildLights();
    this.buildTerrain();
    this.buildMesas();
    this.buildHorizonRidges();
    this.buildFlora();
    this.buildDustDevils();
  }

  buildSky() {
    const sunDir = new THREE.Vector3(-0.48, 0.44, -0.76).normalize();
    this.sunDir = sunDir;
    const geo = new THREE.SphereGeometry(1600, 32, 20);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        sunDir: { value: sunDir },
        topColor: { value: new THREE.Color('#27384c') },
        midColor: { value: new THREE.Color('#8d5c57') },
        horizonColor: { value: new THREE.Color('#f3a15d') },
        hazeColor: { value: new THREE.Color('#d8754a') },
      },
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vDir;
        uniform vec3 sunDir;
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 hazeColor;
        void main() {
          float h = clamp(vDir.y, -1.0, 1.0);
          vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          col = mix(col, topColor, smoothstep(0.22, 0.85, h));
          // dusty haze band low on the horizon
          col = mix(col, hazeColor, smoothstep(0.16, -0.02, h) * 0.55);
          // sun glow
          float sd = max(dot(normalize(vDir), sunDir), 0.0);
          col += vec3(1.0, 0.38, 0.14) * pow(sd, 14.0) * 0.86;
          col += vec3(1.0, 0.72, 0.38) * pow(sd, 240.0) * 2.1;
          // sun disc
          col += vec3(1.0, 0.95, 0.8) * smoothstep(0.9992, 0.99975, sd) * 2.2;
          // faint warm clouds
          float band = sin(vDir.x * 5.0 + vDir.z * 3.0) * 0.5 + 0.5;
          float c = smoothstep(0.045, 0.0, abs(h - 0.1)) * band * 0.10;
          col = mix(col, vec3(1.0, 0.86, 0.7), c);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const sky = new THREE.Mesh(geo, mat);
    sky.frustumCulled = false;
    this.scene.add(sky);
    this.sky = sky;
    const sunTexture = makeSunTexture();
    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: sunTexture,
      color: '#fff0c2',
      transparent: true,
      opacity: 0.86,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    this.sunSprite.scale.set(92, 92, 1);
    this.scene.add(this.sunSprite);
    this.scene.fog = new THREE.FogExp2(new THREE.Color('#c96849'), 0.00082);
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight('#ffd0a0', '#3b1b1a', 1.08);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight('#ffbd78', 3.5);
    sun.position.copy(this.sunDir).multiplyScalar(260);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const d = 170;
    sun.shadow.camera.left = -d;
    sun.shadow.camera.right = d;
    sun.shadow.camera.top = d;
    sun.shadow.camera.bottom = -d;
    sun.shadow.camera.near = 20;
    sun.shadow.camera.far = 620;
    sun.shadow.bias = -0.0007;
    sun.shadow.normalBias = 0.35;
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;
    this.ambient = new THREE.AmbientLight('#d65e45', 0.2);
    this.scene.add(this.ambient);

    // Soft bounce light from the canyon floor, warm and low.
    const bounce = new THREE.DirectionalLight('#b83f32', 0.48);
    bounce.position.set(0.4, -0.5, 0.6);
    this.scene.add(bounce);
  }

  updateSun(target) {
    if (!target) return;
    this.sun.target.position.set(target.x, target.y, target.z);
    this.sun.position
      .set(target.x, target.y, target.z)
      .addScaledVector(this.sunDir, 300);
    this.sun.target.updateMatrixWorld();
    this.sky.position.set(target.x, 0, target.z);
  }

  trackDistance(x, z) {
    let bd = Infinity;
    let best = null;
    const samples = this.track.samples;
    for (let i = 0; i < samples.length; i += 5) {
      const smp = samples[i];
      const d = (smp.pos.x - x) ** 2 + (smp.pos.z - z) ** 2;
      if (d < bd) {
        bd = d;
        best = smp;
      }
    }
    return { dist: Math.sqrt(bd), sample: best };
  }

  buildTerrain() {
    const size = 2000;
    const segs = 110;
    const geo = new THREE.PlaneGeometry(size, size, segs, segs);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = [];
    const c = new THREE.Color();
    const sandA = new THREE.Color('#c1865a');
    const sandB = new THREE.Color('#a96942');
    const sandC = new THREE.Color('#8f5238');
    const rockA = new THREE.Color('#a6482f');
    const rockB = new THREE.Color('#7d3626');

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const near = this.trackDistance(x, z);
      const smp = near.sample;
      const d = near.dist;
      const half = smp ? smp.width / 2 : 14;
      const roadY = smp ? smp.pos.y : 0;
      const n1 = this.noise(x * 0.008, z * 0.008);
      const n2 = this.noise(x * 0.031, z * 0.031);
      let y;
      if (d < half + 26) {
        // Canyon floor hugging the road, always safely below it.
        y = roadY - 7.2 + n2 * 1.4 - clamp((half + 26 - d) / 26, 0, 1) * 0.8;
      } else {
        const rise = clamp((d - half - 26) / 120, 0, 1);
        y = roadY - 7.2 + rise * rise * 38 + n1 * 16 + n2 * 2.6;
      }
      // Carve shallow dry riverbeds.
      const river = Math.abs(this.noise(x * 0.0035 + 4, z * 0.0035 - 8));
      if (d > half + 20) y -= smoothBand(river, 0.06) * 5.0;
      pos.setY(i, y);

      const rockiness = clamp(
        (y - roadY + 9) / 30 + (d - half) / 160 + n2 * 0.15,
        0,
        1
      );
      c.copy(sandA).lerp(sandB, clamp(n1 * 0.5 + 0.5, 0, 1));
      c.lerp(sandC, clamp(n2 * 0.4 + 0.3, 0, 1) * 0.45);
      c.lerp(rockA, clamp(rockiness * 1.5, 0, 1));
      c.lerp(rockB, clamp((rockiness - 0.55) * 1.4, 0, 1));
      if (d < half + 3) c.lerp(sandB, 0.35);
      colors.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      metalness: 0,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.name = 'terrain';
    this.scene.add(mesh);
    this.terrain = mesh;
  }

  buildMesas() {
    const rng = mulberry32(818);
    this.mesas = new THREE.Group();
    this.scene.add(this.mesas);
    const rockColors = ['#9c422c', '#b05637', '#c06c44', '#853826', '#d18a5d'];
    const placements = [];
    let attempts = 0;
    while (placements.length < 26 && attempts < 900) {
      attempts++;
      const angle = rng() * TAU;
      const radius = 190 + rng() * 640;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const near = this.trackDistance(x, z);
      if (near.dist < 85) continue;
      let tooClose = false;
      for (const p of placements) {
        if ((p.x - x) ** 2 + (p.z - z) ** 2 < 110 * 110) tooClose = true;
      }
      if (tooClose) continue;
      placements.push({ x, z });
    }

    for (const p of placements) {
      const near = this.trackDistance(p.x, p.z);
      const baseY = (near.sample ? near.sample.pos.y : 0) - 8 + rng() * 6;
      const height = 30 + rng() * 85;
      const radius = 22 + rng() * 46;
      const sides = 5 + Math.floor(rng() * 3);
      const group = new THREE.Group();
      const layers = 2 + Math.floor(rng() * 3);
      for (let l = 0; l < layers; l++) {
        const hf = 1 - l / (layers + 0.6);
        const r = radius * (0.65 + hf * 0.55);
        const h = (height / layers) * (0.7 + rng() * 0.6);
        const geo = new THREE.CylinderGeometry(
          r * (0.78 + rng() * 0.12),
          r,
          h,
          sides,
          2
        );
        const mat = new THREE.MeshStandardMaterial({
          color: rockColors[Math.floor(rng() * rockColors.length)],
          roughness: 1,
          flatShading: true,
        });
        const m = new THREE.Mesh(geo, mat);
        m.position.set(0, (height / layers) * l + h / 2, 0);
        m.rotation.y = rng() * TAU;
        m.castShadow = true;
        m.receiveShadow = true;
        group.add(m);
      }
      // A few boulders at the base.
      for (let b = 0; b < 3; b++) {
        const s = 4 + rng() * 9;
        const geo = new THREE.DodecahedronGeometry(s, 0);
        const m = new THREE.Mesh(
          geo,
          new THREE.MeshStandardMaterial({
            color: rockColors[Math.floor(rng() * rockColors.length)],
            roughness: 1,
            flatShading: true,
          })
        );
        const ang = rng() * TAU;
        m.position.set(
          Math.cos(ang) * (radius + 4),
          s * 0.5,
          Math.sin(ang) * (radius + 4)
        );
        m.rotation.set(rng() * TAU, rng() * TAU, rng() * TAU);
        m.castShadow = true;
        group.add(m);
      }
      group.position.set(p.x, baseY, p.z);
      this.mesas.add(group);
    }

    // Big rock outcrops that frame the route at eye level.
    const outcropMat = new THREE.MeshStandardMaterial({
      color: '#8e3c29',
      roughness: 1,
      flatShading: true,
    });
    for (let i = 0; i < 14; i++) {
      const s = (i / 14) * this.track.length + 40;
      const smp = this.track.getSample(s).a;
      const side = i % 2 ? 1 : -1;
      const p = this.track.samplePos(s, side * (smp.width / 2 + 18));
      const h = 16 + rng() * 30;
      const geo = new THREE.ConeGeometry(9 + rng() * 12, h, 6, 2);
      geo.translate(0, h / 2, 0);
      const m = new THREE.Mesh(geo, outcropMat);
      m.position.set(p.x, p.y - 12, p.z);
      m.rotation.y = rng() * TAU;
      m.castShadow = true;
      m.receiveShadow = true;
      this.mesas.add(m);
    }
  }

  buildHorizonRidges() {
    const rng = mulberry32(1818);
    this.horizon = new THREE.Group();
    this.scene.add(this.horizon);
    const farRock = new THREE.MeshStandardMaterial({ color: '#6b3030', roughness: 1, flatShading: true });
    const farLit = new THREE.MeshStandardMaterial({ color: '#a6503b', roughness: 1, flatShading: true });
    for (let i = 0; i < 22; i++) {
      const angle = (i / 22) * TAU + (rng() - 0.5) * 0.12;
      const radius = 720 + rng() * 260;
      const width = 42 + rng() * 90;
      const height = 55 + rng() * 105;
      const base = new THREE.Group();
      const silhouette = new THREE.Mesh(
        new THREE.CylinderGeometry(width * 0.72, width, height, 5 + Math.floor(rng() * 3), 1),
        i % 3 === 0 ? farLit : farRock
      );
      silhouette.position.y = height * 0.5 - 14;
      silhouette.rotation.y = rng() * TAU;
      silhouette.castShadow = true;
      base.add(silhouette);
      if (i % 2 === 0) {
        const cap = new THREE.Mesh(
          new THREE.CylinderGeometry(width * 0.45, width * 0.7, 16 + rng() * 20, 6, 1),
          farLit
        );
        cap.position.y = height - 4;
        cap.rotation.y = rng() * TAU;
        base.add(cap);
      }
      base.position.set(Math.cos(angle) * radius, -18, Math.sin(angle) * radius);
      base.rotation.y = -angle * 0.35;
      this.horizon.add(base);
    }
    this.horizon.renderOrder = -2;
  }

  buildFlora() {
    const rng = mulberry32(9911);
    this.flora = new THREE.Group();
    this.scene.add(this.flora);
    const trunkMat = new THREE.MeshStandardMaterial({
      color: '#4c6b4f',
      roughness: 0.9,
      flatShading: true,
    });
    const flowerMat = new THREE.MeshStandardMaterial({
      color: '#e6b54a',
      roughness: 0.8,
      emissive: '#7a4a13',
      emissiveIntensity: 0.2,
    });
    const rockMat = new THREE.MeshStandardMaterial({
      color: '#8a4530',
      roughness: 1,
      flatShading: true,
    });
    const placed = [];
    for (let i = 0; i < 90; i++) {
      const angle = rng() * TAU;
      const radius = 40 + rng() * 520;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const near = this.trackDistance(x, z);
      if (near.dist < near.sample.width / 2 + 7 || near.dist > 120) continue;
      const p = this.track.samplePos(
        near.sample.s,
        (x - near.sample.pos.x) * near.sample.right.x +
          (z - near.sample.pos.z) * near.sample.right.z
      );
      const baseY = this.terrainHeightAt(x, z);
      if (rng() < 0.45) {
        // Spine cactus.
        const g = new THREE.Group();
        const h = 3 + rng() * 4.5;
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.42, 0.55, h, 6),
          trunkMat
        );
        trunk.position.y = h / 2;
        trunk.castShadow = true;
        g.add(trunk);
        const arms = 1 + Math.floor(rng() * 3);
        for (let a = 0; a < arms; a++) {
          const ah = h * (0.35 + rng() * 0.25);
          const arm = new THREE.Mesh(
            new THREE.CylinderGeometry(0.28, 0.32, ah, 5),
            trunkMat
          );
          arm.position.set((rng() - 0.5) * 1.4, h * (0.42 + rng() * 0.18), 0);
          arm.rotation.z = (rng() - 0.5) * 0.7;
          arm.castShadow = true;
          g.add(arm);
        }
        const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.36, 6, 5), flowerMat);
        bloom.position.y = h + 0.2;
        g.add(bloom);
        g.position.set(x, baseY, z);
        g.rotation.y = rng() * TAU;
        this.flora.add(g);
      } else {
        const s = 1.2 + rng() * 4.2;
        const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rockMat);
        rock.position.set(x, baseY + s * 0.4, z);
        rock.rotation.set(rng() * TAU, rng() * TAU, rng() * TAU);
        rock.castShadow = true;
        rock.receiveShadow = true;
        this.flora.add(rock);
      }
      placed.push({ x, z });
    }
    // Dry brush along the roadside.
    const brushMat = new THREE.MeshStandardMaterial({
      color: '#8f7a45',
      roughness: 1,
      flatShading: true,
    });
    for (let i = 0; i < 60; i++) {
      const s = rng() * this.track.length;
      const smp = this.track.getSample(s).a;
      if (this.track.isGap(s)) continue;
      const side = rng() < 0.5 ? -1 : 1;
      const lat = side * (smp.width / 2 + 3 + rng() * 12);
      const p = this.track.samplePos(s, lat);
      const g = new THREE.Group();
      for (let b = 0; b < 5; b++) {
        const geo = new THREE.ConeGeometry(0.25, 1.2 + rng(), 4);
        const blade = new THREE.Mesh(geo, brushMat);
        blade.position.set((rng() - 0.5) * 0.9, 0.6, (rng() - 0.5) * 0.9);
        blade.rotation.z = (rng() - 0.5) * 0.6;
        g.add(blade);
      }
      g.position.set(p.x, p.y - 0.2, p.z);
      this.flora.add(g);
    }
  }

  terrainHeightAt(x, z) {
    const near = this.trackDistance(x, z);
    const smp = near.sample;
    const d = near.dist;
    const half = smp ? smp.width / 2 : 14;
    const roadY = smp ? smp.pos.y : 0;
    const n1 = this.noise(x * 0.008, z * 0.008);
    const n2 = this.noise(x * 0.031, z * 0.031);
    if (d < half + 26) {
      return roadY - 7.2 + n2 * 1.4;
    }
    const rise = clamp((d - half - 26) / 120, 0, 1);
    return roadY - 7.2 + rise * rise * 38 + n1 * 16 + n2 * 2.6;
  }

  buildDustDevils() {
    // Slow dust columns drifting through the canyon.
    const group = new THREE.Group();
    this.scene.add(group);
    const count = 14;
    this.devils = [];
    const rng = mulberry32(51);
    const tex = makeSoftSprite();
    for (let i = 0; i < count; i++) {
      const mat = new THREE.SpriteMaterial({
        map: tex,
        color: '#e9bd90',
        transparent: true,
        opacity: 0.15,
        depthWrite: false,
      });
      const s = new THREE.Sprite(mat);
      const width = 45 + rng() * 70;
      s.scale.set(width, width * 2.4, 1);
      const angle = rng() * TAU;
      const radius = 120 + rng() * 520;
      s.position.set(Math.cos(angle) * radius, 8 + rng() * 18, Math.sin(angle) * radius);
      group.add(s);
      this.devils.push({ sprite: s, speed: 1 + rng() * 2, phase: rng() * TAU });
    }
    this.devilsGroup = group;
  }

  update(dt, cameraPos, elapsed) {
    for (const d of this.devils) {
      d.sprite.position.x += (12 + d.speed * 4) * dt;
      if (d.sprite.position.x > 900) d.sprite.position.x = -900;
      d.sprite.position.y += Math.sin(elapsed * 0.4 + d.phase) * dt * 0.25;
    }
    if (this.sky) this.sky.position.x = cameraPos.x;
    if (this.sunSprite) {
      this.sunSprite.position.copy(cameraPos).addScaledVector(this.sunDir, 920);
      this.sunSprite.position.y += 18;
    }
  }
}

function smoothBand(v, width) {
  return clamp(1 - Math.abs(v) / width, 0, 1);
}

function makeSoftSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.45, 'rgba(255,255,255,0.28)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(canvas);
  return t;
}

function makeSunTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(128, 128, 8, 128, 128, 128);
  g.addColorStop(0, 'rgba(255,255,245,1)');
  g.addColorStop(0.16, 'rgba(255,232,170,.95)');
  g.addColorStop(0.42, 'rgba(255,166,86,.42)');
  g.addColorStop(1, 'rgba(255,126,53,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
