import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, CircleCheck, CircleDot } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isComplete = project.projectStatus === "COMPLETE";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 3) * 0.1 }}
      className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-border-hover transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-card-hover">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />

        {/* Status */}
        <div className="absolute top-3 left-3">
          <Badge variant={isComplete ? "status_complete" : "status_progress"}>
            <span className="flex items-center gap-1.5">
              {isComplete ? (
                <CircleCheck size={11} />
              ) : (
                <CircleDot size={11} className="animate-pulse" />
              )}
              {isComplete ? "Complete" : "In Progress"}
            </span>
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-xs text-subtle uppercase tracking-wider mb-1">
            {project.description}
          </p>
          <h3 className="text-base font-semibold text-text">{project.title}</h3>
        </div>

        <p className="text-sm text-muted leading-relaxed flex-1">{project.detail}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.badges.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center text-xs px-2 py-0.5 rounded border border-border bg-bg text-muted"
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          {project.linkWeb && (
            <a
              href={project.linkWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          <a
            href={project.linkURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text transition-colors ml-auto"
          >
            <GithubIcon width={13} height={13} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <div ref={ref} className="flex flex-col gap-3 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading"
          >
            Personal projects —
            <br />
            <span className="text-muted font-normal text-2xl">
              work projects are private.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-subtle max-w-lg"
          >
            Production work at my company lives in private repos — these are
            the personal projects I can share.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
