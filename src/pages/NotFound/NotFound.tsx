import { Link } from "react-router";
import { motion } from "motion/react";
import { useLanguage } from "../../context/useLanguage";
import SEO from "../../components/SEO/SEO";

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <>
      <SEO title={t("notFound.title")} description={t("notFound.message")} />
      <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold text-gray-900 dark:text-white"
        >
          404
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {t("notFound.message")}
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          {t("notFound.back")}
        </Link>
      </section>
    </>
  );
};

export default NotFound;
