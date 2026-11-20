import { motion } from "motion/react";
import { useLanguage } from "../context/useLanguage";

const About = () => {
  const { t } = useLanguage();
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
            {t("about.eyebrow")}
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            {t("about.title")}
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
            {t("about.p1")}
          </p>

          <p>
            {t("about.p2")}
          </p>

          <p>
            {t("about.p3")}
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
            {t("about.now")}
          </p>
          <p className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            {t("about.nowText")}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div>
              <p className="text-2xl font-bold text-blue-600">3+</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t("about.projects")}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">9</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t("about.technologies")}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;