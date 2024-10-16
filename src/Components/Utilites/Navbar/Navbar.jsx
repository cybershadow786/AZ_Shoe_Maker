import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 border-gray-600">
        <div className="max-w-screen-xl _910:max-w-screen-xl _910:mx-auto flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white text-center _768:w-[100vw] _768:mb-4 _890:mb-0 _890:w-auto">
              AZ_Shoe_Maker
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
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
            className={`items-center justify-between w-full md:flex _1100:w-7/12 _890:w-[75%] md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Product", path: "/product" },
                { name: "My Cart", path: "/myCart" },
                { name: "Contact Us", path: "/contactUs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-2 px-3 rounded md:p-0 text-white select-none hover:text-blue-400 hover:underline decoration-white underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex ml-8 md:ml-4 mt-2 md:mt-0">
              <Link to="/signIn">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white mr-4 rounded-lg transition-all ease-in-out duration-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 select-none">
                  Sign In
                </button>
              </Link>
              <Link to="/signUp">
                <button className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-blue-400 rounded-lg transition-all ease-in-out duration-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 select-none">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
