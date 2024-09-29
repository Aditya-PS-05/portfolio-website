import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiGo,
  SiRubyonrails,
  SiPostgresql,
  SiMysql,
  SiVisualstudiocode,
  SiMarkdown,
  SiNeovim,
} from "react-icons/si";

const StackGroup: React.FC<{ reverse?: boolean }> = ({ reverse }) => {
  return (
    <div
      className={`overflow-hidden flex items-center justify-center ${
        reverse ? "animate-marqueeReverse" : "animate-marquee"
      }`}
    >
      <div className="flex flex-wrap justify-center items-center gap-4 w-full">
        <div className="flex flex-col items-center">
          <FaReact size={40} />
        </div>
        <div className="flex flex-col items-center">
          <SiRubyonrails size={40} />
        </div>
        <div className="flex flex-col items-center">
          <SiGo size={40} />
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs size={40} />
        </div>
        <div className="flex flex-col items-center">
          <FaGitAlt size={40} />
        </div>
        <div className="flex flex-col items-center">
          <SiPostgresql size={40} />
        </div>
        <div className="flex flex-col items-center">
          <SiMysql size={40} />
        </div>
        <div className="flex flex-col items-center">
          <SiNeovim size={40} />
        </div>
      </div>
    </div>
  );
};

const Stacks: React.FC = () => {
  return (
    <div>
      <div className="overflow-hidden mb-4">
        <StackGroup reverse={false} />
      </div>
      <div className="overflow-hidden">
        <StackGroup reverse={true} />
      </div>
    </div>
  );
};

export default Stacks;
