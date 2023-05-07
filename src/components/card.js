import { useState } from "react";

function Card(props) {
  const { name, image, price } = props;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // logic for adding product to cart
  };

  return (
    <div className="card">
      <img src={image} height="150" width="auto" alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <div className="quantity-controls">
        <button onClick={handleQuantityDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleQuantityIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Card;
