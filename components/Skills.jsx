import {
  FaFileAlt,
  FaChartBar,
  FaBullhorn,
  FaUsers,
  FaGlobe,
  FaLeaf,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { icon: <FaChartBar />, name: "Research & Analysis" },
  { icon: <FaFileAlt />, name: "Policy Analysis" },
  { icon: <FaBullhorn />, name: "Science Communication" },
  { icon: <FaUsers />, name: "Project Management" },
  { icon: <FaGlobe />, name: "Climate Change" },
  { icon: <FaLeaf />, name: "Environmental Policy" },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-8 max-w-sm lg:max-w-none">
        {skills.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-tertiary/70 group">
                <div className="text-2xl group-hover:text-accent transition-all">
                  {item.icon}
                </div>
              </div>
              <span className="text-xs text-center whitespace-nowrap opacity-80">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
