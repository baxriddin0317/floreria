import React from 'react'
import Border from '../Product/Border'
import { IoCopyOutline, IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5"
import {RiMessengerFill} from "react-icons/ri"
import {BiMessageDetail} from "react-icons/bi"
import Link from "next/link"

const icons = [
    {
        id: 1,
        icon: <IoCopyOutline />,
        text: "copiar"
    },
    {
        id: 2,
        icon: <IoLogoWhatsapp />,
        text: "whatsapp"
    },
    {
        id: 3,
        icon: <RiMessengerFill />,
        text: "message"
    },
    {
        id: 4,
        icon: <IoLogoInstagram />,
        text: "instagram"
    },
    {
        id: 5,
        icon: <BiMessageDetail />,
        text: "SMS"
    },
]

const Contact = () => {
  return (
    <div className='text-center mt-10'>
        <Border>
            <p className='text-lg text-brand-gray-primary mb-5'>
            Si conoces a alguien que también podría enviarle flores o un regalo a esta persona, o si le gustan las flores en general, ¡házselo saber!
            </p>
            <p className='text-lg text-brand-gray-primary mb-15'>
            Recomienda y obtén un 10% de reembolso. Recibes recompensas cuando tus amigos hacen una compra. 
            </p>
        </Border>
        <Border>
            <form className='flex flex-col lg:flex-row items-start gap-5 max-w-5xl mx-auto pb-2'>
                <div className='grid grid-cols-1 w-full lg:grid-cols-3 gap-11'>
                    <input className='w-full bg-brand-gray-light text-brand-gray-primary px-5 py-3.5 rounded-10' type="text" placeholder='Name' />
                    <input className='w-full bg-brand-gray-light text-brand-gray-primary px-5 py-3.5 rounded-10' type="email" placeholder='Email' />
                    <input className='w-full bg-brand-gray-light text-brand-gray-primary px-5 py-3.5 rounded-10'  type="tel" placeholder='Tel' />
                </div>
                <div className='w-full'>
                    <button className="inline-flex items-center justify-center gap-2.5 bg-brand-primary text-white rounded-10 group px-7 py-3 lg:px-12 lg:py-4">
                        <strong className="text-sm">Recomendar</strong>
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
                    </button>
                </div>
            </form>
        </Border>

        <div className='py-20 mb-15 max-w-2xl mx-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20'>
                {icons.map(icon => (
                    <Link href={"/"}>
                        <a className='flex items-center flex-col'>
                            <div className='flex items-center justify-center w-13 h-13 rounded-10 bg-brand-primary text-3xl text-white mb-2.5'>
                                {icon.icon}
                            </div>
                            <p className='capitalize'>
                                {icon.text}
                            </p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Contact
