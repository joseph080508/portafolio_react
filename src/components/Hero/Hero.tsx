import { Suspense, lazy } from "react";
import { useLanguage } from "../../context/useLanguage";
import BlurText from "../BlurText/BlurText";
import Magnetic from "../Magnetic/Magnetic";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HeroScene = lazy(() => import("./HeroScene"));

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-white text-black transition-colors duration-500 dark:bg-gray-950 dark:text-white">

      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">

        {/* TEXTO */}
        <div>

          

          {/* Saludo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400"
          >
            {t("hero.greeting")}
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <BlurText text={t("hero.title1")} delay={0.2} />
            {" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              <BlurText text={t("hero.title2")} delay={0.5} />
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 md:text-xl"
          >
            {t("hero.description")}
          </motion.p>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
              >
                {t("hero.projects")}

                <ArrowDown
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
              >
                {t("hero.contact")}
                <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>

        </div>

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex md:justify-end"
        >
          <motion.img
            src="/logo.png"
            alt="Logo personal"
            className="w-full max-w-lg object-contain brightness-50 saturate-125 drop-shadow-2xl transition duration-300 dark:brightness-100 dark:saturate-100"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
          />
        </motion.div>

      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 md:flex">
        <span className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
        {t("hero.explore")}
        <span className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
      </div>
    </section>
  );
};

export default Hero;