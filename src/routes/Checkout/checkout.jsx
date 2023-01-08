import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import React from 'react';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import { CheckoutItem } from '../../components/CheckoutItem/checkout-item';
import { Payment } from '../../components/Payment/payment';

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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
          <Payment />
    </div>
  );
};


