/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',   // Custom breakpoint for tablet
        '_1100' : '1100px',
        '_890' : '890px',
        '_768' : '768px',
        'desktop': '1024px', // Custom breakpoint for desktop
      },
    },
  },
  plugins: [],
}