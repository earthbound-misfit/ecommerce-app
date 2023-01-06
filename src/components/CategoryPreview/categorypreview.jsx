import './categorypreview.styles.scss'
import { Product } from '../Product/product.component'

export const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>
          {title.toUpperCase()}
        </span>
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