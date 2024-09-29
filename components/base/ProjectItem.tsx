// components/ProjectItem.tsx
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types/types";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="bg-[#171717] rounded-[30px] shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[350px] mt-4">
      <Link href={project.link} passHref>
        <div className="relative w-full h-[180px] mb-4 bg-black">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold text-white m-2 ">{project.title}</h2>
        <p className="text-gray-400 m-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 m-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
