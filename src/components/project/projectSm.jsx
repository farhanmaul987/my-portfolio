import { Swiper, SwiperSlide } from "swiper/react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import "swiper/css";
import "swiper/css/navigation";

import { projectList } from "./projectList";
import imgprj from "../../assets/swipe.jpg";

function ProjectSm() {
  return (
    <div className="relative mt-6 flex justify-center md:hidden">
      <Swiper spaceBetween={7} loop={false} slidesPerView={1}>
        {projectList.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="h-full w-full">
              <div className="relative mx-auto w-[85%] max-w-sm overflow-hidden rounded-xl bg-sldGrey p-5">
                {/* Thumbnail */}
                <div className="flex flex-col overflow-hidden rounded-xl border-none">
                  {/* Image */}
                  <div className="relative items-center justify-center">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover blur-[2px]"
                    />
                    {/* End Image */}

                    {/* Status */}
                    <div className="absolute left-0 top-0 z-10">
                      <div
                        className={`flex w-full items-center text-sm ${project.statusColor} gap-1 px-2 py-0.5 font-semibold`}
                      >
                        <project.statusIcon size={23} />
                        {project.projectStatus}
                      </div>
                    </div>
                    {/* End Status */}

                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                      {/* Title */}
                      <div
                        className={`${project.titleStyle} text-2xl font-bold drop-shadow-xl`}
                      >
                        {project.title}
                      </div>
                      {/* End Title */}

                      {/* Description */}
                      <div className="text-base font-semibold drop-shadow-xl">
                        {project.description}
                      </div>
                      {/* End Description */}
                    </div>
                  </div>
                </div>
                {/* End Thumbnail */}

                {/* Detail */}
                <div className="pt-5 text-justify">{project.detail}</div>
                {/* End Detail */}

                {/* Badges */}
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
                {/* End Badges */}

                {/* Button Link */}
                <div className="relative left-1 flex pt-[21px]">
                  <a
                    href={project.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-full border border-white p-2 transition-all duration-300 hover:border-prLavender hover:text-prLavender">
                      {project.linkIcon}
                    </button>
                  </a>
                  <img
                    src={imgprj}
                    alt="imgprj"
                    className="absolute right-2 h-auto w-20"
                  />
                </div>
                {/* End Button Link */}
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* More Project */}
        <SwiperSlide>
          <div className="h-full w-full">
            <div className="relative mx-auto flex h-full w-full items-center justify-center">
              <div className="flex aspect-square w-[85%] max-w-sm flex-col items-center justify-center rounded-xl bg-sldGrey p-5 text-center">
                <div className="text-[28px] font-bold">More Projects?</div>
                <a
                  href="https://github.com/farhanmaul987"
                  target="_blank"
                  className="mt-4"
                >
                  <button className="flex gap-2 rounded-md border border-white bg-black/90 px-4 py-2 text-white shadow-md transition-all duration-300 hover:border-prLavender hover:text-prLavender">
                    <SiGithub />
                    View Projects
                  </button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* End More Project */}
      </Swiper>
    </div>
  );
}

export default ProjectSm;
