import Image from 'next/image'
import React from 'react'
import JumImg from "../../public/Assets/img/jumImg.png"
import { AiOutlineArrowRight } from "react-icons/ai"
import { MdKeyboardArrowDown} from "react-icons/md"

function Jumbotron() {
  return (
    <section className='max-w-8xl mx-auto px-1 pt-20 md:py-32'>
        <div className='flex flex-col xl:flex-row items-center justify-between'>
            <div className='xl:w-[460px] mb-10 sm:mb-0'>
                <h1 className='font-Cormorant-Upright font-bold text-title-xl mb-5'>
                Florería Suecia
                </h1>
                <p className='font-normal text-lg md:text-xl text-gray-text'>
                    ¿Necesitas regalar algo y no sabes qué?
                </p>
                <p className='my-6 font-normal text-lg md:text-xl text-gray-text'>
                    Tenemos todo para que puedas elegir el regalo perfecto de forma rápida y sencilla. 
                </p>
                <p className='font-normal text-lg md:text-xl text-gray-text'>
                    Además podemos entregar hoy mismo si deseas
                </p>

                <button className='flex items-center gap-3 mt-30 bg-site-pink text-white rounded-30 py-5 px-12'>
                    <span className='text-base'>
                    Entrega Inmediata
                    </span>
                    <AiOutlineArrowRight className='text-base' />
                </button>
            </div>
            {/* image div */}
            <div className='hidden sm:flex'>
                <Image className='xl:-translate-y-10' src={JumImg} width={1107} height={622} />
            </div>
        </div>

        <div className="flex items-center xl:items-end flex-col xl:flex-row w-full bg-dark-color text-white rounded-20 py-5 gap-12 px-2 md:px-10 ">
            <h2 className='uppercase font-Poppins font-bold text-xl'>
            BUSCA TU REGALO
            </h2>

            <form className='flex flex-col xl:flex-row items-end justify-between w-full gap-5'>
                <div className='flex flex-col xl:w-64 md:w-1/2 w-4/5 mx-auto'>
                    <label htmlFor="Donde" className='font-bold text-sm text-label mb-2.5'>¿Donde envías?</label>
                    <input className='xl:w-[260px] w-full text-gray-text text-base outline-none h-10 pl-5 rounded-10' type="text" id='Donde' placeholder='Comuna' />
                </div>
                <div className='flex flex-col xl:w-64 md:w-1/2 w-4/5 mx-auto'>
                    <label htmlFor="Ocasion" className='font-bold text-sm text-label mb-2.5'>Ocasión</label>
                    <div className='relative  xl:w-[260px]'>
                        <span className='absolute z-10 text-gray-text top-1/4 left-5'>
                            Ocasion
                        </span>
                        <select className='w-full outline-none h-10 pl-5 rounded-10 relative' id="Ocasion">
                            <option value="val">Ocasion</option>
                        </select>
                        <span className='absolute top-2 right-2'>
                            <MdKeyboardArrowDown className='text-text-pink text-3xl' />
                        </span>
                    </div>
                </div>
                <div className='flex flex-col xl:w-64 md:w-1/2 w-4/5 mx-auto'>
                    <label htmlFor="Cuando" className='font-bold text-sm text-label mb-2.5'>¿Cuando debe llegar?</label>
                    <input className='xl:w-[260px] outline-none h-10 pl-5 rounded-10' type="date" id='Cuando' placeholder='Lunes, 21 feb' />
                </div>
                
                <button className='ml-auto xl:w-[260px] md:w-1/2 w-4/5 mx-auto h-10 text-center bg-site-pink rounded-10 font-medium text-base'>
                    encontrar regalo
                </button>
            </form>
        </div>
    </section>
  )
}

export default Jumbotron