import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useLanguage } from "../../context/useLanguage";

const CustomCursor = () => {
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const trailX = useSpring(x, { stiffness: 180, damping: 28, mass: 0.6 });
  const trailY = useSpring(y, { stiffness: 180, damping: 28, mass: 0.6 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches && !reduced);
    updateEnabled();
    media.addEventListener("change", updateEnabled);
    return () => media.removeEventListener("change", updateEnabled);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor]");
      if (interactive) {
        setHovering(true);
        const cursorLabel = interactive.getAttribute("data-cursor");
        setLabel(cursorLabel === "View" ? t("cursor.view") : cursorLabel ?? "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y, t]);

  if (!enabled) return null;

  return (
    <>
      <style>{`@media (pointer: fine) { html, body, a, button, [data-cursor] { cursor: none !important; } }`}</style>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/60 bg-blue-500/10 backdrop-blur-sm transition-[width,height] duration-200"
        style={{ x: trailX, y: trailY }}
        animate={{
          width: hovering ? 56 : 40,
          height: hovering ? 56 : 40,
          opacity: hovering ? 1 : 0.7,
        }}
      >
        {label ? (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white">
            {label}
          </span>
        ) : null}
      </motion.div>
    </>
  );
};

export default CustomCursor;
