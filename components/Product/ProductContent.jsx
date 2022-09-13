import React, { useState } from 'react'
import Link from "next/link"
import Border from './Border'
import ChooseTime from './ChooseTime'
import OrderSlider from './OrderSlider'

const ProductContent = () => {
  return (
    <div className='w-full'>
        <Border >
            <h1 className='text-3xl mb-8 font-bold text-brand-dark-primary capitalize'>
            ramo orange
            </h1>
            <div className='flex items-start justify-between'>
                <div>
                    <button className='bg-brand-primary text-white py-2.5 pl-5 pr-8 rounded-10'>
                        <span className='font-bold text-3xl'>
                            $22.457
                        </span>
                        <span className='font-bold text-3xl ml-7'>
                        Suecia VIP
                        </span>
                    </button>
                    <p className='pl-5 mt-3 flex capitalize text-xl text-brand-dark-primary'>
                        <span>  
                        $24.990   
                        </span>
                        <span className='ml-3'>
                        precio Normal 
                        </span>
                    </p>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-brand-dark-primary text-xl '>
                    puntos :
                    </p>
                    <span className='text-brand-primary text-xl'>
                    22.457
                    </span>
                </div>
            </div>
        </Border>

        <Border>
            <ChooseTime />
        </Border>

        <Border>
            <ToggleGroup />
        </Border>

        <Border>
            <OrderSlider />    
        </Border>

        <Border>
            <h1 className='text-2xl mb-2.5 font-bold text-brand-dark-primary capitalize'>
            4.- Agregar a tu carrito
            </h1>
            <p className='text-lg text-brand-gray-primary mb-5'>
            Podrás escribir un mensaje en una tarjeta más adelante en el Carrito
            </p>
            <Link href="/">
              <a className="inline-flex items-center justify-center rounded-10 mb-4 w-full py-5 gap-2.5 bg-brand-primary text-white group px-7">
                <strong className="text-sm">Agregar ( $1,150.00 CLP)</strong>
                <svg
                  className="w-4 h-3 lg:w-5 lg:h-4 lg:group-hover:translate-x-2 transition-transform duration-200"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5969 5.57314L13.6792 0.60801C13.2933 0.218578 12.77 -0.000129777 12.2244 5.77735e-08C11.6788 0.000129892 11.1556 0.219086 10.7699 0.608702C10.3842 0.998318 10.1676 1.52668 10.1677 2.07755C10.1678 2.62842 10.3847 3.15667 10.7706 3.54611L14.1153 6.92312H2.05702C1.51147 6.92312 0.988255 7.14193 0.602488 7.53142C0.216721 7.92091 0 8.44918 0 9C0 9.55082 0.216721 10.0791 0.602488 10.4686C0.988255 10.8581 1.51147 11.0769 2.05702 11.0769H14.1153L10.7706 14.4539C10.3847 14.8433 10.1678 15.3716 10.1677 15.9225C10.1676 16.4733 10.3842 17.0017 10.7699 17.3913C11.1556 17.7809 11.6788 17.9999 12.2244 18C12.77 18.0001 13.2933 17.7814 13.6792 17.392L18.5969 12.4269C19.4954 11.5171 20 10.2848 20 9C20 7.71522 19.4954 6.48287 18.5969 5.57314Z"
                    fill="white"
                  />
                </svg>
              </a>
            </Link>
        </Border>
    </div>
  )
}

export default ProductContent

const productType = [ 
    {
        id: 1,
        price: 84.990,
        type: "grand",
        text: "JG Rose Stems",
        description: "Triple line Blooms"
    },
    {
        id: 2,
        price: 69.990,
        type: "deluxe",
        text: "24 Rose Stems",
        description: "Double the Blooms"
    },
    {
        id: 3,
        price: 24.990,
        type: "orginal",
        text: "12 Rose Stems",
        description: "A Classic Sized Bouq"
    }
]

const ToggleGroup = () => { 
    const [active, setActive] = useState(productType[1].id);
    return (
        <>
            <h1 className='text-2xl mb-8 font-bold text-brand-dark-primary capitalize'>
                2.-Agrandar producto (opcional)
            </h1>
            <div className='grid grid-cols-3 gap-6'>
                {productType.map(type => (
                    <div key={type.id} onClick={() => setActive(type.id)} className={`border ${active === type.id ? 'border-brand-primary' : 'border-brand-gray-primary' } cursor-pointer rounded-20 p-5`}>
                        <div className='flex flex-col text-center items-center justify-center'>
                            <h1 className={`text-2xl ${active === type.id ? 'text-brand-primary' : 'text-brand-gray-primary'} uppercase mb-3.5`}>
                                <span className='block'>
                                    ${type.price}
                                </span>
                                <span>
                                    {type.type}
                                </span>
                            </h1>
                            <div>
                                <p className='text-lg text-brand-gray-primary'>{type.text}</p>
                                <p className='text-lg text-brand-gray-primary'>{type.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}