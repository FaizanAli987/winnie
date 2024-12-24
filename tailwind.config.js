/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        1440: { max: "1440px" }, // Max-width 1440px
        1240: { max: "1240px" }, // Max-width 1240px
        992: { max: "992px" }, // Max-width 992px
        600: { max: "600px" }, // Max-width 600px
      },
    },
  },
  plugins: [],
};
