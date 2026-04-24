// ─────────────────────────────────────────────────────────────────
//  TIMELINE DATA
//  Tambah / edit / hapus entry di array `timelineEvents` di bawah.
//  Urutkan dari yang PALING LAMA ke yang PALING BARU (cronologis).
//
//  Tipe kategori yang tersedia:
//   "education"     → Pendidikan formal (SD/SMP/SMA/Kuliah)
//   "organization"  → Ikut organisasi / kepanitiaan / komunitas
//   "project"       → Mulai / selesai personal project
//   "work"          → Internship / kerja / freelance
//   "achievement"   → Prestasi / penghargaan / sertifikat
// ─────────────────────────────────────────────────────────────────

export type TimelineCategory =
  | "education"
  | "organization"
  | "project"
  | "work"
  | "achievement";

export interface TimelineEvent {
  id: number;
  year: string;         // Contoh: "2020" atau "2020 – 2021"
  month?: string;       // Contoh: "Mar", "Aug" — opsional
  title: string;        // Nama event / pencapaian
  place?: string;       // Nama instansi / perusahaan / organisasi
  description: string;  // Deskripsi singkat
  category: TimelineCategory;
  tags?: string[];      // Teknologi / skill yang terlibat
  link?: string;        // Link eksternal opsional
}

export const categoryMeta: Record<
  TimelineCategory,
  { label: string; color: string; bg: string; border: string }
> = {
  education: {
    label: "Education",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/30",
  },
  organization: {
    label: "Organization",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
  },
  project: {
    label: "Project",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/30",
  },
  work: {
    label: "Work",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
  },
  achievement: {
    label: "Achievement",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/30",
  },
};

// ──────────────────────────────────────────────
//  ISIAN DATA — Edit sesuai perjalananmu
// ──────────────────────────────────────────────
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2014 - 2020",        // ← Ganti sesuai tahun masuk SMA/SMK
    title: "SMP - SMK",
    description:
      "Awal perjalanan. Di sini mulai banyak belajar IT.",
    category: "education",
    tags: ["High School"],
  },
  {
    id: 2,
    year: "2020",        // ← Sesuaikan tahun masuk kuliah
    title: "Masuk S1 Informatika",
    place: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
    description:
      "Diterima di program studi Informatika. Dari sini mulai belajar algoritma, struktur data, dan mulai serius di programming.",
    category: "education",
    tags: ["Informatika", "UPN Veteran Jawa Timur"],
  },
  {
    id: 3,
    year: "2021 - 2022",        // ← Sesuaikan
    title: "Ikut Organisasi",
    place: "Ikatan Mahaiswa Jombang UPN Veteran Jawa Timur",  // ← Isi nama organisasinya
    description:
      "Belajar kerja tim, kepemimpinan, dan manajemen waktu di luar kelas. Menjadi bagian dari Divisi KOMINFO",
    category: "organization",
    tags: ["Teamwork", "IMAJIPENA"],
  },
  {
    id: 4,
    year: "2022 - 2023",
    title: "Ikut Organisasi Internal Kampus",
    place: "BLM Fasilkom",
    description:
      "Menjadi bagian dari komisi 1 yang bertugas mengawasi Divisi PSDM BEM Fasilkom dan menjadi narahubung pihak luar dengan BLM Fasilkom.",
    category: "organization",
    tags: ["Leadership", "BLM Fasilkom"],
  },
  {
    id: 5,
    year: "2022",
    title: "Kampus Merdeka – UI/UX Design Mastery",
    place: "Skilvul Tech4Impact (Kampus Merdeka Batch 3)",
    description:
      "Mengikuti program Kampus Merdeka di Skilvul dengan fokus UI/UX Design Mastery. Case study: Redesign mobile app Waste4Change.",
    category: "achievement",
    tags: ["Figma", "UI/UX Design", "Kampus Merdeka"],
    link: "https://link.farhanmaul.my.id/w4c",
  },
  {
    id: 6,
    year: "2023",
    title: "Internship – Web Developer",
    place: "BPK Perwakilan Provinsi Jawa Timur",
    description:
    "Magang sebagai web developer dan membangun SIPERU — Sistem Booking Ruang Rapat berbasis web yang menggantikan proses manual di lingkungan BPK.",
    category: "work",
    tags: ["PHP", "JavaScript", "MySQL", "Web Development"],
    link: "https://link.farhanmaul.my.id/siperu",
  },
  {
    id: 7,
    year: "2023",
    title: "Pelatihan Junior Web Developer",
    place: "Lembaga Sertifikasi Profesi Teknologi Digital",
    description:
      "Mengikuti program Junior Web Developer bersertifikat dari LSP.",
    category: "achievement",
    tags: ["HTML", "CSS", "JavaScript", "LSP", "Junior Web Developer"],
  },
  {
    id: 8,
    year: "2024",
    title: "Skripsi – Manhwa Recommendation Bot",
    description:
      "Mengerjakan tugas akhir: membangun Discord Bot (Petty) yang memberikan rekomendasi manhwa menggunakan dataset 2.800+ judul dengan content-based filtering.",
    category: "project",
    tags: ["Discord.js", "Node.js", "Recommendation System"],
    link: "https://link.farhanmaul.my.id/petty",
  },
  {
    id: 9,
    year: "Jan 2025",        // ← Sesuaikan tahun lulus
    title: "Lulus S1 Informatika",
    place: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
    description:
      "Menyelesaikan studi Sarjana Informatika. Empat tahun penuh belajar, coding, organisasi, dan membangun berbagai project.",
    category: "education",
    tags: ["Bachelor Degree", "Informatika"],
  },
  {
    id: 10,
    year: "2025 - Now",        // ← Sesuaikan tahun mulai kerja
    title: "IT Developer – Manufacturing Industry",
    description:
      "Mulai bekerja sebagai IT Developer di perusahaan manufaktur. Mengelola berbagai sistem internal yang digunakan dalam operasional bisnis sehari-hari — dari API backend sampai interface user.",
    category: "work",
    tags: ["Laravel", "React", "PostgreSQL", "Wordpress", "Redis"],
  },
];
