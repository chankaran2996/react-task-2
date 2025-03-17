import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">My Store</h1>
      <button
        className="relative bg-white text-blue-500 px-4 py-2 rounded-md"
        onClick={openCart}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
