import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface KineticTextProps {
  text: string;
  className?: string;
}

const KineticWord = ({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  const y = useTransform(progress, [start, end], [24, 0]);
  const scale = useTransform(progress, [start, end], [0.92, 1]);

  return (
    <motion.span
      style={{ opacity, y, scale, display: "inline-block" }}
      className="mr-[0.25em]"
    >
      {word}
    </motion.span>
  );
};

const KineticText = ({ text, className }: KineticTextProps) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <KineticWord
          key={`${word}-${index}`}
          word={word}
          index={index}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </span>
  );
};

export default KineticText;
