/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#6d3b13",
        secondary: "#bfa14a",
        accent: "#3d6b2f",
        kaavi: "#7B2C19",
        "black-100": "#7B2C19",
        "black-200": "#5a1f12",
        "white-100": "#fff8e1",
        "tertiary": "#a34c2a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/extended.jpg')",
      },
    },
  },
  plugins: [],
};
