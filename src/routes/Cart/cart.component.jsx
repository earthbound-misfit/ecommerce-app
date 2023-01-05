import './cart.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg' 
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import React from 'react'

export const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-container' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemCount}</span>
    </div>
  )
}

