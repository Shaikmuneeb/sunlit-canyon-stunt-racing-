import * as THREE from 'three';
import { clamp, damp, lerp, smoothstep, wrapAngle, angleDiff, sign } from './util.js';

const CAR_HALF_WIDTH = 0.95;
const GRAVITY = 24;
const BASE_TOP_SPEED = 66;
const BOOST_TOP_SPEED = 84;
const SUSPENSION_STIFFNESS = 132;
const SUSPENSION_DAMPING = 18;
// Physics and camera use +Z as forward. The authored mesh details are toward
// -Z, so correct the art locally instead of changing the movement convention.
const MODEL_LOCAL_HEADING_FIX = Math.PI;

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.55,
    metalness: 0.25,
    flatShading: true,
    ...opts,
  });
}

function paint(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.2,
    metalness: 0.7,
    clearcoat: 0.85,
    clearcoatRoughness: 0.14,
    flatShading: true,
    ...opts,
  });
}

function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export class CarModel {
  constructor(scene, colors = {}) {
    this.group = new THREE.Group();
    this.tilt = new THREE.Group();
    this.group.add(this.tilt);
    scene.add(this.group);

    // Sunbreak Performance spec: low nose, broad shoulders, layered aero.
    const bodyMat = paint(colors.body || '#14a89e');
    const bodyDark = paint(colors.bodyDark || '#08736f', { roughness: 0.28, metalness: 0.62 });
    const trimMat = mat('#10191d', { roughness: 0.3, metalness: 0.7 });
    const accentMat = paint(colors.accent || '#ff7a2f', { emissive: colors.emissive || '#ff421c', emissiveIntensity: 0.9, roughness: 0.22, metalness: 0.45 });
    const goldMat = mat(colors.trim || '#ffd07c', { emissive: colors.trimEmissive || '#b8551f', emissiveIntensity: 0.22, roughness: 0.3, metalness: 0.65 });
    const glassMat = new THREE.MeshStandardMaterial({ color: '#091c25', roughness: 0.08, metalness: 0.86, transparent: true, opacity: 0.94 });
    const rubberMat = new THREE.MeshStandardMaterial({ color: '#080d10', roughness: 0.94, metalness: 0.03 });
    const rimMat = new THREE.MeshStandardMaterial({ color: '#b9e0d8', roughness: 0.19, metalness: 0.94, flatShading: true });

    const body = new THREE.Group();
    this.tilt.add(body);
    this.body = body;
    this.tilt.rotation.y = MODEL_LOCAL_HEADING_FIX;

    // Main sculpted wedge and raised rear shoulders.
    body.add(box(2.12, 0.48, 3.55, bodyMat, 0, 0.64, 0.05));
    body.add(box(1.82, 0.27, 1.18, bodyMat, 0, 0.54, -2.05));
    body.add(box(1.46, 0.18, 0.62, goldMat, 0, 0.55, -2.61));
    body.add(box(2.34, 0.18, 0.28, trimMat, 0, 0.39, -2.5));
    body.add(box(2.16, 0.2, 0.28, trimMat, 0, 0.42, 2.03));

    // Canopy: dark glass, thin roof, and orange safety spine.
    const cabin = box(1.55, 0.54, 1.55, trimMat, 0, 1.13, 0.18);
    cabin.rotation.x = -0.04;
    body.add(cabin);
    const windshield = box(1.42, 0.4, 0.1, glassMat, 0, 1.18, -0.62);
    windshield.rotation.x = -0.58;
    body.add(windshield);
    const roof = box(1.42, 0.1, 1.08, bodyDark, 0, 1.43, 0.28);
    body.add(roof);
    const rearGlass = box(1.34, 0.3, 0.08, glassMat, 0, 1.17, 0.91);
    rearGlass.rotation.x = 0.48;
    body.add(rearGlass);
    body.add(box(0.1, 0.12, 1.22, accentMat, 0, 1.5, 0.18));

    // Central stripe, side blades, and illuminated side signature.
    body.add(box(0.22, 0.035, 3.55, goldMat, 0, 0.9, -0.02));
    body.add(box(0.09, 0.045, 2.2, accentMat, 0, 0.93, 0.9));
    this.sideLights = [];
    for (const s of [-1, 1]) {
      body.add(box(0.16, 0.2, 2.7, trimMat, s * 1.08, 0.48, 0));
      body.add(box(0.08, 0.06, 2.25, accentMat, s * 1.12, 0.68, 0.02));
      const light = box(0.035, 0.08, 1.25, goldMat, s * 1.15, 0.77, -0.18);
      body.add(light);
      this.sideLights.push(light);
      const roundel = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.045, 24), goldMat);
      roundel.rotation.z = Math.PI / 2;
      roundel.position.set(s * 1.12, 0.88, 0.22);
      body.add(roundel);
      const num = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.38), new THREE.MeshBasicMaterial({ map: makeNumberTexture('07'), transparent: true }));
      num.position.set(s * 1.145, 0.88, 0.22);
      num.rotation.y = s > 0 ? Math.PI / 2 : -Math.PI / 2;
      body.add(num);
    }

    // Functional aero: canards, roll hoop, and a floating rear wing.
    for (const s of [-1, 1]) {
      body.add(box(0.42, 0.06, 0.42, accentMat, s * 1.02, 0.5, -2.42));
      const bar = box(0.08, 0.82, 0.08, trimMat, s * 0.68, 1.13, 0.93);
      bar.rotation.x = 0.16;
      body.add(bar);
    }
    body.add(box(1.42, 0.08, 0.08, trimMat, 0, 1.55, 0.93));
    body.add(box(0.1, 0.44, 0.1, trimMat, -0.78, 1.2, 1.86));
    body.add(box(0.1, 0.44, 0.1, trimMat, 0.78, 1.2, 1.86));
    const wing = box(2.1, 0.1, 0.54, accentMat, 0, 1.45, 1.98);
    wing.rotation.x = 0.1;
    body.add(wing);
    body.add(box(1.55, 0.04, 0.09, goldMat, 0, 1.5, 2.23));

    // Lighting signature: full-width headlights and split rear lamps.
    const headMat = new THREE.MeshBasicMaterial({ color: '#fff1c7' });
    const tailMat = new THREE.MeshBasicMaterial({ color: '#a5151d' });
    this.tailMats = [tailMat];
    body.add(box(1.26, 0.1, 0.05, headMat, 0, 0.7, -2.66));
    for (const s of [-1, 1]) {
      body.add(box(0.5, 0.12, 0.05, tailMat, s * 0.57, 0.82, 1.99));
    }

    // Wheels with larger turbine rims and visible hubs.
    this.wheels = [];
    const wheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.38, 18);
    wheelGeo.rotateZ(Math.PI / 2);
    const rimGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 10);
    rimGeo.rotateZ(Math.PI / 2);
    const hubGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.42, 10);
    hubGeo.rotateZ(Math.PI / 2);
    const positions = [[-1.0, 0.48, -1.38, true], [1.0, 0.48, -1.38, true], [-1.02, 0.5, 1.38, false], [1.02, 0.5, 1.38, false]];
    for (const [x, y, z, front] of positions) {
      const pivot = new THREE.Group();
      pivot.position.set(x, y, z);
      const spin = new THREE.Group();
      pivot.add(spin);
      spin.add(new THREE.Mesh(wheelGeo, rubberMat));
      spin.add(new THREE.Mesh(rimGeo, rimMat));
      spin.add(new THREE.Mesh(hubGeo, accentMat));
      for (let sp = 0; sp < 5; sp++) {
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.055, 0.08), rimMat);
        spoke.rotation.x = (sp / 5) * Math.PI;
        spin.add(spoke);
      }
      this.tilt.add(pivot);
      this.wheels.push({ pivot, spin, front, baseY: y });
    }

    this.flames = [];
    const flameMat = new THREE.MeshBasicMaterial({ color: '#ffb35c', transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const s of [-1, 1]) {
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.17, 1.25, 7), flameMat.clone());
      flame.rotation.x = Math.PI / 2;
      flame.position.set(s * 0.42, 0.48, 2.48);
      flame.visible = false;
      this.tilt.add(flame);
      this.flames.push(flame);
    }
    const underglow = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 4.8), new THREE.MeshBasicMaterial({ color: '#29e8d2', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
    underglow.rotation.x = -Math.PI / 2;
    underglow.position.y = 0.06;
    this.tilt.add(underglow);
    this.underglow = underglow;

    const blob = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 5.3), new THREE.MeshBasicMaterial({ map: makeBlobTexture(), transparent: true, opacity: 0.46, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2;
    blob.position.y = 0.08;
    this.group.add(blob);
    this.blob = blob;
    this.bodyRoll = 0;
    this.bodyPitch = 0;
    this.susp = 0;
    this.suspVel = 0;
    this.wheelSpin = 0;
  }

  setPose(pos, yaw, bank, slope) {
    this.group.position.copy(pos);
    this.group.rotation.y = yaw;
  }

  update(dt, state) {
    const { speed, steer, lateral, grounded, boostActive, throttle } = state;
    // Wheels
    this.wheelSpin += (state.forwardSpeed / 0.46) * dt;
    for (const w of this.wheels) {
      w.spin.rotation.x = this.wheelSpin;
      if (w.front) w.pivot.rotation.y = steer * 0.4;
      // suspension travel
      w.pivot.position.y = w.baseY + this.susp * 0.35;
    }
    // Body attitude
    const targetRoll = clamp(-steer * 0.055 - lateral * 0.004, -0.12, 0.12);
    const targetPitch = clamp(
      (state.accel || 0) * -0.0018 + (state.braking ? 0.035 : 0),
      -0.06,
      0.06
    );
    this.bodyRoll = damp(this.bodyRoll, targetRoll, 8, dt);
    this.bodyPitch = damp(this.bodyPitch, targetPitch, 7, dt);

    // Suspension spring
    this.suspVel += (-this.susp * SUSPENSION_STIFFNESS - this.suspVel * SUSPENSION_DAMPING) * dt;
    this.susp += this.suspVel * dt;

    this.tilt.rotation.z = (state.bank || 0) + this.bodyRoll;
    this.tilt.rotation.x = (state.slope || 0) * 0.6 + this.bodyPitch;
    this.tilt.position.y = this.susp * 0.35;
    this.body.position.y = -this.susp * 0.06;

    this.blob.position.y = 0.06 - (state.airHeight || 0);
    const bs = 1 + clamp((state.airHeight || 0) / 12, 0, 0.8);
    this.blob.scale.set(bs, bs, 1);
    this.blob.material.opacity = 0.4 / bs;

    // Boost flames.
    const flameOn = boostActive;
    for (const f of this.flames) {
      f.visible = flameOn;
      if (flameOn) {
        const jitter = 0.8 + Math.random() * 0.55;
        f.scale.set(1, jitter, 1);
        f.material.opacity = 0.6 + Math.random() * 0.35;
      }
    }
    this.underglow.material.opacity = damp(
      this.underglow.material.opacity,
      boostActive ? 0.4 : 0,
      10,
      dt
    );
    // Brake lights
    const on = state.braking;
    for (const m of this.tailMats) m.color.setHex(on ? '#ff2617' : '#b32a20');
  }

  wheelWorld(index, out = new THREE.Vector3()) {
    const w = this.wheels[index];
    w.pivot.getWorldPosition(out);
    return out;
  }

  addSuspensionKick(v) {
    this.suspVel += v;
  }
}

function makeNumberTexture(text) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 192;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 256, 192);
  ctx.fillStyle = '#22201f';
  ctx.font = '900 132px "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 104);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeBlobTexture() {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 6, 64, 64, 62);
  g.addColorStop(0, 'rgba(0,0,0,0.55)');
  g.addColorStop(0.6, 'rgba(0,0,0,0.22)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// ---------------------------------------------------------------------------
// Arcade driving model. One spec for every car: skill, line and boost decide.
// ---------------------------------------------------------------------------
export class Car {
  constructor(track, model, events = {}) {
    this.track = track;
    this.model = model;
    this.events = events;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.vy = 0;
    this.s = 0;
    this.lat = 0;
    this.route = 'main';
    this.grounded = true;
    this.airborne = false;
    this.airTime = 0;
    this.steer = 0;
    this.boostMeter = 40;
    this.boosting = false;
    this.drifting = false;
    this.driftTime = 0;
    this.driftChain = 0;
    this.lastDrift = 0;
    this.driftScore = 0;
    this.chainMultiplier = 1;
    this.slip = 0;
    this.forwardSpeed = 0;
    this.lateralSpeed = 0;
    this.speed = 0;
    this.slope = 0;
    this.bank = 0;
    this.offRoad = false;
    this.offRoadTime = 0;
    this.wallContact = 0;
    this.wallRideTime = 0;
    this.wallRideCooldown = 0;
    this.needsRecovery = false;
    this.recoveryReason = '';
    this.resetTimer = 0;
    this.impactTimer = 0;
    this.crashTimer = 0;
    this.lastSurfaceY = 0;
    this.nearMissCooldown = new Map();
    this.nearMissCount = 0;
    this.boostTime = 0;
    this.airBoostAwarded = false;
    this.landImpact = 0;
    this.assist = 0.4;
    this.controlLock = 0;
    this.input = {
      steer: 0,
      throttle: 0,
      brake: 0,
      handbrake: false,
      boost: false,
    };
    this.prevInput = { handbrake: false, boost: false };
    this.onGroundSurface = true;
  }

  reset(s, lat = 0) {
    const p = this.track.samplePos(s, lat);
    const smp = this.track.getSample(s).a;
    this.pos.copy(p);
    this.pos.y += 0.05;
    this.yaw = Math.atan2(smp.tan.x, smp.tan.z);
    this.vel.set(0, 0, 0);
    this.vy = 0;
    this.s = s;
    this.lat = lat;
    this.route = 'main';
    this.grounded = true;
    this.airborne = false;
    this.airTime = 0;
    this.boostMeter = 45;
    this.boosting = false;
    this.drifting = false;
    this.driftChain = 0;
    this.driftScore = 0;
    this.chainMultiplier = 1;
    this.steer = 0;
    this.forwardSpeed = 0;
    this.lateralSpeed = 0;
    this.speed = 0;
    this.offRoad = false;
    this.offRoadTime = 0;
    this.wallRideTime = 0;
    this.needsRecovery = false;
    this.resetTimer = 0;
    this.airBoostAwarded = false;
    this.landImpact = 0;
  }

  addBoost(amount) {
    this.boostMeter = clamp(this.boostMeter + amount, 0, 100);
  }

  useBoost(active) {
    this.boosting = active && this.boostMeter > 1;
  }

  crash(severity = 1) {
    if (this.crashTimer > 0.4) return;
    this.crashTimer = 0.9;
    const speedLoss = 0.55 * severity;
    this.vel.multiplyScalar(1 - speedLoss);
    this.vy = Math.min(this.vy, 0);
    this.driftChain = 0;
    this.driftScore = 0;
    this.chainMultiplier = 1;
    this.drifting = false;
    this.impactTimer = 0.5;
    this.controlLock = 0.28;
    this.boosting = false;
    this.events.onCrash?.(severity, this.pos.clone());
  }

  requestRecovery(reason) {
    this.needsRecovery = true;
    this.recoveryReason = reason;
    this.drifting = false;
    this.driftChain = 0;
  }

  groundAt(s, lat) {
    const { a } = this.track.getSample(s);
    const road = this.track.surfaceAt(s, lat, this.route);
    if (road !== null) {
      const onTarmac = Math.abs(lat) <= a.width / 2 + 0.4;
      return { y: road, kind: onTarmac ? 'road' : 'shoulder' };
    }
    if (this.track.isGap(s)) return null;
    return { y: a.pos.y - 7.1, kind: 'sand' };
  }

  update(dt, input, assist = 0.4) {
    this.assist = assist;
    this.controlLock = Math.max(0, this.controlLock - dt);
    this.crashTimer = Math.max(0, this.crashTimer - dt);
    this.impactTimer = Math.max(0, this.impactTimer - dt);
    this.wallRideCooldown = Math.max(0, this.wallRideCooldown - dt);

    const steerIn = this.controlLock > 0 ? 0 : input.steer;
    const throttle = this.controlLock > 0 ? 0 : input.throttle;
    const brake = this.controlLock > 0 ? 0 : input.brake;

    // Track projection, searched locally around the previous progress.
    let near = this.track.nearest(this.pos.x, this.pos.z, this.s);
    this.s = near.s;
    this.lat = near.lat;
    this.route = near.route || 'main';
    const smp = near.sample;
    this.bank = smp.bank;
    const right = smp.right;
    let forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));

    let ground = this.groundAt(this.s, this.lat);
    this.speed = Math.hypot(this.vel.x, this.vel.z);

    let takeoffRamp = null;
    let takeoffSpeed = 0;
    if (this.grounded) {
      if (!ground) {
        this.grounded = false;
        this.airborne = true;
        this.airTime = 0;
      } else {
        this.pos.y = ground.y;
        this.vy = 0;
        if (this.route === 'main') {
          const ramp = this.track.rampAt(this.s, this.lat);
          if (ramp && this.speed > 18 && ramp.height >= 2.4) {
            const ds = ((this.s - ramp.s + this.track.length * 1.5) % this.track.length) - this.track.length * 0.5;
            const progress = clamp((ds + ramp.length * 0.5) / ramp.length, 0, 1);
            if (progress > (ramp.gapKicker ? 0.52 : 0.72)) {
              takeoffRamp = ramp;
              takeoffSpeed = this.speed;
              this.grounded = false;
              this.airborne = true;
              this.airTime = 0;
              this.vy = clamp(takeoffSpeed * (ramp.height / ramp.length) * 0.72 + ramp.height * 1.4, 7, 16);
              this.pos.y = ground.y + 0.12;
              this.events.onTakeoff?.(ramp, this.pos.clone(), takeoffSpeed);
            }
          }
        }
      }
    }
    if (!this.grounded) {
      this.vy -= GRAVITY * dt;
      this.pos.y += this.vy * dt;
      this.airTime += dt;
      if (ground && this.pos.y <= ground.y + 0.18) {
        this.land(ground.y);
      }
    }
    const onGround = this.grounded;

    if (onGround) {
      const speedFactor = clamp(this.speed / 7, 0, 1);
      const isHandbrake = input.handbrake && this.speed > 9;
      if (isHandbrake && !this.drifting) {
        this.drifting = true;
        this.driftTime = 0;
        this.events.onDriftStart?.(this.pos.clone());
      }
      if (this.drifting && (Math.abs(this.slip) > 0.16 || isHandbrake) && this.speed > 7) {
        this.driftTime += dt;
      }
      const steerAuthority =
        1.95 / (1 + this.speed * 0.012) * (0.42 + speedFactor * 0.58);
      const dirSign = this.forwardSpeed < -1.5 ? -1 : 1;
      let yawRate = steerIn * steerAuthority * dirSign;
      if (this.drifting) yawRate *= 1.55;
      if (this.assist > 0) {
        const oversteer = clamp((Math.abs(this.slip) - 0.5) * 2.0, 0, 1);
        yawRate -= sign(this.slip) * oversteer * 1.0 * this.assist;
        if (Math.abs(steerIn) < 0.05 && this.speed > 8) {
          yawRate += -this.slip * 0.7 * this.assist;
        }
      }
      this.yaw = wrapAngle(this.yaw + yawRate * dt);
      this.steer = damp(this.steer, steerIn, 13, dt);
    } else {
      this.yaw = wrapAngle(this.yaw + steerIn * 0.85 * dt);
      this.steer = damp(this.steer, steerIn, 7, dt);
    }

    forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const carRight = new THREE.Vector3(forward.z, 0, -forward.x);
    let fwdSpeed = this.vel.x * forward.x + this.vel.z * forward.z;
    let latSpeed = this.vel.x * carRight.x + this.vel.z * carRight.z;
    if (takeoffRamp) {
      // A kicker changes the vertical component only; never scrub the launch
      // speed because of grounded grip, slope correction, or ramp friction.
      fwdSpeed = Math.max(fwdSpeed, takeoffSpeed);
    }

    if (onGround) {
      let grip = this.drifting ? 2.15 : 10.5;
      if (this.drifting && this.assist > 0.5) grip *= 1.2;
      if (input.handbrake) grip *= 0.72;
      if (this.impactTimer > 0) grip *= 0.8;
      latSpeed *= Math.exp(-grip * dt);
      this.lateralSpeed = latSpeed;
    }

    if (onGround) {
      if (throttle > 0.02 && fwdSpeed > -2) {
        const curve = 1 - Math.pow(clamp(Math.abs(fwdSpeed) / 108, 0, 1), 1.75);
        let accel = 30 * curve * throttle;
        if (this.boosting) accel += 19 * throttle;
        fwdSpeed += accel * dt;
      }
      if (brake > 0.02) {
        if (fwdSpeed > 1.5) fwdSpeed -= 44 * brake * dt;
        else if (fwdSpeed > -16) fwdSpeed -= 13 * brake * dt;
      }
      if (input.handbrake) fwdSpeed *= 1 - 0.42 * dt;
      if (this.offRoad) fwdSpeed *= 1 - 1.6 * dt;
      if (this.impactTimer > 0) fwdSpeed *= 1 - 1.4 * dt;
    }

    const wantBoost = input.boost && this.boostMeter > 0.5;
    if (wantBoost) {
      this.boosting = true;
      this.boostMeter = Math.max(0, this.boostMeter - 25 * dt);
      this.boostTime += dt;
      fwdSpeed += 17 * dt;
      if (this.boostMeter <= 0) this.boosting = false;
      if (!onGround) this.vy = Math.max(this.vy, -13);
    } else {
      this.boosting = false;
      this.boostTime = 0;
    }

    const drag = 0.004 * this.speed * this.speed + 0.45;
    fwdSpeed -= Math.sign(fwdSpeed) * Math.min(Math.abs(fwdSpeed), drag * dt);
    if (!onGround) latSpeed *= Math.exp(-0.25 * dt);
    if (Math.abs(fwdSpeed) < 0.03) fwdSpeed = 0;

    this.vel.x = forward.x * fwdSpeed + carRight.x * latSpeed;
    this.vel.z = forward.z * fwdSpeed + carRight.z * latSpeed;
    this.forwardSpeed = fwdSpeed;
    this.lateralSpeed = latSpeed;
    this.speed = Math.hypot(this.vel.x, this.vel.z);
    this.slip =
      this.speed > 2 ? Math.atan2(latSpeed, Math.abs(fwdSpeed) + 0.001) : 0;

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;

    near = this.track.nearest(this.pos.x, this.pos.z, this.s);
    this.s = near.s;
    this.lat = near.lat;
    const smp2 = near.sample;
    const half2 = smp2.width / 2;

    this.wallContact = 0;
    if (onGround) {
      const limit = half2 + 1.0;
      if (Math.abs(this.lat) > limit) {
        const side = Math.sign(this.lat);
        const push = Math.abs(this.lat) - limit;
        this.pos.x -= smp2.right.x * side * push;
        this.pos.z -= smp2.right.z * side * push;
        this.lat = side * limit;
        const into = this.vel.x * smp2.right.x * side + this.vel.z * smp2.right.z * side;
        if (into > 0) {
          this.vel.x -= smp2.right.x * side * into * 1.3;
          this.vel.z -= smp2.right.z * side * into * 1.3;
        }
        this.wallContact = 1;
        const hitAngle = Math.abs(
          Math.atan2(into, Math.abs(this.forwardSpeed) + 0.01)
        );
        const scrapeSpeed = this.speed;
        if (hitAngle > 0.5 && scrapeSpeed > 13) {
          this.crash(clamp(hitAngle * 1.3, 0.4, 1));
        } else {
          this.impactTimer = Math.max(this.impactTimer, 0.12);
          if (scrapeSpeed > 22) {
            this.wallRideTime += dt;
            if (this.wallRideTime > 0.15) {
              this.addBoost(14 * dt);
              this.events.onWallRide?.(this.pos.clone(), side, scrapeSpeed);
              if (this.wallRideCooldown <= 0) {
                this.wallRideCooldown = 0.28;
                this.events.onWallSpark?.(this.pos.clone(), side, smp2);
              }
            }
          } else {
            this.wallRideTime = 0;
          }
          const wallYaw = Math.atan2(smp2.tan.x, smp2.tan.z);
          const diff = angleDiff(this.yaw, wallYaw);
          this.yaw = wrapAngle(this.yaw - Math.sign(diff) * Math.min(Math.abs(diff), 2.2 * dt));
        }
        this.events.onWallHit?.(this.pos.clone(), this.speed);
      } else {
        this.wallRideTime = 0;
      }
    }

    const ground2 = this.groundAt(this.s, this.lat);
    if (this.grounded && ground2) {
      const ds = Math.max(0.35, Math.abs(this.forwardSpeed) * dt);
      const sBefore =
        (((this.s - ds) % this.track.length) + this.track.length) % this.track.length;
      const groundBefore = this.groundAt(sBefore, this.lat);
      let slope = 0;
      if (groundBefore && groundBefore.kind === 'road' && ground2.kind === 'road') {
        slope = (ground2.y - groundBefore.y) / ds;
      }
      slope = clamp(slope, -0.95, 1.0);
      this.slope = Math.atan(slope);
      this.vy = slope * this.forwardSpeed * 0.94;
      this.pos.y = ground2.y;
    } else if (!this.grounded) {
      this.slope = damp(this.slope, clamp(-this.vy * 0.03, -0.5, 0.5), 1.5, dt);
    }

    const onRoad = ground2 !== null && ground2.kind === 'road';
    const offroadNow = ground2 !== null && !onRoad;
    if (offroadNow && this.grounded) {
      this.offRoad = true;
      this.offRoadTime += dt;
      this.events.onOffRoad?.(this.pos.clone());
      if (this.offRoadTime > 3.4) this.requestRecovery('offroad');
    } else if (onRoad || !this.grounded) {
      this.offRoadTime = 0;
      this.offRoad = false;
    } else if (!ground2) {
      this.offRoad = false;
      this.offRoadTime = 0;
      if (this.pos.y < -35) this.requestRecovery('fall');
    }

    this.checkProps(dt);

    const driftingNow =
      this.drifting &&
      this.grounded &&
      this.speed > 12 &&
      Math.abs(this.slip) > 0.12;
    if (driftingNow) {
      this.driftChain += dt;
      this.lastDrift = Math.max(0, this.driftChain);
      const gain = (4 + Math.min(18, Math.abs(this.slip) * 26)) * dt;
      this.addBoost(gain);
      this.driftScore += Math.abs(this.slip) * this.speed * dt * 2.2;
      const mult = 1 + Math.min(3, Math.floor(this.driftChain / 1.4));
      if (mult > this.chainMultiplier) {
        this.chainMultiplier = mult;
        this.events.onChainStep?.(mult);
      }
      this.events.onDriftTick?.(this.driftChain, this.slip);
    } else if (this.drifting) {
      if (this.driftChain > 0.4) {
        this.events.onDriftEnd?.(this.driftChain, this.chainMultiplier);
      }
      this.drifting = false;
      this.driftChain = 0;
      this.chainMultiplier = 1;
    }

    if (!this.grounded && this.airTime > 0.55 && !this.airBoostAwarded) {
      this.airBoostAwarded = true;
      this.addBoost(10);
      this.events.onAirtime?.(this.airTime);
    }
    if (this.grounded) this.airBoostAwarded = false;

    if (this.grounded && this.speed < 1.2 && throttle > 0.1) {
      this.resetTimer += dt;
      if (this.resetTimer > 5) this.requestRecovery('stuck');
    } else {
      this.resetTimer = 0;
    }

    const bankAngle = Math.atan(Math.tan(this.bank) + this.lat * 0.0008);
    this.model.group.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.model.group.rotation.y = this.yaw;
    this.model.update(dt, {
      speed: this.speed,
      steer: this.steer,
      lateral: this.lateralSpeed,
      grounded: this.grounded,
      boostActive: this.boosting,
      throttle,
      braking: brake > 0.1,
      bank: this.grounded ? bankAngle : this.model.bodyRoll * 0.25,
      slope: this.grounded ? this.slope : 0,
      airHeight: this.grounded ? 0 : Math.max(0, this.pos.y - (ground2 ? ground2.y : this.pos.y - 3)),
      forwardSpeed: this.forwardSpeed,
      accel: throttle * 20 - brake * 30,
    });
  }

  land(surfaceY) {
    const impact = Math.max(0, -this.vy);
    this.pos.y = surfaceY;
    this.vy = 0;
    this.grounded = true;
    this.airborne = false;
    this.landImpact = impact;
    // A landing should compress and settle, not kick the car into a second
    // artificial bounce. Keep the impulse readable while letting the spring
    // absorb the rest of the impact over a few frames.
    this.model.addSuspensionKick(-clamp(impact * 0.12, 0.25, 3.8));
    this.events.onLand?.(impact, this.pos.clone(), this.slip, this.airTime, this.speed);
    // Landing scrub: keep momentum, lose a slice if you land sideways.
    const sideways = clamp(Math.abs(this.slip) / 1.1, 0, 1);
    const speedLoss = 0.022 + sideways * 0.16 + clamp((impact - 16) / 78, 0, 0.18);
    this.vel.multiplyScalar(1 - speedLoss);
    if (impact > 6 && this.speed > 0.5) {
      const hard = impact > 23 || Math.abs(this.slip) > 0.72;
      if (hard) {
        this.crash(clamp(impact / 38, 0.12, 0.5));
      } else {
        this.addBoost(6 + Math.min(14, impact * 0.7));
      }
    }
    if (Math.abs(this.slip) < 0.3 && impact > 3 && impact < 17) {
      this.events.onCleanLanding?.(impact, this.pos.clone());
      this.addBoost(7);
    }
    this.airTime = 0;
  }

  checkProps(dt) {
    for (const c of this.track.decorColliders) {
      const dx = this.pos.x - c.x;
      const dz = this.pos.z - c.z;
      const d2 = dx * dx + dz * dz;
      const rr = c.r + 1.05;
      if (d2 < rr * rr) {
        const d = Math.sqrt(d2) || 0.001;
        const push = rr - d;
        this.pos.x += (dx / d) * push;
        this.pos.z += (dz / d) * push;
        if (this.speed > 6) {
          this.crash(clamp(this.speed / 55, 0.25, 0.9));
          this.events.onPropHit?.(this.pos.clone());
        }
      } else if (d2 < (c.r + 5.2) ** 2 && this.speed > 26) {
        const key = c;
        const cd = this.nearMissCooldown.get(key) || 0;
        if (cd <= 0) {
          this.nearMissCooldown.set(key, 3.5);
          this.nearMissCount++;
          this.addBoost(9);
          this.events.onNearMiss?.(this.pos.clone());
        }
      }
    }
    for (const [k, v] of this.nearMissCooldown) {
      if (v > 0) this.nearMissCooldown.set(k, v - dt);
    }
  }
}
