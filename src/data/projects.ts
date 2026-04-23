import w4change from "../assets/projects/w4c.webp";
import rbFasilkom from "../assets/projects/ruangbelajarfasilkom.webp";
import siperuImage from "../assets/projects/siperu.webp";
import pettyImage from "../assets/projects/petty.webp";
import myportfolio from "../assets/projects/myportfolio.webp";
import argameshop from "../assets/projects/argameshop.webp";

export type ProjectStatus = "COMPLETE" | "ON PROGRESS";

export interface Badge {
  text: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  detail: string;
  img: string;
  linkURL: string;
  linkWeb?: string;
  projectStatus: ProjectStatus;
  badges: Badge[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Argame Shop",
    description: "Online Game Top-Up Platform",
    detail:
      "E-commerce platform for in-game currency purchases. Features product catalog, purchase flow, and clean UI designed for fast and simple transactions.",
    img: argameshop,
    linkURL: "https://link.farhanmaul.my.id/argameshop",
    linkWeb: "https://argameshop.vercel.app/",
    projectStatus: "ON PROGRESS",
    badges: [
      { text: "Next.js", color: "#000000" },
      { text: "Node.js", color: "#339933" },
      { text: "MongoDB", color: "#47A248" },
    ],
  },
  {
    id: 2,
    title: "SIPERU",
    description: "Meeting Room Booking System",
    detail:
      "Internship project at BPK (Audit Board of Indonesia). Web-based system replacing manual room booking process, with calendar-based availability and admin approval flow.",
    img: siperuImage,
    linkURL: "https://link.farhanmaul.my.id/siperu",
    projectStatus: "COMPLETE",
    badges: [
      { text: "PHP", color: "#777BB4" },
      { text: "JavaScript", color: "#F7DF1E" },
      { text: "MySQL", color: "#4479A1" },
    ],
  },
  {
    id: 3,
    title: "RuangBelajar Fasilkom",
    description: "Learning Management System",
    detail:
      "Team project: LMS with role-based authentication differentiating admin and student access. Includes full CRUD for course materials and user management.",
    img: rbFasilkom,
    linkURL: "https://link.farhanmaul.my.id/rbfkom",
    projectStatus: "COMPLETE",
    badges: [
      { text: "CodeIgniter 3", color: "#EF4223" },
      { text: "Bootstrap", color: "#7952B3" },
      { text: "MySQL", color: "#4479A1" },
    ],
  },
  {
    id: 4,
    title: "Petty Bot",
    description: "Manhwa Recommendation Discord Bot",
    detail:
      "Thesis project: Discord bot providing content-based manhwa recommendations from a dataset of 2,800+ titles, with genre filtering and similarity scoring.",
    img: pettyImage,
    linkURL: "https://link.farhanmaul.my.id/petty",
    projectStatus: "COMPLETE",
    badges: [
      { text: "Discord.js", color: "#5865F2" },
      { text: "Node.js", color: "#339933" },
    ],
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "Personal Developer Portfolio",
    detail:
      "Personal portfolio website built with React and Tailwind CSS. Features smooth scroll animations, responsive layout, and section-based architecture.",
    img: myportfolio,
    linkURL: "https://link.farhanmaul.my.id/webporto",
    projectStatus: "COMPLETE",
    badges: [
      { text: "React", color: "#61DAFB" },
      { text: "Tailwind CSS", color: "#06B6D4" },
      { text: "Vite", color: "#646CFF" },
    ],
  },
  {
    id: 6,
    title: "Waste4Change",
    description: "Mobile UI/UX Redesign Case Study",
    detail:
      "UI/UX case study from Kampus Merdeka x Skilvul: redesigned the mobile app interface for a waste management platform, improving user flow, accessibility, and visual hierarchy.",
    img: w4change,
    linkURL: "https://link.farhanmaul.my.id/w4c",
    projectStatus: "COMPLETE",
    badges: [
      { text: "Figma", color: "#F24E1E" },
      { text: "UI/UX Design", color: "#7456FF" },
    ],
  },
];
