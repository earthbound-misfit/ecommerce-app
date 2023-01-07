import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocs } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../redux/categories/categories.action'
import './shop.styles.scss'
import { Navbar } from '../../components/Navbar/navbar.component'
import { CategoriesPreview } from '../CategoriesPreview/categories-preview';
import { Category } from '../Category/category';


export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs('categories');
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);

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
   