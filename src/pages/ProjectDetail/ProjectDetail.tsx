import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, GitBranch } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../data/project";
import { useLanguage } from "../../context/useLanguage";
import SEO from "../../components/SEO/SEO";
import { FaAws, FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact size={18} color="#61dafb" />,
  "Next.js": <SiNextdotjs size={18} color="currentColor" />,
  TypeScript: <SiTypescript size={18} color="#3178c6" />,
  JavaScript: <SiJavascript size={18} color="#f7df1e" />,
  "Tailwind CSS": <SiTailwindcss size={18} color="#06b6d4" />,
  HTML: <FaHtml5 size={18} color="#e34f26" />,
  HTML5: <FaHtml5 size={18} color="#e34f26" />,
  CSS: <FaCss3Alt size={18} color="#1572b6" />,
  CSS3: <FaCss3Alt size={18} color="#1572b6" />,
  Python: <FaPython size={18} color="#3776ab" />,
  SQL: <SiMysql size={18} color="#4479a1" />,
  AWS: <FaAws size={18} color="#ff9900" />,
};

const ProjectDetail = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find((item) => item.id === projectId);
  const localized = language === "en" ? (project?.en ?? {}) : {};
  const index = projects.findIndex((item) => item.id === projectId);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t("projects.notFound")}
        </p>
        <Link to="/" className="mt-4 inline-block text-blue-500">
          {t("projects.backHome")}
        </Link>
      </section>
    );
  }

  return (
    <>
      <SEO title={localized.title ?? project.title} description={localized.description ?? project.description} image={project.image} />
      <section className="mx-auto max-w-6xl px-6 py-24">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        <ArrowLeft size={16} /> {t("projects.backProjects")}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          {localized.title ?? project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          {localized.description ?? project.description}
        </p>
      </motion.div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-8">
          {project.problem && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.problem")}
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {localized.problem ?? project.problem}
              </p>
            </div>
          )}

          {project.objective && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.objective")}
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {localized.objective ?? project.objective}
              </p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.features")}
              </h2>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                {(localized.features ?? project.features ?? []).map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.architecture")}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {(localized.architecture ?? project.architecture ?? []).map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
                      {step}
                    </span>
                    {index < project.architecture!.length - 1 && (
                      <span className="text-gray-400">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.challenges")}
              </h2>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                {(localized.challenges ?? project.challenges ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.solutions && project.solutions.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.solutions")}
              </h2>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                {(localized.solutions ?? project.solutions ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.learnings && project.learnings.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.learnings")}
              </h2>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                {(localized.learnings ?? project.learnings ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("projects.gallery")}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} vista ${index + 1}`}
                    loading="lazy"
                    className="rounded-xl border border-gray-200 object-contain dark:border-gray-800"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {t("projects.stack")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300"
                >
                  {techIcons[technology] ?? null}
                  {technology}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-white dark:text-gray-950 dark:hover:bg-blue-400"
              >
                <GitBranch size={16} />
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/40"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-800">
        {previous ? (
          <Link
            to={`/projects/${previous.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            <ArrowLeft size={16} /> {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/projects/${next.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            {next.title} <ArrowRight size={16} />
          </Link>
        ) : null}
      </div>
    </section>
    </>
  );
};

export default ProjectDetail;
