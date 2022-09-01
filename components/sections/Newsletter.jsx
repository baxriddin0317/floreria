import React from "react";
import Link from "next/link";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function Newsletter() {
  return (
    <div className="relative bg-brand-dark-primary before:absolute before:top-0 before:left-0 before:h-2/5 before:w-full before:bg-white">
      <div className="relative max-w-base mx-auto z-10 px-3 md:px-6">
        <div className="bg-brand-primary rounded-40 space-y-10 md:space-y-15 py-15">
          <h2 className="font-cormorant-upright text-center text-white font-bold text-4xl lg:text-5xl xl:text-6xl">
            Suscríbete a nuestro newsletter
          </h2>

          <form className="max-w-[460px] mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Email"
                className="bg-white w-full h-13 md:h-15 placeholder-brand-gray-primary rounded-2xl lg:rounded-20 px-5"
              />
              <button
                type="button"
                className="bg-brand-primary text-white absolute top-1/2 -translate-y-1/2 right-1 md:right-2.5 rounded-base py-2.5 px-4 md:px-7"
              >
                <span className="text-sm md:text-base">Suscribirme</span>
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center space-x-11">
            <Link href="/">
              <a className="w-12 h-12 shrink-0 grid place-content-center lg:hover:bg-white/20 text-white rounded-2xl">
                <FaTiktok className="text-xl md:text-2xl" />
              </a>
            </Link>
            <Link href="/">
              <a className="w-12 h-12 shrink-0 grid place-content-center lg:hover:bg-white/20 text-white rounded-2xl">
                <AiOutlineInstagram className="text-2xl md:text-3xl" />
              </a>
            </Link>
            <Link href="/">
              <a className="w-12 h-12 shrink-0 grid place-content-center lg:hover:bg-white/20 text-white rounded-2xl">
                <FaFacebookF className="text-xl md:text-2xl" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
