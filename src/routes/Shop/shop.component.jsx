import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss'
import { Navbar } from '../../components/Navbar/navbar.component'
import { CategoriesPreview } from '../CategoriesPreview/categories-preview';
import { Category } from '../Category/category';


export const Shop = () => {

  return (
    <div className='shop-container'>
      <Navbar />
        <Routes>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Routes>
    </div>
       );
      };   
   