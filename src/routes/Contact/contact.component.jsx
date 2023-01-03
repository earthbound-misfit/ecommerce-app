import React from 'react';
import { Input } from '@mui/material'
import './contact.styles.scss'
import { Navbar } from '../../components/Navbar/navbar.component';



export const Contact = () => {

  return (
    <>
    <Navbar />
    <div className="contact-outer-container">
    <div class="contact-container">
 
    <div class="wrapper animated bounceInLeft">
      <div class="contact">
        <h3 class="contact-us">Contact Us</h3>
        <div class="alert">Your message has been sent!</div>
        <form id="contactForm">
          <p class="name-field">
            <label>Name <span>*</span></label>
            <Input type="text" name="name" id="name" required />
          </p>
          <p class="company-field">
            <label>Company</label>
            <Input type="text" name="company" id="company" />
          </p>
          <p class="email-field">
            <label>Email <span>*</span></label>
            <Input type="email" name="email" id="email" required />
          </p>
          <p class="phone-field">
            <label>Phone</label>
            <Input type="text" name="phone" id="phone" />
          </p>
          <p class="message-field full">
            <label>Message</label>
            <textarea name="message" rows="5" id="message"></textarea>
          </p>
          <p class="required-field">Required field <span>*</span></p>
          <p class="submit-button">
            <button type="submit">Submit</button>
          </p>
        </form>
    </div>
  </div>
</div>
</div>
    </>
  )
}