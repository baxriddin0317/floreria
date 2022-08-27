import React from 'react'
import Link from "next/link"
import { FaTiktok, FaFacebookF } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"

function Newsletter() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <section className='max-w-7.5xl mx-auto bg-site-pink rounded-40 p-60 translate-y-1/2'>
        <h1  className='font-Cormorant-Upright text-center font-bold text-4xl md:text-title-xl text-white mb-60'>
            Suscríbete a nuestro newsletter
        </h1>
        <form 
            className='bg-white rounded-20 flex items-center justify-between gap-8 mb-60 max-w-[460px] mx-auto p-2.5'
            onClick={handleSubmit}
        >
            <input className='font-normal text-base text-gray-text w-full outline-none pl-3' type="text" placeholder='Email' />
            <button className='bg-site-pink hover:bg-white text-white hover:text-text-pink rounded-10 h-10 w-36 font-medium text-base'>
            Suscribirme
            </button>
        </form>

        <div className='flex gap-12 justify-center'>
            <Link href={"/"}>
            <a >
                <FaTiktok className='text-white text-4xl md:text-5xl' />
            </a>
            </Link>
            <Link href={"/"}>
                <a>
                <AiOutlineInstagram className='text-white text-4xl md:text-5xl' />
                </a>
            </Link>
            <Link href={"/"}>
                <a>
                <FaFacebookF className='text-white text-4xl md:text-5xl' />
                </a>
            </Link>
        </div>
    </section>
  )
}

export default Newsletter
