function CartBox({ items, onRemoveFromCart }) {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveClick = (itemId) => {
    onRemoveFromCart(itemId);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
            <button
              className="delete-cart-item-btn"
              onClick={() => handleRemoveClick(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Total:${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default CartBox;
