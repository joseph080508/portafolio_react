import { motion } from "motion/react";
import { FaAws, FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { skills } from "../../data/skills";
import BlurText from "../BlurText/BlurText";
import { useLanguage } from "../../context/useLanguage";
import { Suspense, lazy } from "react";
const TechConstellation = lazy(() => import("../TechConstellation/TechConstellation"));

const skillIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Python: FaPython,
  SQL: SiMysql,
  "Next.js": SiNextdotjs,
  AWS: FaAws,
};

const skillColors: Record<string, string> = {
  TypeScript: "#3178c6",
  React: "#61dafb",
  "Tailwind CSS": "#06b6d4",
  JavaScript: "#f7df1e",
  HTML: "#e34f26",
  CSS: "#1572b6",
  Python: "#3776ab",
  SQL: "#4479a1",
  "Next.js": "currentColor",
  AWS: "#ff9900",
};

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            {t("skills.eyebrow")}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            <BlurText text={t("skills.title")} delay={0.1} />
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
            >
              {(() => {
                const Icon = skillIcons[skill.name];
                return (
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-2xl shadow-sm ring-1 ring-gray-200 transition-transform group-hover:scale-110 dark:bg-gray-800 dark:ring-gray-700">
                    <Icon size={22} color={skillColors[skill.name]} />
                  </div>
                );
              })()}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>

              <span className="mt-3 inline-block rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {skill.level === "Avanzado" ? t("levels.advanced") : t("levels.intermediate")}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Suspense fallback={null}>
            <TechConstellation />
          </Suspense>
        </div>

      </div>
    </section>
  );
};

export default Skills;