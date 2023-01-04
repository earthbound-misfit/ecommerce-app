import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/broke-nomad-image-only.jpg'
import { UserContext } from '../../contexts/user.component'
import { signOutUser } from '../../utils/firebase/firebase.utils';
 
export const Navbar = () => {
  const { currentUser } = useContext(UserContext)
  
  return (
    <>
    <Box sx={{ flexGrow: 1, opacity: '70%' }}>
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

          <div>
       
            <Button sx={{mx: 5, fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Comfortaa'}} color="inherit" href='/shop'>Shop</Button>

            <Button sx={{mx: 1, fontFamily: 'Comfortaa' }} color="inherit" href='/blog'>Blog</Button>
    
            <Button sx={{mx: 1, fontFamily: 'Comfortaa' }} color="inherit" href='/about'>About</Button>

            {currentUser ? (
                <Button sx={{fontFamily: 'Comfortaa'}} color="inherit" href='/auth' onClick={signOutUser}>Sign Out</Button>
            ) : (
              <Button sx={{fontFamily: 'Comfortaa'}} color="inherit" href='/auth'>Login</Button>
            )}

          </div>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet />
    </>
  );
}

