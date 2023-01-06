
import Dresses from '../../assets/images/dresses.jpg'
import Outerwear from '../../assets/images/outerwear.jpg'
import Tops from '../../assets/images/tops.jpg'
import Bottoms from '../../assets/images/bottoms.jpg'
import Accessories from '../..//assets/images/accessories.jpg'
import Shoes from '../../assets/images/shoes.jpg'
import '../../directory.styles.scss'
import { Navbar } from '../../components/Navbar/navbar.component';
import Link from '@mui/material/Link'


export const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Dresses',
      image: `${Dresses}`,
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
    <div className="directories-container">
      {categories.map(({ id, title, image }) => (
        <div key={id} className="directory-container">
      <div className='background-image' style={{
           backgroundImage: `url(${image})`
      }}/>
      <div className="directory-body-container">
        <Link sx={{textDecoration: 'none'}} href={`/shop/${title.split(" ").join("").toLowerCase()}`}><h2>{title}</h2></Link>
      </div>
    </div>
      ))}
    </div>
    </>
  );
};
