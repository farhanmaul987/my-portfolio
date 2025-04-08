import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { RiArrowRightSFill, RiArrowLeftSFill } from "@remixicon/react";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { projectList } from "./projectList";

function ProjectSm() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative mt-6 flex justify-center md:hidden">
      <Swiper
        spaceBetween={7}
        loop={false}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavState(swiper);
        }}
        onSlideChange={(swiper) => updateNavState(swiper)}
      >
        {projectList.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="h-full w-full">
              <div className="relative mx-auto w-[85%] max-w-sm overflow-hidden rounded-xl bg-sldGrey p-4">
                <div className="flex flex-col overflow-hidden rounded-xl border-none">
                  <div className="relative items-center justify-center">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover blur-[2px]"
                    />
                    <div className="absolute left-0 top-0 z-10">
                      <div
                        className={`flex w-full items-center text-sm ${project.statusColor} gap-1 px-2 py-0.5 font-semibold`}
                      >
                        <project.statusIcon size={23} />
                        {project.projectStatus}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                      <div
                        className={`${project.titleStyle} font-bold drop-shadow-xl`}
                      >
                        {project.title}
                      </div>
                      <div className="text-lg font-semibold drop-shadow-xl">
                        {project.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5 text-justify">{project.detail}</div>
                <div className="flex flex-wrap gap-1 pt-3">
                  {project.badges.map((badge, index) => (
                    <img
                      key={index}
                      src={`https://img.shields.io/badge/${badge.text}-${badge.color}?logo=${badge.logo}&logoColor=${badge.logoColor}&style=flat-square`}
                      alt={`${badge.text} badge`}
                      className="h-6"
                    />
                  ))}
                </div>
                <div className="pt-[21px] lg:hidden">
                  <a
                    href={project.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="hover:text-prLavenders rounded-full border border-white p-2 transition-all duration-300">
                      {project.linkIcon}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Nav Buttons (with disabled logic) */}
      <button
        className={`custom-prev ${isBeginning ? "disabled cursor-not-allowed" : ""}`}
        disabled={isBeginning}
      >
        <RiArrowLeftSFill className="size-6 text-white" />
      </button>
      <button
        className={`custom-next ${isEnd ? "disabled cursor-not-allowed" : ""}`}
        disabled={isEnd}
      >
        <RiArrowRightSFill className="size-6 text-white" />
      </button>
    </div>
  );
}

export default ProjectSm;
