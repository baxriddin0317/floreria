import React from 'react'
import Products from '../../utils/categoryproduct';
import ProductCard from "../Cards/ProductCard";

const FilterContent = () => {
  const PageProducts = Products.slice(0,12);
  return (
    <div className='grid grid-cols-3 gap-5 w-full'>
        {PageProducts && 
          PageProducts.map(product => (
                <ProductCard {...product} />
          ))
        }
    </div>
  )
}

export default FilterContent
