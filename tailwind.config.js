/** @type {import('tailwindcss').Config} */

// import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgStatus: "url('/src/assets/status-bg.jpg')",
      },

      colors: {
        prLavender: "#7456FF",
        prBlack: "#0C0C0C",
        srBlack: "#0F0F0F",
        trBlack: "#131313",
        prGrey: "#707070",
        srGrey: "#999999",
        cvHover: "#5739E1",
        bgSocmed: "#161225",
        sldGrey: "#111112",
        sldcontainer: "#1B172A",
        pettyTitle: "#33F3FE",
        siperuTitle: "#D5A016",
        ruangBelajarTitle: "#5FCF80",
        ProjectCard: "#212121"
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
