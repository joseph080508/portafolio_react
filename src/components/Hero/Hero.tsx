import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white text-black transition-colors duration-500 dark:bg-gray-950 dark:text-white">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-10 top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">

        {/* TEXTO */}
        <div>

          

          {/* Saludo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-lg font-medium text-gray-500 dark:text-gray-400"
          >
            Hola, soy Joseph 
          </motion.p>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Construyo cosas para la{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              web.
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Soy estudiante de Ingeniería de Sistemas y desarrollador en
            formación. Me gusta aprender nuevas tecnologías y convertir ideas
            en soluciones funcionales.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black"
            >
              Ver proyectos

              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-200 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-200 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              LinkedIn
            </a>
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
            className="w-full max-w-lg object-contain"
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
    </section>
  );
};

export default Hero;