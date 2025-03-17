import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    if(cart.includes(product)){
      alert("Item already added to the cart")
    }else{
      setCart([...cart, product]);
    }
    
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <ProductList addToCart={addToCart} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} setIsCartOpen={setIsCartOpen} cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
