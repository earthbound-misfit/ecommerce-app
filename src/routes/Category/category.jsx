import './category.styles.scss'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Product } from '../../components/Product/product'
import React from 'react'
import { selectCategoriesMap } from '../../redux/categories/categories-selectors'

export const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const title = category.toUpperCase()
  
  return (
   <div className='outer-container'>
    <h2 className='title-header'>{title}</h2>
   <div className='category-container'>
      {products &&
        products.map((product) => <Product key={product.id} product={product} />)
      }
    </div>

  </div>
  )
}


