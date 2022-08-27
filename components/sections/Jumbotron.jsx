import Image from 'next/image'
import React from 'react'
import JumImg from "../../public/Assets/img/jumImg.png"
import { AiOutlineArrowRight } from "react-icons/ai"
import { MdKeyboardArrowDown} from "react-icons/md"

function Jumbotron() {
  return (
    <section className='max-w-8xl mx-auto px-1 py-32'>
        <div className='flex items-center justify-between'>
            <div className='xl:w-[460px]'>
                <h1 className='font-Cormorant-Upright font-bold text-title-xl mb-5'>
                Florería Suecia
                </h1>
                <p className='font-normal text-xl text-gray-text'>
                    ¿Necesitas regalar algo y no sabes qué?
                </p>
                <p className='my-6 font-normal text-xl text-gray-text'>
                    Tenemos todo para que puedas elegir el regalo perfecto de forma rápida y sencilla. 
                </p>
                <p className='font-normal text-xl text-gray-text'>
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
            <div>
                <Image className='-translate-y-10' src={JumImg} width={1107} height={622} />
            </div>
        </div>

        <div className="w-full bg-dark-color text-white rounded-20 py-5 gap-12 px-10 flex items-end ">
            <h2 className='uppercase font-Poppins font-bold text-xl'>
            BUSCA TU REGALO
            </h2>

            <form className='flex items-end justify-between gap-5'>
                <div className='flex flex-col w-64'>
                    <label htmlFor="Donde" className='font-bold text-sm text-label mb-2.5'>¿Donde envías?</label>
                    <input className='w-[260px] text-gray-text text-base outline-none h-10 pl-5 rounded-10' type="text" id='Donde' placeholder='Comuna' />
                </div>
                <div className='flex flex-col w-64'>
                    <label htmlFor="Ocasion" className='font-bold text-sm text-label mb-2.5'>Ocasión</label>
                    <div className='relative  w-[260px]'>
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
                <div className='flex flex-col w-64'>
                    <label htmlFor="Cuando" className='font-bold text-sm text-label mb-2.5'>¿Cuando debe llegar?</label>
                    <input className='w-[260px] outline-none h-10 pl-5 rounded-10' type="date" id='Cuando' placeholder='Lunes, 21 feb' />
                </div>
                
                <button className='ml-auto w-[260px] h-10 text-center bg-site-pink rounded-10 font-medium text-base'>
                    encontrar regalo
                </button>
            </form>
        </div>
    </section>
  )
}

export default Jumbotron