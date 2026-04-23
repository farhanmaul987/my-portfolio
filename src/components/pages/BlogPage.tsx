import { useState, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ExternalLink, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import {
  articles,
  platformMeta,
  type ArticlePlatform,
  type Article,
} from "@/data/articles";
import { cn } from "@/lib/utils";

// ── Platform icon badge ───────────────────────────────────────────
function PlatformBadge({
  platform,
  platformName,
}: {
  platform: ArticlePlatform;
  platformName?: string;
}) {
  const meta = platformMeta[platform];
  const label = platform === "other" ? (platformName ?? "Article") : meta.label;

  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border",
        meta.textColor,
        meta.bg,
        meta.border,
      )}
    >
      {label}
    </span>
  );
}

// ── Article card ──────────────────────────────────────────────────
function ArticleCard({
  article,
  featured,
}: {
  article: Article;
  featured?: boolean;
}) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-card overflow-hidden",
        "hover:border-border-hover hover:shadow-xl hover:shadow-primary/5 transition-all duration-300",
        featured && "sm:flex-row",
      )}
    >
      {/* Thumbnail */}
      {article.thumbnail && (
        <div
          className={cn(
            "overflow-hidden bg-card-hover",
            featured ? "sm:w-64 h-48 sm:h-auto flex-shrink-0" : "h-44",
          )}
        >
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* No thumbnail — colored top bar */}
      {!article.thumbnail && (
        <div
          className={cn(
            "h-1 w-full",
            platformMeta[article.platform].bg.replace("/10", "/60"),
          )}
        />
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <PlatformBadge
            platform={article.platform}
            platformName={article.platformName}
          />
          <span className="text-xs text-subtle ml-auto">{formattedDate}</span>
        </div>

        <div className="flex-1">
          <h3
            className={cn(
              "font-semibold text-text leading-snug group-hover:text-primary transition-colors",
              featured ? "text-lg" : "text-base",
            )}
          >
            {article.title}
          </h3>
          <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-border">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded border border-border text-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="ml-auto inline-flex items-center gap-1 text-xs text-primary font-medium">
            Read more
            <ExternalLink size={11} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

// ── Empty state ───────────────────────────────────────────────────
function EmptyState({ query }: { query: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full py-24 flex flex-col items-center gap-3 text-center"
    >
      <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-subtle">
        <Tag size={20} />
      </div>
      <p className="text-muted text-sm">
        {query
          ? `No articles found for "${query}".`
          : "No articles published yet. Check back soon."}
      </p>
    </motion.div>
  );
}

// ── Placeholder — shown when articles array is empty ──────────────
function ComingSoon() {
  const platforms = ["Medium", "Instagram", "Behance", "LinkedIn", "DEV.to"];

  return (
    <div className="py-24 flex flex-col items-center gap-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Tag size={24} />
        </div>
        <h3 className="text-xl font-semibold text-text">Articles coming soon</h3>
        <p className="text-muted text-sm max-w-md leading-relaxed">
          Tulisan dari berbagai platform akan dikumpulkan di sini — Medium,
          Instagram, Behance, dan lainnya.
        </p>
      </motion.div>

      {/* Platform chips */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {platforms.map((p, i) => (
          <motion.span
            key={p}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="px-4 py-1.5 rounded-full border border-border text-sm text-muted bg-card"
          >
            {p}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Filter button ─────────────────────────────────────────────────
const ALL_PLATFORM = "all" as const;
type PlatformFilter = ArticlePlatform | typeof ALL_PLATFORM;

// ── Page ──────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activePlatform, setActivePlatform] =
    useState<PlatformFilter>("all");
  const [query, setQuery] = useState("");

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -30]);

  // Derive available platforms from actual data
  const availablePlatforms = useMemo(() => {
    const platforms = new Set(articles.map((a) => a.platform));
    return Array.from(platforms) as ArticlePlatform[];
  }, []);

  const platformFilters: { value: PlatformFilter; label: string }[] = [
    { value: "all", label: `All (${articles.length})` },
    ...availablePlatforms.map((p) => ({
      value: p,
      label: platformMeta[p].label,
    })),
  ];

  // Filter logic
  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchPlatform =
        activePlatform === "all" || a.platform === activePlatform;
      const q = query.toLowerCase();
      const matchQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      return matchPlatform && matchQuery;
    });
  }, [activePlatform, query]);

  const featured = filtered.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);
  const hasContent = articles.length > 0;

  return (
    <main className="min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden pt-24 pb-16 border-b border-border">
        <div className="absolute top-0 right-1/4 w-96 h-64 bg-primary/5 blur-3xl pointer-events-none" />

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
            <span className="section-label">Writing</span>
            <h1 className="section-heading mt-2 text-4xl sm:text-5xl">
              Articles & Blog
            </h1>
            <p className="text-muted mt-3 max-w-lg leading-relaxed">
              Ide, catatan, dan case study yang dipublish di berbagai platform
              — semua terkumpul di sini.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Controls */}
      {hasContent && (
        <div className="sticky top-16 z-40 bg-bg/80 backdrop-blur-md border-b border-border">
          <div className="section-container py-3 flex flex-col sm:flex-row gap-3">
            {/* Platform filters */}
            <div className="flex gap-1 overflow-x-auto">
              {platformFilters.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setActivePlatform(value)}
                  className={cn(
                    "relative flex-shrink-0 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer",
                    activePlatform === value
                      ? "text-text"
                      : "text-subtle hover:text-muted",
                  )}
                >
                  {activePlatform === value && (
                    <motion.div
                      layoutId="blog-filter-bg"
                      className="absolute inset-0 bg-card border border-border rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative sm:ml-auto">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-subtle"
              />
              <input
                type="text"
                placeholder="Search articles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full sm:w-56 h-9 pl-9 pr-3 rounded-lg border border-border bg-card text-sm text-text placeholder:text-subtle focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="section-container py-14">
        {!hasContent ? (
          <ComingSoon />
        ) : (
          <div className="flex flex-col gap-5">
            {/* Featured article */}
            <AnimatePresence mode="popLayout">
              {featured && (
                <motion.div
                  key={featured.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <ArticleCard article={featured} featured />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {rest.length > 0 ? (
                  rest.map((article, i) => (
                    <motion.div
                      key={article.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <ArticleCard article={article} />
                    </motion.div>
                  ))
                ) : !featured ? (
                  <EmptyState query={query} />
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}
