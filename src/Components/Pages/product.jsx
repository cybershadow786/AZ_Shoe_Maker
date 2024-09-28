import React, { useState } from "react";
import { useCart } from "./CartContext"; // Import the cart context

const products = [
    {
      id: 1,
      name: "Classic Leather Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-brown-medicated-cow-leather-loafer-loafers-218.jpg?v=1711537209&width=600",
      price: 12000,
      discountPrice: 6000, // 50% off
      rating: 4.5,
    },
    {
      id: 2,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-brown-executive-loaffer-men-loafers-647.jpg?v=1708783216&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 3,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-black-medicated-cow-leather-loafer-loafers-748.jpg?v=1712213646&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 4,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-handmade-formal-buckle-casual-shoes-new-arrivals-694.jpg?v=1708433765&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 5,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-black-casual-plain-leather-shoes-new-arrivals-309.jpg?v=1708428612&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 6,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-brown-casual-plain-leather-shoes-new-arrivals-880.jpg?v=1708782627&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 7,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-executive-casual-black-loaffers-new-arrivals-219.jpg?v=1721254566&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 8,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-executive-casual-black-loaffers-new-arrivals-219.jpg?v=1721254566&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 9,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-brown-casual-leather-loaffer-new-arrivals-748.jpg?v=1710267727&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 10,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-black-casual-leather-loaffer-new-arrivals-472.jpg?v=1715272448&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 11,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-black-leather-loaffer-with-excutive-buckle-new-arrivals-371.jpg?v=1716978251&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 12,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-casual-brown-loaffers-shoes-new-arrivals-486.jpg?v=1706117694&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 13,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-executive-casual-lv-buckle-shoes-new-arrivals-204.jpg?v=1711312572&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 14,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-brown-executive-casual-mat-leather-shoes-new-arrivals-835.jpg?v=1710684846&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 15,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-casual-brown-mat-leather-with-chorome-buckle-shoes-new-arrivals-421.jpg?v=1708508836&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 16,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-brown-executive-casual-mat-leather-shoes-new-arrivals-835.jpg?v=1710684846&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 17,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-black-executive-casual-mat-leather-shoes-new-arrivals-188.jpg?v=1713360740&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 18,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/men-s-mat-black-loafer-shoes-loafers-392.jpg?v=1711865645&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 19,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-buckle-embellished-coffee-mat-loafer-shoes-men-loafers-562.jpg?v=1706640613&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
    {
      id: 20,
      name: "Elegant Oxford Shoes",
      image: "https://www.hushcat.com.pk/cdn/shop/files/mens-mat-brown-loafer-shoes-men-loafers-588.jpg?v=1708433867&width=600",
      price: 15000,
      discountPrice: 7500, // 50% off
      rating: 4.7,
    },
  ];
  
  const ProductCard = ({ product }) => {
    const { addToCart } = useCart(); 
  
    return (
      <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 ease-in-out relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover rounded-md"
        />
        {product.discountPrice && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
            50% OFF
          </span>
        )}
        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <div>
            {product.discountPrice ? (
              <>
                <span className="text-gray-500 line-through mr-2">
                  {product.price} PKR
                </span>
                <span className="text-red-600 font-bold">
                  {product.discountPrice} PKR
                </span>
              </>
            ) : (
              <span className="text-gray-800 font-bold">{product.price} PKR</span>
            )}
          </div>
          <div className="text-yellow-400">
            {"★".repeat(Math.floor(product.rating))}{" "}
            <span className="text-gray-400">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
          onClick={() => addToCart(product)} // Add to cart logic
        >
          Buy Now
        </button>
      </div>
    );
  };
  
  const ProductsPage = () => {
    const [sortOption, setSortOption] = useState("default");
  
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOption === "low-high") return a.discountPrice - b.discountPrice;
      if (sortOption === "high-low") return b.discountPrice - a.discountPrice;
      return 0;
    });
  
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Leather Shoe Collection</h1>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-4"
            >
              <option value="default">Sort by Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </header>
  
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
  
        <div className="text-center py-8">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Load More
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductsPage;