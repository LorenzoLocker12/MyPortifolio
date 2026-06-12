// Procedural point-cloud targets for the particle universe.
// Every generator returns a Float32Array of n*3 positions in world units.
// Section order must match the <section> order in App.jsx:
// 0 hero: galaxy · 1 about: globe+arc · 2 experience: bar chart
// 3 projects: neural net · 4 skills: ripple wavefield · 5 education: atom · 6 contact: torus

const TAU = Math.PI * 2;

function gauss() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v);
}

export function galaxy(n) {
  const a = new Float32Array(n * 3);
  const arms = 3;
  const spread = 7.4;
  for (let i = 0; i < n; i++) {
    let x;
    let y;
    let z;
    if (i % 8 === 0) {
      // central bulge
      x = gauss() * 0.9;
      y = gauss() * 0.55;
      z = gauss() * 0.9;
    } else {
      const r = Math.pow(Math.random(), 0.62) * spread;
      const arm = (i % arms) * (TAU / arms);
      const ang = arm + r * 0.52 + gauss() * 0.13 * (1.4 - r / spread);
      x = Math.cos(ang) * r + gauss() * 0.16;
      z = Math.sin(ang) * r + gauss() * 0.16;
      y = gauss() * 0.34 * (1.25 - r / spread);
    }
    a[i * 3] = x;
    a[i * 3 + 1] = y;
    a[i * 3 + 2] = z;
  }
  return a;
}

function latLonToVec(lat, lon) {
  const la = (lat * Math.PI) / 180;
  const lo = (lon * Math.PI) / 180;
  return [Math.cos(la) * Math.cos(lo), Math.sin(la), -Math.cos(la) * Math.sin(lo)];
}

