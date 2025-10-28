const journey = [
  {
    years: "2023 - Present",
    role: "Community Engagement Lead",
    institution: "Clean Technology Hub",
  },
  {
    years: "October 2022 – July 2023",
    role: "Administrative Assistant",
    institution: "Clean Technology Innovation Hub, Abuja",
  },
  {
    years: "2022",
    role: "Climate Finance Research Fellow",
    institution: "Centre for Climate Change and Development",
  },
  {
    years: "October 2021 – September 2022",
    role: "Front Desk Officer",
    institution:
      "State House Staff Multipurpose Cooperative Society, Aso Rock, Abuja",
  },
];
const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-10 w-full">
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[160px] bg-white/10"></div>
            </div>
            <div className="max-w-[460px]">
              <p className="mb-4 text-base text-white/50">{years}</p>
              <h4 className="text-lg font-medium mb-2">{role}</h4>
              <p className="text-base text-white/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
