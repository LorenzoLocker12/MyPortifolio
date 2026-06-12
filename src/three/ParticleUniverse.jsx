import { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { SHAPE_GENERATORS } from './shapes.js';

// Display names for the caption, in SHAPE_GENERATORS order.
export const SHAPE_NAMES = [
  'spiral galaxy',
  'career globe · sp → munich',
  'impact chart',
  'neural network',
  'wave field',
  'atom · cern',
  'torus',
];

const HOLD_SECONDS = 6;

const vertexShader = /* glsl */ `
  attribute float aScale;
  attribute float aRand;
  uniform float uTime;
  uniform float uSize;
  varying float vRand;
  void main() {
    vec3 p = position;
    // gentle idle drift so the cloud always feels alive
    p.x += sin(uTime * (0.25 + aRand * 0.5) + aRand * 43.0) * 0.05;
    p.y += cos(uTime * (0.22 + aRand * 0.45) + aRand * 31.0) * 0.05;
    p.z += sin(uTime * (0.28 + aRand * 0.4) + aRand * 17.0) * 0.05;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = uSize * aScale * (15.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
    vRand = aRand;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vRand;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.04, d);
    alpha *= alpha;
    vec3 col = mix(uColorA, uColorB, vRand);
    gl_FragColor = vec4(col, alpha * uOpacity);
  }
`;

function smootherstep(t) {
  return t * t * (3.0 - 2.0 * t);
}

function MorphingParticles({ count, drag, onShape }) {
  const points = useRef();
  const group = useRef();
  const { gl } = useThree();

  // Append a copy of the first shape so the cycle wraps seamlessly.
  const shapes = useMemo(() => {
    const list = SHAPE_GENERATORS.map((fn) => fn(count));
    list.push(list[0]);
    return list;
  }, [count]);

  const positions = useMemo(() => shapes[0].slice(), [shapes]);
  const aScale = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = 0.45 + Math.pow(Math.random(), 2.2) * 1.5;
    return arr;
  }, [count]);
  const aRand = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = Math.random();
    return arr;
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 3.0 },
      uColorA: { value: new THREE.Color('#185fa5') },
      uColorB: { value: new THREE.Color('#44443f') },
      uOpacity: { value: 0.85 },
    }),
    []
  );

  useEffect(() => {
    uniforms.uSize.value = 3.0 * gl.getPixelRatio();
  }, [gl, uniforms]);

  // Morph clock: hold each shape, then ease to the next.
  const morph = useRef({ cont: 0, target: 0, hold: HOLD_SECONDS });

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 30);
    uniforms.uTime.value += dt;

    const m = morph.current;
    m.hold -= dt;
    if (m.hold <= 0 && m.target === m.cont) {
      m.target = m.cont + 1;
    }
    if (m.target > m.cont) {
      m.cont = Math.min(m.cont + dt / 2.2, m.target);
      if (m.cont === m.target) {
        if (m.target >= shapes.length - 1) {
          // landed on the duplicated first shape — snap back to the real start
          m.cont = 0;
          m.target = 0;
        }
        m.hold = HOLD_SECONDS;
        if (onShape) onShape(SHAPE_NAMES[m.target % SHAPE_NAMES.length]);
      }
    }

    const cont = Math.min(Math.max(m.cont, 0), shapes.length - 1);
    const i = Math.min(Math.floor(cont), shapes.length - 2);
    const f = smootherstep(cont - i);
    const A = shapes[i];
    const B = shapes[i + 1];

    // damped pursuit of the blended target shape
    const pos = points.current.geometry.attributes.position.array;
    const damp = 1 - Math.exp(-dt * 3.4);
    for (let j = 0; j < pos.length; j++) {
      const target = A[j] + (B[j] - A[j]) * f;
      pos[j] += (target - pos[j]) * damp;
    }
    points.current.geometry.attributes.position.needsUpdate = true;

    // rotation: user drag has authority, idle spin takes over when released
    const d = drag.current;
    if (d.active) {
      d.velY = d.dx * 0.0045;
      d.velX = d.dy * 0.0045;
      d.dx = 0;
      d.dy = 0;
    } else {
      d.velY += (dt * 0.1 - d.velY) * (1 - Math.exp(-dt * 1.2));
      d.velX *= Math.exp(-dt * 2.2);
    }
    group.current.rotation.y += d.velY;
    group.current.rotation.x = Math.min(
      1.1,
      Math.max(-0.5, group.current.rotation.x + d.velX)
    );
  });

  return (
    <group ref={group} rotation={[0.38, 0, 0]}>
      <points ref={points} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
          <bufferAttribute attach="attributes-aScale" array={aScale} count={count} itemSize={1} />
          <bufferAttribute attach="attributes-aRand" array={aRand} count={count} itemSize={1} />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </points>
    </group>
  );
}

export default function ParticlePanel({ onShape }) {
  const count = useMemo(() => {
    const small = typeof window !== 'undefined' && window.innerWidth < 768;
    const weakCpu = typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4;
    return small || weakCpu ? 4500 : 8000;
  }, []);

  const drag = useRef({ active: false, lastX: 0, lastY: 0, dx: 0, dy: 0, velX: 0, velY: 0 });

  const onPointerDown = (e) => {
    const d = drag.current;
    d.active = true;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    d.dx = 0;
    d.dy = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.active) return;
    d.dx += e.clientX - d.lastX;
    d.dy += e.clientY - d.lastY;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <div
      style={{ position: 'absolute', inset: 0 }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 0, 13.5] }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <MorphingParticles count={count} drag={drag} onShape={onShape} />
      </Canvas>
    </div>
  );
}
