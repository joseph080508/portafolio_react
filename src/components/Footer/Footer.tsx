const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-gray-500 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          © {new Date().getFullYear()} Joseph. Todos los derechos reservados.
        </p>

        <p className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-gray-500 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
          Hecho con React, TypeScript y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;