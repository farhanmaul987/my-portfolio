import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  AnimatePresence,
} from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  timelineEvents,
  categoryMeta,
  type TimelineCategory,
  type TimelineEvent,
} from "@/data/timeline";
import { cn } from "@/lib/utils";

// ── Animated dot on the line ──────────────────────────────────────
function TimelineDot({ color }: { color: string }) {
  return (
    <div className="relative z-10 flex-shrink-0">
      <div
        className={cn(
          "w-3 h-3 rounded-full border-2 border-bg ring-2",
          color.replace("text-", "bg-"),
        )}
        style={{ boxShadow: "0 0 0 4px rgba(116,86,255,0.15)" }}
      />
    </div>
  );
}

// ── Single timeline card ──────────────────────────────────────────
function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const meta = categoryMeta[event.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex gap-6 pb-12"
    >
      {/* Year label — left gutter */}
      <div className="hidden sm:flex flex-col items-end w-20 flex-shrink-0 pt-0.5">
        <span className="text-xs font-semibold text-subtle tabular-nums">
          {event.month ? `${event.month} ${event.year}` : event.year}
        </span>
      </div>

      {/* Dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.04 + 0.15, type: "spring", stiffness: 300 }}
          className={cn(
            "mt-1 w-3 h-3 rounded-full border-2 border-bg flex-shrink-0 z-10",
            meta.color.replace("text-", "bg-"),
          )}
        />
      </div>

      {/* Card body */}
      <div className="flex-1 min-w-0 pb-2">
        {/* Mobile year */}
        <span className="sm:hidden text-xs font-medium text-subtle mb-1 block">
          {event.month ? `${event.month} ${event.year}` : event.year}
        </span>

        <motion.div
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "relative p-5 rounded-xl border bg-card overflow-hidden",
            "transition-all duration-300 hover:border-border-hover hover:shadow-lg",
            meta.border,
          )}
        >
          {/* Left accent bar */}
          <div
            className={cn(
              "absolute left-0 top-3 bottom-3 w-0.5 rounded-r-full",
              meta.color.replace("text-", "bg-"),
            )}
          />

          {/* Header */}
          <div className="flex flex-wrap items-start gap-2 mb-2">
            <span
              className={cn(
                "inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border",
                meta.color,
                meta.bg,
                meta.border,
              )}
            >
              {meta.label}
            </span>
          </div>

          <h3 className="text-base font-semibold text-text leading-snug mb-0.5">
            {event.title}
          </h3>

          {event.place && (
            <p className="text-xs text-muted mb-2 font-medium">{event.place}</p>
          )}

          <p className="text-sm text-muted leading-relaxed">{event.description}</p>

          {/* Footer */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {event.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded border border-border text-subtle"
              >
                {tag}
              </span>
            ))}
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1 text-xs text-muted hover:text-primary transition-colors"
              >
                <ExternalLink size={11} />
                <span>View</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Filter pill component ─────────────────────────────────────────
const ALL = "all" as const;
type FilterValue = TimelineCategory | typeof ALL;

const filterOptions: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "education", label: "Education" },
  { value: "work", label: "Work" },
  { value: "project", label: "Project" },
  { value: "organization", label: "Organization" },
  { value: "achievement", label: "Achievement" },
];

// ── Page ──────────────────────────────────────────────────────────
export default function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Scroll-linked line animation
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end 80%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const filteredEvents =
    activeFilter === "all"
      ? timelineEvents
      : timelineEvents.filter((e) => e.category === activeFilter);

  // Header parallax
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <main className="min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden pt-24 pb-16 border-b border-border">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-64 bg-primary/5 blur-3xl pointer-events-none" />

        <motion.div style={{ y: headerY }} className="section-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">My Journey</span>
            <h1 className="section-heading mt-2 text-4xl sm:text-5xl">
              Timeline
            </h1>
            <p className="text-muted mt-3 max-w-lg leading-relaxed">
              Dari SMA sampai sekarang — semua yang sudah dilalui, dipelajari,
              dan dibangun.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            {[
              { value: timelineEvents.length, label: "Milestones" },
              {
                value: timelineEvents.filter((e) => e.category === "work")
                  .length,
                label: "Work Experiences",
              },
              {
                value: timelineEvents.filter((e) => e.category === "project")
                  .length,
                label: "Projects",
              },
            ].map(({ value, label }) => (
              <div key={label}>
                <span className="text-2xl font-bold text-primary">{value}+</span>
                <p className="text-xs text-subtle">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-16 z-40 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="section-container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {filterOptions.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={cn(
                  "relative flex-shrink-0 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                  activeFilter === value
                    ? "text-text"
                    : "text-subtle hover:text-muted",
                )}
              >
                {activeFilter === value && (
                  <motion.div
                    layoutId="timeline-filter-bg"
                    className="absolute inset-0 bg-card border border-border rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="section-container py-16" ref={containerRef}>
        <div className="relative" ref={lineRef}>
          {/* Vertical line — track */}
          <div className="absolute left-[85px] sm:left-[112px] top-0 bottom-0 w-px bg-border/60" />

          {/* Vertical line — animated progress */}
          <div className="absolute left-[85px] sm:left-[112px] top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-primary origin-top"
              style={{ scaleY }}
            />
          </div>

          {/* Events */}
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TimelineCard event={event} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center text-muted"
            >
              <p className="text-sm">No events in this category yet.</p>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
