import React from 'react';
import '../App.css';
function ShoppingCartPage() {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <p>Items in your cart:</p>
      <ul>
        <li>CAMERA - Quantity: 1 - Price: RS 500</li>
        <li>TOY B - Quantity: 2 - Price: RS 2000</li>
      </ul>
    <p>Total: RS 2500</p>
    </div>
  );
}

export default ShoppingCartPage;