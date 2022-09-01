import React from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

function Choose() {
  return (
    <section className="bg-gray-bg">
      <div className="max-w-8xl mx-auto px-4 md:px-1 pt-16 pb-72">
        <h1 className="font-Cormorant-Upright text-center font-bold text-title-xl mb-10">
          ¿Por qué elegirnos?
        </h1>
        <p className="font-normaly text-xl text-gray-text text-center mb-44">
          No solo entregamos flores. Nos preocupamos
        </p>

        {/* slider */}
        <div className="relative">
          <button className="prev1 absolute top-1/2 -translate-y-1/2">
            <IoIosArrowBack className="text-text-pink text-5xl" />
          </button>
          {data && (
            <Swiper
              navigation={{
                prevEl: ".prev1",
                nextEl: ".next1",
              }}
              slidesPerView={4}
              spaceBetween={100}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                568: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                1100: {
                  slidesPerView: 4,
                },
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
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 mb-30 flex items-center justify-center rounded-full border">
                      {/* <Image src={d.icon} /> */}
                    </div>
                    <h2 className="text-center font-bold text-lg">{d.title}</h2>
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
  );
}

export default Choose;
