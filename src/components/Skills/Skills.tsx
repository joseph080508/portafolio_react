import { motion } from "motion/react";
import { skills } from "../../data/skills";

const Skills = () => {
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
            Tecnologías
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Mis Skills
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Tecnologías y herramientas que he aprendido y que sigo
            desarrollando.
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
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>

              <span className="mt-3 inline-block rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {skill.level}
                </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;