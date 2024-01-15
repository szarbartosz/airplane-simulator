function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

export let controls = {};

window.addEventListener("keydown", (e) => {
  controls[e.key.toLowerCase()] = true;
});
window.addEventListener("keyup", (e) => {
  controls[e.key.toLowerCase()] = false;
});

let maxVelocity = 0.012;
let yawVelocity = 0;
let pitchVelocity = 0;
let rollVelocity = 0;
let planeSpeed = 0.006;
export let turbo = 0;

export function updatePlaneAxis(x, y, z, planePosition, camera) {
  yawVelocity *= 0.95;
  pitchVelocity *= 0.95;
  rollVelocity *= 0.95;

  if (Math.abs(yawVelocity) > maxVelocity)
    yawVelocity = Math.sign(yawVelocity) * maxVelocity;

  if (Math.abs(pitchVelocity) > maxVelocity)
    pitchVelocity = Math.sign(pitchVelocity) * maxVelocity;

  if (Math.abs(rollVelocity) > maxVelocity)
    rollVelocity = Math.sign(rollVelocity) * maxVelocity;

  if (controls["q"]) {
    yawVelocity += 0.0025;
  }

  if (controls["e"]) {
    yawVelocity -= 0.0025;
  }

  if (controls["a"]) {
    rollVelocity += 0.0025;
  }

  if (controls["d"]) {
    rollVelocity -= 0.0025;
  }

  if (controls["w"]) {
    pitchVelocity -= 0.0025;
  }

  if (controls["s"]) {
    pitchVelocity += 0.0025;
  }

  if (controls["r"]) {
    rollVelocity = 0;
    pitchVelocity = 0;
    turbo = 0;
    x.set(1, 0, 0);
    y.set(0, 1, 0);
    z.set(0, 0, 1);
    planePosition.set(0, 3, 7);
  }

  x.applyAxisAngle(y, yawVelocity);
  z.applyAxisAngle(y, yawVelocity);

  y.applyAxisAngle(x, pitchVelocity);
  z.applyAxisAngle(x, pitchVelocity);

  x.applyAxisAngle(z, rollVelocity);
  y.applyAxisAngle(z, rollVelocity);

  x.normalize();
  y.normalize();
  z.normalize();

  // plane position & velocity
  if (controls.shift) {
    turbo += 0.025;
  } else {
    turbo *= 0.95;
  }
  turbo = Math.min(Math.max(turbo, 0), 1);

  let turboSpeed = easeOutQuad(turbo) * 0.02;

  camera.fov = 45 + turboSpeed * 900;
  camera.updateProjectionMatrix();

  planePosition.add(z.clone().multiplyScalar(-planeSpeed - turboSpeed));
}
