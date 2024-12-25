/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '0px',        // Mobile screens (default)
        'mobilesm': '600px',        // Mobile screens (default)
        'tablet': '768px',      // Tablet screens
        'desktopsm': '992px',    // Desktop screens
        'desktop': '1240px',    // Desktop screens
      },
    },
  },
  plugins: [],
};
