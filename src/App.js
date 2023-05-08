import "./App.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartBox from "./components/CartBox";
import CartCheckoutForm from "./components/CartCheckoutForm";

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

  function checkout(purchaseInfo) {
    const { customerName, customerEmail } = purchaseInfo;
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const purchasedItems = cartItems
      .map((item) => {
        return `${item.name} (x${item.quantity}) - $${
          item.price * item.quantity
        }`;
      })
      .join("\n");

    // Simulate a purchase by waiting for 2 seconds before showing a thank you message
    const message = `Dear ${customerName}, thank you for your purchase!
    
    You have purchased:
    ${purchasedItems}
    
    Total price: $${totalPrice}
    
    We will send you a copy of your order at: ${customerEmail}`;
    setTimeout(() => {
      alert(message);
    }, 1000);

    setCartItems([]);
  }

  return (
    <div className="App">
      <ProductList onAddToCart={addToCart} />

      <div className="cart-container">
        <div className="item-list-container">
          <CartBox items={cartItems} onRemoveFromCart={onRemoveFromCart} />
        </div>
        <div className="checkout-container">
          <CartCheckoutForm onCheckout={checkout} />
        </div>
      </div>
    </div>
  );
}

export default App;
