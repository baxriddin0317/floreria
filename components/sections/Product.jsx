import React from 'react'
import ProductItem from '../ProductItem'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

import data from "../../utils/Data"

function Product() {
 return (
    <section className='max-w-8xl mx-auto px-1 pb-[71px] pt-20'>
        <h1  className='font-Cormorant-Upright text-center font-bold text-4xl md:text-title-xl mb-10'>
            Nuestros productos
        </h1>
        <p className='font-normaly text-xl text-gray-text text-center mb-16'>
            Encuentra lo que buscas
        </p>

        <div className='relative'>
            <button className="prev absolute z-50 top-1/2 -translate-y-1/2">
                <IoIosArrowBack className="text-text-pink text-5xl" />
            </button>
            {data && (
                <Swiper 
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    slidesPerView={3}
                    spaceBetween={44}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        578: {
                            slidesPerView: 2,
                        },
                        690: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 44
                        }

                    }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    loop={true}
                    modules={[/*Autoplay,*/ Navigation]} 
                    className="max-w-[330px] sm:max-w-[670px] md:max-w-[1078px] mx-auto"
                >
                    {data.map(d => (
                        <SwiperSlide key={d.id}>
                            <ProductItem data={d} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <button className="next absolute z-50 top-1/2 -translate-y-1/2 right-0">
                <IoIosArrowForward className="text-text-pink text-5xl " />
            </button>
        </div>
    </section>
  )
}

export default Product