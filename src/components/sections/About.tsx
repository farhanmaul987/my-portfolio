import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Briefcase, Code2, Server } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Role",
    value: "IT Developer",
    sub: "Manufacturing Industry",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Backend & Web",
    sub: "Laravel · React · PostgreSQL",
  },
  {
    icon: Server,
    label: "Specialty",
    value: "System Design",
    sub: "APIs · Databases · Performance",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Indonesia",
    sub: "Available remotely",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            <motion.div variants={fadeUp}>
              <span className="section-label">About Me</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="section-heading">
              Building systems that
              <br />
              <span className="text-primary">actually work in production.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 text-muted leading-relaxed">
              <p>
                I'm a Full Stack Developer currently working as an IT Developer
                at a manufacturing company, where I handle internal systems
                used in day-to-day business operations.
              </p>
              <p>
                My focus is backend development — building reliable APIs,
                designing efficient database schemas, and making sure systems
                perform well under real workloads. On the frontend, I work with
                React to deliver clean, functional interfaces.
              </p>
              <p>
                I don't just write code that works in development. I write code
                that holds up in production, handles edge cases, and is
                maintainable by the next person who reads it.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2">
              <a
                href="https://link.farhanmaul.my.id/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
              >
                View Resume
                <span className="text-xs">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Highlights grid */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, value, sub }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col gap-2 p-5 rounded-xl border border-border bg-card hover:border-border-hover hover:bg-card-hover transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-subtle uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-text">{value}</p>
                  <p className="text-xs text-subtle mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
