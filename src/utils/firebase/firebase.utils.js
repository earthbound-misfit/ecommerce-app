import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
 } from 'firebase/auth';
 import { 
  getFirestore, 
  doc,
  getDoc,
  setDoc 
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6aeXGUftf_PJ_dfxyXDuN9O-GyCSQG-0",
  authDomain: "broke-nomad.firebaseapp.com",
  projectId: "broke-nomad",
  storageBucket: "broke-nomad.appspot.com",
  messagingSenderId: "117882550381",
  appId: "1:117882550381:web:bb71651ba7995cfb40a764"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists())

  // if user data does not exist
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log('error creating users', error.message)
    }
  }

  // if yes, return userDocRef
  return userDocRef;
}