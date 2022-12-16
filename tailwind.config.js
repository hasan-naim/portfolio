/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: {
          900: "#1F1F1F",
          800: "#2D2F31",
        },
        primaryBlue: {
          800: "#004a77",
          900: "#003a5b",
        },
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
