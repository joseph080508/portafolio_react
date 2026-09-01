import type { Project } from "../types";
import portfolioImage from "../assets/portafolio.png";
import rickMortyImage from "../assets/rick-morty.png";
import veltrixImage from "../assets/veltrix-motors.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portafolio Personal",
    description:
      "Mi portafolio personal desarrollado para practicar React, TypeScript y Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/joseph080508/Portafolio_.git",
    image: portfolioImage ,
  },

  {
    id: 2,
    title: "Rick & Morty SPA",
    description:
      "Aplicación web que consume una API para mostrar información de personajes de Rick & Morty.",
    technologies: ["JavaScript", "CSS", "API", "HTML"],
    github: "https://github.com/MateoMg06/SpaRickAndMorty.git",
    image: rickMortyImage,
  },

  {
    id: 3,
    title: "Veltrix Motors",
    description:
      "Proyecto sobre una página web de venta y compra de carros.",
    technologies: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/joseph080508/PROYECTO_RUBRICA.git",
    image: veltrixImage,
  },
];