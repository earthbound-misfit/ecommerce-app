import './product.styles.scss'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { addItemToCart } from '../../redux/cart/cart-actions';
import { Button } from '../Button/button'

import { IconButton } from '@mui/material';


export const Product = ({product}) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [clickedHeart, setClickedHeart] = useState(false);
  
  const addToCart = () => dispatch(addItemToCart(cartItems, product));




  return (
    <>
    <div className='product-card-container'>
      <img className='product-image' src={imageUrl} alt={`${name}`}/>
     
  </div>
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>
        
        <Button onClick={addToCart}>Add to Cart</Button>


  </>
  
    );
  
};

