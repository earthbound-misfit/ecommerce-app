import './checkout.styles.scss';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItem } from '../../components/CheckoutItem/checkout-item.component';

export const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className='header'>
          <span>Product</span>
        </div>
        <div className='header'>
          <span>Description</span>
        </div>
        <div className='header'>
          <span>Quantity</span>
        </div>
        <div className='header'>
          <span>Price</span>
        </div>
        <div className='header'>
          <span>Remove</span>
        </div>
      </div>
        {
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};


