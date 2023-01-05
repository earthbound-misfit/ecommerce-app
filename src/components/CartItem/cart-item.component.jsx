import './cart-item.styles.scss'

import React from 'react'

export const CartItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  
  return (
    <div className='cart-item-container'>
      <div className='item-details'>

        <img src={imageUrl} alt={name}/>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity}x${price}</span>
          
      </div>
    </div>
  )
}


