import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { FaAws, FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useLanguage } from "../../context/useLanguage";

interface Tech {
  name: string;
  color: string;
  level: string;
  icon: React.ReactNode;
}

const techs: Tech[] = [
  { name: "React", color: "#61dafb", level: "Intermedio", icon: <FaReact size={28} /> },
  { name: "Next.js", color: "#ffffff", level: "Intermedio", icon: <SiNextdotjs size={28} /> },
  { name: "TypeScript", color: "#3178c6", level: "Intermedio", icon: <SiTypescript size={28} /> },
  { name: "JavaScript", color: "#f7df1e", level: "Intermedio", icon: <SiJavascript size={28} /> },
  { name: "Tailwind CSS", color: "#06b6d4", level: "Intermedio", icon: <SiTailwindcss size={28} /> },
  { name: "HTML5", color: "#e34f26", level: "Avanzado", icon: <FaHtml5 size={28} /> },
  { name: "CSS3", color: "#1572b6", level: "Avanzado", icon: <FaCss3Alt size={28} /> },
  { name: "Python", color: "#3776ab", level: "Intermedio", icon: <FaPython size={28} /> },
  { name: "SQL", color: "#4479a1", level: "Intermedio", icon: <SiMysql size={28} /> },
  { name: "AWS", color: "#ff9900", level: "Intermedio", icon: <FaAws size={28} /> },
];

const positions = (() => {
  const pts: THREE.Vector3[] = [];
  const n = techs.length;
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push(new THREE.Vector3(Math.cos(theta) * r * 2.6, y * 2.6, Math.sin(theta) * r * 2.6));
  }
  return pts;
})();

const Constellation = () => {
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const lines = useMemo(() => {
    const result: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < positions.length; i++) {
      const nearest = positions
        .map((p, j) => ({ j, d: i === j ? Infinity : positions[i].distanceTo(p) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const { j } of nearest) {
        result.push([positions[i], positions[j]]);
      }
    }
    const seen = new Set<string>();
    return result.filter(([a, b]) => {
      const key = [a.toArray().join(","), b.toArray().join(",")].sort().join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current || reduced) return;
    groupRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={groupRef}>
      {lines.map(([a, b], index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([a, b]);
        return (
          <lineSegments key={index} geometry={geometry}>
            <lineBasicMaterial color="#475569" transparent opacity={0.25} />
          </lineSegments>
        );
      })}
      {techs.map((tech, index) => {
        const pos = positions[index];
        const isHovered = hovered === index;
        const isSelected = selected === index;
        return (
          <group key={tech.name} position={pos}>
            <Html center transform distanceFactor={8} style={{ pointerEvents: "auto" }}>
              <button
                type="button"
                className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-gray-950/70 px-3 py-2 text-white backdrop-blur transition-transform duration-200 hover:scale-110"
                style={{
                  color: tech.color,
                  boxShadow: isHovered ? `0 0 18px ${tech.color}55` : "none",
                  transform: `scale(${isHovered || isSelected ? 1.15 : 1})`,
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(isSelected ? null : index)}
                aria-label={tech.name}
              >
                {tech.icon}
                {(isHovered || isSelected) && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                    {tech.name}
                  </span>
                )}
                {isSelected && (
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white">
                    {tech.level === "Avanzado" ? t("levels.advanced") : t("levels.intermediate")}
                  </span>
                )}
              </button>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

const TechConstellation = () => {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-[460px] w-full overflow-hidden rounded-2xl border border-gray-200/60 bg-transparent dark:border-gray-800/60">
      {visible ? (
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#a78bfa" />
        <Constellation />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!reduced}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      ) : null}
    </div>
  );
};

export default TechConstellation;
