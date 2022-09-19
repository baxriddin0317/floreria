import Image from "next/image"
import { BsArrowRightShort } from "react-icons/bs"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";

const orderItems = [
    {
        id: 1,
        img: 1,
        text: "Vela Chispera",
        price: "$59.00 MXN"
    },
    {
        id: 2,
        img: 2,
        text: "Cake Topper HBD ",
        price: "$95.00 MXN"
    },
    {
        id: 3,
        img: 3,
        text: "Vela Círculo de...",
        price: "$360.00 MXN "
    },
    {
        id: 4,
        img: 2,
        text: "Cake Topper HBD ",
        price: "$95.00 MXN"
    },
]

const OrderSlider = () => {
  return (
    <div className="mb-6">
        <h1 className='text-2xl mb-8 font-bold text-brand-dark-primary capitalize'>
        3.- Complementar pedido (opcional)
        </h1>
        <div className="flex gap-16 items-center">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={{
                    nextEl: ".orderNext",
                }}
                loop={true}
                autoplay={true}
                modules={[Navigation, Autoplay]}
                className="max-w-[640px] h-64"
            >
                {orderItems.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="relative">
                            <input className="absolute z-10 top-5 right-5 w-6 h-6 rounded" type="checkbox" />
                            <Image src={`/assets/img/order${item.img}.jpg`} width={200} height={200} />
                        </div>
                        <h3 className="text-brand-gray-primary text-lg">
                        {item.text}
                        </h3>
                        <p className="text-brand-dark-primary text-lg">
                        {item.price}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="orderNext w-20 h-20 rounded-full flex items-center justify-center shadow-3xl">
                    <BsArrowRightShort className="text-brand-primary text-3xl font-black" />
            </button>
        </div>
    </div>
  )
}

export default OrderSlider
