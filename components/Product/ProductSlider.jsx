import React, { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"

import Image from "next/image";

const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(1);

    const handlePrev = () => thumbsSwiper === 0 ? setThumbsSwiper(3) : setThumbsSwiper(thumbsSwiper - 1);
    const handleNext = () => thumbsSwiper === 3 ? setThumbsSwiper(0) : setThumbsSwiper(thumbsSwiper + 1);

  return (
    <div className="flex flex-col-reverse xl:flex-row gap-5 items-start max-w-base mx-auto">
        <div className="xl:h-120 flex xl:flex-col gap-2.5 items-center justify-between max-w-lg mx-auto">
            <button 
                onClick={handlePrev}
                className="prev w-20 h-14 z-50 flex justify-center items-center bg-[#f8f8f8] rounded-10"
            >
                <BsArrowUpShort className="text-brand-primary text-3xl -rotate-90 xl:rotate-0" />
            </button>
            <ProductThumbs thumbsSwiper={thumbsSwiper} />
            <button 
                onClick={handleNext}
                className="next w-20 h-14 z-50 bottom-0 flex justify-center items-center bg-[#f8f8f8] rounded-10"
            >
                <BsArrowDownShort className="text-brand-primary text-3xl -rotate-90 xl:rotate-0" />
            </button>
        </div>
        <div className="w-full md:max-w-md mx-auto xl:w-120 xl:h-120 overflow-hidden">
            <Image
                width={480}
                height={480}
                src={`/assets/img/slider${thumbsSwiper + 1}.jpg`} 
            />
        </div>
    </div>
  )
}

const ProductThumbs = ({thumbsSwiper}) =>  (
    <div className="flex flex-col gap-4">
        {[...Array(4).keys()].map((item, idx) => (
            <div  key={idx}
                className={`w-20 h-20 rounded-10 duration-150 overflow-hidden ${thumbsSwiper === idx ? 'border-4 border-brand-primary' : ''}`}
            >
                <Image src={`/assets/img/slider${idx + 1}.jpg`} width={80} height={80} />
            </div>
        ))}
    </div>
)

export default ProductSlider
