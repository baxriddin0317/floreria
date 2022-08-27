import React from 'react'
import Image from "next/image"
import Img from "../../public/Assets/img/nosotrasImg.png"

function Nosotras() {
  return (
    <section className='max-w-[1200px] mx-auto px-1 pt-24'>
        <h1  className='font-Cormorant-Upright text-center font-bold text-title-xl mb-10'>
            Nosotras
        </h1>
        <p className='font-normaly text-xl text-gray-text text-center mb-10'>
            En Florería Suecia estamos orgullosos de entregar la experiencia de enviar flores en línea, recordando a las personas lo especial que es enviar y recibir flores.
        </p>
        <p className='font-normaly text-xl text-gray-text text-center mb-10'>
            Nuestro objetivo es combinar un servicio de entrega de flores hermoso, flexible y fácil de usar con la magia que solo nuestras excelentes floristas pueden brindar a nuestros bellos ramos y arreglos.
        </p>
        <p className='font-normaly text-xl text-gray-text text-center'>
            Seleccionamos cuidadosamente cada flor con las que trabajamos para asegurarnos de mantener una altísima calidad y ofrecer una increíble experiencia en las flores o regalos que envíes a tus seres queridos.
        </p>

        <div className='max-w-4xl mx-auto mt-60 flex justify-center'>
            <Image src={Img} width={880} />
        </div>
    </section>
  )
}

export default Nosotras