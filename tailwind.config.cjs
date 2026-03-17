/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9342FF",
        secondary: "#A464F6",
        "light-violet": "#E2E7FF",
        dark: "#201D1D",
      },
      fontFamily: {
        serif: ["Cactus Classical Serif", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
