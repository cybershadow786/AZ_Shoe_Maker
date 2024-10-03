import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='w-full bg-black m-0 flex flex-col absolute py-4'>
      <div className='flex w-full '>
        <div className='p-4  w-[30%] mx-4 flex flex-col justify-center items-center'>
          <h1 className='text-md text-white font-semibold'>Quick Links:</h1>
          <ul className='list-none text-gray-400  w-fit px-8 py-2 space-y-3'>
            <li>
              <Link to='/' className='hover:text-blue-500 text-sm font-semibold'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-blue-500 text-sm font-semibold'>About</Link>
            </li>
            <li>
              <Link to='/products' className='hover:text-blue-500 text-sm font-semibold'>Products</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-blue-500 text-sm font-semibold'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='p-4 '>
          <h1 className='text-md text-white font-semibold'>
          Contact Information:
          </h1>
          <ul className='list-none  text-gray-400  w-fit px-8 py-2 space-y-3'>
            <li>Email: imadeelwaheed@gmail.com</li>
            <li>Phone: <i>+923244367550</i></li>
            <li>Location : Bhati Chowk Lahore</li>
          </ul>
        </div>
        <div className='p-4 '>
          <h1 className='text-md text-white font-semibold'>
          Social Media:</h1>
          <ul className='list-none  text-gray-400  w-fit px-8 py-2 space-y-3'>
            <li><a href="/" className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text font-bold">Instagram</a></li>
            <li><a href="/" className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-300 hover:text-transparent hover:bg-clip-text font-bold">Facebook</a></li>
            <li><a href="/" className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text font-bold">Twitter</a></li>
            <li><a href="/" className="hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-700 hover:text-transparent hover:bg-clip-text font-bold">LinkedIn</a></li>
          </ul>
        </div>
        <div className="py-4 mr-2">
          <h1 className='text-white font-bold'>
          Our Commitment to Quality and Style
          </h1>
          <p className='text-gray-400 indent-8 text-justify'>
          At AZ_Shoe_Maker, we craft premium leather shoes designed for every occasion. Our mission is to provide comfort, style, and durability in each pair, ensuring you step confidently in both formal and casual settings. Quality craftsmanship and customer satisfaction are at the heart of everything we do.
          </p>
        </div>
      </div>
      <div className='bg-black w-full text-center font-extrabold text-xl pb-8 ml-0 text-white'>
      © 2024 AZ_Shoe_Maker. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
