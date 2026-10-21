import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Detect WebGL support
function detectWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch {
    return false;
  }
}

/* ── Emerald Glass Sphere ── */
function EmeraldSphere() {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Slow idle rotation
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.rotation.x += delta * 0.06;
    // Subtle mouse tracking
    meshRef.current.rotation.y += (mouse.x * 0.15 - meshRef.current.rotation.y) * 0.02;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.3}
      floatIntensity={0.6}
    >
      <mesh ref={meshRef} castShadow>
        <icosahedronGeometry args={[1.4, 4]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.12}
          distortionScale={0.4}
          temporalDistortion={0.08}
          iridescence={0.6}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[0, 1400]}
          color="#22C55E"
          attenuationColor="#86EFAC"
          attenuationDistance={1.5}
          transmission={0.97}
          roughness={0.02}
          metalness={0.0}
        />
      </mesh>
    </Float>
  );
}

/* ── Orbiting crystal shards ── */
function OrbitingShard({ radius, speed, phase, scale, color }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed + phase;
    meshRef.current.position.x = Math.cos(t) * radius;
    meshRef.current.position.y = Math.sin(t * 0.7) * radius * 0.4;
    meshRef.current.position.z = Math.sin(t) * radius;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.015;
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <octahedronGeometry args={[0.25, 0]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.75}
        roughness={0.1}
        metalness={0.2}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

/* ── Floating particles ── */
function Particles({ count = 60 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  const pointsRef = useRef();
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#86EFAC"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Ring geometry ── */
function EmeraldRing() {
  const ringRef = useRef();
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    ringRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.1, 0.025, 12, 80]} />
      <meshStandardMaterial
        color="#22C55E"
        transparent
        opacity={0.35}
        emissive="#16A34A"
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={0.6}
      />
    </mesh>
  );
}

function EmeraldRing2() {
  const ringRef = useRef();
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = -state.clock.elapsedTime * 0.10;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.12;
  });
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
      <torusGeometry args={[2.6, 0.018, 12, 80]} />
      <meshStandardMaterial
        color="#86EFAC"
        transparent
        opacity={0.20}
        emissive="#86EFAC"
        emissiveIntensity={0.15}
        roughness={0.2}
        metalness={0.4}
      />
    </mesh>
  );
}

/* ── Scene ── */
function Scene({ isMobile }) {
  const shardCount = isMobile ? 2 : 4;
  const shardConfigs = [
    { radius: 2.3, speed: 0.4, phase: 0,              scale: 0.6, color: '#22C55E' },
    { radius: 2.5, speed: 0.3, phase: Math.PI,        scale: 0.45, color: '#86EFAC' },
    { radius: 2.1, speed: 0.5, phase: Math.PI / 2,    scale: 0.35, color: '#16A34A' },
    { radius: 2.7, speed: 0.35, phase: Math.PI * 1.5, scale: 0.4,  color: '#DCFCE7' },
  ].slice(0, shardCount);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} color="#F0FDF4" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#FFFFFF"
        castShadow
      />
      <pointLight position={[-4, -2, -4]} intensity={0.8} color="#22C55E" />
      <pointLight position={[4, 3, 2]}   intensity={0.6} color="#86EFAC" />
      <pointLight position={[0, -3, 0]}  intensity={0.4} color="#15803D" />

      {/* Main sphere */}
      <EmeraldSphere />

      {/* Orbiting shards */}
      {shardConfigs.map((cfg, i) => (
        <OrbitingShard key={i} {...cfg} />
      ))}

      {/* Rings */}
      <EmeraldRing />
      {!isMobile && <EmeraldRing2 />}

      {/* Particles */}
      {!isMobile && <Particles count={50} />}

      {/* Environment */}
      <Environment preset="forest" />
    </>
  );
}

/* ── WebGL Fallback ── */
function NoWebGLFallback() {
  return (
    <div className="hero-3d-fallback">
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{
          width: 120, height: 120,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)',
          margin: '0 auto 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 50px rgba(22, 163, 74, 0.3)',
          animation: 'floatGentle 4s ease-in-out infinite'
        }}>
          <span style={{ fontSize: '3rem' }}>◆</span>
        </div>
        <p style={{ color: '#14251B', fontWeight: 600, fontSize: '1.125rem' }}>
          TechNova Solutions
        </p>
        <p style={{ color: '#64748B', fontSize: '0.875rem', marginTop: '0.5rem' }}>
          Premium Technology Engineering
        </p>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function EmeraldHero3D() {
  const [webglSupported] = useState(() => detectWebGL());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!webglSupported) {
    return <NoWebGLFallback />;
  }

  return (
    <div
      className="hero-3d-canvas-wrapper"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(240,253,244,0.8) 0%, rgba(255,255,255,0.4) 70%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(134, 239, 172, 0.2)',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
