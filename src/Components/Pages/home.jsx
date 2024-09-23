import React from "react";

function Home() {
  return (
    <div className="relative h-screen">
      <div className="before:contents-[''] before:block before:absolute before:inset-0 before:bg-home-cover before:bg-cover before:bg-center before:opacity-100 bg-[rgba(0, 0, 0, 0.5)]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-extrabold">AZ_Shoe_Maker</h1>
        <br />
        <h1 className="text-yellow-500 italic text-3xl font-bold">
          Step into Style, Elevate Every Occasion.
        </h1>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Shop Now
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
