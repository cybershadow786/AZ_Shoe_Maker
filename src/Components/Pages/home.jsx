import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    {/* Cover Image */}
    <div className="relative h-fit ">
      <div className="h-screen">
      {/* Background */}
      <div className="before:contents-[''] before:block before:absolute before:inset-0 before:bg-home-cover before:bg-cover before:bg-center before:opacity-100 bg-[rgba(0, 0, 0, 0.5)]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-md"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-extrabold">AZ_Shoe_Maker</h1>
        <br />
        <h1 className="text-yellow-500 italic text-3xl font-bold">
          Step into Style, Elevate Every Occasion.
        </h1>
        <div className="flex justify-between space-x-16 mt-4">
          <button className="bg-blue-600 text-white rounded-xl font-bold py-2 px-4 hover:bg-blue-700 transition">
            Shop Now
          </button>
          <button className="bg-transparent border-2 border-white text-white rounded-xl font-semibold py-2 px-4 hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
        </div>
      </div>
      </div>
      {/* Horizontal Cards */}
      <div className="relative z-10 flex justify-around  items-center mt-12 md-12 px-4  ">
        <div className="flex flex-col sm:flex-row w-full bg-white  rounded-xl overflow-hidden space-x-8 p-5 max-w-[80%] shadow-2xl">
          {/* Image */}
          <div className="w-full sm:w-1/2 bg-home-card-1 bg-cover bg-center h-48 sm:h-64 lg:h-72 drop-shadow-lg"></div>
          {/* Text */}
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-playpen  ">Leather Shoes for Every Occasion</h2>
            <p className="text-lg">
              Discover the finest collection of leather shoes. Whether it's a
              formal event or a casual outing, AZ_Shoe_Maker has you covered with
              shoes that complement your style and outfit. Step up your game with
              the best in class. <strong>Want to know more</strong> <Link to='/product' className="text-blue-500">Click Here</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex justify-around  items-center mt-12 md-12 px-4 ">
        <div className="flex flex-col sm:flex-row w-full bg-white  rounded-xl shadow-2xl overflow-hidden space-x-8 p-5 max-w-[80%]">
          
          {/* Text */}
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-playpen">Craftsmanship and Passion</h2>
            <p className="text-lg">
            At AZ_Shoe_Maker, we are devoted to the art of shoemaking, blending traditional craftsmanship with modern design. Our team of skilled artisans takes pride in creating high-quality leather shoes that reflect elegance and comfort. We believe every pair tells a story, and we strive to ensure that our footwear not only meets your style needs but also stands the test of time.  <strong>Want to know more</strong> <Link to='/about' className="text-blue-500">Click Here</Link>
            </p>
          </div>
          {/* Image */}
          <div className="w-full invert sm:w-1/2 bg-home-card-2 bg-cover bg-center h-48 sm:h-64 lg:h-72 drop-shadow-2xl"></div>
        </div>
      </div>
      <div className="relative z-10 flex justify-around  items-center mt-12 md-12 px-4 ">
        <div className="flex flex-col sm:flex-row w-full bg-white  rounded-xl shadow-2xl overflow-hidden space-x-8 p-5 max-w-[80%]">
          {/* Image */}
          <div className="w-full sm:w-1/2 bg-home-card-3  bg-cover bg-center h-48 sm:h-64 lg:h-72 drop-shadow-2xl"></div>

          {/* Text */}
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-playpen">Craftsmanship and Passion</h2>
            <p className="text-lg">
            At AZ_Shoe_Maker, we are devoted to the art of shoemaking, blending traditional craftsmanship with modern design. Our team of skilled artisans takes pride in creating high-quality leather shoes that reflect elegance and comfort. We believe every pair tells a story, and we strive to ensure that our footwear not only meets your style needs but also stands the test of time. <strong>Want to know more</strong> <Link to='/contactUs' className="text-blue-500">Click Here</Link>
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
// import React, { useEffect, useState } from "react";

// function Home() {
//   const [isVisible, setIsVisible] = useState(false);

//   const observerRef = React.useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.unobserve(entry.target); // Stop observing once it becomes visible
//           }
//         });
//       },
//       {
//         threshold: 0.1, // Trigger when 10% of the card is visible
//       }
//     );

//     if (observerRef.current) {
//       observer.observe(observerRef.current);
//     }

//     return () => {
//       if (observerRef.current) {
//         observer.unobserve(observerRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       {/* Cover Image */}
//       <div className="relative h-fit overflow-hidden">
//         <div className="h-screen">
//           {/* Background */}
//           <div className="before:contents-[''] before:block before:absolute before:inset-0 before:bg-home-cover before:bg-cover before:bg-center before:opacity-100 bg-[rgba(0, 0, 0, 0.5)]"></div>
//           <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-md"></div>

//           {/* Main Content */}
//           <div className="relative z-10 flex flex-col items-center justify-center h-full">
//             <h1 className="text-white text-5xl font-extrabold">AZ_Shoe_Maker</h1>
//             <br />
//             <h1 className="text-yellow-500 italic text-3xl font-bold">
//               Step into Style, Elevate Every Occasion.
//             </h1>
//             <div className="flex justify-between space-x-16 mt-4">
//               <button className="bg-blue-600 text-white rounded-xl font-bold py-2 px-4 hover:bg-blue-700 transition">
//                 Shop Now
//               </button>
//               <button className="bg-transparent border-2 border-white text-white rounded-xl font-semibold py-2 px-4 hover:bg-white hover:text-blue-600 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Horizontal Cards */}
//       <div className="relative z-10 flex flex-col items-center mt-12 px-4">
//         <div
//           ref={observerRef}
//           className={`mt-8 mb-8 flex flex-col sm:flex-row w-full bg-white rounded-xl overflow-hidden space-x-8 p-5 max-w-[80%] shadow-2xl transition-transform  duration-700  transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[-100px] opacity-0"}`}
//         >
//           {/* Image */}
//           <div className="w-full sm:w-1/2 bg-home-card-1 bg-cover bg-center h-48 sm:h-64 lg:h-72 drop-shadow-lg"></div>
//           {/* Text */}
//           <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
//             <h2 className="text-2xl font-bold mb-4 font-playpen">Leather Shoes for Every Occasion</h2>
//             <p className="text-lg">
//               Discover the finest collection of leather shoes. Whether it's a
//               formal event or a casual outing, AZ_Shoe_Maker has you covered with
//               shoes that complement your style and outfit. Step up your game with
//               the best in class.
//             </p>
//           </div>
//         </div>

//         <div
//           ref={observerRef}
//           className={`mt-8 mb-8 flex flex-col sm:flex-row w-full bg-white rounded-xl shadow-2xl overflow-hidden space-x-8 p-5 max-w-[80%] transition-transform duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[-100px] opacity-0"}`}
//         >
//           {/* Text */}
//           <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
//             <h2 className="text-2xl font-bold mb-4 font-playpen">Craftsmanship and Passion</h2>
//             <p className="text-lg">
//               At AZ_Shoe_Maker, we are devoted to the art of shoemaking, blending traditional craftsmanship with modern design. Our team of skilled artisans takes pride in creating high-quality leather shoes that reflect elegance and comfort. We believe every pair tells a story, and we strive to ensure that our footwear not only meets your style needs but also stands the test of time.
//             </p>
//           </div>
//           {/* Image */}
//           <div className="w-full sm:w-1/2 bg-home-card-2 bg-cover bg-center h-48 sm:h-64 lg:h-72 drop-shadow-2xl"></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
