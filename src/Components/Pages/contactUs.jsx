// import React from 'react'

// function ContactUs() {
//   return (
//     <div>
//       <h1 className='bg-red-700 text-white p-3 m-4 text-center uppercase'>
//         hello from Contact us
//       </h1>
//     </div>
//   )
// }

// export default ContactUs
import React from 'react';

function ContactUs() {
  return (
    <>
    <div className="relative h-fit w-full ml-0">
        <div className="h-screen">
          <div className="before:contents-[''] before:block before:absolute before:inset-0 before:bg-contactUs-cover before:bg-cover before:bg-center before:opacity-100 bg-[rgba(0, 0, 0, 0.5)]"></div>
          <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-5xl font-extrabold _375:text-2xl sm:text-3xl _890:text-5xl">
            Get in Touch with Us
            </h1>
            <br />
            <h1 className="text-yellow-500 italic text-3xl font-bold _375:text-lg sm:text-xl _890:text-3xl text-center w-10/12">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, 
            reach out to us using the form below or contact us through any of the following options.            </h1>
          </div>
        </div>
      </div>

    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="bg-white shadow-md p-6 rounded-lg w-80 text-center">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-600">imadeelwaheed@gmail.com</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg w-80 text-center">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-600">+923244367550</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg w-80 text-center">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p className="text-gray-600">Bhati Chowk, Lahore</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Subject</label>
          <input
            type="text"
            className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Subject"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      {/* Social Media */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Connect with Us on Social Media</h2>
        <div className="flex space-x-6">
          <a href="/" className="text-blue-600 hover:text-blue-800 font-bold">Instagram</a>
          <a href="/" className="text-blue-600 hover:text-blue-800 font-bold">Facebook</a>
          <a href="/" className="text-blue-600 hover:text-blue-800 font-bold">Twitter</a>
          <a href="/" className="text-blue-600 hover:text-blue-800 font-bold">LinkedIn</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
