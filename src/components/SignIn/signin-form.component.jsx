import React from 'react';
import { useState } from 'react';
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocFromAuth, 
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../FormInput/form-input.component';
import './signin-form.styles.scss'
import { Button } from '../Button/button.component'

const defaultFormFields = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

   const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert("Incorrect password, please check your input.");
          break 
        case 'auth/user-not-found':
          alert("No user found for this email.");
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
      <h2 className="signin-header">Already have an account?</h2>
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
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">Google Sign In</Button>
        </div>

      </form>
      </div>
    </div>
  )
}

