import React from 'react'
import FilterCard from '../Category/FilterCard'
import FilterContent from '../Category/FilterContent'
import Pagination from '@mui/material/Pagination';


const SearchByCategory = () => {
  return (
    <section>
      <div className='max-w-base mx-auto px-[22px]'>
        <div className='flex justify-end items-center gap-5'>
            <span className='text-brand-gray-medium'>
                Ordenar por
            </span>
            <select className='text-brand-dark-primary border rounded-base border-brand-gray-primary py-2.5 px-5'>
                <option value="mayor">$ Mayor a menor</option>
                <option value="menor">$ Menor a mayor</option>
            </select>
            <button className='whitespace-nowrap text-brand-primary border border-brand-primary rounded-base hover:bg-brand-primary hover:text-white transition-colors duration-200 py-2.5 px-24 xxl:py-3 xxl:px-28'>
                $ Meyor a menor
            </button>
        </div>
        <div className='flex items-start gap-10 mt-5 mb-16'>
            <FilterCard />
            <FilterContent />
        </div>
        <div className="pt-11 pb-24 flex justify-end">
          <Pagination count={10} />
        </div>      
      </div>
    </section>
  )
}


export default SearchByCategory
