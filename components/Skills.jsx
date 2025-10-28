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
      <div className="flex flex-wrap gap-4 max-w-sm lg:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-14 h-14 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className="text-2xl group-hover:text-accent transition-all">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
