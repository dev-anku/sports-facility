/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Poppins", "sans-serif"],
        newsreader: ["Exo 2", "serif"],
      },
      colors: {
        background: {
          default: "#00354d",
          dark: "#013047",
        },
        button: "#efff49",
      },
    },
  },
  plugins: [],
};

export default config;
