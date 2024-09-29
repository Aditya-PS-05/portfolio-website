import { ProjectListProps } from "../../types/types";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 grid-flow-row">
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;