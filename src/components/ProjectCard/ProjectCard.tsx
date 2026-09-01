import { motion } from "motion/react";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Preview */}
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-contain bg-gray-100 transition duration-500 group-hover:scale-105 dark:bg-gray-800"
  />
</div>

      {/* Contenido */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* GitHub */}
        <div className="mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Ver en GitHub
          </a>
        </div>

      </div>
    </motion.article>
  );
};

export default ProjectCard;