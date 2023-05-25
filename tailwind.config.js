/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Euclid: ["Euclid Circular B", "sans-serif"],
      },
      colors: {
        primary1: "#146e5f",
        primary2: "#2db49e",
        primary3: "#333",
        secondary: "#EFFFFD",
      },
    },
  },
  plugins: [],
};
