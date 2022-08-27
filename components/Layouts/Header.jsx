import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { IoDiamondOutline } from "react-icons/io5"

const links = [
    {
        id: 1,
        text: "novedades",
        link: "/novedades"
    },
    {
        id: 2,
        text: "mas vendidos",
        link: "/mas-vendidos"
    },
    {
        id: 3,
        text: "cumpleaños",
        link: "/cumpleanos"
    },
    {
        id: 4,
        text: "aniversario",
        link: "/aniversario"
    },
    {
        id: 5,
        text: "Ofertas",
        link: "/ofertas"
    },
    {
        id: 6,
        text: "porque sí",
        link: "/porqu-si"
    },
]
function Header() {

    const [ open, setOpen ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <header className=''>
        <div className="flex items-center justify-between gap-4 xl:gap-0 max-w-8xl mx-auto px-1 py-30">
            {/* logo */}
            <Link href={"/"}>
                <Image className="cursor-pointer" src={require("../../public/Assets/Icons/logo.png")} width={51} height={57}  />
            </Link>

            {/* form */}
            <div className='flex items-center '>
                <form className='md:w-2.5xl ' onSubmit={handleSubmit}>
                    <div className='flex items-center gap-2 bg-gray-bg px-5 py-3.5 rounded-10 '>
                        <input className='outline-none bg-transparent w-full text-base' placeholder='¿Qué andas buscando?' type="text" />
                        <button type='submit'>
                            <AiOutlineSearch className='text-text-pink text-2xl' />
                        </button>
                    </div>
                </form>
                <button className='hidden xl:flex gap-4 ml-11 items-center hover:bg-site-pink text-text-pink hover:text-white border border-site-pink rounded-10 py-3.5 px-9'>
                    <IoDiamondOutline />
                    <p className='text-base'>Suecia VIP</p>
                </button>
            </div>

            {/* icons */}
            <ul className="hidden xl:grid grid-cols-3 gap-30">
             <Link href={"/"}>
                <li className='flex flex-col items-center justify-between cursor-pointer'>
                    <Image src={require("../../public/Assets/Icons/car.png")} width={34} height={30} />
                    <p className='text-text-pink text-xs font-bold '>
                        Seguimiento
                    </p>
                </li>
             </Link>
             <Link href="/">
                <li className='flex flex-col items-center justify-between cursor-pointer'>
                    <Image src={require("../../public/Assets/Icons/basket.png")} width={34} height={30} />
                    <p className='text-text-pink text-xs font-bold '>
                        Carrito
                    </p>
                </li>
             </Link>
             <Link href="/">
                <li className='flex flex-col items-center justify-between cursor-pointer'>
                    <Image src={require("../../public/Assets/Icons/person.png")} width={34} height={30} />
                    <p className='text-text-pink text-xs font-bold '>
                        Paloma
                    </p>
                </li>
             </Link>
            </ul>

            {/* humburger button */}
            <button 
                className='flex xl:hidden bg-bg-button p-3 rounded-sm ' 
                onClick={() => setOpen(!open)}
            >
                <AiOutlineMenu className='text-3xl text-text-pink' />
            </button>
        </div>

        {/* nav */}
        <div className='hidden xl:block bg-linear pt-0.5 pb-0.5'>
            <nav className='bg-white  py-30'>
                <ul className='max-w-5xl mx-auto flex items-center justify-between'>
                    {links.map(l => (
                        <li key={l.id} className='text-dark-color hover:text-text-pink text-base font-normal capitalize'>
                            <Link href={l.link}>
                                {l.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

        {/* mobile */}
        <MobileNav open={open} setOpen={setOpen} />
    </header>
  )
}

function MobileNav ({open, setOpen}) {
    return (
        <div className={`bg-white fixed z-100 left-0 w-full h-full duration-700 ${open ? "top-0" : "-top-full"}`}>
            <div className='flex items-center justify-between px-1 py-30'>
                {/* logo */}
                <Link href={"/"}>
                    <Image className="cursor-pointer" src={require("../../public/Assets/Icons/logo.png")} width={51} height={57}  />
                </Link>

                <button className='p-3' onClick={() => setOpen(false)}>
                    <AiOutlineClose className='text-3xl text-text-pink' />
                </button>
            </div>
            {/* nav */}
            <ul className='flex flex-col justify-center items-center gap-y-5 mb-20'>
                {links.map(l => (
                    <li 
                        key={l.id} 
                        className='text-dark-color hover:text-text-pink text-base font-normal capitalize'
                        onClick={() => setOpen(false)}
                    >
                        <Link href={l.link}>
                            {l.text}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* icons */}
            <ul className="flex items-center gap-10 justify-center">
             <Link href={"/"}>
                <li className='flex flex-col items-center justify-between cursor-pointer'>
                    <Image src={require("../../public/Assets/Icons/car.png")} width={34} height={30} />
                    <p className='text-text-pink text-xs font-bold '>
                        Seguimiento
                    </p>
                </li>
             </Link>
             <Link href="/">
                <li className='flex flex-col items-center justify-between cursor-pointer'>
                    <Image src={require("../../public/Assets/Icons/basket.png")} width={34} height={30} />
                    <p className='text-text-pink text-xs font-bold '>
                        Carrito
                    </p>
                </li>
             </Link>
             <Link href="/">
                <li className='flex flex-col items-center justify-between cursor-pointer'>
                    <Image src={require("../../public/Assets/Icons/person.png")} width={34} height={30} />
                    <p className='text-text-pink text-xs font-bold '>
                        Paloma
                    </p>
                </li>
             </Link>
            </ul>
        </div>
    )
}

export default Header