export function globe(n) {
  const a = new Float32Array(n * 3);
  const R = 4.1;
  const nArc = Math.floor(n * 0.1);
  const nSphere = n - nArc;
  const GA = Math.PI * (3 - Math.sqrt(5)); // golden angle

  for (let i = 0; i < nSphere; i++) {
    const y = 1 - (i / Math.max(nSphere - 1, 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const th = GA * i;
    a[i * 3] = (Math.cos(th) * r + gauss() * 0.012) * R;
    a[i * 3 + 1] = (y + gauss() * 0.012) * R;
    a[i * 3 + 2] = (Math.sin(th) * r + gauss() * 0.012) * R;
  }

  // glowing arc: São Paulo -> Munich
  const sp = latLonToVec(-23.55, -46.63);
  const mu = latLonToVec(48.14, 11.58);
  const dot = sp[0] * mu[0] + sp[1] * mu[1] + sp[2] * mu[2];
  const omega = Math.acos(Math.min(1, Math.max(-1, dot)));
  for (let k = 0; k < nArc; k++) {
    const t = k / Math.max(nArc - 1, 1);
    const s0 = Math.sin((1 - t) * omega) / Math.sin(omega);
    const s1 = Math.sin(t * omega) / Math.sin(omega);
    const lift = 1 + Math.sin(t * Math.PI) * 0.28;
    const j = (nSphere + k) * 3;
    a[j] = (sp[0] * s0 + mu[0] * s1) * R * lift + gauss() * 0.03;
    a[j + 1] = (sp[1] * s0 + mu[1] * s1) * R * lift + gauss() * 0.03;
    a[j + 2] = (sp[2] * s0 + mu[2] * s1) * R * lift + gauss() * 0.03;
  }
  return a;
}

export function bars(n) {
  const a = new Float32Array(n * 3);
  const heights = [1.0, 1.6, 2.3, 3.1, 4.1, 5.2];
  const totalH = heights.reduce((s, h) => s + h, 0);
  const baseY = -2.6;
  const w = 1.05;
  const gapX = 1.85;
  const x0 = (-(heights.length - 1) / 2) * gapX;
  const nBase = Math.floor(n * 0.16);
  const nBars = n - nBase;

  let i = 0;
  for (let b = 0; b < heights.length; b++) {
    const count = b === heights.length - 1 ? nBars - i : Math.floor((heights[b] / totalH) * nBars);
    for (let k = 0; k < count; k++) {
      const j = i * 3;
      a[j] = x0 + b * gapX + (Math.random() - 0.5) * w;
      a[j + 1] = baseY + Math.random() * heights[b];
      a[j + 2] = (Math.random() - 0.5) * w;
      i++;
    }
  }
  // sparse base plane, like a chart grid
  for (let k = 0; k < nBase; k++) {
    const j = (nBars + k) * 3;
    a[j] = (Math.random() - 0.5) * 12.5;
    a[j + 1] = baseY + gauss() * 0.03;
    a[j + 2] = (Math.random() - 0.5) * 5.5;
  }
  return a;
}

export function neural(n) {
  const a = new Float32Array(n * 3);
  const layersX = [-5.4, -1.8, 1.8, 5.4];
  const counts = [5, 7, 7, 4];
  const nodes = [];
  for (let l = 0; l < layersX.length; l++) {
    const layer = [];
    for (let k = 0; k < counts[l]; k++) {
      layer.push([
        layersX[l],
        (k - (counts[l] - 1) / 2) * 1.55,
        (Math.random() - 0.5) * 1.4,
      ]);
    }
    nodes.push(layer);
  }
  const nNode = Math.floor(n * 0.52);
  for (let i = 0; i < nNode; i++) {
    const l = Math.floor(Math.random() * nodes.length);
    const node = nodes[l][Math.floor(Math.random() * nodes[l].length)];
    const j = i * 3;
    a[j] = node[0] + gauss() * 0.27;
    a[j + 1] = node[1] + gauss() * 0.27;
    a[j + 2] = node[2] + gauss() * 0.27;
  }
  // particles strung along synapses between adjacent layers
  for (let i = nNode; i < n; i++) {
    const l = Math.floor(Math.random() * (nodes.length - 1));
    const from = nodes[l][Math.floor(Math.random() * nodes[l].length)];
    const to = nodes[l + 1][Math.floor(Math.random() * nodes[l + 1].length)];
    const t = Math.random();
    const j = i * 3;
    a[j] = from[0] + (to[0] - from[0]) * t + gauss() * 0.035;
    a[j + 1] = from[1] + (to[1] - from[1]) * t + gauss() * 0.035;
    a[j + 2] = from[2] + (to[2] - from[2]) * t + gauss() * 0.035;
  }
  return a;
}

export function wavefield(n) {
  const a = new Float32Array(n * 3);
  const R = 6.6;
  for (let i = 0; i < n; i++) {
    const r = Math.sqrt(Math.random()) * R;
    const th = Math.random() * TAU;
    const x = Math.cos(th) * r;
    const z = Math.sin(th) * r;
    const y = 2.5 * Math.cos(r * 1.65) * Math.exp(-r * 0.3) + gauss() * 0.05 - 0.6;
    const j = i * 3;
    a[j] = x;
    a[j + 1] = y;
    a[j + 2] = z;
  }
  return a;
}

export function atom(n) {
  const a = new Float32Array(n * 3);
  const nCore = Math.floor(n * 0.16);
  const rings = 3;
  const R = 4.0;
  const tilt = 1.12;

  for (let i = 0; i < nCore; i++) {
    const j = i * 3;
    a[j] = gauss() * 0.5;
    a[j + 1] = gauss() * 0.5;
    a[j + 2] = gauss() * 0.5;
  }
  for (let i = nCore; i < n; i++) {
    const ring = i % rings;
    const phi = (ring * TAU) / rings; // rotation of the ring plane around Y
    const th = Math.random() * TAU;
    // circle in XZ, tilted around Z, then rotated around Y
    let x = Math.cos(th) * R + gauss() * 0.06;
    let y = gauss() * 0.06;
    let z = Math.sin(th) * R + gauss() * 0.06;
    // tilt around Z
    const x1 = x * Math.cos(tilt) - y * Math.sin(tilt);
    const y1 = x * Math.sin(tilt) + y * Math.cos(tilt);
    // spin around Y
    const x2 = x1 * Math.cos(phi) + z * Math.sin(phi);
    const z2 = -x1 * Math.sin(phi) + z * Math.cos(phi);
    const j = i * 3;
    a[j] = x2;
    a[j + 1] = y1;
    a[j + 2] = z2;
  }
  return a;
}

export function torus(n) {
  const a = new Float32Array(n * 3);
  const R = 3.7;
  const r = 1.05;
  const tiltX = 0.55;
  for (let i = 0; i < n; i++) {
    const th = Math.random() * TAU;
    const ph = Math.random() * TAU;
    const x = (R + r * Math.cos(ph)) * Math.cos(th) + gauss() * 0.04;
    let y = r * Math.sin(ph) + gauss() * 0.04;
    let z = (R + r * Math.cos(ph)) * Math.sin(th) + gauss() * 0.04;
    const y1 = y * Math.cos(tiltX) - z * Math.sin(tiltX);
    const z1 = y * Math.sin(tiltX) + z * Math.cos(tiltX);
    const j = i * 3;
    a[j] = x;
    a[j + 1] = y1;
    a[j + 2] = z1;
  }
  return a;
}

export const SHAPE_GENERATORS = [galaxy, globe, bars, neural, wavefield, atom, torus];
