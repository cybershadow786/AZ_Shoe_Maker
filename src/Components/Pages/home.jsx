import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <div className="relative h-fit w-full ml-0">
      <div className="h-screen">
      {/* Background */}
      <div className="before:contents-[''] before:block before:absolute before:inset-0 before:bg-home-cover before:bg-cover before:bg-center before:opacity-100 bg-[rgba(0, 0, 0, 0.5)]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-extrabold _375:text-2xl sm:text-3xl _890:text-5xl">AZ_Shoe_Maker</h1>
        <br />
        <h1 className="text-yellow-500 italic text-3xl font-bold _375:text-lg sm:text-xl _890:text-3xl">
          Step into Style, Elevate Every Occasion.
        </h1>
        <div className="flex justify-between space-x-16 mt-4">
          <button className="bg-blue-600 text-white rounded-xl font-bold py-2 px-4 hover:bg-blue-700 transition sm:py-1 sm:px-2 sm:text-base _890:py-2 _890:px-4 _890:text-xl">
           <Link to ='/product'> Shop Now </Link>
          </button>
          <button className="sm:py-2 sm:px-2 sm:text-base _890:py-2 _890:px-4 _890:text-xl bg-transparent border-2 border-white text-white rounded-xl font-semibold py-2 px-4 hover:bg-white hover:text-blue-600 transition ">
            <Link to='/about'> Learn More</Link>
          </button>
        </div>
        </div>
      </div>
      </div>
      <div className=" relative z-10 flex justify-around  items-center mt-12 md-12 px-4  ">
        <div className=" md:h-80 _890:h-72 _1100:h-auto flex flex-col sm:flex-row w-full bg-white  rounded-xl overflow-hidden space-x-8 p-5 max-w-[80%] shadow-2xl">
          <div className="w-full self-center sm:w-1/2 bg-home-card-1 bg-cover bg-center h-48 sm:h-64 lg:h-72 drop-shadow-lg"></div>
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-playpen _375:text-sm _425:text-xl md:text-xl _890:text-xl line _1100:text-2xl">Leather Shoes for Every Occasion</h2>
            <p className="text-lg _375:text-xs _425:text-sm md:text-sm _890:text-base _1100:text-lg">
              Discover the finest collection of leather shoes. Whether it's a
              formal event or a casual outing, AZ_Shoe_Maker has you covered with
              shoes that complement your style and outfit. Step up your game with
              the best in class. <strong>Want to know more</strong> <Link to='/product' className="text-blue-500">Click Here</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex justify-around  items-center mt-12 md-12 px-4 ">
        <div className="flex flex-col-reverse md:h-[24rem] _890:h-auto sm:flex-row w-full bg-white  rounded-xl shadow-2xl overflow-hidden space-x-8 p-5 max-w-[80%]">
          
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-playpen  _375:text-sm _425:text-xl  md:text-xl _890:text-2xl">Craftsmanship and Passion</h2>
            <p className="text-lg  _375:text-xs _425:text-sm md:text-sm _890:text-lg">
            At AZ_Shoe_Maker, we are devoted to the art of shoemaking, blending traditional craftsmanship with modern design. Our team of skilled artisans takes pride in creating high-quality leather shoes that reflect elegance and comfort. We believe every pair tells a story, and we strive to ensure that our footwear not only meets your style needs but also stands the test of time.  <strong>Want to know more</strong> <Link to='/about' className="text-blue-500">Click Here</Link>
            </p>
          </div>
          <div className="w-full invert sm:w-1/2 bg-home-card-2 bg-cover bg-center h-48 sm:h-64 lg:h-72 drop-shadow-2xl self-center"></div>
        </div>
      </div>
      <div className="relative z-10 flex justify-around  items-center mt-12 mb-12 px-4 ">
        <div className="flex md:h-[18rem] _890:h-auto flex-col sm:flex-row w-full bg-white  rounded-xl shadow-2xl overflow-hidden space-x-8 p-5 max-w-[80%]">
          <div className="w-full self-center sm:w-1/2 bg-home-card-3  bg-cover bg-center h-48 sm:h-64 lg:h-72 "></div>

          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold  _375:text-sm _425:text-xl  md:text-xl mb-4 font-playpen _890:text-2xl">Get in Touch</h2>
            <p className="text-lg _375:text-xs _425:text-sm md:text-sm _890:text-lg">
            Whether you have a question, need help with sizing, or want to know more about our handcrafted shoes, we're here to assist. Reach out to us, and let’s step forward together with confidence.  <strong>Want to know more</strong> <Link to='/contactUs' className="text-blue-500">Click Here</Link>"</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;