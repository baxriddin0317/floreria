import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const data = [
  {
    title: "Entrega Inmediata",
  },
  {
    title: "Entrega en menos de 2 horas",
  },
  {
    title: "Atención 24/7",
  },
  {
    title: "-Seguimiento en Tiempo Real",
  },
  {
    title: "-Notificación de Entrega",
  },
  {
    title: "Puntos por tus compras",
  },
  {
    title: "Recordatorios de fechas importantes",
  },
  {
    title: "-Entrega en horario acotado (ej. entrega de 4 a 5 pm)",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-brand-gray-light py-12 lg:py-15">
      <div className="text-center px-6">
        <h2 className="font-cormorant-upright text-brand-dark-primary font-bold text-5xl lg:text-6xl">
          ¿Por qué elegirnos?
        </h2>
        <p className="lg:text-xl text-brand-gray-primary mt-5">
          No solo entregamos flores. Nos preocupamos
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
                slidesPerView: 4,
                spaceBetween: 44,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 120,
              },
            }}
            navigation={{
              prevEl: ".prev-choose-us",
              nextEl: ".next-choose-us",
            }}
            modules={[Navigation]}
          >
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ItemCard {...item} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex items-center justify-between absolute top-1/2 left-0 z-30">
          <button className="prev-choose-us absolute z-50 top-1/2 -translate-y-1/2">
            <IoIosArrowBack className="text-brand-primary text-5xl" />
          </button>
          <button className="next-choose-us absolute z-50 top-1/2 -translate-y-1/2 right-0">
            <IoIosArrowForward className="text-brand-primary text-5xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

const ItemCard = ({ title, idx }) => (
  <>
    <div className="text-center">
      <div className="h-32 lg:h-40 aspect-square mx-auto border border-brand-gray-primary rounded-full grid place-content-center p-10">
        <img src={`/assets/img/chooseIcons/icon-${idx + 1}.svg`} />
      </div>
      <p className="text-lg mt-6 lg:mt-8">
        <strong>{title}</strong>
      </p>
    </div>
  </>
);

export default WhyChooseUs;
