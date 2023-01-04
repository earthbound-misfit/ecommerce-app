import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home/home.component';
import { Shop } from './routes/Shop/shop.component';
import { Navbar } from './components/Navbar/navbar.component'
import { Tops } from '../src/routes/Shop/Tops/tops.component';
import { HomeDecor } from '../src/routes/Shop/HomeDecor/homedecor.component';
import { Bottoms } from '../src/routes/Shop/Bottoms/bottoms.component';
import { Accessories } from '../src/routes/Shop/Accessories/accessories.component';
import { Outerwear } from './routes/Shop/Outerwear/outerwear.component';
import { Shoes } from '../src/routes/Shop/Shoes/shoes.component';
import { About } from '../src/routes/About/about.component';
import { Authentication } from './routes/Authentication/authentication.component';
import { SignUpForm } from '../src/components/SignUp/signup-form.component';
import { Contact } from '../src/routes/Contact/contact.component'

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />}>
        <Route path='homedecor' element={<HomeDecor />} />
        <Route path='tops' element={<Tops />} />
        <Route path='bottoms' element={<Bottoms />} />
        <Route path='outerwear' element={<Outerwear />} />
        <Route path='accessories' element={<Accessories />} />
        <Route path='shoes' element={<Shoes />} />
      </Route>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='signup' element={<SignUpForm />} />
      <Route path='auth' element={<Authentication />} />
    </Route>
  </Routes>
  );
}

export default App;