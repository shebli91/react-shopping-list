import { useState } from "react";

function CartCheckoutForm({ onCheckout, totalPrice }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setCustomerEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const purchaseInfo = { customerName, customerEmail };

    onCheckout(purchaseInfo);
    setCustomerName("");
    setCustomerEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" value={customerName} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={customerEmail}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit">Purchase</button>
    </form>
  );
}

export default CartCheckoutForm;
