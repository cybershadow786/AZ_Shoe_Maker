/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['Playpen Sans', 'sans-serif'],
      },
       backgroundImage: {
        'home-cover': "url('https://cdn.shopify.com/s/files/1/0262/4169/5823/t/11/assets/the5bestmensweddingdressshoesforgrooms-1675879174146.jpg?v=1675879180')",
        'home-card-1': "url('https://goosebumps.co.in/wp-content/uploads/2019/06/what-we-offer-brochure.svg')",
        'home-card-2': "url('https://www.learnetpub.co.in/images/21670932655.png')",
        'home-card-3': "url('https://as1.ftcdn.net/v2/jpg/06/85/12/12/1000_F_685121237_wcF9WWJEKgaHCPg95UQiCs0ZcEdXGiPr.jpg')",
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