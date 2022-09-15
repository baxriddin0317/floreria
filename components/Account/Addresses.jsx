import React, { useState } from 'react'
import { MdClose } from "react-icons/md"
import { BiEditAlt } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const addresses = [
    {
        id: 1,
        title: "case",
        addres: "Milovan Busolich, Av. Jose Rabat 9600, Colina",
        tel: "+56999388926"
    },
    {
        id: 2,
        title: "Trabajo Emma",
        addres: "Emma Busolich, Las Hualtatas 5951, Vitacura",
        tel: "+56994126425"
    },
    {
        id: 3,
        title: "Casa Mamá",
        addres: "Cecilia Margarita, Av Vitacura 8162, Vitacura",
        tel: "+56994126425"
    }
]

const Addresses = () => {
    const [ addresData, setAddresData ] = useState(addresses);

    const handleCloseBtn = (id) => {
        setAddresData(addresData => addresData.filter(a => a.id !== id))
    }
  return (
    <div className='flex flex-wrap gap-5'>
      {addresData.map(adres => (
        <AddressCard key={adres.id} adres={adres} handleCloseBtn={handleCloseBtn} />
      ))}
      <button className='w-48 h-48 rounded-20 shadow-3xl bg-brand-primary text-white hover:bg-white hover:text-brand-primary'>
        <div className='flex items-center justify-center flex-col'>
            <AiOutlinePlus className='text-3xl mb-2.5' />
            <span className='capitalize'>
            nueva dirección
            </span>
        </div>
      </button>
    </div>
  )
}

const AddressCard = ({adres, handleCloseBtn}) => {
    const [ input, setInput ] = useState(false);

    const handleEditBnt = () => {
        setInput(!input);
    }
    return (
        <div className='bg-brand-gray-light rounded-20 p-5 w-72'>
            <div className='flex items-center justify-between gap-5 mb-5'>
                <span className='bg-brand-primary text-white py-2.5 px-3.5 rounded-10'>
                    {input ? 
                        <input className='w-full bg-transparent' placeholder={adres.title} type="text" /> 
                        : <span>{adres.title}</span>}
                </span>
                <div className='flex items-center gap-2.5'>
                    <button 
                        onClick={() => handleCloseBtn(adres.id)}
                        className='bg-brand-dark-primary/10 flex items-center justify-center rounded-10 w-10 h-10'
                    >
                        <MdClose className='text-2xl text-brand-dark-primary' />
                    </button>
                    <button 
                        onClick={handleEditBnt}
                        className='bg-brand-primary/10 flex items-center justify-center rounded-10 w-10 h-10'
                    >
                        <BiEditAlt className='text-2xl text-brand-primary' />
                    </button>
                </div>
            </div>

            <div className="font-roboto text-brand-dark-primary">
                <p className='mb-6'>
                    {adres.addres}
                </p>
                <p>
                    {adres.tel}
                </p>
            </div>
        </div>
    )
}

export default Addresses
