import Image from 'next/image'
import React from 'react'
import { BsTruck } from "react-icons/bs"

function ProductItem({data}) {
  return (
    <div className="bg-gray-bg rounded-20 overflow-hidden">
        <Image src={data.src} />

        <div className='p-5 pt-4'>
            <h3 className='font-bold text-lg leading-6'>
                {data.title}
            </h3>
            <p className='font-normaly text-sm text-gray-sm mb-2.5'>
                {data.text}
            </p>

            <p className='text-text-pink font-normal text-sm mb-2.5'>
                {data.war}
            </p>

            <span className='block font-semibold text-lg-text mb-5'>
                ${data.sum}
            </span>

            <div className='flex items-center justify-between'>
                <button className='py-3 px-[53px] bg-site-pink font-medium text-sm rounded-10 text-white '>
                    Agregar al carrito
                </button>
                <button className='rounded-10 bg-white p-3'>
                    <BsTruck className='text-text-pink text-xl' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem