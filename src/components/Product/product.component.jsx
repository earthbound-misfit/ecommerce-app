import './product.styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { addItemToCart } from '../../redux/cart/cart.action';
import { Button } from '../Button/button.component'


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

