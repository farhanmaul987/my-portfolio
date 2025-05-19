import w4change from "../../assets/projects/w4c.webp";
import rbFasilkom from "../../assets/projects/ruangbelajarfasilkom.webp";
import siperuImage from "../../assets/projects/siperu.webp";
import pettyImage from "../../assets/projects/petty.webp";
import myportfolio from "../../assets/projects/myportfolio.webp";
import argameshop from "../../assets/projects/argameshop.webp";

import { SiGithub, SiMedium } from "@icons-pack/react-simple-icons";
import { RiProgress1Line, RiCheckboxCircleFill } from "@remixicon/react";

export const projectData = [
  {
    id: 1,
    title: (
      <>
        WASTE<span className="text-[#159CBD]">4</span>CHANGE
      </>
    ),
    description: "Redesigning UI/UX",
    detail: (
      <>
        This project is part of the Independent Study Program, Kampus Merdeka
        Batch 3, under Skilvul Tech4Impact: UI/UX Design Mastery. The case study
        assigned is to redesign the UI/UX of the &quot;Waste4Change&quot; mobile
        app.
      </>
    ),
    titleStyle: "text-[#85B361] heading-4",
    projectBox: "project-box",
    img: w4change,
    linkURL: "https://link.farhanmaul.my.id/w4c",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "COMPLETE",
    statusColor: "bg-green-600",
    statusIcon: RiCheckboxCircleFill,
    linkIcon: <SiMedium />,
    linkWeb: "",
    badges: [
      {
        text: "Figma",
        color: "F24E1E",
        logo: "figma",
        logoColor: "white",
      },
      {
        text: "Zoom",
        color: "0B5CFF",
        logo: "zoom",
        logoColor: "white",
      },
    ],
  },
  {
    id: 2,
    title: "RUANGBELAJAR.",
    description: "Website Development",
    detail:
      "This project is a website for a final course assignment, developed by a team of three. It includes Create, Read, Update, Delete features and Login Authentication that differentiates between admin and user access.",
    titleStyle: "text-[#85DA9E] heading-4",
    projectBox: "project-box",
    img: rbFasilkom,
    linkURL: "https://link.farhanmaul.my.id/rbfkom",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "COMPLETE",
    statusColor: "bg-green-600",
    statusIcon: RiCheckboxCircleFill,
    linkIcon: <SiGithub />,
    linkWeb: "",
    badges: [
      {
        text: "CodeIgniter 3",
        color: "EF4223",
        logo: "codeigniter",
        logoColor: "white",
      },
      {
        text: "Bootstrap",
        color: "7952B3",
        logo: "bootstrap",
        logoColor: "white",
      },
      {
        text: "MySQL",
        color: "4479A1",
        logo: "mysql",
        logoColor: "white",
      },
    ],
  },
  {
    id: 3,
    title: "SIPERU",
    description: "Website Development",
    detail:
      "This is my internship project with my team at Badan Pemeriksa Keuangan Perwakilan Provinsi Jawa Timur (BPK). It's a web-based system designed to make it easier to book meeting rooms inside the BPK building.",
    titleStyle: "text-[#D5A016] heading-2",
    img: siperuImage,
    linkURL: "https://link.farhanmaul.my.id/siperu",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "COMPLETE",
    statusColor: "bg-green-600",
    statusIcon: RiCheckboxCircleFill,
    linkIcon: <SiGithub />,
    linkWeb: "",
    badges: [
      { text: "PHP", color: "777BB4", logo: "php", logoColor: "white" },
      {
        text: "CSS",
        color: "1572B6",
        logo: "css3",
        logoColor: "white",
      },
      {
        text: "Javascript",
        color: "2E2D2B",
        logo: "javascript",
        logoColor: "F7DF1E",
      },
      {
        text: "MySQL",
        color: "4479A1",
        logo: "mysql",
        logoColor: "white",
      },
    ],
  },
  {
    id: 4,
    title: "PETTY",
    description: "Discord Bot Development",
    detail:
      "Manhwa Recommendation Discord Bot is a project for my thesis that provides manhwa recommendations based on a dataset of over 2,800 manhwas. The bot is designed to help users find manhwas that match their preferences.",
    titleStyle: "text-[#33F3FE] heading-2",
    img: pettyImage,
    linkURL: "https://link.farhanmaul.my.id/petty",
    buttonStyle: "btn-circle bg-green-600",
    projectStatus: "COMPLETE",
    statusColor: "bg-green-600",
    statusIcon: RiCheckboxCircleFill,
    linkIcon: <SiGithub />,
    linkWeb: "",
    badges: [
      {
        text: "Discord.js",
        color: "5865F2",
        logo: "discord",
        logoColor: "white",
      },
      { text: "Node.js", color: "339933", logo: "node.js", logoColor: "white" },
    ],
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "Personal Website",
    detail:
      "This program is a personal portfolio website showcasing projects and skills, enhanced with various JavaScript libraries to improve its appearance. The website is designed to be more interactive and visually appealing for visitors.",
    titleStyle: "text-[#7456FF] heading-2",
    img: myportfolio,
    linkURL: "https://link.farhanmaul.my.id/webporto",
    projectStatus: "COMPLETE",
    statusColor: "bg-green-600",
    statusIcon: RiCheckboxCircleFill,
    linkIcon: <SiGithub />,
    linkWeb: "",
    badges: [
      { text: "React Js", color: "61DAFB", logo: "react", logoColor: "white" },
      {
        text: "Tailwind CSS",
        color: "06B6D4",
        logo: "tailwindcss",
        logoColor: "white",
      },
      { text: "Node.js", color: "339933", logo: "node.js", logoColor: "white" },
    ],
  },
  {
    id: 6,
    title: "Topup Game Online",
    description: "Website Development",
    detail:
      "This is an online game top-up platform where users can quickly find and purchase in-game currency for their favorite online games. Designed with a clean UI, the site makes the top-up process fast, simple, and secure.",
    titleStyle: "text-[#ff3b3b] heading-4",
    img: argameshop,
    linkURL: "https://link.farhanmaul.my.id/argameshop",
    projectStatus: "ON PROGRESS",
    statusColor: "bg-prLavender",
    statusIcon: RiProgress1Line,
    linkIcon: <SiGithub />,
    linkWeb: "https://argameshop.vercel.app/",
    badges: [
      {
        text: "Next.js",
        color: "2e2d2b",
        logo: "nextdotjs",
        logoColor: "white",
      },
      { text: "Node.js", color: "339933", logo: "node.js", logoColor: "white" },
      {
        text: "MongoDB",
        color: "2e2d2b",
        logo: "mongodb",
        logoColor: "green",
      },
    ],
  },
];
