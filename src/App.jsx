import React from "react";
import {Routes , Route } from "react-router-dom";
import About from "./Components/Pages/about";
import ContactUs from "./Components/Pages/contactUs";
import Home from "./Components/Pages/home";
import Product from "./Components/Pages/product";
import Navbar from "./Components/Utilites/Navbar/Navbar";
import Footer from "./Components/Utilites/Footer/Footer";
import MyCart from "./Components/Pages/myCart";
import Login from "./Components/Pages/login";
import SingUp from "./Components/Pages/singup";
function App() {
  return (
    <>
    <div className="ml-0">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
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
