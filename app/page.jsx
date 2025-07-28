"use client";
import Blob from "@/components/Blob";
import { motion } from "framer-motion";
import Image from "next/image";
import avatarImg from "@/public/assets/nneoma.png";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Socials from "@/components/Social";
import Pattern from "@/components/Pattern";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <Pattern />

      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[500px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I'm Nneoma Eneh, <br />
            <TypeAnimation
              sequence={["Podcast Producer", 2000, "Climate Advocate", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam
            ea fugit, cupiditate voluptatem, voluptas, in
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Let's Talk.</span>
              <MdArrowOutward />
            </div>
          </button>
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0 ">
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span> +234 12345678</span>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>jtjtjtjtj@gmail.com</span>
            </div>
          </div>

          <Socials
            containerStyles="flex xl:flex-col gap-6 lg:hidden xl:flex xl:absolute xl:top-1/2 xl:right-2 xl:ml-10 xl:transform xl:-translate-x-1/2
          xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>

        <div className="hidden xl:block flex-1 relative z-20">
          <Blob containerStyles="w-[450px] h-[450px]" />
          {/* <Image
            src={avatarImg}
            alt=""
            width={400}
            height={400}
            quality={100}
            className="absolute top-16 left-[120px]"
          /> */}
          <div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
