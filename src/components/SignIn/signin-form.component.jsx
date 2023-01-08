import React from 'react';
import { useState } from 'react';
import { 
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { FormInput } from '../FormInput/form-input';
import './signin-form.styles.scss'
import { Button } from '../Button/button'

const defaultForm = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultForm);
  }

   const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)

      resetFormFields();
      
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert("Incorrect password/email combination, please try again.");
          break 
        case 'auth/user-not-found':
          alert("No user found for this email. Please create an account.");
          break;
        default:
          console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value })
  }

  return (
    <div className="sign-in-container">
      <h2 className="signin-header">Already part of the tribe?</h2>
      <h5>Sign in with email and password</h5>
      <div>
      <form onSubmit={handleSubmit}>

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
        
        <div className='sign-in-button-container'>
        <Link className='redirect' to='/shop'>
          <Button type="submit">Sign In</Button>
        </Link>
        <Link className='redirect' to='/shop'>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">Google Sign In</Button>
        </Link>
        </div>

      </form>
      </div>
    </div>
  )
}

