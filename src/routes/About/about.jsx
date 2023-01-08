import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/navbar'
import Adventurer from '../../assets/images/undraw_adventure_map_hnin.svg'
import { Button } from '../../components/Button/button'
import '../../catalog.styles.scss'

export const About = () => {
  return (
    <div>
      <Navbar />

      <div className='container' style={{display: 'block', marginTop: '10%', textAlign: 'center'}}>
        <div style={{display: 'inline-block', marginTop: '25px', justifyContent: 'center'}}>
          <img src={Adventurer} alt="adventurer" width="300px" style={{marginTop: '25px'}}/>
      
          <h1 className='header' style={{marginTop: '10px', color: 'rgb(0,72,82)', fontFamily: 'Comfortaa', textAlign: 'center', textTransform: 'uppercase'}}>About Broke Nomad</h1>
          <p style={{width: '400px', textAlign: 'left', fontFamily: 'Comfortaa'}}>Broke Nomad is a community for travelers on a budget. Products and Blog for the budget-conscious traveler. Sign up to be a contributor on the blog, or shop for travel clothes and accessories at the shop!</p>
          <Link style={{textDecoration: 'none'}} to='/contact'>
            <Button style={{width: '100%'}}>Contact Us</Button>
          </Link>
        </div>
        {/* <div style={{display: 'block', margin: 'auto', marginTop: '10px'}}>
        
        </div> */}
      </div>
    </div>
  )
}