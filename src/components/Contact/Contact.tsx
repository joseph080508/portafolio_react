import { motion } from "motion/react";
import { useLanguage } from "../../context/useLanguage";
import { ArrowUpRight, Mail } from "lucide-react";
import BlurText from "../BlurText/BlurText";
import Magnetic from "../Magnetic/Magnetic";

const Contact = () => {
  const { t } = useLanguage();
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
        className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 text-center transition-colors duration-500 dark:border-blue-900/50 dark:from-blue-950/50 dark:via-gray-900 dark:to-purple-950/40 md:p-16"
      >
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
        <p className="relative mx-auto flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300">
          <Mail size={16} /> {t("contact.eyebrow")}
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          <BlurText text={t("contact.title")} delay={0.1} />
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
          {t("contact.subtitle")}
        </p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <Magnetic>
            <a
              href="https://github.com/joseph080508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              {t("contact.github")} <ArrowUpRight size={17} />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="https://www.linkedin.com/in/joseph-david-herreño-theran-b76261292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-white dark:border-gray-700 dark:hover:bg-gray-800"
            >
              {t("contact.linkedin")} <ArrowUpRight size={17} />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;