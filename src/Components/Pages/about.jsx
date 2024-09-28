import React from 'react'
function About() {
  const reviews = [
    {
      name: "Emily R.",
      image: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", 
      comment: "The most comfortable shoes I’ve ever worn. The craftsmanship is truly unmatched!"
    },
    {
      name: "Michael B.",
      image: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", 
      comment: "These shoes are not just stylish, they’re built to last. I couldn’t be happier with my purchase!"
    },
    {
      name: "Sarah K.",
      image: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", 
      comment: "I love the elegance and comfort of my new shoes. Highly recommended!"
    },
    {
      name: "David L.",
      image: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", 
      comment: "Top-notch quality and amazing customer service. I’ll definitely buy again!"
    },
    {
      name: "David L.",
      image: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", 
      comment: "Top-notch quality and amazing customer service. I’ll definitely buy again!"
    },
    {
      name: "David L.",
      image: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", 
      comment: "Top-notch quality and amazing customer service. I’ll definitely buy again!"
    },
    {
      name: "David L.",
      image: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", 
      comment: "Top-notch quality and amazing customer service. I’ll definitely buy again!"
    },
  ];
  return (
    <div>
       <div className="relative h-fit w-full ml-0">
      <div className="h-screen">

      <div className="before:contents-[''] before:block before:absolute before:inset-0 before:bg-about-cover before:bg-cover before:bg-center before:opacity-100 bg-[rgba(0, 0, 0, 0.5)]"></div>
      <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-orange-600  text-5xl font-extrabold _375:text-2xl sm:text-3xl _890:text-5xl">AZ_Shoe_Maker</h1>
        <br />
        <br />
        <h1 className="text-orange-400 text-3xl font-extrabold _375:text-2xl italic sm:text-3xl _890:text-5xl">Where Timeless Craft Meets Modern Elegance</h1>
          </div>
      </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center p-8 w-full m">
          <h1 className="text-5xl font-extrabold">About Us</h1>
          <div className=" relative z-10 flex justify-around  items-center mt-12 md-12 px-4  ">
        <div className=" md:h-80 _890:h-72 _1100:h-auto flex flex-col sm:flex-row w-full bg-white  rounded-xl overflow-hidden space-x-8 p-5 max-w-[85%] ">
          <div className="w-full self-center sm:w-[50%] bg-about-card-1 bg-cover bg-center h-43 sm:h-64 lg:h-72 drop-shadow-lg"></div>
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-playpen _375:text-sm _425:text-xl md:text-xl _890:text-xl line _1100:text-2xl">Our Mission</h2>
            <p className="text-lg _375:text-xs _425:text-sm md:text-sm _890:text-base _1100:text-lg">
            At AZ_Shoe_Maker, we believe that every step should be taken in style and comfort. Our mission is simple: to craft the finest leather shoes that seamlessly blend tradition with modern elegance. Each pair of shoes we make tells a story of skill, passion, and dedication to excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex justify-around  items-center mt-12 md-12 px-4 ">
        <div className="flex flex-col-reverse md:h-[24rem] _890:h-auto sm:flex-row w-full bg-white  rounded-xl  overflow-hidden space-x-8 p-5 max-w-[85%] ">
          
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-playpen  _375:text-sm _425:text-xl  md:text-xl _890:text-2xl">Craftsmanship at its Finest</h2>
            <p className="text-lg  _375:text-xs _425:text-sm md:text-sm _890:text-lg">
            Behind every pair of shoes is a meticulous process that combines hand-picked materials with expert craftsmanship. We honor the age-old tradition of shoemaking by paying close attention to every stitch, ensuring that each pair is not only stylish but built to last. From selecting the finest leather to adding the final polish, we ensure every detail is perfect.
            </p>
          </div>
          <div className="w-full rounded-3xl sm:w-1/2 bg-about-card-2 bg-cover bg-center h-48 sm:h-64 lg:h-72 drop- self-center"></div>
        </div>
      </div>
      <div className="relative z-10 flex justify-around  items-center mt-12 md-12 px-4 ">
        <div className="flex md:h-[18rem] _890:h-auto flex-col sm:flex-row w-full bg-white  rounded-xl  overflow-hidden space-x-8 p-5 max-w-[85%] ">
          <div className="w-full self-center sm:w-1/2 bg-about-card-3 rounded-3xl bg-cover bg-center h-48 sm:h-64 lg:h-72 "></div>

          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold  _375:text-sm _425:text-xl  md:text-xl mb-4 font-playpen _890:text-2xl">Our Values</h2>
            <p className="text-lg _375:text-xs _425:text-sm md:text-sm _890:text-lg">
            Our shoes aren't just about looking good—they represent the values that drive us every day:
            <ul className='list-disc'>
                <li><strong>Quality First:</strong> We never compromise on quality, ensuring each shoe stands the test of time.</li>
                <li><strong>Comfort and Style:</strong> We combine comfort with style to create shoes that fit your life as much as they fit your feet.</li>
                <li><strong>Sustainability:</strong> We take pride in our sustainable sourcing of materials, minimizing our impact on the environment.</li>
            </ul>
            </p>
          </div>
          
        </div>
      </div>
      </div>
      <div>
      <div className="bg-gray-100 py-8 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-6">What Our Customers Say</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-8 animate-marquee">
          {reviews.concat(reviews).map((review, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold text-center">{review.name}</h3>
              <p className="text-gray-600 text-center mt-2 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default About