import { RiSearchLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const FilterCard = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='rounded-20  bg-white p-5 shadow-3xl min-w-[330px]'>
      <form >
        <h2 className='capitalize mb-2.5 font-bold text-2xl text-brand-dark-primary'>
          filtros
        </h2>
        <div className="mb-5">
          {/* search input */}
          <div className="relative mb-5">
            <input
              type="text"
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

          {/* search materal ui slider */}
          <div className="mb-13">
            <h2 className="font-bold text-brand-dark-primary mb-11">
            Rango de precio
            </h2>
            <Box>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                className="text-brand-primary"
              />
            </Box>
          </div>

          {/* search acardion */}
          <SearchAccardion />
        </div>

        <button type="submit" className="h-11 w-full flex items-center justify-center capitalize bg-brand-primary text-white rounded-base">
          limpiar filtros (0)
        </button>
      </form>
    </div>
  )
}

export default FilterCard

const SearchAccardion = () => {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <div className={open ? 'bg-linear py-px mt-5' : 'mt-5  py-px'}>
              <div className="bg-white">
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-brand-dark-primary font-bold">
                  <span>What is your refund policy?</span>
                  {open ? <AiOutlineMinus className="text-brand-primary text-2xl" /> : <AiOutlinePlus className="text-brand-primary text-2xl" /> }
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  If you're
                </Disclosure.Panel>
              </div>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className={open ? 'bg-linear py-px mt-5' : 'mt-5  py-px'}>
              <div className="bg-white">
                <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-brand-dark-primary font-bold">
                  <span>What is your refund policy?</span>
                  {open ? <AiOutlineMinus className="text-brand-primary text-2xl" /> : <AiOutlinePlus className="text-brand-primary text-2xl" /> }
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                  If you're
                </Disclosure.Panel>
              </div>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  )
}