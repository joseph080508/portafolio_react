import { motion } from "motion/react";
import { projects } from "../data/project";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Proyectos
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Lo que he construido
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Algunos proyectos en los que he trabajado mientras sigo
            aprendiendo y mejorando mis habilidades.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;