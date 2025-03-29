/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        statusLandscape: "url('/src/assets/status-landscape.jpg')",
        statusPortrait: "url('/src/assets/status-portrait.jpg')",
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
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
