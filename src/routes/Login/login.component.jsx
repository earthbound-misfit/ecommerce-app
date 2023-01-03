import React from 'react'
import { Navbar } from '../../components/Navbar/navbar.component'
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'

export const Login = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
  };
  return (
    <div>
      <Navbar />
      <div style={{marginTop: '100px'}}>
      <h1>LOGIN PAGE</h1>
      <button onClick={logGoogleUser}>
        Sign In With Google
      </button>
      </div>
    </div>
  )
}

