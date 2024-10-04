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
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
       backgroundImage: {
        'home-cover': "url('https://cdn.shopify.com/s/files/1/0262/4169/5823/t/11/assets/the5bestmensweddingdressshoesforgrooms-1675879174146.jpg?v=1675879180')",
        'home-card-1': "url('https://goosebumps.co.in/wp-content/uploads/2019/06/what-we-offer-brochure.svg')",
        'home-card-2': "url('https://www.learnetpub.co.in/images/21670932655.png')",
        'home-card-3': "url('https://as1.ftcdn.net/v2/jpg/06/85/12/12/1000_F_685121237_wcF9WWJEKgaHCPg95UQiCs0ZcEdXGiPr.jpg')",
        'about-cover': "url('https://previews.123rf.com/images/danmorgan12/danmorgan121806/danmorgan12180600017/103692064-footwear-concepts-closeup-of-pair-of-high-men-s-tanned-brogues-boots-isolated-over-white-background.jpg')",
        'about-card-1': "url('https://caringwaysrehab.pk/wp-content/uploads/2023/08/our-mission-1024x655.png')",
        'about-card-2': "url('https://jerusalemsandals.com/cdn/shop/articles/7_Benefits_of_Wearing_Leather_Shoes_1.jpg?v=1605684876')",
        'about-card-3': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiIDu7luawKozFHgGkpyIUqssw4mCJ7i4tw&s')",
        'product-cover' : "url('https://www.districtonelabel.sg/pub/media/magefan_blog/A_Comprehensive_Buying_Guide_Leather_Shoes_for_Men_1.png')",
        'contactUs-cover' : "url('https://www.leatherites.com/cdn/shop/files/pexels-terje-sollie-298864_1.jpg?v=1678135974&width=3000')",
        'sinupPage-cover' : "url('https://sloshoes.com/cdn/shop/products/leonbrownleathershoes_200x.jpg?v=1679645451')"
      },
      screens: {
        '_640': '640px',  
        '_641': '641px',
        '_1100' : '1100px',
        '_890' : '890px',
        '_768' : '768px',
        '_1024': '1024px',
        '_425': '425px',
        '_375': '375px',
      },
    },
  },
  plugins: [],
}
 

