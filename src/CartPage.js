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

function CartItem({ item, handleUpdateCart, handleRemoveFromCart }) {
  return (
    <div className="cartPics">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="">
        <h5 className="productDetails">{item.name}</h5>
        <p className="productPrice">${item.price.toFixed(2)} x </p>
        <div className="productQuantity">
          <button
            className="productQuantityButton"
            onClick={() => handleUpdateCart(item, item.quantity - 1)}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            readOnly
            className="quantityBox"
          />
          <button
            className="addButton"
            onClick={() => handleUpdateCart(item, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="removeButton"
          onClick={() => handleRemoveFromCart(item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleUpdateCart={handleUpdateCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="finalizeButton">
          <p className="total-text">Total: ${calculateTotalPurchase()}</p>
          {purchaseComplete ? (
            <p>Thanks for shopping</p>) : 
            (
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
