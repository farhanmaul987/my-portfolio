import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { projects } from "./projectList";
function Project() {
  return (
    <section id="project">
      {/* Text */}
      <div className="pt-8">
        <div className="md:text-outline hidden">MY PROJECT</div>
        <div className="hidden md:mt-[88px] md:px-16">
          <div className="relative items-center justify-center text-center text-white">
            <h2 className="heading-2">Latest Project</h2>
          </div>
        </div>
      </div>
      {/* End Text */}

      {/* Content */}
      {/* Md and Lg */}
      <div className="hidden md:flex md:flex-row md:justify-center md:pt-20">
        {/* Project Box */}
        {projects.map((project) => (
          <div className={project.projectBox} key={project.id}>
            <div className="project-container">
              {/* Project Box Front */}
              <div className="project-box-front">
                <div
                  className="absolute inset-0 bg-cover bg-center blur-sm"
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
                      <span className="btn-text">{project.projectStatus}</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Project Box */}

        {/* More Projects */}
        {/* <div className="project-box-more">
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
        </div> */}
        {/* End More Projects */}
      </div>
      {/* End Md and Lg */}

      {/* Sm */}
      <div className="mt-20 flex justify-center md:hidden">
        {/* Project Box */}
        <Swiper spaceBetween={1} loop={false}>
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-box mx-auto">
                <div className="project-container">
                  {/* Project Box Front */}
                  <div className="project-box-front">
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-sm"
                      style={{
                        backgroundImage: `url(${project.img})`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
