import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cart-drop-menu.styles.scss';
import { Button } from '../Button/button';
import { CartItem } from '../CartItem/cart-item';
import { selectCartItems, selectIsCartOpen } from '../../redux/cart/cart-selectors';
import { useNavigate } from 'react-router-dom'
import { setIsCartOpen } from '../../redux/cart/cart-actions';

export const CartDropMenu = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const nav = useNavigate();
  
  const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen))

  const handleGoToCheckout = () => {
    nav('/checkout')
  }

  return (
    <div className='cart-drop-menu-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <p className='empty-cart'>Your Cart is Empty</p>
        )}
      </div>
      <Button onClick={() => {
          toggleCart();
          handleGoToCheckout();
        }}>Go To Checkout</Button>
    </div>
  )
}

