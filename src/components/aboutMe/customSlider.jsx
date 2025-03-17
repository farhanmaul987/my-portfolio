import { useState } from "react";
import { motion } from "motion/react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { slides } from "./slideList";

export default function CustomSlider() {
  // For Md and Lg
  const [current, setCurrent] = useState(1);

  // For Sm
  const [currentSm, setCurrentSm] = useState(0);
  // const [isStart, setIsStart] = useState(true);
  // const [isEnd, setIsEnd] = useState(false);

  // const handleNavigation = (swiper) => {
  //   setIsStart(swiper.isBeginning);
  //   setIsEnd(swiper.isEnd);
  // };

  // Button Next
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Button Prev
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="hidden items-center p-6 md:flex md:flex-col">
        {/* Md and Lg Size */}
        <div className="slide-box md:flex">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`slide-container flex flex-col items-center justify-center duration-300 ${
                index === current
                  ? "scale-110 border-prLavender shadow-lg"
                  : "border-none opacity-50 blur-[1px] grayscale"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0.5 }}
              onMouseEnter={() => setCurrent(index)}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="size-28 md:size-36 lg:size-44"
              />
              <p className="text-center text-[8px] text-white md:mt-6 md:text-sm lg:mt-8 lg:text-base">
                {slide.title}
              </p>
            </motion.div>
          ))}
        </div>
        {/* End Md and Lg Size */}

        <div className="mt-1 flex items-center space-x-2">
          {/* Button Left */}
          <button onClick={prevSlide} className="p-2 md:block">
            <RiArrowLeftSLine className="size-8 text-white hover:text-prLavender" />
          </button>
          {/* End Button Left */}

          {/* Pagination */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-10 rounded-full transition-all duration-300 ${
                  index === current ? "bg-prLavender" : "bg-srGrey"
                }`}
              ></span>
            ))}
          </div>
          {/* End Pagination */}

          {/* Button Right */}
          <button onClick={nextSlide} className="p-2 md:block">
            <RiArrowRightSLine className="size-8 text-white hover:text-prLavender" />
          </button>
          {/* End Button Right */}
        </div>
      </div>

      {/* Sm Size */}
      <div className="mt-5 md:hidden">
        <Swiper
          spaceBetween={5}
          loop={false}
          onSlideChange={(swiper) => setCurrentSm(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="flex justify-center">
                <div
                  className={`flex h-[265px] w-[250px] items-center justify-center rounded-md bg-sldGrey duration-300 ${
                    index === currentSm
                      ? "scale-100 border-prLavender shadow-lg"
                      : "border-none opacity-50 blur-[1px] grayscale"
                  }`}
                >
                  <div className="flex h-[220px] w-[200px] flex-col items-center justify-center rounded-lg bg-sldcontainer p-4">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="size-38"
                    />
                    <p className="mt-4 text-center text-sm text-white">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* End Sm Size */}
    </>
  );
}
