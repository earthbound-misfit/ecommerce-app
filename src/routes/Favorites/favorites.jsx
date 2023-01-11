import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/favorites/favorites-selectors';
import { FavoriteItem } from '../../components/FavoriteItem/favorite-item';
import './favorites.styles.scss'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Favorites = () => {
  const { favorite } = useParams();
  const favoritesMap = useSelector(selectFavoriteItems);
  const [favorites, setFavorites] = useState(favoritesMap[favorite]);

  useEffect(() => {
    setFavorites(favoritesMap[favorite]);
  }, [favorite, favoritesMap]);

  const title = favorite.toUpperCase()
  
  
  return (
    <>
     <h2 className='title-header'>{title}</h2>
      <div className='favorites-container'>
        {favorites &&
          favorites.map((favorite) => <FavoriteItem key={favorite.id} favorite={favorite} />)
        }
      </div>
    </>
  )
}


