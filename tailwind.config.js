/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'home-cover': "url('https://cdn.shopify.com/s/files/1/0262/4169/5823/t/11/assets/the5bestmensweddingdressshoesforgrooms-1675879174146.jpg?v=1675879180')",
      },
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