import React from 'react'

const CheckForm = () => {
  return (
    <div className='w-full mb-6'>
      <div className='flex justify-between items-center mb-2.5'>
        <h1 className='font-bold text-xl text-brand-dark-primary'>
            1. Tus datos
        </h1>
        <p className='text-brand-gray-primary'>
        Ya tienes una cuenta?
        <span className='font-bold text-brand-primary ml-5'>Ingresar</span>
        </p>
      </div>

      <form className='check__form w-full'>
        <div className='grid grid-cols-2 gap-5'>
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="tel" placeholder='Teléfono' />
      </form>
    </div>
  )
}

export default CheckForm
