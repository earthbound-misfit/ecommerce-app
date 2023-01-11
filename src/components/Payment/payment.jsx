import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '../Button/button'
import './payment.styles.scss';

export const Payment = () => {
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const processPayment = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
          // email: currentUser ? currentUser.email: 'Email'
        },
      },
    });



    if (processPayment.error) {
      alert(`Payment not processed. Error: ${processPayment.error.message}`);
    } else {
      if (processPayment.paymentIntent.status === 'succeeded') {
        alert('Success! Thank you for your payment!');
      }
    }
  };

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

  

