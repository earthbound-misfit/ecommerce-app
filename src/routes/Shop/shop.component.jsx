import { useContext } from 'react';
import Product from '../../components/Product/product.component'
import { ProductsContext } from '../../contexts/products.component';
import './shop.styles.scss'


export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

