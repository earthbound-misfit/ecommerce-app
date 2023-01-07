import React, { useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from '../src/utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home/home.component';
import { Navbar } from './components/Navbar/navbar.component'
import { About } from '../src/routes/About/about.component';
import { Authentication } from './routes/Authentication/authentication.component';
import { Contact } from '../src/routes/Contact/contact.component';
import { Shop } from '../src/routes/Shop/shop.component';
import { Checkout } from '../src/routes/Checkout/checkout.component'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
  

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;