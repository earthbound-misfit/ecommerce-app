import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { Button } from '../Button/button'

import './payment.styles.scss';

export const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal)

  const handlePayment = async (event) => {
    event.preventDefault();
    if(!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({amount: 10000})
    }).then( res => res.json());
    console.log(response)
  }

  return (
    <>
    <div className='payment-container'>
      <form onSubmit={handlePayment} className='form-container'>
        <h2 className='cc-header'>Enter Credit Card Info:</h2>
        <CardElement className='card-element' />
        <Button type='submit' className='payment-button' buttonType=''>
          Pay Now
        </Button>
      </form>
    </div>
    </>
  );
 
  };

  

