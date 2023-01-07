import React from 'react';
import { useSelector } from 'react-redux';
import './cart-drop-menu.styles.scss';
import { Button } from '../Button/button.component';
import { CartItem } from '../CartItem/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { useNavigate } from 'react-router-dom'

export const CartDropMenu = () => {
  const cartItems = useSelector(selectCartItems);
  const nav = useNavigate();

  const handleGoToCheckout = () => {
    nav('/checkout')
  }

  return (
    <div className='cart-drop-menu-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
        ))};
      </div>
      <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
    </div>
  )
}

