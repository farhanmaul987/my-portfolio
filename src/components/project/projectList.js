import pettyImage from "../../assets/project/petty.png";
import siperuImage from "../../assets/project/siperu.png";
import myportfolio from "../../assets/project/myportfolio.png";

export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Personal Website",
    titleColor: "text-prLavender",
    projectBox: "project-box mt-[55px]",
    img: myportfolio,
    linkURL: "https://github.com/farhanmaul987/my-portfolio",
    buttonStyle: "btn-circle bg-prLavender",
    projectStatus: "In Progress",
    badges: [
      { text: "React Js", color: "61DAFB", logo: "react", logoColor: "white" },
      {
        text: "Tailwind CSS",
        color: "06B6D4",
        logo: "tailwindcss",
        logoColor: "white",
      },
      {
        text: "Simple Icons",
        color: "2E2D2B",
        logo: "simpleicons",
        logoColor: "white",
      },
    ],
  },
  {
    id: 2,
    title: "PETTY",
    description: "Discord Bot Development",
    titleColor: "text-pettyTitle",
    projectBox: "project-box",
    img: pettyImage,
    linkURL: "https://github.com/farhanmaul987/Petty",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "Completed",
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
    titleColor: "text-siperuTitle",
    projectBox: "project-box mt-[55px]",
    img: siperuImage,
    linkURL: "https://github.com/farhanmaul987/siperu",
    buttonStyle: "btn-circle bg-green-600 ",
    projectStatus: "Completed",
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
];
