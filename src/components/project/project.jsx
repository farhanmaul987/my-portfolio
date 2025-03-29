import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { projectList } from "./projectList";

function Project() {
  return (
    <section id="project">
      {/* Text */}
      <div className="pt-8">
        <div className="md:text-outline">MY PROJECT</div>
        <div className="md:mt-[88px] md:px-16">
          <div className="relative items-center justify-center text-center text-white">
            <h2 className="heading-2">Latest Project</h2>
          </div>
        </div>
      </div>
      {/* End Text */}

      {/* Content */}
      {/* Md and Lg */}
      <div className="hidden grid-cols-2 gap-y-6 md:grid md:justify-center md:px-8 md:pt-20 lg:grid-cols-3 lg:px-14">
        {/* Project Box */}
        {projectList.map((project) => (
          <div className="project-box group" key={project.id}>
            <div className="relative h-[460px] overflow-hidden rounded-xl bg-sldGrey p-6 transition-all duration-300">
              <div className="flex flex-col overflow-hidden rounded-xl border-none">
                <div className="relative items-center justify-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover blur-[2px] transition-all duration-300 group-hover:opacity-25 group-hover:blur-[1px]"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-all duration-300">
                    <div
                      className={`${project.titleStyle} font-bold drop-shadow-xl transition-all duration-300 group-hover:opacity-50 group-hover:blur-[1px]`}
                    >
                      {project.title}
                    </div>
                    <div className="text-lg font-semibold drop-shadow-xl transition-all duration-300 group-hover:opacity-25 group-hover:blur-[1px]">
                      {project.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5 text-justify transition-all duration-300 group-hover:opacity-25 group-hover:blur-[1px]">
                {project.detail}
              </div>
              <div className="flex flex-wrap gap-1 transition-all duration-300 group-hover:opacity-25 group-hover:blur-[1px]">
                {project.badges.map((badge, index) => (
                  <img
                    key={index}
                    src={`https://img.shields.io/badge/${badge.text}-${badge.color}?logo=${badge.logo}&logoColor=${badge.logoColor}&style=flat-square`}
                    alt={`${badge.text} badge`}
                    className="h-6 transition-all duration-300 group-hover:opacity-25 group-hover:blur-[1px]"
                  />
                ))}
              </div>
              {/* Tombol Link */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                {/* Project Status */}
                <span
                  className={`relative text-lg font-semibold ${project.statusColor}`}
                >
                  {project.projectStatus}
                </span>
                {/* Tombol View Project */}
                <a
                  href={project.linkURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 rounded-md border border-white bg-black/90 px-4 py-2 text-white shadow-md transition-all duration-300 hover:border-prLavender hover:text-prLavender">
                    {project.linkIcon}
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* End Project Box */}

        {/* More Projects */}
        <div className="project-box">
          <div className="flex h-[300px] flex-col items-center justify-center rounded-xl bg-sldGrey p-6">
            <div className="py-6 text-4xl font-bold">More Projects?</div>
            <div className="">
              <a href="https://github.com/farhanmaul987" target="_blank">
                <button className="project-btn btn-content">
                  <span className="btn-circle bg-prLavender">
                    <span className="btn-icon btn-arrow"></span>
                  </span>
                  <span className="btn-text">View Project</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* End More Projects */}
      </div>

      {/* End Md and Lg */}

      {/* Sm */}
      <div className="mt-16 flex justify-center md:hidden">
        {/* Project Box */}
        <Swiper spaceBetween={1} loop={false}>
          {projectList.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-boxsm mx-auto">
                <div className="project-container">
                  {/* Project Box Front */}
                  <div className="project-box-front">
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-sm"
                      style={{
                        backgroundImage: `url(${project.img})`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:blur-[1px]"></div>
                    <div className="project-title h-[18%]">
                      <div
                        className={`${project.titleColor} project-title-content`}
                      >
                        {project.title}
                      </div>
                    </div>
                    <div className="project-description h-[18%]">
                      {project.description}
                    </div>
                  </div>
                  {/* End Project Box Front */}

                  {/* Project Box Back */}
                  <div className="project-box-back">
                    {/* Badge Section */}
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge, index) => (
                        <img
                          key={index}
                          src={`https://img.shields.io/badge/${badge.text}-${badge.color}?logo=${badge.logo}&logoColor=${badge.logoColor}&style=flat-square`}
                          alt={`${badge.text} badge`}
                          className="h-6"
                        />
                      ))}
                    </div>
                    <div>
                      <a href={project.linkURL} target="_blank">
                        <button className="project-btn btn-content">
                          <span className={project.buttonStyle}>
                            <span className="btn-icon btn-arrow"></span>
                          </span>
                          <span className="btn-text">
                            {project.projectStatus}
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="project-box-more mx-auto">
              <div className="project-container-more">
                <div className="project-more">
                  <div className="py-6 text-4xl font-bold">More Projects?</div>
                  <div>
                    <a href="https://github.com/farhanmaul987" target="_blank">
                      <button className="project-btn btn-content">
                        <span className="btn-circle bg-prLavender">
                          <span className="btn-icon btn-arrow"></span>
                        </span>
                        <span className="btn-text">View Project</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* End Sm */}
      {/* End Content */}
    </section>
  );
}

export default Project;
