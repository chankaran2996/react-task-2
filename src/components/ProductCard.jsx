import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
