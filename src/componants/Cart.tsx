import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export const Cart: React.FC = () => {
  const { cartItems, total, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div>
          <h1>Your Cart</h1>
          <p>Review everything you have added and proceed to checkout.</p>
        </div>
        {cartItems.length > 0 && (
          <button type="button" className="clear-cart" onClick={clearCart}>
            Clear cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-message">
          <p>Your cart is empty. Add items from the shop to see them here.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button type="button" className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total price</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};
