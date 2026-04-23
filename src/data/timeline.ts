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
    year: "2019",        // ← Ganti sesuai tahun masuk SMA/SMK
    title: "Masuk SMA / SMK",
    place: "Nama Sekolah",  // ← Isi nama sekolahnya
    description:
      "Awal perjalanan. Di sini mulai kenal dunia teknologi dan komputer untuk pertama kalinya.",
    category: "education",
    tags: ["High School"],
  },
  {
    id: 2,
    year: "2020",        // ← Sesuaikan
    title: "Mulai Belajar Programming",
    description:
      "Pertama kali berkenalan dengan HTML, CSS, dan sedikit JavaScript. Dari sini mulai ketagihan.",
    category: "project",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    year: "2020",        // ← Sesuaikan tahun masuk kuliah
    title: "Masuk S1 Teknik Informatika",
    place: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
    description:
      "Diterima di program studi Informatika. Dari sini petualangan beneran dimulai — belajar algoritma, struktur data, dan mulai serius di programming.",
    category: "education",
    tags: ["Informatika", "UPN Veteran Jawa Timur"],
  },
  {
    id: 4,
    year: "2021",        // ← Sesuaikan
    title: "Ikut Organisasi / UKM",
    place: "Nama Organisasi",  // ← Isi nama organisasinya
    description:
      "Bergabung dengan organisasi di kampus. Belajar kerja tim, kepemimpinan, dan manajemen waktu di luar kelas.",
    category: "organization",
    tags: ["Leadership", "Teamwork"],
  },
  {
    id: 5,
    year: "2022",
    title: "Kampus Merdeka – UI/UX Design",
    place: "Skilvul Tech4Impact (Batch 3)",
    description:
      "Mengikuti program Kampus Merdeka di Skilvul dengan fokus UI/UX Design Mastery. Case study: redesign mobile app Waste4Change.",
    category: "achievement",
    tags: ["Figma", "UI/UX Design", "Kampus Merdeka"],
    link: "https://link.farhanmaul.my.id/w4c",
  },
  {
    id: 6,
    year: "2023",
    month: "Jan",
    title: "Internship – Web Developer",
    place: "BPK Perwakilan Provinsi Jawa Timur",
    description:
      "Magang sebagai web developer dan membangun SIPERU — sistem booking ruang rapat berbasis web yang menggantikan proses manual di lingkungan BPK.",
    category: "work",
    tags: ["PHP", "JavaScript", "MySQL", "Web Development"],
    link: "https://link.farhanmaul.my.id/siperu",
  },
  {
    id: 7,
    year: "2023",
    month: "Sep",
    title: "Skripsi – Manhwa Recommendation Bot",
    description:
      "Mengerjakan tugas akhir: membangun Discord Bot (Petty) yang memberikan rekomendasi manhwa menggunakan dataset 2.800+ judul dengan content-based filtering.",
    category: "project",
    tags: ["Discord.js", "Node.js", "Recommendation System"],
    link: "https://link.farhanmaul.my.id/petty",
  },
  {
    id: 8,
    year: "2024",        // ← Sesuaikan tahun lulus
    title: "Lulus S1 Teknik Informatika",
    place: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
    description:
      "Menyelesaikan studi Sarjana Informatika. Empat tahun penuh belajar, coding, organisasi, dan membangun berbagai project.",
    category: "education",
    tags: ["Bachelor Degree", "Informatika"],
  },
  {
    id: 9,
    year: "2024",        // ← Sesuaikan tahun mulai kerja
    title: "IT Developer – Manufacturing Industry",
    place: "Nama Perusahaan",  // ← Isi nama perusahaannya (opsional kalau private)
    description:
      "Mulai bekerja sebagai IT Developer di perusahaan manufaktur. Mengelola sistem internal yang digunakan dalam operasional bisnis sehari-hari — dari API backend sampai interface user.",
    category: "work",
    tags: ["Laravel", "React", "PostgreSQL", "Redis"],
  },
];
