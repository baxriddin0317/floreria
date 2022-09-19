import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { IoDiamondOutline } from "react-icons/io5";
import { FaPhoneAlt, HiPhone } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { Transition } from "@headlessui/react";

const links = [
  {
    name: "novedades",
    link: "/",
  },
  {
    name: "mas vendidos",
    link: "/",
  },
  {
    name: "cumpleaños",
    link: "/category",
  },
  {
    name: "aniversario",
    link: "/",
  },
  {
    name: "Ofertas",
    link: "/",
  },
  {
    name: "porque sí",
    link: "/",
  },
];
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white z-40">
        <div className="hidden bg-black text-white">
          <p className="max-w-base mx-auto text-sm tracking-wide px-6 py-2.5">
            <strong>
              Entrega el mismo dia si compras antes de las 5.00 pm
            </strong>
          </p>
        </div>
        <nav className="max-w-base mx-auto flex items-center py-2 px-3 md:px-6 xl:py-3.5 xxl:py-5">
          <Link href="/">
            <a className="relative w-16 h-14 md:w-16 md:h-16 shrink-0">
              <Image src="/logo.png" layout="fill" />
            </a>
          </Link>

          <form className="max-w-lg w-full mx-3.5 xl:mx-18">
            <div className="relative">
              <input
                type="text"
                placeholder="¿Qué buscas?"
                className="bg-brand-gray-light w-full rounded-base focus:border-brand-primary/50 border border-transparent px-4 py-2 md:py-3 md:px-6"
              />
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 right-4"
              >
                <RiSearchLine className="text-text-pink md:text-xl lg:text-2xl" />
              </button>
            </div>
          </form>

          <div className="hidden lg:flex items-center justify-between lg:gap-4 flex-1">
            <Link href="tel:+56932937810">
              <a className="inline-flex items-center text-brand-primary gap-2 xxl:gap-3">
                <FaPhoneAlt className="text-lg xxl:text-2xl" />
                <strong className="xxl:text-lg">Llámanos</strong>
              </a>
            </Link>

            <button
              type="button"
              className="inline-flex items-center gap-2 xxl:gap-3 whitespace-nowrap text-brand-primary border border-brand-primary rounded-base hover:bg-brand-primary hover:text-white transition-colors duration-200 py-2.5 px-5 xxl:py-3 xxl:px-8"
            >
              <svg className="w-4 h-4 xxl:w-6 xxl:h-6">
                <use href="./assets/icons/diamond.svg#diamond"></use>
              </svg>
              <strong className="text-sm xxl:text-base xxl:leading-5">
                Suecia VIP
              </strong>
            </button>

            <div className="hidden lg:flex items-center gap-4 xxl:gap-6">
              <div>
                <button type="button" className="text-brand-primary">
                  <span className="relative block h-5 xxl:h-7 mx-auto">
                    <Image layout="fill" src="/assets/icons/seguimiento.svg" />
                  </span>
                  <strong className="text-sm xxl:text-base xxl:leading-5 mt-1">
                    Seguimiento
                  </strong>
                </button>
              </div>
              <div>
                <button type="button" className="text-brand-primary">
                  <span className="relative block h-5 xxl:h-7 mx-auto">
                    <Image layout="fill" src="/assets/icons/cart.svg" />
                  </span>
                  <strong className="text-sm xxl:text-base xxl:leading-5 mt-1">
                    Carrito
                  </strong>
                </button>
              </div>
              <div>
                <button type="button" className="text-brand-primary">
                  <span className="relative block h-5 xxl:h-7 mx-auto">
                    <Image layout="fill" src="/assets/icons/avatar.svg" />
                  </span>
                  <strong className="text-sm xxl:text-base xxl:leading-5 mt-1">
                    Paloma
                  </strong>
                </button>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-3 md:gap-4 ml-auto">
            <div className="grid place-content-center">
              <button type="button" className="text-brand-primary">
                <span className="relative block h-4 w-4 md:h-5 md:w-5 mx-auto">
                  <Image layout="fill" src="/assets/icons/cart.svg" />
                </span>
              </button>
            </div>
            <div className="grid place-content-center">
              <button type="button" className="text-brand-primary">
                <span className="relative block h-4 w-4 md:h-5 md:w-5 mx-auto">
                  <Image layout="fill" src="/assets/icons/avatar.svg" />
                </span>
              </button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-xl"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </nav>

        <div className="nav-links relative hidden lg:flex items-center justify-center text-sm xxl:text-base space-x-12 xxl:space-x-20 py-4 xxl:py-6">
          {links.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <a className="capitalize lg:hover:text-brand-primary p-1">
                {item.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <MobileNav {...{ open, setOpen }} />
      </header>
    </>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <Transition
      show={open}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 h-screen w-full z-50 bg-white px-3 md:px-6 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="relative w-16 h-14 md:w-16 md:h-16 shrink-0">
              <Image src="/logo.png" layout="fill" />
            </a>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="space-y-1 pt-4 pb-8">
          <div className="bg-linear h-px mb-5"></div>
          {links.map((item, idx) => (
            <Link href="/" key={idx}>
              <a className="block capitalize lg:hover:text-brand-primary p-1">
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="bg-linear h-px mb-7"></div>
        <div className="grid grid-cols-2 gap-10">
          <Link href="tel:+56932937810">
            <a className="inline-flex items-center justify-center text-brand-primary gap-2 xxl:gap-3">
              <FaPhoneAlt className="text-lg xxl:text-2xl" />
              <strong className="xxl:text-lg">Llámanos</strong>
            </a>
          </Link>

          <button
            type="button"
            className="inline-flex justify-center items-center gap-2 xxl:gap-3 text-brand-primary border border-brand-primary rounded-base hover:bg-brand-primary hover:text-white transition-colors duration-200 py-2.5 px-5 xxl:py-3 xxl:px-8"
          >
            <svg className="w-4 h-4 xxl:w-6 xxl:h-6">
              <use href="./assets/icons/diamond.svg#diamond"></use>
            </svg>
            <strong className="text-sm xxl:text-base xxl:leading-5">
              Suecia VIP
            </strong>
          </button>
        </div>
      </div>
    </Transition>
  );
}

export default Header;
