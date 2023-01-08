
import './checkout-item.styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../redux/cart/cart-actions'

export const CheckoutItem = ( {cartItem} ) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems)

  const handleClearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem))
  const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, cartItem))


  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'> 
        <div onClick={handleRemoveItem} className='arrow'>
          &#10094;
        </div>
          <span className='value'>{quantity}</span>
        <div onClick={handleAddItem} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'> ${price} </span>
      <div onClick={handleClearItem} className='remove-button'>&#10005;</div>
    </div>
  )
}