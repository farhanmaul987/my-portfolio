import { SiGithub } from "@icons-pack/react-simple-icons";
import { projectList } from "./projectList";

function ProjectBase() {
  return (
    <div className="hidden grid-cols-2 gap-y-6 md:grid md:justify-center md:px-8 md:pt-20 lg:grid-cols-3 lg:px-14">
      {/* Project Box */}
      {projectList.map((project) => (
        <div className="project-box group" key={project.id}>
          <div className="relative overflow-hidden rounded-xl bg-sldGrey p-6 transition-all duration-300">
            <div className="flex flex-col overflow-hidden rounded-xl border-none">
              <div className="relative items-center justify-center">
                {/* Image  */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover blur-[2px] transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]"
                />
                {/* End Image */}

                {/* Status */}
                <div className="absolute left-0 top-0 z-10">
                  <div
                    className={`flex w-full items-center ${project.statusColor} gap-1 px-2 py-1 font-semibold transition-all duration-300 lg:group-hover:opacity-50`}
                  >
                    <project.statusIcon size={18} />
                    {project.projectStatus}
                  </div>
                </div>
                {/* End Status */}

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-all duration-300">
                  {/* Title */}
                  <div
                    className={`${project.titleStyle} font-bold drop-shadow-xl transition-all duration-300 lg:group-hover:opacity-50 lg:group-hover:blur-[1px]`}
                  >
                    {project.title}
                  </div>
                  {/* End Title */}

                  {/* Description */}
                  <div className="text-lg font-semibold drop-shadow-xl transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]">
                    {project.description}
                  </div>
                  {/* End Description */}
                </div>
              </div>
            </div>
            {/* Detail */}
            <div className="pt-5 text-justify transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]">
              {project.detail}
            </div>
            {/* End Detail */}

            {/* Badges */}
            <div className="flex flex-wrap gap-1 pt-3 transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]">
              {project.badges.map((badge, index) => (
                <img
                  key={index}
                  src={`https://img.shields.io/badge/${badge.text}-${badge.color}?logo=${badge.logo}&logoColor=${badge.logoColor}&style=flat-square`}
                  alt={`${badge.text} badge`}
                  className="h-6 transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]"
                />
              ))}
            </div>
            {/* End Badges */}

            {/* Lg Button Link */}
            <div className="left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 transition-all duration-300 lg:absolute lg:flex lg:opacity-0 lg:group-hover:scale-110 lg:group-hover:opacity-100">
              <a
                href={project.linkURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex gap-2 rounded-md border border-white bg-black/90 px-4 py-2 text-white shadow-md transition-all duration-300 hover:border-prLavender hover:text-prLavender">
                  {project.linkIcon}
                  View Project
                </button>
              </a>
            </div>
            {/* End Lg Button Link */}

            {/* Md Button Link */}
            <div className="pt-[21px] lg:hidden">
              <a
                href={project.linkURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-full border border-white p-2 transition-all duration-300 hover:border-prLavender hover:text-prLavender">
                  {project.linkIcon}
                </button>
              </a>
            </div>
            {/* End Md Button Link */}
          </div>
        </div>
      ))}

      {/* End Project Box */}

      {/* More Projects */}
      <div className="h-full w-full">
        <div className="relative mx-auto flex h-full w-full items-center justify-center">
          <div className="flex aspect-square w-[90%] max-w-sm flex-col items-center justify-center rounded-xl bg-sldGrey p-5 text-center">
            <div className="py-6 text-4xl font-bold">More Projects?</div>
            <a href="https://github.com/farhanmaul987" target="_blank">
              {/* Lg Button Link */}
              <button className="lg:project-btn lg:btn-content hidden">
                <span className="btn-circle bg-prLavender">
                  <span className="btn-icon btn-arrow"></span>
                </span>
                <span className="btn-text">View Project</span>
              </button>
              {/* End Lg Button Link */}

              {/* Md Button Link */}
              <button className="flex gap-2 rounded-md border border-white bg-black/90 px-4 py-2 text-xl text-white shadow-md transition-all duration-300 hover:border-prLavender hover:text-prLavender lg:hidden">
                <SiGithub size={28} />
                View Project
              </button>
              {/* End Md Button Link */}
            </a>
          </div>
        </div>
      </div>
      {/* End More Projects */}
    </div>
  );
}

export default ProjectBase;
