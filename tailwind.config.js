/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '0px',        // Mobile screens (default)
        'tablet': '768px',      // Tablet screens
        'desktop': '1024px',    // Desktop screens
      },
    },
  },
  plugins: [],
};
