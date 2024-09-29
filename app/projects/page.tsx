// app/projects/page.tsx
import ProjectList from "../../components/base/ProjectList";
import Navbar from "@/components/base/Navbar";
import { projectData } from "@/lib/ProjectsData";
export default function ProjectsPage() {
  return (
    <div className="w-screen bg-black flex justify-center relative">
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#4b220e] opacity-100 blur-3xl left-[40%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#452436] opacity-100 blur-3xl left-[30%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#151428] opacity-100 blur-3xl left-[20%] top-[-350px] origin-center z-0"></div>

      <div className="md:w-[60%] z-10 m-5">
        <Navbar />
        <div className="mt-10">
          <h1 className="text-6xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-400 mb-8">Here is the list of some of my projects.</p>
          <ProjectList projects={projectData} />
        </div>
      </div>
    </div>
  );
}
