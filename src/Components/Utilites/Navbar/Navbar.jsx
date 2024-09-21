import React from 'react'

function Navbar() {
  return (
    <div className='w-[100%] p-8 h-14 bg-black text-white flex justify-center items-center'>
        <ul className='flex space-x-10'>
           <li className='font-bold  w-15 py-1 rounded-md  hover:px-1 font-serif transition-all ease-in-out  duration-300 hover:bg-white hover:text-black hover:cursor-pointer  '>Home</li>
           <li className='font-bold w-15 py-1 rounded-md  hover:px-1  font-serif transition-all ease-in-out duration-300  hover:bg-white hover:text-black hover:cursor-pointer  '>Products</li>
           <li className='font-bold w-15 py-1 rounded-md  hover:px-1  font-serif transition-all ease-in-out duration-300  hover:bg-white hover:text-black hover:cursor-pointer  '>About Us</li>
           <li className='font-bold w-15 py-1 rounded-md  hover:px-1  font-serif transition-all ease-in-out duration-300  hover:bg-white hover:text-black hover:cursor-pointer '>Contact Us</li> 
        </ul>
    </div>
  )
}

export default Navbar
