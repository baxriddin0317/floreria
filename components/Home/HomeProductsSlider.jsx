import ProductCard from "../Cards/ProductCard";
import Data from "../../utils/Data"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const HomeProductsSlider = () => {
  return (
    <div className="pt-28 pb-15">
      <div className="text-center px-6">
        <h2 className="font-cormorant-upright font-bold text-brand-dark-primary text-5xl lg:text-6xl">
          Nuestros productos
        </h2>
        <p className="lg:text-xl text-brand-gray-primary mt-5">
          Encuentra lo que necesitas
        </p>
      </div>

      <div className="relative max-w-7xl 2xl:max-w-base mx-auto mt-16 lg:mt-28">
        <div className="relative w-full mx-auto max-w-6xl px-6 lg:px-9">
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 44,
              },
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
          >
            {Data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex items-center justify-between absolute top-1/2 left-0 z-30">
          <button className="prev absolute z-50 top-1/2 -translate-y-1/2">
            <IoIosArrowBack className="text-brand-primary text-5xl" />
          </button>
          <button className="next absolute z-50 top-1/2 -translate-y-1/2 right-0">
            <IoIosArrowForward className="text-brand-primary text-5xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductsSlider;
