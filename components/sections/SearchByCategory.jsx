import React from 'react'
import FilterCard from '../Category/FilterCard'
import FilterContent from '../Category/FilterContent'
import Pagination from '@mui/material/Pagination';
import { BsFilterRight } from "react-icons/bs"
import { RiSearchLine } from "react-icons/ri"


const SearchByCategory = () => {
  return (
    <section>
      <div className='max-w-base mx-auto px-[22px]'>
        <div className='flex justify-end items-center gap-5'>
          {/* search input */}
          <div className="md:hidden relative w-full ">
            <input
              type="text"
              // onChange={e => setInputVal(e.target.value)}
              placeholder="Buscar..."
              className="bg-brand-gray-light w-full rounded-base focus:border-brand-primary/50 border border-transparent px-4 py-2 md:py-3 md:px-6"
            />
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-4"
            >
              <RiSearchLine className="text-brand-primary md:text-xl lg:text-2xl" />
            </button>
          </div>
          <span className='hidden md:block text-brand-gray-medium'>
              Ordenar por
          </span>
          <select className='hidden md:block cursor-pointer text-brand-dark-primary border rounded-base border-brand-gray-primary py-2.5 px-5'>
              <option value="mayor">$ Mayor a menor</option>
              <option value="menor">$ Menor a mayor</option>
          </select>
          <button className='hidden md:block whitespace-nowrap text-brand-primary border border-brand-primary rounded-base hover:bg-brand-primary hover:text-white transition-colors duration-200 py-2.5 px-24 xxl:py-3 xxl:px-28'>
              $ Meyor a menor
          </button>
          <button className='lg:hidden'>
            <BsFilterRight className='text-brand-primary text-5xl' />
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
