import "./App.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartBox from "./components/CartBox";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Item already exists in the cart, increase quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  }

  function onRemoveFromCart(itemId) {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  }

  return (
    <div className="App">
      <ProductList onAddToCart={addToCart} />

      <div className="cart-container">
        <div className="item-list-container">
          <CartBox items={cartItems} onRemoveFromCart={onRemoveFromCart} />
        </div>
        <div className="checkout-container"></div>
      </div>
    </div>
  );
}

export default App;
