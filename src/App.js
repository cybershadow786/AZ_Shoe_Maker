import About from "./Components/Pages/about";
import ContactUs from "./Components/Pages/contactUs";
import Home from "./Components/Pages/home";
import React from "react";
import Product from "./Components/Pages/product";
import Navbar from "./Components/Utilites/Navbar/Navbar";
import Footer from "./Components/Utilites/Footer/Footer";

function App() {
  return (
    <>
    <Home />
    <Product /> 
    <About /  >
    <ContactUs />
    <Navbar />
    <Footer />
    </>
  );
}

export default App;
