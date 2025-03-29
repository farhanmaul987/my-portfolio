import myportfolio from "../../assets/projects/myportfolio.png";
import pettyImage from "../../assets/projects/petty.png";
import siperuImage from "../../assets/projects/siperu.png";
import rbFasilkom from "../../assets/projects/ruangbelajarfasilkom.png";
import w4change from "../../assets/projects/w4c.png";

import { SiGithub, SiMedium } from "@icons-pack/react-simple-icons";

export const projectList = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Personal Website",
    detail:
      "This program is a personal portfolio website showcasing projects and skills, enhanced with various JavaScript libraries to improve its appearance. The website is designed to be more interactive and visually appealing for visitors.",
    titleStyle: "text-[#7456FF] heading-2",
    img: myportfolio,
    linkURL: "https://github.com/farhanmaul987/my-portfolio",
    buttonStyle: "btn-circle bg-prLavender",
    projectStatus: "On Progress",
    statusColor: "text-prLavender",
    linkIcon: <SiGithub className="" />,
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
    id: 2,
    title: "PETTY",
    description: "Discord Bot Development",
    detail:
      "Manhwa Recommendation Discord Bot is a project for my thesis that provides manhwa recommendations based on a dataset of over 2,800 manhwas. The bot is designed to help users find manhwas that match their preferences.",
    titleStyle: "text-[#33F3FE] heading-2",
    img: pettyImage,
    linkURL: "https://github.com/farhanmaul987/Petty",
    buttonStyle: "btn-circle bg-green-600",
    projectStatus: "Completed",
    statusColor: "text-green-600",
    linkIcon: <SiGithub className="" />,
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
    id: 3,
    title: "SIPERU",
    description: "Website Development",
    detail:
      "This is my internship project with my team at Badan Pemeriksa Keuangan Perwakilan Provinsi Jawa Timur (BPK). It's a web-based system designed to make it easier to book meeting rooms inside the BPK building.",
    titleStyle: "text-[#D5A016] heading-2",
    img: siperuImage,
    linkURL: "https://github.com/farhanmaul987/siperu",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "Completed",
    statusColor: "text-green-600",
    linkIcon: <SiGithub className="" />,
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
    title: "RUANGBELAJAR.",
    description: "Website Development",
    detail:
      "This project is a website for a final course assignment, developed by a team of three. It includes Create, Read, Update, Delete features and Login Authentication that differentiates between admin and user access.",
    titleStyle: "text-[#85DA9E] heading-4",
    projectBox: "project-box",
    img: rbFasilkom,
    linkURL: "https://github.com/farhanmaul987/siperu",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "Completed",
    statusColor: "text-green-600",
    linkIcon: <SiGithub className="" />,
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
    id: 5,
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
    linkURL:
      "https://medium.com/@farhanmaul987/ui-ux-case-study-redesign-aplikasi-waste4change-a0a47aa42ffa",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "Completed",
    statusColor: "text-green-600",
    linkIcon: <SiMedium className="" />,
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
];
