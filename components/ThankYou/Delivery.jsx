import React from 'react'

const Delivery = () => {

    const delivery = {
        day: "Domingo 20",
        month: "Agosto 2022",
        time: "10:00 AM - 04:00 PM"
    }

  return (
    <div className='mb-14'>
      <h1 className='font-bold text-xl text-brand-dark-primary mb-2.5'>
      2. Fecha y horario de entrega
      </h1>

      <div className='w-80'>
        <div className='w-full py-7 flex flex-col items-center justify-center rounded-10 bg-brand-primary/10 mb-2.5'>
            <h2 className='font-bold text-xl text-brand-primary'>
                {delivery.day}
            </h2>
            <p className='text-lg text-brand-primary mb-2.5'>
                {delivery.month}
            </p>
            <p className='text-brand-primary font-bold'>
                {delivery.time}
            </p>
        </div>

        <button className='py-3.5 w-full bg-brand-primary rounded-10'>
            <svg className='mx-auto' width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10.039C13.141 10.039 10 13.179 10 17.039C10 20.877 13.141 24 17 24C20.859 24 24 20.86 24 17C24 13.162 20.859 10.039 17 10.039ZM17 22C14.243 22 12 19.774 12 17.039C12 14.282 14.243 12.039 17 12.039C19.757 12.039 22 14.265 22 17C22 19.757 19.757 22 17 22ZM18.707 17.293C19.098 17.684 19.098 18.316 18.707 18.707C18.512 18.902 18.256 19 18 19C17.744 19 17.488 18.902 17.293 18.707L16.293 17.707C16.105 17.519 16 17.265 16 17V15C16 14.448 16.447 14 17 14C17.553 14 18 14.448 18 15V16.586L18.707 17.293ZM24 7V9C24 9.552 23.553 10 23 10C22.447 10 22 9.552 22 9V7C22 5.346 20.654 4 19 4H5C3.346 4 2 5.346 2 7V8H11C11.552 8 12 8.448 12 9C12 9.552 11.552 10 11 10H2V19C2 20.654 3.346 22 5 22H9C9.552 22 10 22.448 10 23C10 23.552 9.552 24 9 24H5C2.243 24 0 21.757 0 19V7C0 4.243 2.243 2 5 2H6V1C6 0.448 6.448 0 7 0C7.552 0 8 0.448 8 1V2H16V1C16 0.448 16.447 0 17 0C17.553 0 18 0.448 18 1V2H19C21.757 2 24 4.243 24 7Z" fill="white"/>
            </svg>
        </button>
      </div>
    </div>
  )
}

export default Delivery
