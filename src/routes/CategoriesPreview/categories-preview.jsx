import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.component';
import { Navbar } from '../../components/Navbar/navbar.component'
import { CategoryPreview } from '../../components/CategoryPreview/categorypreview'


export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='categories-preview-container'>
      <Navbar />
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
          <CategoryPreview key={title} title={title} products={products} />
          );
        })}
    </div>
       );
      };   
   