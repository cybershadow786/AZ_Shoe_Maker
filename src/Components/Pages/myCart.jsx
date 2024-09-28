import React from "react";
import { useCart } from "./CartContext";
const MyCart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cart.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-800 font-bold mt-2">
                ${product.discountPrice || product.price}
              </p>
              <button
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition-colors"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
