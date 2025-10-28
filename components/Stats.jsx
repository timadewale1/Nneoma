import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-8">
      <div className="flex gap-3">
        <div className="text-3xl font-bold text-accent flex">
          <CountUp end={4} duration={2} delay={1} className="block w-[60px]" />
          <div>+</div>
        </div>
        <span>
          Years of <br />
          Experience
        </span>
      </div>

      <div className="flex gap-3">
        <div className="text-3xl font-bold text-accent flex">
          <CountUp end={43} duration={5} delay={2} className="block w-[60px]" />
        </div>
        <span>
          Clients <br /> Satisfied
        </span>
      </div>
    </div>
  );
};

export default Stats;
