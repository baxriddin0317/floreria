import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, EffectFade, Thumbs, FreeMode } from "swiper";
import Image from "next/image";


const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <div className="flex flex-col-reverse xl:flex-row gap-5 items-start max-w-base mx-auto">
        <div className="xl:h-[480px] flex xl:flex-col gap-2.5 items-center justify-between max-w-lg mx-auto">
            <button className="prev w-20 h-14 z-50 flex justify-center items-center bg-[#f8f8f8] rounded-10">
                <BsArrowUpShort className="text-brand-primary text-3xl -rotate-90 xl:rotate-0" />
            </button>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                direction={"horizontal"}
                breakpoints={{
                    1280: {
                        direction: "vertical",
                    }
                }}
                loop={true}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                watchSlidesProgress={true}
                freeMode={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full xl:w-20 xl:h-96"
            >
                <SwiperSlide>
                    <div className="w-20 h-20 rounded-10 overflow-hidden">
                        <Image src={`/assets/img/slider1.jpg`} width={80} height={80} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-20 h-20 rounded-10 overflow-hidden">
                        <Image src={`/assets/img/slider2.jpg`} width={80} height={80} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-20 h-20 rounded-10 overflow-hidden">
                        <Image src={`/assets/img/slider3.jpg`} width={80} height={80} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-20 h-20 rounded-10 overflow-hidden">
                        <Image src={`/assets/img/slider4.jpg`} width={80} height={80} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-20 h-20 rounded-10 overflow-hidden">
                        <Image src={`/assets/img/slider1.jpg`} width={80} height={80} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <button className="next w-20 h-14 z-50 bottom-0 flex justify-center items-center bg-[#f8f8f8] rounded-10 ">
                <BsArrowDownShort className="text-brand-primary text-3xl -rotate-90 xl:rotate-0" />
            </button>
        </div>
        <div className="w-full max-w-md mx-auto xl:w-[480px] xl:h-[480px]">
            <Swiper
                spaceBetween={0}
                effect={"fade"}
                loop={true}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[EffectFade, Navigation, Thumbs]}
                className=""
            >
                <SwiperSlide>
                    <div>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src={`/assets/img/slider1.jpg`} 
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                        <Image
                            width={480}
                            height={480} 
                            src={`/assets/img/slider2.jpg`} 
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                        <Image
                            width={480}
                            height={480} 
                            src={`/assets/img/slider3.jpg`} 
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                        <Image
                            width={480}
                            height={480} 
                            src={`/assets/img/slider4.jpg`} 
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                        <Image
                            width={480}
                            height={480} 
                            src={`/assets/img/slider1.jpg`} 
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default ProductSlider
