import React from "react";

const CartModal = ({ isOpen, onClose, cart, removeFromCart, setIsCartOpen }) => {
  if (!isOpen) return null;

  const close = (e) => {
    if(e.target !== e.currentTarget){
        return
    }
    setIsCartOpen(false)
}


  return (
    <div onClick={close} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div  className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>{item.title}</span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
