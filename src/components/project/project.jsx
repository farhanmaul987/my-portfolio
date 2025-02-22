import Status from "./status";
import { projects } from "./projectList";

function Project() {
  return (
    <>
      <Status />
      <section id="project">
        {/* Text */}
        <div className="pt-8">
          <div className="absolute text-[150px] font-semibold text-outline w-full left-[-80px]">
            MY PROJECT
          </div>
          <div className="px-16 mt-[90px]">
            <div className="relative text-4xl font-semibold text-center justify-center items-center">
              Latest Project
            </div>
          </div>
        </div>
        {/* End Text */}

        {/* Content */}
        <div className="pt-20 flex flex-col justify-center items-center">
          {projects.map((project) => (
            <>
              <div className="project-box">
                <div className="project-container">
                  <div className="w-[25%]">
                    <img
                      src={project.img}
                      alt="img"
                      className="w-48 h-auto rounded-lg"
                    />
                  </div>
                  <div className="w-[60%] font-poppins font-semibold text-[20px]">
                    <span className={project.titleColor}>{project.title}</span>
                    {project.description}
                  </div>
                  <div className="w-[15%] text-right">
                    <a
                      href={project.linkURL}
                      target="_blank"
                      className="detailButton"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* End Content */}
      </section>
    </>
  );
}

export default Project;
