import React from "react";
import { useCart } from "./CartContext";

const MyCart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cart.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-800 font-bold mt-2">
                {product.discountPrice ? (
                  <>
                    <span className="line-through text-gray-500 mr-2">
                      {product.price} PKR
                    </span>
                    <span className="text-red-600">
                      {product.discountPrice} PKR
                    </span>
                  </>
                ) : (
                  <span>{product.price} PKR</span>
                )}
              </p>
              <button
                className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition-colors transform hover:scale-105"
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
