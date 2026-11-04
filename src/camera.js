import * as THREE from 'three';
import { clamp, damp, angleDiff, wrapAngle } from './util.js';

const MODES = ['chase', 'far', 'hood'];

// Shared world convention with Car.update(): +Z at yaw 0 is travel forward.
// The car mesh applies its own local 180-degree art correction.
function forwardFromYaw(yaw) {
  return new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
}

export class CameraRig {
  constructor(camera, track, env) {
    this.camera = camera;
    this.track = track;
    this.env = env;
    this.modeIndex = 0;
    this.mode = MODES[0];
    this.yaw = 0;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.basePos = new THREE.Vector3();
    this.baseLook = new THREE.Vector3();
    this.trauma = 0;
    this.time = 0;
    this.fov = camera.fov;
    this.roll = 0;
    this.introAngle = 0;
    this.snapped = false;
  }

  cycle() {
    this.modeIndex = (this.modeIndex + 1) % MODES.length;
    this.mode = MODES[this.modeIndex];
    this.snapped = false;
    return this.mode;
  }

  setMode(index) {
    this.modeIndex = clamp(index, 0, MODES.length - 1);
    this.mode = MODES[this.modeIndex];
  }

  addShake(amount) {
    this.trauma = clamp(this.trauma + amount, 0, 1.2);
  }

  reset() {
    this.snapped = false;
    this.trauma = 0;
    this.introAngle = 0;
  }

  snapTo(car, distance = 8) {
    const forward = forwardFromYaw(car.yaw);
    this.yaw = car.yaw;
    this.pos.copy(car.pos).addScaledVector(forward, -distance);
    this.pos.y = car.pos.y + 3.1;
    this.basePos.copy(this.pos);
    this.baseLook.copy(car.pos).add(new THREE.Vector3(0, 1.4, 0));
    this.snapped = true;
  }

