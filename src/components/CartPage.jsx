import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, updateQuantity }) => {
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getDicount = () => {
    return ((cart.reduce((total, item) => total + item.price * item.quantity, 0))/10).toFixed(2) ;
  }

  const getFinalPrice = () => {
    const amt = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    return (amt-((amt/10).toFixed(2))).toFixed(2);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty. <Link to="/" className="text-blue-500">Shop Now</Link></p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-red-500 text-white px-3 py-1 rounded" 
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                >-</button>
                <span className="mx-3">{item.quantity}</span>
                <button 
                  className="bg-green-500 text-white px-3 py-1 rounded" 
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                >+</button>
              </div>
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">Total: ${getTotalAmount()}</h2>
          <h2 className="text-xl font-bold mt-4">Discount of 10% ${getDicount()}</h2>
          <h2 className="text-xl font-bold mt-4">Final price ${getFinalPrice()}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
