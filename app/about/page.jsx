"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Socials from "@/components/Social";
import Blob from "@/components/Blob";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col lg:flex-row items-center gap-24 w-full h-[450px]">
          <div className="hidden lg:flex flex-col w-full h-full pt-14 max-w-[400px] relative">
            {/* <Image src="/assets/avatar.png" width={320} height={496} alt="" className="z-20 relative"/> */}
            <div className="w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30"></div>

            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px] " />
            </div>

            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transtition-all flex items-center justify-center rounded-full cursor-pointer "
            />
          </div>
          <ScrollArea className="w-full h-[450px]">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About Me</p>
              </div>
              <h2 className="h2 mb-4">
                <span className="text-accent">Nneoma</span> Eneh
              </h2>
              <p className="max-w-[440px] mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                est amet nesciunt facilis deserunt recusandae? Sunt dolorem
                vitae facere eligendi, atque magnam asperiores commodi
                recusandae, ut totam earum, temporibus libero?
              </p>
              <div className="flex flex-col items-start gap-8">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
