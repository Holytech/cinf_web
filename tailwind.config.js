/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Playfair: ["Playfair", "sans-serif"],
      },
      colors: {
        primary: {
          blue: "#00058E",
          green: "#98DBAF",
          grey: "#BCBCBC",
          orange: "#F29753",
        },
        secondary: {
          orange: "#EE685F",
          neutral: "#F7F8F9",
          grey: "#333333",
        },
      },
      backgroundImage: {
        hero: "url('assets/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
};
