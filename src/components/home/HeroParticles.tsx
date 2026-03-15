"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  rotation,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002 * speed;
    meshRef.current.rotation.y += 0.003 * speed;
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.002;
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

function TorusShape({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.001 * speed;
    meshRef.current.rotation.z += 0.002 * speed;
  });

  return (
    <Float speed={speed * 0.4} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 8, 16]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color="#E50914" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <FloatingShape position={[-4, 2, -3]} rotation={[0.5, 0.3, 0]} scale={1.2} color="#E50914" speed={1} />
      <FloatingShape position={[4, -1, -4]} rotation={[0.2, 0.8, 0.1]} scale={0.8} color="#ff3333" speed={0.8} />
      <FloatingShape position={[-2, -3, -2]} rotation={[0.7, 0.2, 0.5]} scale={0.6} color="#E50914" speed={1.2} />
      <FloatingShape position={[3, 3, -5]} rotation={[0.1, 0.5, 0.3]} scale={1} color="#cc0000" speed={0.6} />

      <TorusShape position={[5, 1, -6]} scale={0.7} color="#E50914" speed={0.9} />
      <TorusShape position={[-5, -2, -4]} scale={0.5} color="#ff3333" speed={1.1} />

      <Particles />

      <AdaptiveDpr pixelated />
    </>
  );
}

export function HeroParticles() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
