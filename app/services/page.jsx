"use client";
import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination"

import Image from "next/image"
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";


const services= [
{
  icon: "/assets/services/design.svg",
  href: "",
  title: "Designer"
},
{
  icon: "/assets/services/design.svg",
  href: "",
  title: "Designer"
},
{
  icon: "/assets/services/design.svg",
  href: "",
  title: "Designer"
},
{
  icon: "/assets/services/design.svg",
  href: "",
  title: "Designer"
},
{
  icon: "/assets/services/design.svg",
  href: "",
  title: "Designer"
},

]

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    className="h-screen flex items-center" >
      <div className="container mx-auto w-full flex flex-col gap-16">

        <div className="flex fex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <h2 className="h2 max-w-[480px] text-left lg:mb-0">
            Custom <span  className="text-accent"> Design Solutions</span> to Boost your Business
          </h2>

          <button className="btn btn-lg btn-accent flex gap-2">All Services <MdArrowRightAlt className="text-2xl" /></button>
        </div>

        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{
          640: {slidesPerView:2 },
          1024: {slidesPerView: 3 }
        }}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true}}
        className="h-[320px]"
        >
          {services.map((item,index) => {
            return ( 
              <SwiperSlide key={index}>
              <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-12">
                  <Image src={item.icon} width={48} height={48} alt="" />
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-46 transition-all"> <MdOutlineArrowOutward /> </div>
                </div>
                <h2 className="text-[22px] font-medium max-w-[240px]">
                  {item.title}
                </h2>
              </div>
              </SwiperSlide>
              );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Services;
