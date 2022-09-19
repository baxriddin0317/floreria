import React from 'react'

const ThankMap = () => {
  return (
    <div className='text-center'>
        <p className='text-lg md:text-xl text-brand-gray-primary mb-6'>
        Hemos aceptado tu pedido y lo estamos preparando. 
        </p>
        <p className='text-lg md:text-xl text-brand-gray-primary mb-6'>
        Se ha enviado un correo electrónico de confirmación a abcd@gmail.com. 
        </p>
        <p className='text-lg md:text-xl text-brand-gray-primary mb-6'>
        Regrese a esta página para obtener actualizaciones sobre el estado de su pedido.
        </p>

        <div className='rounded-30 overflow-hidden'>
            <iframe className='w-full h-52 md:h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773449.0428205093!2d72.32835650000001!3d40.777741049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc939c2cc9f571%3A0xf677ebc7b76654c8!2sAndijon%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2sus!4v1663048507618!5m2!1suz!2sus"></iframe>
        </div>
    </div>
  )
}

export default ThankMap
