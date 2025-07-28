"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "design",
    title: "designing blah blah",
    description: "canva blah balsh ablHHFJF HRFH DJDJDJ",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["canva", "corel draw", "blah blahj"],
  },
  {
    id: 2,
    category: "design",
    title: "designing blah blah",
    description: "canva blah balsh ablHHFJF HRFH DJDJDJ",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["canva", "corel draw", "blah blahj"],
  },
  {
    id: 3,
    category: "Video",
    title: "Video blah blah",
    description: "Video blah balsh ablHHFJF HRFH DJDJDJ",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["canva", "corel draw", "blah blahj"],
  },
  {
    id: 4,
    category: "video",
    title: "video blah blah",
    description: "video blah balsh ablHHFJF HRFH DJDJDJ",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["canva", "corel draw", "blah blahj"],
  },
  {
    id: 5,
    category: "research",
    title: "Research blah blah",
    description: "Reseacrh blah balsh ablHHFJF HRFH DJDJDJ",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["canva", "corel draw", "blah blahj"],
  },
  {
    id: 6,
    category: "research",
    title: "research blah blah",
    description: "research blah balsh ablHHFJF HRFH DJDJDJ",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["canva", "corel draw", "blah blahj"],
  },
];

const categories = ["design", "video", "research"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 lg:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 lg:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Projects</span>
        </h2>
        <Tabs
          defaultValue="design"
          className="w-full flex flex-col gap-6 lg:gap-12"
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 lg:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "research" ? "Research and Writing" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll lg:overfolow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={{ Pagination }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max lg:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                              <div className="w-full max-w-[380px] flex flex-col gap-6 lg:gap-8 lf:pt-6 order-2 lg:order-none">
                                <h3 className="h3"> {project.title}</h3>
                                <div className="lg:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      {" "}
                                      <MdArrowOutward className="text-xl" />
                                      <span>View Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      {" "}
                                      <FaGithub className="text-xl" />
                                      <span>hhhg</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>

                              <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] relative bg-pink-50/10 order-1 lg:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
