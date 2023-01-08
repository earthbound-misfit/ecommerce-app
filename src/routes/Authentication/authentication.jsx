import React from 'react'
import { Navbar } from '../../components/Navbar/navbar';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
  auth,
  createUserDocFromAuth 
} from '../../utils/firebase/firebase.utils'
import { SignUpForm } from '../../components/SignUp/signup-form.component';
import './authentication.styles.scss'
import { SignInForm } from '../../components/SignIn/signin-form.component';

export const Authentication = () => {
  useEffect( () => {
    async function fetchData() {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocFromAuth(response.user);
    }
    }
    fetchData()
  }, []);

  return (
    <div>
      <Navbar />
      <div className="login-container">
      <SignInForm />
      <SignUpForm />
      </div>
    </div>

  )
}

