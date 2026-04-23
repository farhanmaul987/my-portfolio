import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Layers, Zap, Database, Globe } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end web application development — from database schema to UI. Clean code, proper separation of concerns, and production-ready deployment.",
    tags: ["Laravel", "React", "REST API"],
  },
  {
    icon: Globe,
    title: "API Development",
    description:
      "Designing and building RESTful APIs that are fast, secure, and well-structured. Documented, versioned, and built to be consumed by multiple clients.",
    tags: ["Laravel", "Authentication", "JSON"],
  },
  {
    icon: Zap,
    title: "System Optimization",
    description:
      "Profiling slow queries, caching with Redis, reducing response times, and fixing N+1 problems. Performance is part of the feature, not an afterthought.",
    tags: ["Redis", "Query Optimization", "Caching"],
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing normalized schemas, writing efficient queries, and managing migrations. Choosing the right storage solution for the right problem.",
    tags: ["PostgreSQL", "MySQL", "Indexing"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhatIDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-14"
        >
          {/* Header */}
          <div className="flex flex-col gap-3">
            <motion.span variants={fadeUp} className="section-label">
              What I Do
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-heading">
              Areas I work in
              <br />
              <span className="text-muted font-normal text-2xl">
                and care about getting right.
              </span>
            </motion.h2>
          </div>

          {/* Cards */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {services.map(({ icon: Icon, title, description, tags }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group flex flex-col gap-5 p-6 rounded-xl border border-border bg-card hover:border-border-hover hover:bg-card-hover transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon size={20} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-text">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded border border-border text-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
