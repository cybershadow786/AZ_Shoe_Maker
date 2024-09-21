import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white select-none">
            AZ_Shoe_Maker
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {['Home', 'About', 'Products','My Cart', 'Contact'].map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleLinkClick(link)}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    activeLink === link
                      ? 'text-blue-400 underline decoration-white underline-offset-4 select-none'
                      : 'text-white select-none hover:text-blue-400 hover:underline decoration-white underline-offset-4' 
                  }`}
                  aria-current={activeLink === link ? 'page' : undefined}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>  
        <div className="flex md:order-3">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white mr-4 rounded-lg transition-all ease-in-out duration-500 hover:bg-blue-400  focus:outline-none focus:ring-2 focus:ring-blue-400 select-none">
            Sign In
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-blue-400 rounded-lg  transition-all ease-in-out duration-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 select-none ">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
