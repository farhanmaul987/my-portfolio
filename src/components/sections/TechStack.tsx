import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, Clock, FolderGit2, Building2 } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "On Progress",
    label: "Learning IT",
    sub: "Never stops, never plateaus",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    value: "1,000+",
    label: "Hours Learning",
    sub: "Daily practice since day one",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: FolderGit2,
    value: "6+",
    label: "Personal Projects",
    sub: "Built, shipped, and maintained",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: Building2,
    value: "Private",
    label: "Work Projects",
    sub: "Real systems, locked on GitHub",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

const techGroups = [
  {
    category: "Backend",
    techs: [
      { name: "Laravel", color: "#FF2D20" },
      { name: "PHP", color: "#777BB4" },
      { name: "Node.js", color: "#5FA04E" },
    ],
  },
  {
    category: "Frontend",
    techs: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    category: "Database",
    techs: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Redis", color: "#DC382D" },
    ],
  },
  {
    category: "Tools & Infra",
    techs: [
      { name: "Git", color: "#F05032" },
      { name: "Linux", color: "#FCC624" },
      { name: "Vite", color: "#646CFF" },
      { name: "REST API", color: "#7456FF" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="py-24 lg:py-32">
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
              Tech Stack
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-heading">
              Tools I actually use
              <br />
              <span className="text-muted font-normal text-2xl">every day at work.</span>
            </motion.h2>
          </div>

          {/* Stats row */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map(({ icon: Icon, value, label, sub, color, bg }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:border-border-hover transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className={`text-xl font-bold ${color}`}>{value}</p>
                  <p className="text-sm font-medium text-text">{label}</p>
                  <p className="text-xs text-subtle mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Tech groups */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techGroups.map(({ category, techs }) => (
              <motion.div key={category} variants={fadeUp} className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold text-subtle uppercase tracking-widest">
                  {category}
                </h3>
                <div className="flex flex-col gap-2">
                  {techs.map(({ name, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-border-hover hover:bg-card-hover transition-all duration-200 group"
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: color }}
                      />
                      <span className="text-sm text-muted group-hover:text-text transition-colors">
                        {name}
                      </span>
                    </div>
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
