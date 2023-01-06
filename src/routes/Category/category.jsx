import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../contexts/categories.component'
import { Product } from '../../components/Product/product.component'
import React from 'react'

export const Category = () => {
  const { category } = useParams();
  const { categoriesMap, title } = useContext(CategoriesContext);
  // const products = categoriesMap[category];
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
   <div className='outer-container'>
    <h2 key={category.id}>{title}</h2>
   <div className='category-container'>
      {products &&
        products.map((product) => <Product key={product.id} product={product} />)
      }
    </div>

  </div>
  )
}


