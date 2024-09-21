import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Components/Pages/about";
import ContactUs from "./Components/Pages/contactUs";
import Home from "./Components/Pages/home";
import Product from "./Components/Pages/product";
import Navbar from "./Components/Utilites/Navbar/Navbar";
import Footer from "./Components/Utilites/Footer/Footer";
import MyCart from './Components/Pages/myCart';

function App() {
  console.log(Router);
  
  return (
    <>
      <Router>
        <Navbar /> 
        <div className="container">
          <Routes>
            <Route path="./Components/Pages/home" element={<Home />} />  {/* Render Home by default */}
            <Route path="./Components/Pages/about" element={<About />} />  {/* Render About component */}
            <Route path="./Components/Pages/product" element={<Product />} />
            <Route path="./Components/Pages/myCart" element={<MyCart />} />
            <Route path="./Components/Pages/contactUs" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer /> 
      </Router>
    </>
  );
}

export default App;
