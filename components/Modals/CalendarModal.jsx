import React, { useState } from 'react'
import Border from '../Product/Border'

// react calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarModal = ({setOpenCalendar}) => {
  const [value, setValue] = useState(new Date());

  const onChange = date => setValue(date);
  const handleClose = () => setOpenCalendar(false);
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-100 bg-black/70'>
      <div className='max-w-base mx-auto px-[22px] flex items-center justify-center h-full'>
          <div className='w-full relative rounded-20 bg-white shadow-3xl py-14 px-20'>
            <span onClick={handleClose} className='absolute font-extrabold text-3xl right-10 top-5 cursor-pointer'>
              x
            </span>
            <div className='flex gap-20 w-full'>
                <div className='flex-1'>
                  <Border>
                    <Calendar locale="ES" onChange={onChange} value={value} />
                  </Border>
                  <Border>
                    <SelectEnter />
                  </Border>
                  <SelectDate />
                </div>
                <div className='mt-10'>
                  <DeliveryDate value={value} />
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CalendarModal


const SelectEnter = () => {
  const [] = useState();
  const sana= [
    {
      name: "09:00 PM - 12:00 PM",
      active: false
    },
    {
      name: "12:00 PM - 04:00 PM",
      active: true
    },
    {
      name: "03:00 PM - 08:00 PM",
      active: false
    }
  ]

  return (
    <div>
      <h2 className='text-brand-primary font-bold text-lg mb-1'>
      Selecciona el horario de entrega
      </h2>
      <p className='text-brand-gray-primary mb-2.5'>
      Se hara un cargo de envío por $3.990
      </p>
      <div className='grid grid-cols-3 gap-10'>
        {sana.map((s, idx) => (
          <div
            className={`${s.active ? 'border border-brand-primary bg-white' : 'bg-brand-gray-light'}  py-3 text-center rounded-10 cursor-pointer`} 
            key={idx}
            onClick={() => s.active = true}
          >
            <span className={`${s.active ? 'text-brand-primary' : 'text-brand-gray-primary'} text-sm `}>
            {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SelectDate = () => {
  const [] = useState();
  const sana= [
    {
      name: "09:00 PM - 12:00 PM",
      active: false
    },
    {
      name: "09:00 PM - 12:00 PM",
      active: false
    },
    {
      name: "12:00 PM - 04:00 PM",
      active: false
    },
    {
      name: "03:00 PM - 08:00 PM",
      active: false
    }
  ]

  return (
    <div>
      <h2 className='text-brand-primary font-bold text-lg'>
      Horario especial
      </h2>
      <p className='text-brand-gray-primary mb-2.5'>
      Se hara un cargo adicional de envío por  $4.990 
      </p>
      <div className='grid grid-cols-4 gap-8'>
        {sana.map((s, idx) => (
          <div
            className={`${s.active ? 'border border-brand-primary bg-white' : 'bg-brand-gray-light'}  py-3 text-center rounded-10 cursor-pointer`} 
            key={idx}
          >
            <span className={`${s.active ? 'text-brand-primary' : 'text-brand-gray-primary'} text-xs `}>
            {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const DeliveryDate = ({value}) => {
  return (
    <div className='p-10 pb-5 shadow-3xl rounded-20 bg-white text-center'>
      <p className='text-brand-gray-primary font-bold text-lg mb-5'>
      Su pedido se entregará el día
      </p>
      <div className='w-80 bg-brand-primary/10 py-7 rounded-20 mb-15'>
        <h2 className='text-brand-primary font-bold text-3xl mb-4 '>
        Martes {value.toString().split(" ")[2]}
        </h2>
        <p className='text-brand-primary'>
        {`${value.toString().split(" ")[1]} ${value.toString().split(" ")[3]}`}
        </p>
      </div>

      <div className='mb-18'>
        <p className='text-brand-gray-primary font-bold text-lg mb-5'>
        En el horario
        </p>
        <div className='w-full bg-brand-primary/10 rounded-20 py-7'>
          <p className='text-brand-primary text-xl font-bold'>
          12:00 PM - 04:00 PM
          </p>
        </div>
      </div>

      <button className='text-white py-3.5 w-full rounded-10 bg-brand-primary mb-11'>
      Confirmar
      </button>

      <p className='text-xs text-brand-gray-primary'>
      Todos nuestros precios están en CLP
      </p>
    </div>
  )
}