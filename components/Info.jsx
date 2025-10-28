import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-[280px] flex items-start gap-3">
          <HiOutlineUser className="text-xl mt-1 text-accent" />
          <div>
            <p className="text-[15px] md:text-base font-medium">
              Current Role:
            </p>
            <p className="text-[14px] md:text-[15px]">
              MPhil Candidate — Climate Change Science & Policy, University of
              Bristol
            </p>
          </div>
        </div>

        <div className="w-[280px] flex items-start gap-3">
          <HiOutlineMail className="text-xl mt-1 text-accent" />
          <div>
            <p className="text-[15px] md:text-base font-medium">Email:</p>
            <p className="text-[14px] md:text-[15px]">ne.eneh@bristol.ac.uk</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-[280px] flex items-start gap-3">
          <HiOutlinePhone className="text-xl mt-1 text-accent" />
          <div>
            <p className="text-[15px] md:text-base font-medium">Based in:</p>
            <p className="text-[14px] md:text-[15px]">
              Bristol, United Kingdom
            </p>
          </div>
        </div>

        <div className="w-[280px] flex items-start gap-3">
          <HiOutlineLocationMarker className="text-xl mt-1 text-accent" />
          <div>
            <p className="text-[15px] md:text-base font-medium">Origin:</p>
            <p className="text-[14px] md:text-[15px]">Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
