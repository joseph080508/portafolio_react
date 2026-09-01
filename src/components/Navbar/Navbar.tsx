import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/80">

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="group flex items-center"
        >
          <img
            src="/logo.png"
            alt="Joseph - Logo"
            className="h-10 w-auto object-contain transition duration-300 group-hover:scale-105"
          />
        </a>

        {/* MENÚ DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Proyectos
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Contacto
          </a>

          <button
            onClick={toggleDarkMode}
            aria-label="Cambiar tema"
            className="rounded-full border border-gray-200 p-2 text-lg transition duration-300 hover:scale-110 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 dark:border-gray-800 dark:bg-gray-950 md:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Proyectos
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Contacto
            </a>

            <button
              onClick={toggleDarkMode}
              className="w-fit rounded-lg border border-gray-200 px-4 py-2 dark:border-gray-800"
            >
              {darkMode ? "☀️ Modo claro" : "🌙 Modo oscuro"}
            </button>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;