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
          <p className='paragraph'>Wanderlust's mission is to provide a one-stop-shop for travelers to purchase high-quality, affordable travel essentials and gear, while also giving back to the community. A portion of the proceeds from every purchase will be used to fund study abroad programs for low-income students.</p>

          <p className='paragraph'>We believe that travel is an important part of personal growth and development, and we want to make it accessible to as many people as possible. Unfortunately, for many low-income students, the cost of studying abroad can be prohibitively expensive. By supporting our website, our customers can help these students have the opportunity to broaden their horizons and gain valuable life experience.</p>

          <p className='paragraph'>We are committed to providing our customers with top-notch products that meet their travel needs, whether they are going on a backpacking trip or a luxury vacation. We offer a wide range of items, from luggage and travel accessories to clothing and outdoor gear, all at competitive prices.</p>

          <p className='paragraph'>Wanderlust is not just a place to shop, but also a community of like-minded travelers who share a passion for exploration and adventure. We provide resources and information to help our customers plan their trips and make the most of their experiences.</p>

          <p className='paragraph'>Ultimately, our goal is to create a world where everyone has the opportunity to travel and learn about other cultures, regardless of their financial situation. By supporting our website, our customers can help make this vision a reality.</p>
          
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