import Navbar from "@/components/base/Navbar";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-screen bg-black flex justify-center relative">
      {/* Background gradients */}
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#4b220e] opacity-100 blur-3xl left-[40%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#452436] opacity-100 blur-3xl left-[30%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#151428] opacity-100 blur-3xl left-[20%] top-[-350px] origin-center z-0"></div>

      <div className="md:w-[60%] z-10 m-5 text-white">
        <Navbar />

        <div className="mt-10 w-[95%] mx-auto text-gray-300 leading-7">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="mt-4 font-medium text-gray-400">
            👋 Hi there! I am Aditya Pratap Singh, a tech enthusiast passionate
            about backend engineering, blockchain development, and open-source
            projects.
          </p>

          <p className="mt-10">
            I'm currently pursuing a Bachelor's in Mechanical Engineering at NIT
            Trichy, expected to graduate in May 2026. Alongside my academic
            journey, I have actively explored software engineering and web
            development, contributing to open-source and real-world projects.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold underline">Achievements</h2>
            <ul className="list-disc list-inside mt-4 leading-9 pl-8">
              <li>
                Top 20 in the prestigious WorldQuant competition at my college,
                securing a consultant role.
              </li>
              <li>
                Top 1 at Synergy 2023, leading the WebOps team for a
                national-level symposium with over 2000 students in attendance.
              </li>
              <li>
                Completed a minor in Data Structures and Algorithms, reflecting
                strong problem-solving skills.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold underline">
              Technical Skills
            </h2>
            <p className="mt-4">
              I'm proficient in programming languages like C++, Python,
              JavaScript, and TypeScript. My expertise extends to modern web
              technologies like Node.js, React.js, Docker, and Next.js,
              alongside experience with databases like MySQL and PostgreSQL. I'm
              also well-versed in cloud services like AWS and tools such as Git
              and Linux.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold underline">Future Plans</h2>
            <p className="mt-4">
              My journey is just getting started! I plan to delve deeper into
              blockchain technology, contributing more to open-source projects,
              and building scalable applications. With a passion for innovation,
              I aim to make significant strides in the fields of Web3,
              decentralized platforms, and machine learning-driven solutions.
            </p>
          </div>

          <div className="space-y-2 font-extralight mt-4">
            <h2 className="text-2xl font-semibold underline">Connect</h2>
            <div className="flex mt-10 justify-start gap-5">
              <a
                href="https://github.com/Aditya-PS-05"
                target="_blank"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/AdityaPrat7441"
                target="_blank"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-pratap-singh-952a8820a/"
                target="_blank"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@coding_world7851"
                target="_blank"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faYoutube} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
