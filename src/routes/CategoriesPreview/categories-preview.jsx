import { useSelector } from 'react-redux';
import { Navbar } from '../../components/Navbar/navbar'
import { selectCategoriesMap } from '../../redux/categories/categories-selectors';
import { ProductCategoryPreview } from '../../components/ProductCategoryPreview/product-category-preview'


export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className='categories-preview-container'>
      <Navbar />
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
          <ProductCategoryPreview key={title} title={title} products={products} />
          );
        })}
    </div>
       );
      };   
   