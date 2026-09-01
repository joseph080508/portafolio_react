import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl border border-gray-200 bg-white p-8 text-center transition-colors duration-500 dark:border-gray-800 dark:bg-gray-900 md:p-12"
      >
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
          Contacto
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          ¿Hablamos?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
          Si quieres conocer más sobre mis proyectos o simplemente hablar de
          tecnología, puedes encontrarme en mis redes.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/joseph080508"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/joseph-david-herre%C3%B1o-theran-b76261292/en/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxgU8B%2FSyRlOPYP7QigTtGA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;