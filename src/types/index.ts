export interface Skill{
    name: string;
    level: string
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  problem?: string;
  objective?: string;
  features?: string[];
  architecture?: string[];
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
  gallery?: string[];
  en?: {
    title?: string;
    description?: string;
    problem?: string;
    objective?: string;
    features?: string[];
    architecture?: string[];
    challenges?: string[];
    solutions?: string[];
    learnings?: string[];
  };
}