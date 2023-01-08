import './product.styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { addItemToCart } from '../../redux/cart/cart-actions';
import { Button } from '../Button/button'


export const Product = ({product}) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <>
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>

        <Button onClick={addToCart}>Add to Cart</Button>

    </div>
  </>
  
    );
  
};

