import { useSelector } from 'react-redux';
import { Navbar } from '../../components/Navbar/navbar.component'
import { selectCategoriesMap } from '../../redux/categories/categories.selector';
import { CategoryPreview } from '../../components/CategoryPreview/categorypreview'


export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
   