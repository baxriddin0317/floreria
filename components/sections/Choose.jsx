import React from 'react'
import Image from "next/image"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

// import icons
import Icon1 from "../../public/Assets/img/chooseIcons/icon1.png"
import Icon2 from "../../public/Assets/img/chooseIcons/icon2.png"
import Icon3 from "../../public/Assets/img/chooseIcons/icon3.png"
import Icon4 from "../../public/Assets/img/chooseIcons/icon4.png"
import Icon5 from "../../public/Assets/img/chooseIcons/icon5.png"
import Icon6 from "../../public/Assets/img/chooseIcons/icon6.png"
import Icon7 from "../../public/Assets/img/chooseIcons/icon7.png"
import Icon8 from "../../public/Assets/img/chooseIcons/icon8.png"

function Choose() {

  const data = [
    {
      title: "Entrega Inmediata",
      icon: Icon1
    },
    {
      title: "Entrega en menos de 2 horas",
      icon: Icon2
    },
    {
      title: "Atención 24/7",
      icon: Icon3
    },
    {
      title: "-Seguimiento en Tiempo Real",
      icon: Icon4
    },
    {
      title: "-Notificación de Entrega",
      icon: Icon5
    },
    {
      title: "Puntos por tus compras",
      icon: Icon6
    },
    {
      title: "Recordatorios de fechas importantes",
      icon: Icon7
    },
    {
      title: "-Entrega en horario acotado (ej. entrega de 4 a 5 pm)",
      icon: Icon8
    },
  ]

  return (
    <section className="bg-gray-bg">
        <div className="max-w-8xl mx-auto px-1 pt-16 pb-72">
          <h1  className='font-Cormorant-Upright text-center font-bold text-title-xl mb-10'>
            ¿Por qué elegirnos?
          </h1>
          <p className='font-normaly text-xl text-gray-text text-center mb-44'>
            No solo entregamos flores. Nos preocupamos
          </p>

          {/* slider */}
          <div className='relative'>
              <button className="prev1 absolute top-1/2 -translate-y-1/2">
                  <IoIosArrowBack className="text-text-pink text-5xl" />
              </button>
              {data && (
                  <Swiper 
                      navigation={{
                          prevEl: '.prev1',
                          nextEl: '.next1',
                      }}
                      slidesPerView={4}
                      spaceBetween={100}
                      breakpoints={{
                        0: {
                          slidesPerView: 1
                        },
                        568: {
                          slidesPerView: 2,
                          spaceBetween: 30
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 60
                        },
                        1100: {
                          slidesPerView: 4
                        }
                      }}
                      autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Navigation]} 
                      className="max-w-[1078px] mx-auto"
                  >
                      {data.map((d, i) => (
                          <SwiperSlide key={i}>
                             <div className='flex flex-col items-center'>
                                <div className='w-40 h-40 mb-30 flex items-center justify-center rounded-full border'>
                                  <Image src={d.icon}  />
                                </div>
                                <h2 className='text-center font-bold text-lg'>
                                  {d.title}
                                </h2>
                             </div>                                 
                          </SwiperSlide>
                      ))}
                  </Swiper>
              )}
              <button className="next1 absolute top-1/2 -translate-y-1/2 right-0">
                  <IoIosArrowForward className="text-text-pink text-5xl " />
              </button>
          </div>

        </div>
    </section>
  )
}

export default Choose