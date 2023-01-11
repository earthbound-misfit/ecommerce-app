import { useSelector, useDispatch } from 'react-redux'
import { selectFavoriteItems } from '../../redux/favorites/favorites-selectors';
import { addItemToFavorites } from '../../redux/favorites/favorites-actions'


export const FavoriteItem = ( {favoriteItem} ) => {
  const { name, imageUrl, price } = favoriteItem;
  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavoriteItems)

  const handleAddFavoriteItem = () => dispatch(addItemToFavorites(favoriteItems, favoriteItem))



  return (
    <div className='favorite-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'> {name} </span>
 
        <div onClick={handleAddFavoriteItem} className='arrow'>
          &#10095;
        </div>

      <span className='price'> ${price} </span>
      {/* <div onClick={handleClearFavoriteItem} className='remove-button'>&#10005;</div> */}
    </div>
  )
}