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
    image: portfolioImage,
    problem:
      "Necesitaba un espacio propio para presentar mis proyectos y practicar desarrollo frontend moderno.",
    objective:
      "Construir un portafolio responsive, tipado y visualmente cuidado que sirva como carta de presentación.",
    features: [
      "Secciones de Hero, About, Skills, Projects y Contacto",
      "Modo claro y oscuro",
      "Tarjetas de proyectos con enlaces a GitHub",
      "Diseño responsive",
    ],
    architecture: ["React", "Vite", "Tailwind CSS"],
    challenges: [
      "Mantener una estructura limpia con TypeScript",
      "Adaptar el diseño a distintos tamaños de pantalla",
    ],
    solutions: [
      "Componentes reutilizables y datos centralizados",
      "Clases de Tailwind para responsive y dark mode",
    ],
    learnings: [
      "Fundamentos de React con TypeScript",
      "Organización de un proyecto frontend",
    ],
    gallery: [portfolioImage],
    en: {
      title: "Personal Portfolio",
      description: "My personal portfolio built to practice React, TypeScript and Tailwind CSS.",
      problem: "I needed a personal space to present my projects and practice modern frontend development.",
      objective: "Build a responsive, typed and polished portfolio that serves as a presentation card.",
      features: [
        "Hero, About, Skills, Projects and Contact sections",
        "Light and dark mode",
        "Project cards with GitHub links",
        "Responsive design",
      ],
      architecture: ["React", "Vite", "Tailwind CSS"],
      challenges: [
        "Keeping a clean structure with TypeScript",
        "Adapting the design to different screen sizes",
      ],
      solutions: [
        "Reusable components and centralized data",
        "Tailwind classes for responsive and dark mode",
      ],
      learnings: [
        "React fundamentals with TypeScript",
        "Frontend project organization",
      ],
    },
  },

  {
    id: 2,
    title: "Rick & Morty SPA",
    description:
      "Aplicación web que consume una API para mostrar información de personajes de Rick & Morty.",
    technologies: ["JavaScript", "CSS", "API", "HTML"],
    github: "https://github.com/MateoMg06/SpaRickAndMorty.git",
    image: rickMortyImage,
    problem:
      "Practicar el consumo de una API externa y la renderización dinámica de datos en una SPA.",
    objective:
      "Mostrar personajes de Rick & Morty obtenidos desde una API pública de forma clara e interactiva.",
    features: [
      "Listado de personajes",
      "Consumo de API REST",
      "Interfaz responsive",
    ],
    architecture: ["Frontend SPA", "REST API", "Rick & Morty API"],
    challenges: [
      "Manejo de datos asíncronos",
      "Estados de carga y error",
    ],
    solutions: [
      "Fetch con manejo de promesas",
      "Renderizado condicional de la interfaz",
    ],
    learnings: [
      "Consumo de APIs REST",
      "Manipulación del DOM y estado",
    ],
    gallery: [rickMortyImage],
    en: {
      title: "Rick & Morty SPA",
      description: "Web application that consumes an API to show information about Rick & Morty characters.",
      problem: "Practice consuming an external API and rendering dynamic data in a SPA.",
      objective: "Show Rick & Morty characters obtained from a public API in a clear and interactive way.",
      features: [
        "Character listing",
        "REST API consumption",
        "Responsive interface",
      ],
      architecture: ["Frontend SPA", "REST API", "Rick & Morty API"],
      challenges: [
        "Handling asynchronous data",
        "Loading and error states",
      ],
      solutions: [
        "Fetch with promise handling",
        "Conditional rendering of the interface",
      ],
      learnings: [
        "REST API consumption",
        "DOM and state manipulation",
      ],
    },
  },

  {
    id: 3,
    title: "Veltrix Motors",
    description:
      "Proyecto sobre una página web de venta y compra de carros.",
    technologies: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/joseph080508/PROYECTO_RUBRICA.git",
    image: veltrixImage,
    problem:
      "Crear una página web estática para presentar un negocio de venta y compra de carros.",
    objective:
      "Maquetar una interfaz clara y navegable para mostrar vehículos y servicios.",
    features: [
      "Página de inicio",
      "Listado de vehículos",
      "Diseño responsive básico",
    ],
    architecture: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Estructurar correctamente el contenido",
      "Mantener consistencia visual",
    ],
    solutions: [
      "HTML semántico",
      "Estilos CSS organizados",
    ],
    learnings: [
      "Fundamentos de maquetación web",
      "Estructura de un sitio estático",
    ],
    gallery: [veltrixImage],
    en: {
      title: "Veltrix Motors",
      description: "Project about a website for buying and selling cars.",
      problem: "Create a static website to present a car buying and selling business.",
      objective: "Layout a clear and navigable interface to show vehicles and services.",
      features: [
        "Home page",
        "Vehicle listing",
        "Basic responsive design",
      ],
      architecture: ["HTML", "CSS", "JavaScript"],
      challenges: [
        "Structuring the content correctly",
        "Keeping visual consistency",
      ],
      solutions: [
        "Semantic HTML",
        "Organized CSS styles",
      ],
      learnings: [
        "Web layout fundamentals",
        "Static site structure",
      ],
    },
  },
];
