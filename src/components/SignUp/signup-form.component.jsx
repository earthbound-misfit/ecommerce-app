import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import { FormInput } from '../FormInput/form-input';
import './signup-form.styles.scss'
import { Button } from '../Button/button'

const defaultForm = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = formFields;
  
  const resetFormFields = () => {
    setFormFields(defaultForm);
  }

  const navigate = useNavigate();

  const handleRedirect = event => {
    event.preventDefault();
    navigate('/shop')
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
        alert('SIGN UP SUCCESSFUL! You are now signed in to your account.')
        navigate('/shop')
      
    } catch(error) {
      if(error.code === 'auth/email-already-in-user') {
        alert('Sorry, email is already in use. Sign in or try another email.');
      } else {
        console.log(error);
      }
      console.log('Error: Cannot create user.', error);
      alert('Sign up unsuccessful. Please check your input and try again.')
      navigate('/auth')
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value });
  }

  return (
    <div className="sign-up-container">
      <h2 className="signup-header">I do not have an account</h2>
      <h5>Sign up with your email and password</h5>

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
      {/* <Link className='redirect' to='/shop'> */}
        <Button className="button-container" style={{width: '100%'}} type="submit">Sign Up</Button>
      {/* </Link> */}
      </form>
    </div>
  )
}

