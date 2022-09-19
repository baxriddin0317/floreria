import React from 'react'

const CategoryHead = () => {
  return (
    <section className='max-w-base mx-auto px-[22.5px]'>
        <div className='flex items-center flex-col lg:flex-row pt-14 pb-13'>
            <div className='lg:px-7 py-7 lg:py-0'>
                <h1 className='uppercase font-semibold text-brand-primary text-4xl sm:text-4.5xl'>
                    cumpleaños
                </h1>
            </div>
            <div className='text-center lg:text-left border-t lg:border-t-0 lg:border-l border-brand-gray-medium pt-7 lg:pt-0 lg:pl-7'>
                <h4 className='sm:text-lg mb-4'>
                    Encuentra arreglos florales y regalos para celebrar cualquier ocasion especial con envios a domicilio.
                </h4>
                <p className='text-brand-gray-medium text-sm sm:text-base'>
                    Hermosos arregñps y regalos perfectos para celebrar ese dia especial. Nuestros arreglos están culdadosamente elaborados por expertos floistas. eligiendo siempre Ias flores mas frescas y de la mas alta calidad. La mejor experiencia de compra y envio de regalos en Benito Juarez.   
                </p>
            </div>
        </div>
    </section>
  )
}

export default CategoryHead
