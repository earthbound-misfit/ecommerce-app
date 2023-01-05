import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-drop-menu.styles.scss';
import { Button } from '../Button/button.component';
import { CartItem } from '../CartItem/cart-item.component';
import { useNavigate } from 'react-router-dom'

export const CartDropMenu = () => {
  const { cartItems } = useContext(CartContext);
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

