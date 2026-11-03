import * as THREE from 'three';
import { clamp, lerp, smoothstep, mulberry32, makeNoise2D, TAU } from './util.js';

// ---------------------------------------------------------------------------
// Route control points: x, z, elevation, road width, banking (radians).
// A single closed circuit roughly 2.7 km long, shaped as a sunlit canyon loop.
// ---------------------------------------------------------------------------
const CONTROL_POINTS = [
  [0, 400, 6, 30, 0.0],
  [0, 320, 6, 30, 0.0],
  [8, 245, 8, 30, 0.02],
  [35, 180, 11, 28, 0.05],
  [85, 130, 14, 26, 0.09],
  [150, 100, 15, 24, 0.07],
  [220, 88, 16, 24, 0.05],
  [290, 78, 17, 24, 0.03],
  [355, 52, 15, 26, -0.04],
  [405, 8, 11, 28, -0.06],
  [440, -50, 5, 30, 0.0],
  [460, -100, 3, 30, 0.0],
  [485, -160, 0, 30, 0.0],
  [500, -220, 0, 28, 0.04],
  [495, -280, 2, 26, 0.09],
  [460, -325, 5, 26, 0.07],
  [400, -350, 8, 26, 0.04],
  [330, -345, 10, 26, 0.0],
  [265, -315, 10, 28, 0.0],
  [230, -260, 7, 32, 0.0],
  [240, -195, 1, 40, 0.0],
  [250, -135, -1, 46, 0.0],
  [235, -75, 0, 42, 0.0],
  [195, -35, 2, 34, 0.0],
  [135, -20, 4, 32, 0.0],
  [65, -50, 5, 30, 0.0],
  [-15, -80, 6, 30, 0.0],
  [-100, -100, 8, 28, 0.04],
  [-180, -85, 10, 26, 0.06],
  [-250, -40, 13, 24, 0.05],
  [-295, 25, 14, 24, 0.03],
  [-305, 95, 10, 26, -0.02],
  [-280, 165, 8, 28, -0.04],
  [-235, 225, 7, 30, -0.02],
  [-170, 280, 6, 30, 0.0],
  [-95, 325, 6, 30, 0.0],
  [-35, 375, 6, 30, 0.0],
];

const ROAD_STEP = 2.2;

const PALETTE = {
  road: new THREE.Color('#4b3a35'),
  roadAlt: new THREE.Color('#5a453d'),
  shoulder: new THREE.Color('#a9825c'),
  line: new THREE.Color('#e8d9b5'),
  dash: new THREE.Color('#f0d9a2'),
  rockLow: new THREE.Color('#8e3f2c'),
  rockMid: new THREE.Color('#b55a38'),
  rockHigh: new THREE.Color('#d48252'),
  rockTop: new THREE.Color('#e6a878'),
  rockDark: new THREE.Color('#6b2f24'),
};

function colorLerp(out, a, b, t) {
  return out.copy(a).lerp(b, t);
}

