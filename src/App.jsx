import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((_, i) => i !== index)); // Remove item if quantity is 0
    } else {
      setCart(cart.map((item, i) => 
        i === index ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} />} />
      </Routes>
    </Router>
  );
}

export default App;
