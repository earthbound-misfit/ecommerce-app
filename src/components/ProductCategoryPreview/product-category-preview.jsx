import './product-category-preview.styles.scss'
import { Product } from '../Product/product'
import { Link } from 'react-router-dom';

export const ProductCategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2 className='category-title'>
        <Link to={`/shop/${title}`} className='category-link'>
          {title.toUpperCase()}
        </Link>
      </h2>

      <div className='preview'>
        {
          products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
};