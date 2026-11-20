import { motion } from "motion/react";
import { useLanguage } from "../../context/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-12 dark:border-gray-800 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row"
      >
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Joseph Herreño
          </h3>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t("footer.role")}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/joseph080508"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            {t("footer.github")}
          </a>

          <a
            href="https://www.linkedin.com/in/joseph-david-herreño-theran-b76261292"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            {t("footer.linkedin")}
          </a>
        </div>
      </motion.div>

      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        {t("footer.crafted")}
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-200 pt-6 text-center dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t("footer.copyright").replace("{year}", String(new Date().getFullYear()))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
