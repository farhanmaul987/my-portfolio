/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        statusLandscape: "url('/src/assets/status-landscape.jpg')",
        statusPortrait: "url('/src/assets/status-portrait.jpg')",
        bgPortfolio: "url('/src/assets/myportfolio.png')",
        bgPetty: "url('/src/assets/petty.png')",
        bgSiperu: "url('/src/assets/siperu.png')",
      },

      colors: {
        prLavender: "#7456FF",
        srLavender: "#8368FF",
        prBlack: "#0C0C0C",
        srBlack: "#0F0F0F",
        prGrey: "#707070",
        srGrey: "#999999",
        cvHover: "#5739E1",
        bgSocmed: "#161225",
        sldGrey: "#111112",
        sldcontainer: "#1B172A",
        pettyTitle: "#33F3FE",
        siperuTitle: "#D5A016",
        ProjectCard: "#212121",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
