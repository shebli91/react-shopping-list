import { useState } from "react";

function Card(props) {
  const { id, name, image, price, onAddToCart } = props;
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
    const product = {
      id,
      name,
      image,
      price,
      quantity,
    };
    onAddToCart(product);
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
