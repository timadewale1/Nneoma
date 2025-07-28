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
          <HiOutlineUser className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Freelance:</p>
            <p>Available</p>
          </div>
        </div>

        <div className="w-[280px] flex items-start gap-3">
          <HiOutlineMail className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Email Address:</p>
            <p>jffkdkdkdkdkdk@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-[280px] flex items-start gap-3">
          <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Phone Number:</p>
            <p>1234567890</p>
          </div>
        </div>

        <div className="w-[280px] flex items-start gap-3">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Location:</p>
            <p>Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
