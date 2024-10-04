import React , {useRef} from "react";
function SingUp() {
  const passRef = useRef(null);
  const confPassRef = useRef(null);
  const showPass = () =>{
    passRef.current.type = passRef.current.type === "password"? "text" : "password";
    confPassRef.current.type =confPassRef.current.type === "password"? "text" : "password";
  }
  return (
    <div className="bg-gray-100 w-screen h-[45rem] py-12">
        <form action="#" className="">
          <div className="flex  justify-center items-center h-screen space-y-4">
            <div className="w-full max-w-[30rem] p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-3xl font-extrabold mb-6 text-center">
                Sign Up
              </h2>
              <div className="mb-4">
                <label htmlFor="name" className="select-none block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input  required
                id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <div className="flex">
                  <label
                    className="select-none block text-sm font-medium border-red-800 border4 text-gray-700"
                    htmlFor="male"
                  >
                    Male
                  </label>
                  <input  required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="radio"
                    name="gender"
                    id="male"
                  />
                  <label
                    className="select-none block text-sm font-medium text-gray-700"
                    htmlFor="female"
                  >
                    Female
                  </label>
                  <input  required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                    id="female"
                    type="radio"
                    name="gender"
                  />
                  <label
                    className="select-none block text-sm font-medium text-gray-700"
                    htmlFor="none"
                  >
                    Custom
                  </label>
                  <input  required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                    id="none"
                    type="radio"
                    name="gender"
                    border-black
                    border-4
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="select-none block text-sm font-medium text-gray-700"
                  htmlFor="dob"
                >
                  Enter Your Date of Birth
                </label>
                <input  required 
                  className="w-full placeholder:text-gray-500 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="date"
                  id="dob"
                  name="dob"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="select-none block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input  required 
                id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="passwd" className="select-none block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ref={passRef}
                  type="password"
                  id="passwd"
                  name="passwd"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPasswd" className="select-none block text-sm font-medium text-gray-700">
                 Confirm Password
                </label>
                <input  required 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ref={confPassRef}
                  type="password"
                  id="confirmPasswd"
                  name="passwd"
                  placeholder="Confirm your password"
                />
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <input type="checkbox" onChange={showPass} name="showPasswd" id="showPasswd" />
                  <label htmlFor="showPasswd" className="select-none ml-2 cursor-pointer">
                    Show Password
                  </label>
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <button className="w-1/4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
}

export default SingUp;
