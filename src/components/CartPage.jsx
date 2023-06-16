import React from 'react';

const CartPage = ({ cartItems }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
