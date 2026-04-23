import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
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
  { href: "https://github.com/farhanmaul987", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/farhanmaul987", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "mailto:farhanmaul987@gmail.com", icon: Mail, label: "Email" },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ── Code card with manual syntax highlighting ───────────────────
function CodeCard() {
  return (
    <div className="h-full flex flex-col">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 mb-3 pb-2.5 border-b border-border/60">
        <div className="w-2 h-2 rounded-full bg-rose-500/70" />
        <div className="w-2 h-2 rounded-full bg-amber-500/70" />
        <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
        <span className="ml-2 text-[10px] text-subtle font-mono">farhan.config.ts</span>
      </div>

      {/* Code */}
      <div className="font-mono text-[10px] leading-[1.7] flex-1 overflow-hidden">
        <div>
          <span className="text-violet-400">const</span>{" "}
          <span className="text-sky-300">me</span>{" "}
          <span className="text-zinc-500">=</span>{" "}
          <span className="text-zinc-400">{"{"}</span>
        </div>
        <div>
          {"  "}
          <span className="text-sky-200">role</span>
          <span className="text-zinc-500">:</span>{" "}
          <span className="text-emerald-300">"IT Developer"</span>
          <span className="text-zinc-500">,</span>
        </div>
        <div>
          {"  "}
          <span className="text-sky-200">company</span>
          <span className="text-zinc-500">:</span>{" "}
          <span className="text-emerald-300">"Manufacturing"</span>
          <span className="text-zinc-500">,</span>
        </div>
        <div>
          {"  "}
          <span className="text-sky-200">stack</span>
          <span className="text-zinc-500">:</span>{" "}
          <span className="text-zinc-400">[</span>
        </div>
        <div>
          {"    "}
          <span className="text-emerald-300">"Laravel"</span>
          <span className="text-zinc-500">,</span>
        </div>
        <div>
          {"    "}
          <span className="text-emerald-300">"React"</span>
          <span className="text-zinc-500">,</span>
        </div>
        <div>
          {"    "}
          <span className="text-emerald-300">"PostgreSQL"</span>
          <span className="text-zinc-500">,</span>
        </div>
        <div>
          {"  "}
          <span className="text-zinc-400">]</span>
          <span className="text-zinc-500">,</span>
        </div>
        <div>
          {"  "}
          <span className="text-sky-200">available</span>
          <span className="text-zinc-500">:</span>{" "}
          <span className="text-orange-400">true</span>
          <span className="text-zinc-500">,</span>
        </div>
        <div>
          <span className="text-zinc-400">{"}"}</span>
        </div>
        {/* Blinking cursor */}
        <div className="mt-0.5">
          <span className="text-zinc-500">{">"}</span>{" "}
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 1] }}
            className="inline-block w-[6px] h-[10px] bg-primary/70 align-middle"
          />
        </div>
      </div>
    </div>
  );
}

// ── Right side — Bento grid ──────────────────────────────────────
function HeroBento() {
  return (
    <>
      {/* Desktop bento grid */}
      <div className="hidden lg:grid grid-cols-5 grid-rows-3 gap-3 h-[480px]">

        {/* Photo — 3/5 cols × full height */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="col-span-3 row-span-3 relative rounded-2xl overflow-hidden bg-card group"
        >
          <img
            src={myPhoto}
            alt="Farhan Maulana"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Gradient overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent pointer-events-none" />
          {/* Name badge */}
          <div className="absolute bottom-4 left-4">
            <p className="text-sm font-semibold text-white drop-shadow">Farhan Maulana</p>
            <p className="text-xs text-white/50 font-mono">farhanmaul.my.id</p>
          </div>
        </motion.div>

        {/* Status card — top right */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-2 row-span-1 bg-card border border-border rounded-2xl p-4 flex flex-col justify-between hover:border-border-hover transition-colors duration-200"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400">
              Available
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-text">IT Developer</p>
            <p className="text-xs text-subtle mt-0.5">Manufacturing Industry</p>
          </div>
        </motion.div>

        {/* Code card — bottom right, 2 rows tall */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="col-span-2 row-span-2 bg-card border border-border rounded-2xl p-4 hover:border-border-hover transition-colors duration-200 overflow-hidden"
        >
          <CodeCard />
        </motion.div>
      </div>

      {/* Mobile — simple photo */}
      <div className="lg:hidden flex justify-center pt-8">
        <div className="relative w-64 rounded-2xl overflow-hidden">
          <img
            src={myPhoto}
            alt="Farhan Maulana"
            className="w-full h-auto object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Page component ───────────────────────────────────────────────
export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot grid background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Subtle top glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/8 blur-3xl rounded-full pointer-events-none" />

      <div className="section-container w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-10 items-center">

          {/* Left — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
                <span className="gradient-text">Full Stack</span>
                <br />
                <span className="text-text">Developer</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted leading-relaxed max-w-md"
            >
              I build production-ready systems used in real business
              environments — focused on backend performance, scalable APIs,
              and clean system design.
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
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <Button size="lg" onClick={() => handleScroll("#projects")} className="group">
                View Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button size="lg" variant="outline" onClick={() => handleScroll("#contact")}>
                Contact Me
              </Button>
            </motion.div>

            {/* Social row */}
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

          {/* Right — Bento */}
          <HeroBento />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="hidden lg:flex justify-center mt-14"
        >
          <div className="flex flex-col items-center gap-2 text-subtle">
            <span className="text-xs tracking-widest uppercase text-[10px]">scroll</span>
            <motion.div
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-subtle to-transparent origin-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
