// import React from 'react'

// function Login() {
//   return (
//     <div>
//       <h1 className='bg-red-700 text-white p-3 m-4 text-center uppercase'>
//           hello from login
//         </h1>
//     </div>
//   )
// }

// export default Login
import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-100 w-screen flex justify-center items-center">
    <div className="flex justify-center items-center w-[75%] h-[100vh] ">
      <div className="bg-white shadow-md rounded-lg p-6 flex ">
        <div className="hidden md:block ">
          <img
            src="https://images-cdn.ubuy.co.in/637ec3b56af2800ead4fe525-christmas-men-lace-business-leather.jpg"
            alt="AZ Shoe Maker"
            className="rounded-lg"
          />
        </div>

        {/* Login Form */}
        <div className="w-full flex flex-col justify-center p-6">
          <h2 className="text-4xl font-extrabold  w-full text-center text-gray-700 mb-6">Login</h2>
          <form className="flex flex-col">
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 top-8 right-3 flex items-center text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-8 self-end rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
