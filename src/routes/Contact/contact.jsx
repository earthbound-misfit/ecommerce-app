import React from 'react';
import { Input } from '@mui/material';
import '../../components/Button/button.styles.scss';
import { Navbar } from '../../components/Navbar/navbar';
import './contact.styles.scss';
import { Button } from '../../components/Button/button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, company='', phone='', message } = data;
    console.log(name, email, company, phone, message)
  }

  return (
    <>
    <Navbar />
    <div className="contact-outer-container">
    <div className="contact-container">
 
    <div className="wrapper animated bounceInLeft">
      <div className="contact">
        <h3 className="contact-us">Contact Us</h3>
        <div className="alert">Your message has been sent!</div>
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="name-field">
            <label>Name <span>*</span></label>
            <Input 
              type="text" 
              name="name" 
              id="name"
              {...register('name', {
                required: { value: true, message: 'Enter your name'}
              })} 
            />
          </div>
          <div className="company-field">
            <label>Company</label>
            <Input type="text" name="company" id="company" />
          </div>
          <div className="email-field">
            <label>Email <span>*</span></label>
            <Input 
              type="email" 
              name="email" 
              id="email" 
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })} 
              />
          </div>
          <div className="phone-field">
            <label>Phone</label>
            <Input type="text" name="phone" id="phone" />
          </div>
          <div className="message-field full">
            <label>Message</label>
            <textarea name="message" rows="5" id="message"></textarea>
          </div>
          <div className="required-field">Required field <span>*</span></div>
          <Link style={{textDecoration: 'none'}}>
            <Button>Submit</Button>
          </Link>
        </form>
    </div>
  </div>
</div>
</div>
    </>
  )
}