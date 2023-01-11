import React, { useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from '../src/utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home/home';
import { Navbar } from './components/Navbar/navbar'
import { About } from '../src/routes/About/about';
import { Authentication } from './routes/Authentication/authentication';
import { Shop } from '../src/routes/Shop/shop';
import { Checkout } from '../src/routes/Checkout/checkout';
import { Favorites } from '../src/routes/Favorites/favorites'

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
        <Route path='favorites' element={<Favorites />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;