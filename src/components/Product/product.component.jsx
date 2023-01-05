import './product.styles.scss'
import { Button } from '../Button/button.component'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'


export const Product = ({product}) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);

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

