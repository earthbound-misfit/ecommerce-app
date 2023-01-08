import './cart.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg' 
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemCount, selectIsCartOpen } from '../../redux/cart/cart-selectors'
import { setIsCartOpen } from '../../redux/cart/cart-actions'

import React from 'react'

export const Cart = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemCount = useSelector(selectCartItemCount);

  const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div onClick={toggleCart}>
    <div className='cart-container' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemCount}</span>
    </div>
    </div>
  )
}

