
import HomeDecor from '../../assets/images/home-decor.jpg'
import Outerwear from '../../assets/images/outerwear.jpg'
import Tops from '../../assets/images/tops.jpg'
import Bottoms from '../../assets/images/bottoms.jpg'
import Accessories from '../..//assets/images/accessories.jpg'
import Shoes from '../../assets/images/shoes.jpg'
import '../../categories.styles.scss'
import { Navbar } from '../../components/Navbar/navbar.component';
import Link from '@mui/material/Link'

export const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Home Decor',
      image: `${HomeDecor}`,
    },
    {
      id: 2,
      title: 'Tops',
      image: `${Tops}`,
    },
    {
      id: 3,
      title: 'Accessories',
      image: `${Accessories}`,
  
    },
    {
      id: 4,
      title: 'Bottoms',
      image: `${Bottoms}`,
    },
    {
      id: 5,
      title: 'Outerwear',
      image: `${Outerwear}`,

    },
    {
      id: 6,
      title: 'Shoes',
      image: `${Shoes}`,
    },
  ]
  return (
    <>
    <Navbar /> 
    <div className="categories-container">
      {categories.map(({ id, title, image }) => (
        <div key={id} className="category-container">
      <div className='background-image' style={{
           backgroundImage: `url(${image})`
      }}/>
      <div className="category-body-container">
        <Link sx={{textDecoration: 'none'}} href={`/shop/${title.split(" ").join("")}`}><h2>{title}</h2></Link>
      </div>
    </div>
      ))}
    </div>
    </>
  );
};
