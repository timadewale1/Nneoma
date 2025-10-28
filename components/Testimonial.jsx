"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

const testimonial = [
  {
    message:
      "Selected as one of 60 emerging leaders in the Climate Change & Innovation Fellowship (Tony Blair Institute)",
    name: "Climate Fellowship",
  },
  {
    message:
      "Led research on Nigeria's energy transition and climate finance landscape, informing policy recommendations.",
    name: "Research Impact",
  },
  {
    message:
      "Published research and policy briefs on environmental management and climate adaptation.",
    name: "Academic Contribution",
  },
];
const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[280px] md:max-w-[420px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-6 py-5 gap-6">
              <ImQuotesLeft className="hidden lg:flex text-4xl text-accent" />
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