function makeCanvasTexture(width, height, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export class Track {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'track';
    scene.add(this.group);
    this.rng = mulberry32(1337);
    this.noise = makeNoise2D(9241);
    this.ramps = [];
    this.gates = [];
    this.wallGaps = [];
    this.tunnelRanges = [];
    this.arches = [];
    this.decorColliders = [];
    this._buildSpline();
    this._buildFeatures();
    this._buildRoad();
    this._buildRamps();
    this._buildWalls();
    this._buildGates();
    this._buildTunnels();
    this._buildArches();
    this._buildRoadside();
    this._buildMinimap();
  }

  // -- spline + samples ------------------------------------------------------
  _buildSpline() {
    const pts = CONTROL_POINTS.map((p) => new THREE.Vector3(p[0], p[2], p[1]));
    this.curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
    const approx = this.curve.getLength();
    this.count = Math.max(256, Math.round(approx / ROAD_STEP));
    this.step = this.curve.getLength() / this.count;
    this.length = this.step * this.count;
    this.samples = [];
    const cpV = CONTROL_POINTS.map((p) => new THREE.Vector3(p[0], p[2], p[1]));
    for (let i = 0; i < this.count; i++) {
      const t = i / this.count;
      const pos = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t).normalize();
      const right = new THREE.Vector3(tan.z, 0, -tan.x).normalize();
      // Blend width / bank from the two nearest control points.
      let d1 = Infinity;
      let d2 = Infinity;
      let i1 = 0;
      let i2 = 0;
      for (let c = 0; c < cpV.length; c++) {
        const d = pos.distanceToSquared(cpV[c]);
        if (d < d1) {
          d2 = d1;
          i2 = i1;
          d1 = d;
          i1 = c;
        } else if (d < d2) {
          d2 = d;
          i2 = c;
        }
      }
      const w1 = 1 / (Math.sqrt(d1) + 0.001);
      const w2 = 1 / (Math.sqrt(d2) + 0.001);
      const blend = w1 / (w1 + w2);
      const width = lerp(CONTROL_POINTS[i1][3], CONTROL_POINTS[i2][3], blend);
      const bank = lerp(CONTROL_POINTS[i1][4], CONTROL_POINTS[i2][4], blend);
      this.samples.push({
        i,
        s: i * this.step,
        pos,
        tan,
        right,
        width,
        bank,
        gap: false,
        tunnel: false,
        stripNoise: this.noise(i * 0.21, 3.7),
      });
    }
    this._sampleAt = (s) => {
      s = ((s % this.length) + this.length) % this.length;
      const f = s / this.step;
      const i0 = Math.floor(f) % this.count;
      const i1 = (i0 + 1) % this.count;
      const t = f - Math.floor(f);
      return { i0, i1, t };
    };
  }

  findS(x, z) {
    let best = 0;
    let bd = Infinity;
    for (const smp of this.samples) {
      const d = (smp.pos.x - x) ** 2 + (smp.pos.z - z) ** 2;
      if (d < bd) {
        bd = d;
        best = smp.s;
      }
    }
    return best;
  }

  smoothRange(mid, half) {
    return [mid - half, mid + half];
  }

  markGapRange(a, b) {
    const len = this.length;
    let s = a;
    while (true) {
      const idx = Math.round(s / this.step) % this.count;
      this.samples[(idx + this.count) % this.count].gap = true;
      s += this.step;
      if (a < b ? s > b : s > b + len) break;
      if (s > a + len) break;
    }
  }

  getSample(s) {
    const { i0, i1, t } = this._sampleAt(s);
    return { a: this.samples[i0], b: this.samples[i1], t };
  }

  samplePos(s, lat = 0, out = new THREE.Vector3()) {
    const { a, b, t } = this.getSample(s);
    const x = lerp(a.pos.x, b.pos.x, t);
    const z = lerp(a.pos.z, b.pos.z, t);
    const y = lerp(a.pos.y, b.pos.y, t);
    const rx = lerp(a.right.x, b.right.x, t);
    const rz = lerp(a.right.z, b.right.z, t);
    const width = lerp(a.width, b.width, t);
    const bank = lerp(a.bank, b.bank, t);
    out.set(x + rx * lat, y + Math.tan(bank) * lat, z + rz * lat);
    return out;
  }

  // Road surface height at a point on the track. Returns null within gaps.
  surfaceAt(s, lat) {
    const { a, b, t } = this.getSample(s);
    if (a.gap || b.gap) return null;
    const width = lerp(a.width, b.width, t);
    if (Math.abs(lat) > width / 2 + 2.4) return null;
    const bank = lerp(a.bank, b.bank, t);
    let y = lerp(a.pos.y, b.pos.y, t) + Math.tan(bank) * lat;
    for (const ramp of this.ramps) {
      const ds = ((s - ramp.s + this.length * 1.5) % this.length) - this.length * 0.5;
      if (Math.abs(ds) > ramp.length / 2) continue;
      const dlat = lat - ramp.lat;
      if (Math.abs(dlat) > ramp.width / 2) continue;
      const k = clamp((ds + ramp.length / 2) / ramp.length, 0, 1);
      const edge = smoothstep(clamp((ramp.width / 2 - Math.abs(dlat)) / 1.2, 0, 1));
      y += ramp.height * Math.pow(k, 1.15) * edge;
    }
    return y;
  }

  isGap(s) {
    const { a, b, t } = this.getSample(s);
    return a.gap || b.gap;
  }

  // Nearest point on the racing line. Local search around a progress hint.
  nearest(x, z, hintS = null) {
    const N = this.count;
    let i0 = 0;
    let i1 = N - 1;
    if (hintS !== null && hintS !== undefined) {
      const center = Math.round(hintS / this.step);
      const win = 34;
      i0 = center - win;
      i1 = center + win;
    }
    let best = null;
    let bd = Infinity;
    for (let i = i0; i <= i1; i++) {
      const smp = this.samples[((i % N) + N) % N];
      const dx = x - smp.pos.x;
      const dz = z - smp.pos.z;
      const d = dx * dx + dz * dz;
      if (d < bd) {
        bd = d;
        best = smp;
      }
    }
    if (!best) best = this.samples[0];
    const dx = x - best.pos.x;
    const dz = z - best.pos.z;
    let along = dx * best.tan.x + dz * best.tan.z;
    along = clamp(along, -this.step * 1.2, this.step * 1.2);
    const lat = dx * best.right.x + dz * best.right.z;
    let s = best.s + along;
    s = ((s % this.length) + this.length) % this.length;
    return { s, lat, dist: Math.sqrt(bd), sample: best };
  }

  nearestGlobal(x, z) {
    return this.nearest(x, z, 0);
  }

  // Closest legal point on the road: used for respawns and invisible rescue.
  clampToRoad(s, lat) {
    const { a } = this.getSample(s);
    const half = a.width / 2 - 1.4;
    return clamp(lat, -half, half);
  }

  startPose() {
    const s = ((this.gateS[0] - 20) % this.length + this.length) % this.length;
    const pos = this.samplePos(s, 0);
    const { a } = this.getSample(s);
    return { s, pos, yaw: Math.atan2(a.tan.x, a.tan.z) };
  }

  // -- features --------------------------------------------------------------
  _buildFeatures() {
    // The big canyon gap that must be cleared with speed.
    const gapA = this.findS(456, -88);
    const gapB = this.findS(477, -136);
    this.gap = { start: gapA, end: gapB };
    this.markGapRange(gapA, gapB);

    // Tunnel through the mesa on the south-east turn.
    const tA = this.findS(494, -262);
    const tB = this.findS(462, -318);
    this.tunnelRanges.push({ start: tA, end: tB, length: 8 });
    for (let s = tA; s < tB; s += this.step) {
      this.samples[Math.round(s / this.step) % this.count].tunnel = true;
    }

    // Jump ramps. s, lat, width, length, height, label.
    const insideHairpin = 7.0;
    this.ramps.push({
      s: this.findS(460, -100) - 13,
      lat: 0,
      width: 15,
      length: 22,
      height: 3.4,
      gapKicker: true,
    });
    this.ramps.push({
      s: this.findS(392, 22),
      lat: 2.5,
      width: 11,
      length: 16,
      height: 2.1,
    });
    this.ramps.push({
      s: this.findS(352, -348),
      lat: insideHairpin,
      width: 11,
      length: 17,
      height: 3.2,
      shortCut: true,
    });
    this.ramps.push({
      s: this.findS(248, -112),
      lat: 0,
      width: 13,
      length: 18,
      height: 2.4,
      island: true,
    });

    // Open wall sections around the gap and around the hairpin cut.
    const gA = this.gap.start - 30;
    const gB = this.gap.end + 34;
    this.wallGaps.push({ a: gA, b: gB, sides: 'both' });
    const hA = this.findS(370, -352) - 18;
    const hB = this.findS(300, -332) + 26;
    this.wallGaps.push({ a: hA, b: hB, sides: 'right' });
    // Open the sand bowl out to a natural rock island.
    this.wallGaps.push({ a: this.findS(246, -170), b: this.findS(232, -90), sides: 'both' });

    // Gate positions (checkpoints 1..6). Pull gates out of gaps.
    this.gateS = [];
    const totalGates = 7;
    for (let i = 0; i < totalGates; i++) {
      let s = (this.length * i) / totalGates;
      let tries = 0;
      while (this.isGap(s) && tries < 40) {
        s = (s + 6) % this.length;
        tries++;
      }
      this.gateS.push(s);
    }
    // Start/finish is the wide sunlit straight at gate 4; rotate the order so
    // the same gate becomes index 0 and the remaining gates read 1..6.
    const startIndex = 4;
    this.gateS = this.gateS.slice(startIndex).concat(this.gateS.slice(0, startIndex));
  }

  _wallBlocked(side, s) {
    const ss = ((s % this.length) + this.length) % this.length;
    for (const g of this.wallGaps) {
      if (g.sides === 'both' || g.sides === side) {
        const len = this.length;
        const a = ((g.a % len) + len) % len;
        const b = ((g.b % len) + len) % len;
        if (a < b) {
          if (ss >= a && ss <= b) return true;
        } else if (ss >= a || ss <= b) return true;
      }
    }
    return false;
  }

  // -- road geometry ---------------------------------------------------------
  _buildRoad() {
    const N = this.count;
    const lanes = [-1.12, -1.02, -0.9, -0.45, 0.0, 0.45, 0.9, 1.02, 1.12];
    const positions = [];
    const colors = [];
    const indices = [];
    const tmpCol = new THREE.Color();
    const rows = [];

    for (let i = 0; i < N; i++) {
      const smp = this.samples[i];
      const row = [];
      for (let l = 0; l < lanes.length; l++) {
        const lat = (lanes[l] * smp.width) / 2;
        const x = smp.pos.x + smp.right.x * lat;
        const z = smp.pos.z + smp.right.z * lat;
        const y = smp.pos.y + Math.tan(smp.bank) * lat + 0.02;
        row.push([x, y, z]);
        const a = Math.abs(lanes[l]);
        const grain = smp.stripNoise * 0.035;
        if (a > 1.0) colorLerp(tmpCol, PALETTE.shoulder, PALETTE.rockLow, 0.15 + grain);
        else if (a > 0.88) colorLerp(tmpCol, PALETTE.line, PALETTE.line, 0);
        else if (a < 0.02)
          colorLerp(tmpCol, PALETTE.road, PALETTE.roadAlt, 0.55 + grain);
        else colorLerp(tmpCol, PALETTE.road, PALETTE.roadAlt, 0.35 + grain);
        colArrPush(colors, tmpCol.r, tmpCol.g, tmpCol.b);
      }
      rows.push(row);
    }

    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      const a = this.samples[i];
      const b = this.samples[j];
      if (a.gap || b.gap) continue;
      for (let l = 0; l < lanes.length - 1; l++) {
        const base = i * lanes.length + l;
        const next = j * lanes.length + l;
        indices.push(base, next, base + 1);
        indices.push(base + 1, next, next + 1);
      }
    }

    // Flatten into per-vertex arrays.
    for (let i = 0; i < N; i++) {
      for (let l = 0; l < lanes.length; l++) positions.push(...rows[i][l]);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.96,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.name = 'road';
    this.group.add(mesh);

    this._buildPaint();
    this._buildEdgeLights();

    // Chasm floor visible under the broken road.
    const gapC = this.samplePos((this.gap.start + this.gap.end) / 2, 0);
    const chasmGeo = new THREE.PlaneGeometry(120, 120, 1, 1);
    chasmGeo.rotateX(-Math.PI / 2);
    const chasmMat = new THREE.MeshStandardMaterial({
      color: '#3a1f1a',
      roughness: 1,
    });
    const chasm = new THREE.Mesh(chasmGeo, chasmMat);
    chasm.position.set(gapC.x, gapC.y - 26, gapC.z);
    this.group.add(chasm);
  }

  _buildPaint() {
    const dashes = [];
    const N = this.count;
    for (let i = 0; i < N; i += 4) {
      const a = this.samples[i];
      if (a.gap) continue;
      const s = a.s;
      const width = a.width;
      for (const dir of [-1, 1]) {
        const lat = dir * (width / 2) * 0.955;
        const p0 = this.samplePos(s - 1.4, lat - 0.24);
        const p1 = this.samplePos(s - 1.4, lat + 0.24);
        const p2 = this.samplePos(s + 1.4, lat + 0.24);
        const p3 = this.samplePos(s + 1.4, lat - 0.24);
        dashes.push([p0, p1, p2, p3]);
      }
    }
    const geo = new THREE.BufferGeometry();
    const pos = [];
    const idx = [];
    let vi = 0;
    for (const quad of dashes) {
      for (const p of quad) pos.push(p.x, p.y + 0.035, p.z);
      idx.push(vi, vi + 1, vi + 2, vi, vi + 2, vi + 3);
      vi += 4;
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      color: '#f4dfae',
      emissive: '#c79a55',
      emissiveIntensity: 0.24,
      roughness: 0.7,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    this.group.add(mesh);

    // Center dashes.
    const center = [];
    for (let i = 0; i < N; i += 5) {
      const a = this.samples[i];
      if (a.gap) continue;
      const s = a.s;
      const p0 = this.samplePos(s - 2.2, -0.22);
      const p1 = this.samplePos(s - 2.2, 0.22);
      const p2 = this.samplePos(s + 2.2, 0.22);
      const p3 = this.samplePos(s + 2.2, -0.22);
      center.push([p0, p1, p2, p3]);
    }
    const cgeo = new THREE.BufferGeometry();
    const cpos = [];
    const cidx = [];
    let ci = 0;
    for (const quad of center) {
      for (const p of quad) cpos.push(p.x, p.y + 0.03, p.z);
      cidx.push(ci, ci + 1, ci + 2, ci, ci + 2, ci + 3);
      ci += 4;
    }
    cgeo.setAttribute('position', new THREE.Float32BufferAttribute(cpos, 3));
    cgeo.setIndex(cidx);
    cgeo.computeVertexNormals();
    const cmat = new THREE.MeshStandardMaterial({
      color: '#e8cf99',
      roughness: 0.8,
    });
    this.group.add(new THREE.Mesh(cgeo, cmat));

    this._buildArrows();
  }

  // Big painted arrows keep the racing line legible at speed.
  _buildArrows() {
    const positions = [];
    for (let s = 34; s < this.length; s += 86) {
      let blocked = false;
      for (let d = -6; d <= 10; d += 2) {
        if (this.isGap(s + d)) blocked = true;
      }
      if (blocked) continue;
      const tip = this.samplePos(s + 5.5, 0);
      const backL = this.samplePos(s - 1.5, -4.4);
      const backR = this.samplePos(s - 1.5, 4.4);
      const notch = this.samplePos(s + 1.2, 0);
      const y = 0.055;
      positions.push(
        tip.x, tip.y + y, tip.z, notch.x, notch.y + y, notch.z, backL.x, backL.y + y, backL.z,
        tip.x, tip.y + y, tip.z, backR.x, backR.y + y, backR.z, notch.x, notch.y + y, notch.z
      );
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color: '#ffd395',
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    mesh.renderOrder = 1;
    this.group.add(mesh);
  }

  _buildEdgeLights() {
    const pos = [];
    const idx = [];
    let vi = 0;
    for (const dir of [-1, 1]) {
      let runStart = null;
      for (let i = 0; i <= this.count; i++) {
        const smp = this.samples[i % this.count];
        if (i < this.count && !smp.gap) {
          const lat = dir * (smp.width / 2) * 0.985;
          const p = this.samplePos(smp.s, lat);
          pos.push(p.x, p.y + 0.07, p.z);
          if (runStart === null) runStart = vi;
          vi++;
        } else {
          runStart = null;
        }
      }
    }
    // Build thin strips as line segments along the edges.
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < this.count; i++) {
      const a = this.samples[i];
      const b = this.samples[(i + 1) % this.count];
      if (a.gap || b.gap) continue;
      for (const dir of [-1, 1]) {
        const latA = dir * (a.width / 2) * 0.985;
        const latB = dir * (b.width / 2) * 0.985;
        const pa = this.samplePos(a.s, latA);
        const pb = this.samplePos(b.s, latB);
        vertices.push(pa.x, pa.y + 0.08, pa.z, pb.x, pb.y + 0.08, pb.z);
      }
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const mat = new THREE.LineBasicMaterial({
      color: '#ffb257',
      transparent: true,
      opacity: 0.55,
    });
    this.group.add(new THREE.LineSegments(geo, mat));
  }

  // -- ramps -----------------------------------------------------------------
  _buildRamps() {
    this.rampMeshes = [];
    for (const ramp of this.ramps) {
      const geo = new THREE.BufferGeometry();
      const segments = 10;
      const pos = [];
      const col = [];
      const c = new THREE.Color();
      for (let i = 0; i <= segments; i++) {
        const k = i / segments;
        const s = ramp.s - ramp.length / 2 + ramp.length * k;
        const h = ramp.height * Math.pow(k, 1.15);
        for (const side of [-1, 1]) {
          const lat = ramp.lat + (side * ramp.width) / 2;
          const p = this.samplePos(s, lat);
          pos.push(p.x, p.y + 0.04, p.z);
          pos.push(p.x, p.y + h + 0.06, p.z);
          colorLerp(c, PALETTE.roadAlt, PALETTE.rockMid, 0.15 + k * 0.4);
          col.push(c.r, c.g, c.b);
          colorLerp(c, PALETTE.line, PALETTE.rockHigh, k);
          col.push(c.r, c.g, c.b);
        }
      }
      const idx = [];
      for (let i = 0; i < segments; i++) {
        const a = i * 4;
        const b = (i + 1) * 4;
        // top surface (between inner-top verts)
        idx.push(a + 1, b + 1, a + 3, a + 3, b + 1, b + 3);
        // left wall
        idx.push(a, a + 1, b, b, a + 1, b + 1);
        // right wall
        idx.push(a + 2, b + 2, a + 3, a + 3, b + 2, b + 3);
      }
      // front face
      const last = segments * 4;
      idx.push(last, last + 1, last + 2, last + 2, last + 1, last + 3);
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      const mat = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.9,
        side: THREE.DoubleSide,
        flatShading: true,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      this.rampMeshes.push(mesh);

      // Chevron sign at the ramp lip.
      const p = this.samplePos(ramp.s - ramp.length / 2 - 2, ramp.lat);
      const label = ramp.shortCut ? 'CANYON CUT  ▲' : ramp.gapKicker ? 'BIG AIR  ▲' : 'KICKER  ▲';
      const sprite = makeLabelSprite(label, ramp.shortCut ? '#ffd166' : '#f7e3bb', 0.8);
      sprite.position.set(p.x, p.y + 2.1, p.z);
      this.group.add(sprite);
      this.arches.push(sprite);
    }
  }

  // -- canyon walls ----------------------------------------------------------
  _buildWalls() {
    const sideProfiles = [
      { out: 0.7, up: 0.4 },
      { out: 1.6, up: 4.5 },
      { out: 3.0, up: 9.5 },
      { out: 5.2, up: 14.5 },
      { out: 7.4, up: 19.0 },
    ];
    const cLow = PALETTE.rockLow;
    const cMid = PALETTE.rockMid;
    const cHigh = PALETTE.rockHigh;
    const cTop = PALETTE.rockTop;
    const cDark = PALETTE.rockDark;

    for (const dir of [-1, 1]) {
      const positions = [];
      const colors = [];
      const indices = [];
      const tmp = new THREE.Color();
      let row = 0;
      const rows = [];
      for (let i = 0; i < this.count; i += 2) {
        const smp = this.samples[i];
        if (this._wallBlocked(dir < 0 ? 'left' : 'right', smp.s)) {
          rows.push(null);
          continue;
        }
        const half = smp.width / 2;
        const rowVerts = [];
        for (let pI = 0; pI < sideProfiles.length; pI++) {
          const prof = sideProfiles[pI];
          const jitter =
            this.noise(i * 0.09 + pI * 3.1, dir * 2.2) * (0.5 + pI * 0.85);
          const out = half + prof.out + jitter;
          const up = prof.up + this.noise(i * 0.13 + pI, dir * 9.1) * (pI * 1.4);
          const lat = dir * out;
          const x = smp.pos.x + smp.right.x * lat;
          const z = smp.pos.z + smp.right.z * lat;
          const y = smp.pos.y + Math.tan(smp.bank) * lat + up;
          rowVerts.push([x, y, z]);
          const band = pI / (sideProfiles.length - 1);
          if (band < 0.2) colorLerp(tmp, cDark, cLow, 0.4 + smp.stripNoise * 0.2);
          else if (band < 0.5) colorLerp(tmp, cLow, cMid, 0.4);
          else if (band < 0.8) colorLerp(tmp, cMid, cHigh, 0.5);
          else colorLerp(tmp, cHigh, cTop, 0.6);
          const grit = 0.9 + this.noise(i * 0.4, pI * 2.2) * 0.16;
          colors.push(tmp.r * grit, tmp.g * grit, tmp.b * grit);
        }
        rows.push(rowVerts);
      }

      for (let r = 0; r < rows.length; r++) {
        const a = rows[r];
        const b = rows[(r + 1) % rows.length];
        if (!a || !b) continue;
        const baseA = r * sideProfiles.length;
        const baseB = ((r + 1) % rows.length) * sideProfiles.length;
        for (let pI = 0; pI < sideProfiles.length - 1; pI++) {
          indices.push(
            baseA + pI,
            baseB + pI,
            baseA + pI + 1,
            baseA + pI + 1,
            baseB + pI,
            baseB + pI + 1
          );
        }
      }
      // flat arrays
      rows.forEach((r) => r && r.forEach((p) => positions.push(...p)));
      // NOTE: indices above assume every row emitted; rebuild with compacted indexing.
      const validRows = rows.map((r, idx) => (r ? idx : -1));
      const rowIndexMap = new Map();
      let vi = 0;
      rows.forEach((r, idx) => {
        if (r) {
          rowIndexMap.set(idx, vi);
          vi += sideProfiles.length;
        }
      });
      const fixed = [];
      for (let r = 0; r < rows.length; r++) {
        const a = rows[r];
        const b = rows[(r + 1) % rows.length];
        if (!a || !b) continue;
        const baseA = rowIndexMap.get(r);
        const baseB = rowIndexMap.get((r + 1) % rows.length);
        if (baseA === undefined || baseB === undefined) continue;
        for (let pI = 0; pI < sideProfiles.length - 1; pI++) {
          fixed.push(
            baseA + pI,
            baseB + pI,
            baseA + pI + 1,
            baseA + pI + 1,
            baseB + pI,
            baseB + pI + 1
          );
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geo.setIndex(fixed);
      geo.computeVertexNormals();
      const mat = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 1,
        metalness: 0,
        flatShading: true,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      this[dir < 0 ? 'wallLeft' : 'wallRight'] = mesh;
    }
  }

  // -- checkpoint gantries ---------------------------------------------------
  _buildGates() {
    const gateColors = ['#ffce6e', '#ff9d4d', '#ffce6e'];
    this.gateS.forEach((s, idx) => {
      const group = new THREE.Group();
      const p = this.samplePos(s, 0);
      const smp = this.getSample(s).a;
      const yaw = Math.atan2(smp.tan.x, smp.tan.z);
      group.position.copy(p);
      group.rotation.y = yaw;
      const width = smp.width;
      const postGeo = new THREE.BoxGeometry(1.1, 9, 1.1);
      const darkMat = new THREE.MeshStandardMaterial({
        color: '#3e2b27',
        roughness: 0.8,
        metalness: 0.2,
      });
      const glowMat = new THREE.MeshBasicMaterial({ color: '#ffc46b' });
      for (const dir of [-1, 1]) {
        const post = new THREE.Mesh(postGeo, darkMat);
        post.position.set(dir * (width / 2 + 0.6), 4.4, 0);
        post.castShadow = true;
        group.add(post);
        const strip = new THREE.Mesh(new THREE.BoxGeometry(0.24, 7.4, 0.24), glowMat);
        strip.position.set(dir * (width / 2 + 0.6), 4.4, -0.62);
        group.add(strip);
      }
      const beam = new THREE.Mesh(
        new THREE.BoxGeometry(width + 2.8, 1.4, 1.4),
        darkMat
      );
      beam.position.set(0, 9.0, 0);
      beam.castShadow = true;
      group.add(beam);
      const bannerTex =
        idx === 0
          ? makeCanvasTexture(1024, 160, (ctx, w, h) => {
              ctx.fillStyle = '#2a1b17';
              ctx.fillRect(0, 0, w, h);
              ctx.fillStyle = '#ffce6e';
              ctx.fillRect(0, 0, w, 8);
              ctx.fillRect(0, h - 8, w, 8);
              ctx.font = '900 92px "Arial Black", sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = '#f7e3bb';
              ctx.fillText('SUNBREAK  START', w / 2, h / 2 - 2);
            })
          : makeCanvasTexture(1024, 160, (ctx, w, h) => {
              ctx.fillStyle = '#2a1b17';
              ctx.fillRect(0, 0, w, h);
              const accent = gateColors[idx % gateColors.length];
              ctx.fillStyle = accent;
              ctx.fillRect(0, 0, w, 7);
              ctx.fillRect(0, h - 7, w, 7);
              ctx.font = '900 72px "Arial Black", sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = '#f7e3bb';
              ctx.fillText(`CHECKPOINT  ${idx}`, w / 2, h / 2 + 2);
              for (let c = 0; c < 6; c++) {
                ctx.fillStyle = c % 2 ? '#ffce6e' : '#b55a38';
                ctx.fillRect(w - 210 + c * 30, 40, 18, 80);
              }
            });
      const bannerGeo = new THREE.PlaneGeometry(width + 2.2, 2.0);
      const bannerMat = new THREE.MeshBasicMaterial({
        map: bannerTex,
        transparent: true,
        side: THREE.FrontSide,
      });
      for (const facing of [-1, 1]) {
        const banner = new THREE.Mesh(bannerGeo, bannerMat);
        banner.position.set(0, 7.7, facing * 0.03);
        banner.rotation.y = facing < 0 ? Math.PI : 0;
        group.add(banner);
      }

      if (idx === 0) {
        // Start lights.
        const lights = [];
        for (let i = 0; i < 5; i++) {
          const mat = new THREE.MeshBasicMaterial({ color: '#42211b' });
          const light = new THREE.Mesh(
            new THREE.SphereGeometry(0.46, 12, 10),
            mat
          );
          light.position.set((i - 2) * 1.7, 6.25, 0.1);
          group.add(light);
          lights.push(mat);
        }
        this.startLights = lights;
      }

      group.name = `gate-${idx}`;
      this.group.add(group);
      this.gates.push({ s, idx, group, emissive: glowMat });
    });
  }

  setStartLights(count, go = false) {
    if (!this.startLights) return;
    this.startLights.forEach((mat, i) => {
      const on = i < count;
      mat.color.set(on ? (go ? '#8dffb0' : '#ff4a2a') : '#42211b');
    });
  }

  _buildTunnels() {
    const stone = new THREE.MeshStandardMaterial({
      color: '#8a4630',
      roughness: 1,
      flatShading: true,
    });
    const glow = new THREE.MeshBasicMaterial({ color: '#ffd08a' });
    this.tunnelLights = [];
    for (const t of this.tunnelRanges) {
      const rings = Math.max(2, Math.floor((t.end - t.start) / 9));
      for (let i = 0; i <= rings; i++) {
        const s = t.start + ((t.end - t.start) * i) / rings;
        const p = this.samplePos(s, 0);
        const smp = this.getSample(s).a;
        const yaw = Math.atan2(smp.tan.x, smp.tan.z);
        const radius = smp.width / 2 + 3.5;
        const arch = new THREE.Mesh(
          new THREE.TorusGeometry(radius, 2.4, 5, 12, Math.PI),
          stone
        );
        arch.position.set(p.x, p.y - 1.2, p.z);
        arch.rotation.y = yaw;
        arch.castShadow = true;
        arch.receiveShadow = true;
        this.group.add(arch);
        this.tunnelLights.push(arch);
        // Amber strip lights along the walls.
        for (const dir of [-1, 1]) {
          const lp = this.samplePos(s, dir * (smp.width / 2 + 0.9));
          const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.4, 0.35), glow);
          lamp.position.set(lp.x, lp.y + 4.2, lp.z);
          lamp.rotation.y = yaw;
          this.group.add(lamp);
        }
      }
      // Dark cap over the tunnel so it reads as a mesa from above.
      for (let i = 0; i < rings; i++) {
        const s = t.start + ((t.end - t.start) * (i + 0.5)) / rings;
        const p = this.samplePos(s, 0);
        const smp = this.getSample(s).a;
        const yaw = Math.atan2(smp.tan.x, smp.tan.z);
        const cap = new THREE.Mesh(
          new THREE.BoxGeometry(smp.width + 12, 5, 9),
          stone
        );
        cap.position.set(p.x, p.y + 11, p.z);
        cap.rotation.y = yaw;
        cap.castShadow = true;
        this.group.add(cap);
      }
    }
  }

  _buildArches() {
    const spots = [
      { x: 96, z: -29, radius: 17 },
      { x: 246, z: -118, radius: 20 },
    ];
    const stone = new THREE.MeshStandardMaterial({
      color: '#b4603c',
      roughness: 1,
      flatShading: true,
    });
    for (const spot of spots) {
      const s = this.findS(spot.x, spot.z);
      const p = this.samplePos(s, 0);
      const smp = this.getSample(s).a;
      const yaw = Math.atan2(smp.tan.x, smp.tan.z);
      const arch = new THREE.Mesh(
        new THREE.TorusGeometry(spot.radius, 3.0, 6, 14, Math.PI),
        stone
      );
      arch.position.set(p.x, p.y - 0.5, p.z);
      arch.rotation.y = yaw;
      arch.castShadow = true;
      arch.receiveShadow = true;
      this.group.add(arch);
    }
    // Central island rock in the sand bowl split.
    const islandS = this.findS(246, -140);
    const ip = this.samplePos(islandS, 0);
    const geo = new THREE.ConeGeometry(10, 34, 7, 3);
    geo.translate(0, 16, 0);
    const rock = new THREE.Mesh(geo, stone);
    rock.position.set(ip.x, ip.y - 6, ip.z);
    rock.castShadow = true;
    rock.receiveShadow = true;
    this.group.add(rock);
    this.island = rock;
    this.decorColliders.push({ x: ip.x, z: ip.z, r: 10, y: ip.y });
  }

  _buildRoadside() {
    // Tall warning signs and near-miss pillars just inside the canyon walls.
    const signTex = makeCanvasTexture(512, 256, (ctx, w, h) => {
      ctx.fillStyle = '#2a1b17';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#ffce6e';
      ctx.fillRect(0, 0, w, 10);
      ctx.fillRect(0, h - 10, w, 10);
      ctx.fillStyle = '#f7e3bb';
      ctx.font = '900 62px "Arial Black", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('STAY', w / 2, 95);
      ctx.fillStyle = '#ff9d4d';
      ctx.fillText('FAST', w / 2, 170);
      ctx.font = '700 30px sans-serif';
      ctx.fillStyle = '#e8cfa2';
      ctx.fillText('SUNBREAK CANYON', w / 2, 220);
    });
    const signMat = new THREE.MeshStandardMaterial({
      map: signTex,
      roughness: 0.8,
      emissive: '#3a2015',
      emissiveIntensity: 0.3,
      side: THREE.DoubleSide,
    });
    const postMat = new THREE.MeshStandardMaterial({ color: '#4a3028', roughness: 0.9 });
    const signS = this.findS(242, -205);
    for (const [sOff, latOff] of [
      [0, 1],
      [260, -1],
    ]) {
      const s = signS + sOff;
      const smp = this.getSample(s).a;
      const lat = latOff * (smp.width / 2 - 1.0);
      const p = this.samplePos(s, lat);
      const board = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 2.6), signMat);
      board.position.set(p.x, p.y + 4.6, p.z);
      board.rotation.y = Math.atan2(smp.tan.x, smp.tan.z);
      this.group.add(board);
      for (const d of [-1, 1]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.28, 5.2, 0.28), postMat);
        const px = this.samplePos(s, lat + d * 1.7);
        post.position.set(px.x, p.y + 2.6, px.z);
        this.group.add(post);
      }
    }

    // Near-miss pillars placed on the shoulders at a few spots.
    const pillarMat = new THREE.MeshStandardMaterial({
      color: '#6d3325',
      roughness: 1,
      flatShading: true,
    });
    const rng = mulberry32(77);
    const spots = [
      [this.findS(210, 92), 1],
      [this.findS(475, -250), -1],
      [this.findS(-210, 245), 1],
      [this.findS(-265, 40), -1],
      [this.findS(70, -55), 1],
    ];
    for (const [s, side] of spots) {
      const smp = this.getSample(s).a;
      const lat = side * (smp.width / 2 + 2.2);
      const p = this.samplePos(s, lat);
      const h = 4 + rng() * 5;
      const geo = new THREE.CylinderGeometry(0.8, 1.25, h, 6, 2);
      const m = new THREE.Mesh(geo, pillarMat);
      m.position.set(p.x, p.y + h / 2, p.z);
      m.rotation.y = rng() * TAU;
      m.castShadow = true;
      this.group.add(m);
      this.decorColliders.push({ x: p.x, z: p.z, r: 1.35, y: p.y });
    }
  }

  _buildMinimap() {
    this.mapPoints = [];
    for (let s = 0; s < this.length; s += 16) {
      const p = this.samplePos(s, 0);
      this.mapPoints.push({ x: p.x, z: p.z });
    }
  }
}

function colArrPush(arr, r, g, b) {
  arr.push(r, g, b);
}

function makeLabelSprite(text, color = '#ffffff', scale = 1) {
  const tex = makeCanvasTexture(512, 128, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(30,18,14,0.82)';
    ctx.beginPath();
    ctx.roundRect(6, 20, w - 12, h - 40, 18);
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.font = '900 52px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2 + 2);
  });
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(6 * scale, 1.5 * scale, 1);
  return sprite;
}
