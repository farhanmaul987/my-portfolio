// ─────────────────────────────────────────────────────────────────
//  ARTICLES / BLOG DATA
//  Tambah entry setiap kali kamu publish tulisan di platform manapun.
//  Web ini jadi aggregator — semua tulisan terkumpul di satu tempat.
//
//  Platform yang didukung:
//   "medium"     → medium.com
//   "instagram"  → instagram.com (carousel / caption panjang)
//   "behance"    → behance.net (case study / visual)
//   "linkedin"   → linkedin.com (article / post)
//   "dev"        → dev.to
//   "other"      → platform lain, isi platformName manual
//
//  Urutkan dari yang PALING BARU ke PALING LAMA.
// ─────────────────────────────────────────────────────────────────

export type ArticlePlatform =
  | "medium"
  | "instagram"
  | "behance"
  | "linkedin"
  | "dev"
  | "other";

export interface Article {
  id: number;
  title: string;
  summary: string;         // 1-2 kalimat deskripsi singkat
  date: string;            // Format: "YYYY-MM-DD" → contoh "2024-03-15"
  platform: ArticlePlatform;
  platformName?: string;   // Isi kalau platform = "other"
  url: string;             // Link ke artikel asli
  tags: string[];          // Topik / kategori
  thumbnail?: string;      // URL gambar cover (opsional)
  featured?: boolean;      // Set true buat tampil di bagian atas / highlight
}

export const platformMeta: Record<
  ArticlePlatform,
  { label: string; color: string; bg: string; border: string; textColor: string }
> = {
  medium: {
    label: "Medium",
    color: "#000000",
    bg: "bg-zinc-100/10",
    border: "border-zinc-400/30",
    textColor: "text-zinc-300",
  },
  instagram: {
    label: "Instagram",
    color: "#E1306C",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    textColor: "text-pink-400",
  },
  behance: {
    label: "Behance",
    color: "#1769FF",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    textColor: "text-blue-400",
  },
  linkedin: {
    label: "LinkedIn",
    color: "#0A66C2",
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    textColor: "text-sky-400",
  },
  dev: {
    label: "DEV.to",
    color: "#6B21A8",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    textColor: "text-violet-400",
  },
  other: {
    label: "Article",
    color: "#7456FF",
    bg: "bg-primary/10",
    border: "border-primary/30",
    textColor: "text-primary",
  },
};

// ──────────────────────────────────────────────
//  ISIAN DATA — Tambahkan tulisanmu di sini
//  Contoh entry di bawah bisa dihapus / diganti
// ──────────────────────────────────────────────
export const articles: Article[] = [
  // Contoh: uncomment dan isi datamu
  {
    id: 1,
    title: "Case Study: Redesign UI/UX Waste4Change",
    summary: "Proses redesign mobile app Waste4Change dari riset user sampai high-fidelity prototype.",
    date: "2022",
    platform: "medium",
    url: "https://link.farhanmaul.my.id/w4c",
    tags: ["UI/UX", "Figma", "Case Study"],
    featured: false,
  },
  {
    id: 2,
    title: "Judul artikel kamu",
    summary: "Deskripsi singkat 1-2 kalimat tentang isi artikel.",
    date: "2024-01-01",
    platform: "medium",
    url: "https://medium.com/@username/judul-artikel",
    tags: ["Laravel", "Backend", "Tips"],
    featured: false,
  },
];
