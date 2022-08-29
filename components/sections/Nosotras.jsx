import React from 'react'
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import SliderF from "../../public/Assets/img/sliderF.png"
import Flower1 from "../../public/Assets/img/flower1.jpg"
import Flower2 from "../../public/Assets/img/flower2.jpg"
import Flower3 from "../../public/Assets/img/flower3.jpg"

function Nosotras() {



  return (
    <section className='max-w-[1200px] mx-auto px-4 md:px-1 pt-24'>
        <h1  className='font-Cormorant-Upright text-center font-bold text-title-xl mb-10'>
            Nosotras
        </h1>
        <p className='font-normaly text-lg md:text-xl text-gray-text text-center mb-10'>
            En Florería Suecia estamos orgullosos de entregar la experiencia de enviar flores en línea, recordando a las personas lo especial que es enviar y recibir flores.
        </p>
        <p className='font-normaly text-lg md:text-xl text-gray-text text-center mb-10'>
            Nuestro objetivo es combinar un servicio de entrega de flores hermoso, flexible y fácil de usar con la magia que solo nuestras excelentes floristas pueden brindar a nuestros bellos ramos y arreglos.
        </p>
        <p className='font-normaly text-lg md:text-xl text-gray-text text-center'>
            Seleccionamos cuidadosamente cada flor con las que trabajamos para asegurarnos de mantener una altísima calidad y ofrecer una increíble experiencia en las flores o regalos que envíes a tus seres queridos.
        </p>

        <div className='mt-60'>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            spaceBetween={70}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    spaceBetween: 35
                },
                568: {
                    slidesPerView: 3,
                    spaceBetween: 70
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 70
                }
            }}
            coverflowEffect={{
                rotate: 0,
                scale: 0.93,
                stretch: 0,
                depth: 60,
                modifier: 2,
                slideShadows: true,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="lg:w-[880px] h-[230px]"
        >
            <SwiperSlide className='relative rounded-70 overflow-hidden'>
                <Image layout='fill' objectFit='cover' src={Flower1} />
            </SwiperSlide>
            <SwiperSlide className='relative rounded-70 overflow-hidden'>
                <Image layout='fill' objectFit='cover' src={Flower2} />
            </SwiperSlide>
            <SwiperSlide className='relative rounded-70 overflow-hidden'>
                <Image layout='fill' objectFit='cover' src={Flower3} />
            </SwiperSlide>
            <SwiperSlide className='relative rounded-70 overflow-hidden'>
                <Image layout='fill' objectFit='cover' src={SliderF} />
            </SwiperSlide>
        </Swiper>
        </div>
    </section>
  )
}

export default Nosotras