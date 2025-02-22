// Import Swiper React components
import { useState } from "react";
import { motion } from "motion/react";

import { RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/react";
import { slides } from "./slideList";

export default function CustomSlider() {
  const [current, setCurrent] = useState(1);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center space-y-3 p-6 ">
      <div className="slide-box">
        {/* Slider Container */}
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`slide-container duration-300 ${
              index === current
                ? "scale-110 shadow-lg border-prLavender"
                : "opacity-50 blur-[1px] border-none grayscale"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0.5 }}
            onMouseEnter={() => setCurrent(index)}
          >
            <img src={slide.img} alt={slide.title} className="size-48" />
            <p className="text-center text-white mt-5">{slide.title}</p>
          </motion.div>
        ))}
        {/* End Slider Container */}
      </div>

      <div className="flex space-x-2 items-center mt-4">
        {/* Button Left */}
        <button onClick={prevSlide} className="p-2">
          <RiArrowLeftSLine className="text-white size-8 hover:text-prLavender" />
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
        <button onClick={nextSlide} className="p-2">
          <RiArrowRightSLine className="text-white size-8 hover:text-prLavender" />
        </button>
        {/* End Button Right */}
      </div>
    </div>
  );
}
