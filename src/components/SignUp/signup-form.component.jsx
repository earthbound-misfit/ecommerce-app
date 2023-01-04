import React from 'react';
import { useState, useContext } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import { FormInput } from '../FormInput/form-input.component';
import './signup-form.styles.scss'
import { Button } from '../Button/button.component'
import { UserContext } from '../../contexts/user.component'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
        );

        await createUserDocFromAuth(user, { displayName });
        resetFormFields();
      
    } catch(error) {
      if(error.code === 'auth/email-already-in-user') {
        alert('Cannot create user, email already in use.');
      } else {
        console.log(error);
      }
      console.log('User creation encountered an error', error);
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2 className="signup-header">I do not have an account</h2>
      <h5>Sign up with your email and password</h5>
      <div>
      <form onSubmit={handleSubmit}>

        <FormInput 
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
   
        <FormInput 
          label="Email"
          type="email" 
          required 
          onChange={handleChange} 
          name="email" 
          value={email} 
        />

        <FormInput 
          label="Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="password" 
          value={password} 
        />

        <FormInput 
          label="Confirm Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword} 
        />

        <Button className="button-container" style={{width: '100%'}} type="submit">Sign Up</Button>

      </form>
      </div>
    </div>
  )
}

