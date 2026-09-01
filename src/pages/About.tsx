import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 px-6 py-24 transition-colors duration-500 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Sobre mí
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Conociendo un poco más sobre mí
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300"
        >
          <p>
            Soy estudiante de Ingeniería de Sistemas y me apasiona la
            tecnología, especialmente el desarrollo de software y la creación
            de proyectos para la web.
          </p>

          <p>
            Me gusta aprender cómo funcionan las cosas, experimentar con
            nuevas tecnologías y convertir ideas en proyectos que realmente
            funcionen.
          </p>

          <p>
            Este portafolio es parte de ese proceso: un espacio donde puedo
            mostrar lo que he construido y seguir mejorando como desarrollador.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;