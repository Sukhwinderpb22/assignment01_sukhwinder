import React, { useState } from 'react';
import './CartPage.css';

function CartPage({ cart, handleUpdateCart, handleRemoveFromCart, handleFinalizePurchase }) {
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  function calculateTotalPurchase() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  function changeFinalPurchase() {
    handleFinalizePurchase();
    setPurchaseComplete(true);
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cart.map((item) => (
          <div className="cartPicCard" key={item.id}>
            <img src={item.image} alt={item.name} className="itemImage" />
            <div className="item-details">
              <h5 className="item-name">{item.name}</h5>
              <p className="item-price">${item.price.toFixed(2)} x </p>
              <div className="quantity-container">
                <button
                  className="quantity-button"
                  onClick={() => handleUpdateCart(item, item.quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="quantity-input"
                />
                <button
                  className="quantity-button"
                  onClick={() => handleUpdateCart(item, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="finalize-button-container">
          <p className="total-text">Total: ${calculateTotalPurchase()}</p>
          {purchaseComplete ? (
            <p className="thanks-message">Thanks for shopping</p>
          ) : (
            <button
              className="finalize-button"
              onClick={changeFinalPurchase}
            >
              Finalize the Purchase
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default CartPage;
