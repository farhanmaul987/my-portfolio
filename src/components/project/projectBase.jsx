import { SiGithub } from "@icons-pack/react-simple-icons";
import { projectList } from "./projectList";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ProjectBase() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="hidden grid-cols-2 gap-y-6 md:grid md:justify-center md:px-8 md:pt-20 lg:grid-cols-3 lg:px-14"
    >
      {projectList.map((project) => (
        <motion.div
          variants={itemVariants}
          key={project.id}
          className="project-box group"
        >
          <div className="relative overflow-hidden rounded-xl bg-sldGrey p-6 transition-all duration-300">
            <div className="flex flex-col overflow-hidden rounded-xl border-none">
              <div className="relative items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover blur-[2px] transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]"
                />
                <div className="absolute left-0 top-0 z-10">
                  <div
                    className={`flex w-full items-center ${project.statusColor} gap-1 px-2 py-1 font-semibold transition-all duration-300 lg:group-hover:opacity-50`}
                  >
                    <project.statusIcon size={18} />
                    {project.projectStatus}
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-all duration-300">
                  <div
                    className={`${project.titleStyle} font-bold drop-shadow-xl transition-all duration-300 lg:group-hover:opacity-50 lg:group-hover:blur-[1px]`}
                  >
                    {project.title}
                  </div>
                  <div className="text-lg font-semibold drop-shadow-xl transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]">
                    {project.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 text-justify transition-all duration-300 lg:group-hover:opacity-25 lg:group-hover:blur-[1px]">
              {project.detail}
            </div>
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
          </div>
        </motion.div>
      ))}

      {/* More Projects Box */}
      <motion.div variants={itemVariants} className="h-full w-full">
        <div className="relative mx-auto flex h-full w-full items-center justify-center">
          <div className="flex aspect-square w-[90%] max-w-sm flex-col items-center justify-center rounded-xl bg-sldGrey p-5 text-center">
            <div className="py-6 text-4xl font-bold">More Projects?</div>
            <a href="https://github.com/farhanmaul987" target="_blank">
              <button className="lg:project-btn lg:btn-content hidden">
                <span className="btn-circle bg-prLavender">
                  <span className="btn-icon btn-arrow"></span>
                </span>
                <span className="btn-text">View Projects</span>
              </button>
              <button className="flex gap-2 rounded-md border border-white bg-black/90 px-4 py-2 text-xl text-white shadow-md transition-all duration-300 hover:border-prLavender hover:text-prLavender lg:hidden">
                <SiGithub size={28} />
                View Project
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectBase;
