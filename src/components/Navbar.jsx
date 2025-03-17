import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">
        <Link to="/">My Store</Link>
      </h1>
      <Link to="/cart" className="relative bg-white text-blue-500 px-4 py-2 rounded-md">
        Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
