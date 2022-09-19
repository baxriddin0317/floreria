import React, { useState } from 'react'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-10'>
      {[...Array(3).keys()].map((item, idx) => (
        <Card key={idx} />
      ))}
    </div>
  )
}

const Card = () => {
    const [scoreP, setScoreP ] = useState('1/2');

    return (
        <div className='bg-white rounded-20 shadow-4 p-7 text-center'>
            <div className='flex flex-col'>
                <span className='text-brand-gray-primary mb-2'>
                    Cupon de
                </span>
                <h1 className='font-poppins text-brand-primary font-semibold text-3xl mb-2.5'>
                    $5000
                </h1>
                <p className='text-brand-dark-primary mb-5 text-xl'>
                    100.000 Puntos
                </p>
            </div>
            <div className='w-full h-2 bg-[#E5E5E5] rounded-full mb-13'>
                <div className={`w-1/2 bg-[#55A630] h-2 rounded-full`}>
                </div>
            </div>
            <button className='w-full bg-brand-primary text-white py-3.5 rounded-10'>
            Se Necesitan Más Puntos
            </button>
        </div>
    )
}

export default Cards
