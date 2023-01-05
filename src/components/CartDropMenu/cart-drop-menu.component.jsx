import React from 'react';
import './cart-drop-menu.styles.scss';
import { Button } from '../Button/button.component';


export const CartDropMenu = () => {


  return (
    <div className='cart-drop-menu-container'>
      <div className='cart-items'>
        <Button>Go to Checkout</Button>
      </div>
    </div>
  )
}

