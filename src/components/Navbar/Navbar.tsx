import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../context/useTheme";
import { useLanguage } from "../../context/useLanguage";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/80">

      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="Joseph - Logo"
            className="h-16 w-16 object-contain brightness-50 saturate-125 transition duration-300 group-hover:scale-105 dark:brightness-100 dark:saturate-100"
          />
          <span className="hidden text-sm font-bold tracking-tight text-gray-900 dark:text-white sm:block">
            Joseph Herreño
          </span>
        </a>

        {/* MENÚ DESKTOP */}
        <div className="hidden items-center gap-2 md:flex">

          <a
            href="#about"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
          >
            {t("nav.about")}
          </a>

          <a
            href="#skills"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
          >
            {t("nav.skills")}
          </a>

          <a
            href="#projects"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
          >
            {t("nav.projects")}
          </a>

          <a
            href="#contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
          >
            {t("nav.contact")}
          </a>

          <div className="ml-2 flex items-center rounded-full border border-gray-200 p-1 dark:border-gray-800">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-1 text-xs font-semibold transition ${language === "en" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-950" : "text-gray-600 dark:text-gray-300"}`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`rounded-full px-2 py-1 text-xs font-semibold transition ${language === "es" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-950" : "text-gray-600 dark:text-gray-300"}`}
              aria-label="Español"
            >
              ES
            </button>
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label={t("nav.language")}
            className="ml-2 rounded-full border border-gray-200 p-2.5 text-gray-600 transition duration-300 hover:scale-110 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

        </div>

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
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
              {t("nav.about")}
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              {t("nav.skills")}
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              {t("nav.projects")}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              {t("nav.contact")}
            </a>

            <div className="flex w-fit items-center rounded-full border border-gray-200 p-1 dark:border-gray-800">
              <button
                onClick={() => { setLanguage("en"); closeMenu(); }}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === "en" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-950" : "text-gray-600 dark:text-gray-300"}`}
              >
                EN
              </button>
              <button
                onClick={() => { setLanguage("es"); closeMenu(); }}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === "es" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-950" : "text-gray-600 dark:text-gray-300"}`}
              >
                ES
              </button>
            </div>

            <button
              onClick={toggleDarkMode}
              className="w-fit rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium dark:border-gray-800"
            >
              {darkMode ? "☀️ " + t("theme.light") : "🌙 " + t("theme.dark")}
            </button>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;