import { motion } from "motion/react";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import myPhoto from "@/assets/my-photo.webp";

const techBadges = [
  { label: "Laravel", color: "#FF2D20", bg: "rgba(255,45,32,0.1)" },
  { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.1)" },
  { label: "PostgreSQL", color: "#4169E1", bg: "rgba(65,105,225,0.1)" },
  { label: "Redis", color: "#DC382D", bg: "rgba(220,56,45,0.1)" },
];

const socials = [
  {
    href: "https://github.com/farhanmaul987",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/farhanmaul987",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "mailto:farhanmaul987@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="section-container w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="gradient-text">Full Stack</span>
                <br />
                <span className="text-text">Developer</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted leading-relaxed max-w-lg"
            >
              I build production-ready systems used in real business
              environments — focused on backend performance, scalable APIs, and
              clean system design.
            </motion.p>

            {/* Tech badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {techBadges.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border"
                  style={{
                    color: t.color,
                    background: t.bg,
                    borderColor: t.color + "33",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: t.color }}
                  />
                  {t.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="group"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll("#contact")}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-subtle hover:text-text transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-xs text-subtle">farhanmaul987@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-105 pointer-events-none" />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={myPhoto}
                  alt="Farhan Maulana"
                  className="w-72 sm:w-80 lg:w-96 h-auto object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent pointer-events-none" />
              </div>

              {/* Floating card — experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-card border border-border rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-muted">Currently at</p>
                <p className="text-sm font-semibold text-text">IT Developer</p>
                <p className="text-xs text-subtle">Manufacturing Industry</p>
              </motion.div>

              {/* Floating card — availability */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-6 bg-card border border-border rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink size={14} className="text-primary" />
                  <p className="text-sm font-medium text-text">farhanmaul.my.id</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="hidden lg:flex justify-center mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-subtle">
            <span className="text-xs">Scroll down</span>
            <div className="w-px h-12 bg-gradient-to-b from-subtle to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