  update(dt, car, opts = {}) {
    this.time += dt;
    const { intro = false, finished = false, paused = false } = opts;
    const speedN = clamp(car.speed / 82, 0, 1.15);
    const cam = this.camera;

    this.trauma = Math.max(0, this.trauma - dt * 1.5);

    if (intro) {
      this.introAngle += dt * 0.06;
      const center = car.pos;
      const radius = 10.3;
      const forward = forwardFromYaw(car.yaw);
      const right = new THREE.Vector3(forward.z, 0, -forward.x);
      const orbit = Math.sin(this.introAngle) * 0.42;
      const desired = new THREE.Vector3()
        .copy(center)
        .addScaledVector(forward, -Math.cos(orbit) * radius)
        .addScaledVector(right, Math.sin(orbit) * radius);
      desired.y = center.y + 3.5 + Math.sin(this.introAngle * 0.7) * 0.25;
      const groundY = this.env ? this.env.terrainHeightAt(desired.x, desired.z) : -100;
      desired.y = Math.max(desired.y, groundY + 2.2);
      if (!this.snapped) {
        this.pos.copy(desired);
        this.snapped = true;
      } else {
        this.pos.x = damp(this.pos.x, desired.x, 6, dt);
        this.pos.z = damp(this.pos.z, desired.z, 6, dt);
        this.pos.y = damp(this.pos.y, desired.y, 5, dt);
      }
      this.look.lerp(
        new THREE.Vector3(
          center.x + forward.x * 11.0,
          center.y + 1.55,
          center.z + forward.z * 11.0
        ),
        1 - Math.exp(-5 * dt)
      );
      cam.position.copy(this.pos);
      cam.up.set(0, 1, 0);
      cam.lookAt(this.look);
      this.setFov(52, dt);
      return;
    }

    if (finished) {
      this.introAngle += dt * 0.28;
      const center = car.pos;
      const radius = 10;
      const a = car.yaw + Math.PI * 0.6 + this.introAngle * 0.5;
      const desired = new THREE.Vector3(
        center.x + Math.cos(a) * radius,
        center.y + 3.4,
        center.z + Math.sin(a) * radius
      );
      const groundY = this.env ? this.env.terrainHeightAt(desired.x, desired.z) : -100;
      desired.y = Math.max(desired.y, groundY + 2.0);
      this.pos.lerp(desired, 1 - Math.exp(-3 * dt));
      this.look.lerp(
        new THREE.Vector3(center.x, center.y + 1.1, center.z),
        1 - Math.exp(-5 * dt)
      );
      cam.position.copy(this.pos);
      cam.up.set(0, 1, 0);
      cam.lookAt(this.look);
      this.setFov(54, dt);
      return;
    }

    if (this.mode === 'hood') {
      const forward = forwardFromYaw(car.yaw);
      const up = new THREE.Vector3(0, 1, 0);
      const target = new THREE.Vector3()
        .copy(car.pos)
        .addScaledVector(forward, 0.45)
        .addScaledVector(up, 1.35);
      this.pos.lerp(target, 1 - Math.exp(-24 * dt));
      this.look
        .copy(this.pos)
        .addScaledVector(forward, 24)
        .addScaledVector(up, 1.2 + car.slope * 6);
      this.applyShake(dt, 0.06 * (1 + speedN));
      cam.position.copy(this.pos);
      cam.up.set(0, 1, 0);
      cam.lookAt(this.look);
      this.roll = -car.lateralSpeed * 0.0022;
      cam.rotateZ(this.roll);
      this.setFov(68 + speedN * 12 + (car.boosting ? 4 : 0), dt);
      return;
    }

    const far = this.mode === 'far';
    const distance = (far ? 12.5 : 7.4) + speedN * (far ? 3.0 : 2.0);
    const height = (far ? 5.4 : 3.0) + speedN * 0.5;

    let travelYaw = car.yaw;
    if (car.speed > 9) {
      travelYaw = Math.atan2(car.vel.x, car.vel.z);
      if (Math.abs(angleDiff(travelYaw, car.yaw)) > Math.PI * 0.6) travelYaw = car.yaw;
    }
    const blend = far ? 0.55 : 0.35;
    const targetYaw = wrapAngle(car.yaw + angleDiff(travelYaw, car.yaw) * blend);
    const followRate = far ? 2.8 : car.grounded ? 5.0 : 3.0;
    if (!this.snapped) {
      this.yaw = targetYaw;
    } else {
      this.yaw = wrapAngle(this.yaw + angleDiff(targetYaw, this.yaw) * (1 - Math.exp(-followRate * dt)));
    }

    const forward = forwardFromYaw(this.yaw);
    const right = new THREE.Vector3(forward.z, 0, -forward.x);
    const desired = new THREE.Vector3()
      .copy(car.pos)
      .addScaledVector(forward, -distance)
      .addScaledVector(right, clamp(car.lateralSpeed * 0.045, -1.2, 1.2));
    desired.y = car.pos.y + height + (car.grounded ? 0 : clamp(car.airTime * 0.4, 0, 1.4));

    // Keep the chase camera inside the canyon corridor so it never clips
    // through the rock walls on tight corners.
    if (this.track) {
      const near = this.track.nearest(desired.x, desired.z, car.s);
      const maxLat = Math.max(3.5, near.sample.width / 2 - 1.15);
      if (Math.abs(near.lat) > maxLat) {
        const push = (Math.abs(near.lat) - maxLat) * Math.sign(near.lat);
        desired.x -= near.sample.right.x * push;
        desired.z -= near.sample.right.z * push;
      }
    }
    const groundY = this.env ? this.env.terrainHeightAt(desired.x, desired.z) : -100;
    if (desired.y < groundY + 1.6) desired.y = groundY + 1.6;

    if (!this.snapped) {
      this.pos.copy(desired);
      this.look.copy(car.pos);
      this.snapped = true;
    } else {
      const posRate = far ? 4.5 : 11;
      this.pos.x = damp(this.pos.x, desired.x, posRate, dt);
      this.pos.z = damp(this.pos.z, desired.z, posRate, dt);
      this.pos.y = damp(this.pos.y, desired.y, car.grounded ? 6.5 : 4.0, dt);
      this.look.x = damp(this.look.x, car.pos.x, 14, dt);
      this.look.y = damp(this.look.y, car.pos.y + 1.35, car.grounded ? 8 : 5, dt);
      this.look.z = damp(this.look.z, car.pos.z, 14, dt);
    }

    const lookAhead = new THREE.Vector3()
      .copy(car.pos)
      .addScaledVector(forward, 8 + speedN * 8)
      .addScaledVector(new THREE.Vector3(0, 1, 0), 1.2);
    this.look.lerp(lookAhead, 1 - Math.exp(-3.5 * dt));

    this.applyShake(dt, 0.05 * (1 + speedN));
    cam.position.copy(this.pos);
    cam.position.add(this.shakeOffset);
    cam.up.set(0, 1, 0);
    cam.lookAt(this.look);

    const targetRoll =
      -car.bank * 0.55 - clamp(car.lateralSpeed * 0.006, -0.10, 0.10);
    this.roll = damp(this.roll, car.grounded ? targetRoll : targetRoll * 0.4, 5, dt);
    cam.rotateZ(this.roll);

    const baseFov = far ? 60 : 62;
    this.setFov(baseFov + speedN * 11 + (car.boosting ? 5 : 0), dt, paused);
  }

  applyShake(dt, scale) {
    const t = this.trauma * this.trauma;
    if (!this.shakeOffset) this.shakeOffset = new THREE.Vector3();
    if (t < 0.0005) {
      this.shakeOffset.multiplyScalar(1 - Math.min(1, dt * 10));
      return;
    }
    const time = this.time * 39;
    const amp = t * scale * 3.2;
    this.shakeOffset.set(
      Math.sin(time * 1.7) * amp,
      Math.sin(time * 2.3 + 1.7) * amp * 0.7,
      Math.sin(time * 2.9 + 3.1) * amp * 0.5
    );
  }

  setFov(target, dt, paused = false) {
    const k = paused ? 0 : 1 - Math.exp(-4 * dt);
    this.fov = damp(this.fov, target, 4, dt);
    if (Math.abs(this.camera.fov - this.fov) > 0.02) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }
}
