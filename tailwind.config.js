/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: {
          800: "#2D2F31",
          900: "#1F1F1F",
        },
        primaryBlue: {
          800: "#004a77",
          900: "#003a5b",
        },
        primarySkyBlue: {
          800: "#a8c7fa",
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
