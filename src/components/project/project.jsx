import { projects } from "./projectList";

function Project() {
  return (
    <section id="project">
      {/* Text */}
      <div className="pt-8">
        <div className="text-outline absolute left-[-80px] w-full text-[150px] font-semibold">
          MY PROJECT
        </div>
        <div className="mt-[88px] px-16">
          <div className="relative items-center justify-center text-center text-white">
            <h2 className="heading-2">Latest Project</h2>
          </div>
        </div>
      </div>
      {/* End Text */}

      {/* Content */}
      <div className="flex flex-row justify-center pt-20">
        {projects.map((project) => (
          <>
            <div className={project.projectBox}>
              <div className="project-container">
                <div>
                  <img
                    src={project.img}
                    alt="img"
                    className="h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </>
        ))}
        {/* More Projects */}
        <div className="project-box mt-[55px]">
          <div className="project-container">
            <div></div>
          </div>
        </div>
        {/* End More Projects */}
      </div>
      {/* End Content */}
    </section>
  );
}

export default Project;
