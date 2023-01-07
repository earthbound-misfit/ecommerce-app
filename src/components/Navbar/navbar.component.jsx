import * as React from 'react';
import { useSelector } from 'react-redux';
import { Cart } from '../../routes/Cart/cart.component';
import { CartDropMenu } from '../CartDropMenu/cart-drop-menu.component';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/broke-nomad-image-only.jpg'
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navbar.styles.scss'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectIsCartOpen } from '../../redux/cart/cart.selector'

 
export const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
    <Box sx={{ flexGrow: 1, opacity: '90%', zIndex: 2, position: 'fixed'}}>
      <AppBar sx={{ backgroundColor: 'rgb(0,72,82)', padding: '20px' }} position="fixed">
        <Toolbar>
          <Link href="/">
      <Box
        component="img"
        sx={{ height: 70 }}
        alt="Logo"
        borderRadius='50%'
        src={logo}
        marginRight="10px"
      />
    </Link>
       
          <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: '2.5rem', fontFamily: 'Comfortaa', textDecoration: 'none' }}>
            BROKE NOMAD
          </Typography>

          
           
                <Button sx={{mx: 5, fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Comfortaa'}} color="inherit" href='/shop'>Shop</Button>
              
              
                <Button sx={{mx: 1, fontFamily: 'Comfortaa' }} color="inherit" href='/about'>About</Button>
              
            
                {currentUser ? (
                  <Button sx={{fontFamily: 'Comfortaa'}} color="inherit" href='/auth' onClick={signOutUser}>Sign Out</Button>
                ) : (
                <Button sx={{fontFamily: 'Comfortaa'}} color="inherit" href='/auth'>Login</Button>
                )}
              
                  <Cart />

             
            {isCartOpen && 
              <CartDropMenu />
            }
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet />
    </>
  );
}

