import React from 'react'
import { Navbar } from '../../components/Navbar/navbar.component';
import { Button } from '../../components/Button/button.component'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
  auth,
  signInWithGooglePopup, 
  createUserDocFromAuth 
} from '../../utils/firebase/firebase.utils'
import { SignUpForm } from '../../components/SignUp/signup-form.component';
import '../../components/Button/button.styles.scss'
import './login.styles.scss'

export const Login = () => {
  useEffect( () => {
    async function fetchData() {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocFromAuth(response.user);
    }
    }
    fetchData()
  }, []);

    const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
      <Button buttonType='google' onClick={logGoogleUser}>
        Sign In With Google
      </Button>
        <SignUpForm />
      </div>
    </div>

  )
}

