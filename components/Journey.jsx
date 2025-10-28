const journey = [
  {
    years: "2023 - Present",
    role: "MPhil in Climate Change Science and Policy",
    institution: "University of Bristol, UK",
  },
  {
    years: "2022 - 2023",
    role: "Climate Change & Innovation Fellow",
    institution: "Tony Blair Institute for Global Change",
  },
  {
    years: "2022",
    role: "Climate Finance Research Fellow",
    institution: "Centre for Climate Change and Development",
  },
  {
    years: "2017 - 2021",
    role: "B.Sc in Environmental Management and Toxicology",
    institution: "Federal University of Agriculture, Abeokuta",
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
