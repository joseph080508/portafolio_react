import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../../context/useTheme";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const Particles = ({ count, color }: { count: number; color: string }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const seed = (i * 9301 + 49297) % 233280;
      const u = seed / 233280;
      const seed2 = (i * 49297 + 9301) % 233280;
      const v = seed2 / 233280;
      const seed3 = (i * 12345 + 67890) % 233280;
      const w = seed3 / 233280;
      const r = 2.6 * Math.cbrt(u);
      const theta = v * Math.PI * 2;
      const phi = Math.acos(2 * w - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x += delta * 0.02;
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.3;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
};

const FloatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[1.6, 0.2, -0.5]}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
};

const Scene = ({ particleCount, color }: { particleCount: number; color: string }) => {
  const { camera } = useThree();
  useFrame((state) => {
    // eslint-disable-next-line react-hooks/immutability
    camera.position.x += (state.pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (state.pointer.y * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#a78bfa" />
      <Particles count={particleCount} color={color} />
      <FloatingShape />
    </>
  );
};

const HeroScene = () => {
  const reduced = useReducedMotion();
  const { darkMode } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (reduced) return null;

  const mobile = typeof window !== "undefined" && window.innerWidth < 768;
  const particleCount = mobile ? 220 : 700;
  const color = darkMode ? "#60a5fa" : "#2563eb";

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10">
      {visible ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <Scene particleCount={particleCount} color={color} />
        </Canvas>
      ) : null}
    </div>
  );
};

export default HeroScene;
