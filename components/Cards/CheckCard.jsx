import Image from 'next/image'
import Link from 'next/link'
import { FaMinus, FaPlus } from "react-icons/fa"
import { useState } from 'react'
import Border from '../Product/Border'

const carddate = [
    {
        img: 1,
        flowerName: "Vino Rosa",
        text: "Ramo del día",
        delivery: "!Entrega el Mismo Día!",
        price: 19.99,
    },
    {
        img: 2,
        flowerName: "Name of Product",
        text: "Compra hoy, entrega cuando quieras",
        delivery: "!Entrega el Mismo Día!",
        price: 19.99,
    },
    {
        img: 3,
        flowerName: "Name of Product",
        text: "Compra hoy, entrega cuando quieras",
        delivery: "!Entrega el Mismo Día!",
        price: 19.99,
    },
]

const CheckCard = () => {
  return (
    <div className='flex w-full xl:w-120 sm:w-4/5 mx-auto flex-col mb-10'>
        <div className='rounded-20 shadow-3xl p-8'>
            <Border>
                <div>
                    {carddate.map((item, i) => (
                        <CardItem key={i} item={item} />
                    ))}
                    <button className='w-full py-3.5 font-medium text-sm text-center capitalize bg-brand-primary rounded-10 text-white'>
                    Complementar pedido
                    </button>
                </div>
            </Border>
            <Border>
                <form className='check__form'>
                    <div className='flex items-start gap-5'>
                        <input type="text" placeholder='Cupón de descuento' />
                        <button className='bg-brand-primary px-6 py-3.5 text-white font-bold text-center rounded-10'>
                            Aplicar
                        </button>
                    </div>
                </form>
            </Border>
            <Border>
                <div className='flex items-center justify-between mb-2.5'>
                    <span className='text-brand-gray-primary'>
                    Subtotal
                    </span>
                    <span className='text-brand-dark-primary'>
                    $27.990
                    </span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-brand-gray-primary'>
                    Envío
                    </span>
                    <span className='text-brand-dark-primary'>
                    $3.990
                    </span>
                </div>
            </Border>
            <div className='flex items-center justify-between'>
                <span className='text-brand-gray-primary'>
                Total
                </span>
                <span className='text-brand-dark-primary'>
                $270.00
                </span>
            </div>
        </div>
        <Link href="/thank-you">
            <a className="inline-flex items-center justify-center gap-2.5 bg-brand-primary text-white rounded-10 group px-7 py-3.5 lg:px-12 lg:py-5 mt-10">
            <strong className="text-sm">Finalizar compra - $270.00</strong>
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
    </div>
  )
}

const CardItem = ({item}) => {
    const [ inc, setInc ] = useState(1);

    return (
        <div className='flex items-center mb-5 justify-between'>
            <div className='flex gap-5'>
                <div className='rounded-10 w-20 h-20 overflow-hidden'>
                    <Image
                        width={80}
                        height={80}
                        src={`/assets/img/flower${item.img}.jpg`}
                    />
                </div>
                <div className='ml-5 flex items-start justify-between'>
                    <div>
                        <h2 className="font-bold text-brand-dark-primary">
                            {item.flowerName}
                        </h2>
                        <p className="text-brand-gray-primary text-sm w-20 md:w-48 truncate">
                            {item.text}
                        </p>
                        <div className='flex items-center'>
                            <button 
                                onClick={() => setInc(inc--)}
                                className='text-brand-primary pr-2.5 border-r-2 border-brand-dark-primary'
                            >
                                <FaMinus />
                            </button>
                            <p className='font-bold text-sm text-brand-dark-primary px-3'>
                                {inc}
                            </p>
                            <button 
                                onClick={() => setInc(inc++)}
                                className='text-brand-primary pl-2.5 border-l-2 border-brand-dark-primary'
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-bold text-brand-dark-primary">
                    ${item.price}
                </p>
            </div>
        </div> 
    )
}

export default CheckCard
