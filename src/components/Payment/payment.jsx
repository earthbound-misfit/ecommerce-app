import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { Button } from '../Button/button.component'

import './payment.styles.scss';

export const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();
    if(!stripe || !elements) {
      return;
    }
    
    
  }

  return (
    <>
    <div className='payment-container'>
      <form className='form-container'>
        <h2 className='cc-header'>Enter Credit Card Info:</h2>
        <CardElement className='card-element' />
        <Button className='payment-button' buttonType=''>
          Pay Now
        </Button>
      </form>
    </div>
    </>
  );
 
  };

  

