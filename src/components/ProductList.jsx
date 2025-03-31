import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart , cart , setCart }) => {
  const [products, setProducts] = useState([]);
  const removeFromCart = (product) => {
    setCart(cart.filter((item, i) => item.id !== product.id));
  };

  useEffect(() => {
    // Fetch products from API 
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
