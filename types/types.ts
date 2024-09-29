// types.ts
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

export interface ProjectListProps {
  projects: Project[];
}
