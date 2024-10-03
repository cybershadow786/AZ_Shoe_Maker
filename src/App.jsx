import React from "react";
import {Routes , Route } from "react-router-dom";
import About from "./Components/Pages/about";
import ContactUs from "./Components/Pages/contactUs";
import Home from "./Components/Pages/home";
import Product from "./Components/Pages/product"
import Navbar from "./Components/Utilites/Navbar/Navbar";
import Footer from "./Components/Utilites/Footer/Footer";
import MyCart from "./Components/Pages/myCart";
import SingUp from "./Components/Utilites/Singup & Login/singup";
import Login from "./Components/Utilites/Singup & Login/login";
function App() {
  return (
    <>
    <div className="m-0">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/myCart" element={<MyCart />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SingUp />} />
        </Routes>
        <Footer />
        </div>
      </>
  );
}

export default App;
