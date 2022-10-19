import React, { useContext } from 'react'
import ProductCard from "../Cards/ProductCard";

import Products from '../../utils/categoryproduct';

const FilterContent = () => {
  const PageProducts = Products.slice(0,12);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full'>
        {PageProducts && 
          PageProducts.map(product => (
                <ProductCard key={product.id} product={product} />
          ))
        }
    </div>
  )
}

export default FilterContent
