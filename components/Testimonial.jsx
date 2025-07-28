"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

const testimonial = [
  {
    message: "lorem ipsum dhdjeje hcbdbjdj jdcjdjjnd j dnddjd ",
    name: "so so so",
  },
  {
    message: "lorem ipsum dhdjeje hcbdbjdj jdcjdjjnd j dnddjd ",
    name: "so so so",
  },
  {
    message: "lorem ipsum dhdjeje hcbdbjdj jdcjdjjnd j dnddjd ",
    name: "so so so",
  },
];
const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[300px] md:max-w-[480px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden lg:flex text-5xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
