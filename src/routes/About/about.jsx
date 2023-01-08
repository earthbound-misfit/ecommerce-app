import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/navbar'
import Adventurer from '../../assets/images/undraw_adventure_map_hnin.svg'
import { Button } from '../../components/Button/button'
import './about.styles.scss'

export const About = () => {
  return (
    <div>
      <Navbar />

      <div className='outer-container'>
        <div className='container'>
          <img className='image' src={Adventurer} alt="adventurer"/>
      
          <h1 className='header'>About WanderLust</h1>
          <p className='paragraph'>WanderLust is a community for travelers with an eye for fashion and a love for adventure.</p>
          <Link style={{textDecoration: 'none'}} to='/shop'>
            <Button style={{width: '100%'}}>Shop Now</Button>
          </Link>
        </div>
        {/* <div style={{display: 'block', margin: 'auto', marginTop: '10px'}}>
        
        </div> */}
      </div>
    </div>
  )
}