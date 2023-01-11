import './product.styles.scss'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { addItemToCart } from '../../redux/cart/cart-actions';
import { Button } from '../Button/button'
import { selectFavoriteSlice } from '../../redux/favorites/favorites-selectors';
import { addItemToFavorites } from '../../redux/favorites/favorites-actions';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';


export const Product = ({product}) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const favoriteItems = useSelector(selectFavoriteSlice);
  const [clickedHeart, setClickedHeart] = useState(false);
  
  const addToCart = () => dispatch(addItemToCart(cartItems, product));

  const addToFavorites = () => {
    dispatch(addItemToFavorites(favoriteItems, product));
  }


  return (
    <>
    <div className='product-card-container'>
      <img className='product-image' src={imageUrl} alt={`${name}`}/>
     <div className='top-right-heart'>
      <IconButton id='heart-icon' onClick={event => {
        setClickedHeart(!clickedHeart)
        console.log(addToFavorites())
      }}>{clickedHeart ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
      </IconButton>
  </div>
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>
        
        <Button onClick={addToCart}>Add to Cart</Button>

    </div>
  </>
  
    );
  
};

