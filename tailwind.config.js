/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-dark": "#FFCE22",
        "yellow-light": "#FFD84D",
        "blue-light": "#5087F8",
        "blue-dark": "#2469F6",
      },
    },
    fontFamily: {
      // Montserrat
      sans: ["Montserrat", "sans-serif"],
      // Montserrat
      serif: ["Montserrat", "serif"],
    },
  },
  plugins: [],
};
