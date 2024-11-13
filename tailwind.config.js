/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "french-rose": "#EA4C89",
        "lavender-blush": "#FFF4F9",
        "dark-slate-gray": "#2F4858",
        "metallic-pink": "#F2A9BD",
        "rose-quartz-pink": "#BC539D",
        "vivid-cerulean": "#00A1FF",
        avocado: "#5E9700",
        "french-lilac": "#885AA0",
        gold: "#A18500",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
