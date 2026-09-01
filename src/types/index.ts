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
}