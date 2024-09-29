"use client";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Globe from "./Globe";
import Stacks from "./Stacks";

const About: React.FC = () => {
  const [isGlobeLoaded, setIsGlobeLoaded] = useState(false);

  useEffect(() => {
    // Simulating globe loading completion (you can modify this based on when the globe is actually ready)
    setTimeout(() => setIsGlobeLoaded(true), 2000); // Replace this with actual load event if needed
  }, []);

  return (
    <div className="text-white mx-auto w-[100%]">
      <h1 className="text-4xl font-bold text-center mb-6">More About Me</h1>
      <div className="flex w-full justify-center items-start gap-2">
        <div className="p-2 border-t-2 border-gray-800 w-[50%]">
          <div className="space-x-2 flex items-center">
            {/* <FontAwesomeIcon icon={faLocationDot} className="text-red-500" /> */}
            <span>TamilNadu, India</span>
          </div>
          
          {/* Placeholder while the Globe loads */}
          <div className="mx-auto bg-black p-4 rounded-lg shadow-lg mb-6 min-h-[300px] flex justify-center items-center">
            {isGlobeLoaded ? (
              <Globe size={300} />
            ) : (
              // You can use a spinner or a placeholder here
              <div className="text-gray-400">Loading Globe...</div>
            )}
          </div>

          <div>
            <h1>Stacks</h1>
            <Stacks />
          </div>
        </div>
        
        <div className="flex flex-col p-2 space-y-4 text-lg w-[50%] border-t-2 border-gray-800">
          <h1 className="mt-4 mb-16">
            I'm a developer based in Uttar Pradesh, India, with a strong passion
            for creating innovative solutions. Over the years, I've honed my
            skills in various technologies like full-stack web development,
            open-source contributions, and smart contract development and
            auditing. I've built a range of projects, from web2 applications to
            decentralized web3 platforms, always eager to learn and explore new
            tools that push the boundaries of what's possible. I'm continuously
            expanding my knowledge and skills, driven by the desire to solve
            real-world problems. I'm actively looking for internships and jobs
            where I can showcase my abilities, learn, grow, and make a
            meaningful impact.
          </h1>

          <div className="space-y-2 font-extralight">
            <h2 className="">Connect</h2>
            <div className="flex">
              <div className="">
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
              </div>
              <div className="ml-4">
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
    </div>
  );
};

export default About;
