import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 px-6 py-28 transition-colors duration-500 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Sobre mí
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            Aprendiendo, creando y mejorando.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300"
        >
          <p>
            Estudio Ingeniería de Sistemas y estoy construyendo mi camino en
            el desarrollo web. Empecé haciendo proyectos pequeños y cada uno
            me ha dejado algo nuevo por aprender.
          </p>

          <p>
            Disfruto trabajar con React, TypeScript y JavaScript. Todavía
            estoy aprendiendo, pero me gusta entender bien lo que hago y
            mejorar el resultado en cada proyecto.
          </p>

          <p>
            Aquí comparto algunos de esos trabajos y el proceso que hay
            detrás de ellos.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            En este momento
          </p>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Estudiando y creando proyectos para la web.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div>
              <p className="text-2xl font-bold text-blue-600">3+</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Proyectos personales</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">9</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Tecnologías exploradas</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;