import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ProductsList from "./components/ProductsList.js";
import Header from "./components/Header.js";
import Cart from "./components/Cart.js";
import About from "./components/About.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, quantity: productExist.quantity + 1 } : item));
      toast.success("Added to Cart");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success("Added to Cart");
    }
  };

  const removeFromCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ?
            { ...productExist, quantity: productExist.quantity - 1 } :
            item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <div style={{ paddingBottom: "7%" }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<ProductsList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer autoClose={1000} />
    </>
  )
}

export default App;
