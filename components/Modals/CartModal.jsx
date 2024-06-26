import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg"

import { CartContext } from "../../context/CartContext";
import Border from "../Product/Border";

const CartModal = ({setModalOpen}) => {
    const { cartItems } = useContext(CartContext);

  return (
    <div className='fixed top-0 left-0 w-full h-full z-100 bg-brand-dark-ligth'>
        <div className='flex items-center justify-center h-full w-full'>
            <div className='bg-white rounded-30 p-8 w-full md:w-[420px]'>
                <div className='flex items-center justify-between mb-7'>
                    <h2 className='text-brand-primary font-bold text-lg'>
                    Esto llevas hasta ahora...
                    </h2>
                    <button onClick={() => setModalOpen(false)}>
                        <CgClose className="text-3xl" />
                    </button>
                </div>
                <div className="h-48 overflow-y-scroll overscroll-none">
                    {/* cart item map */}
                    {cartItems.length !== 0 ? cartItems.map(cartItem => (
                        <div className='flex items-center mb-5'>
                            <div className='rounded-10 overflow-hidden'>
                                <Image
                                    className="transition-transform duration-300"
                                    width={80}
                                    height={80}
                                    src={`/assets/img/flower${cartItem.img}.jpg`}
                                />
                            </div>
                            <div className='ml-5 flex items-start justify-between w-full'>
                                <div>
                                    <h2 className="font-bold text-brand-dark-primary">
                                        {cartItem.flowerName}
                                    </h2>
                                    <p className="text-brand-gray-primary text-sm">
                                        {cartItem.text}
                                    </p>
                                    <div className="flex gap-1 items-center">
                                        <p className="text-brand-gray-primary text-sm">
                                            Card count
                                        </p>
                                        <span className="text-brand-dark-primary text-sm">
                                            {cartItem.count}

                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-brand-dark-primary">
                                        ${cartItem.price}
                                    </p>
                                </div>
                            </div>
                        </div> 
                    )) : <p className="text-center font-bold text-2xl text-brand-gray-primary">Cart Items not found!</p>
                    }
                </div>

                <Border>
                    <div className="bg-linear py-px">
                        <div className="py-5 bg-white">
                            <h2 className="font-bold text-lg text-brand-dark-primary mb-2.5">
                            Hazlo más especial...
                            </h2>

                            <div className='flex items-center mb-5'>
                                <div className='rounded-10 overflow-hidden'>
                                    <Image
                                        className="transition-transform duration-300"
                                        width={80}
                                        height={80}
                                        src={`/assets/img/flower2.jpg`}
                                    />
                                </div>
                                <div className='ml-5 flex items-stretch justify-between flex-1'>
                                    <div>
                                        <h2 className="font-bold capitalize text-brand-dark-primary">
                                        festival maylar 
                                        </h2>
                                        <p className="text-brand-gray-primary text-sm">
                                        Balloons
                                        </p>
                                        <Link href={"/"}>
                                        <a className="text-brand-primary text-sm underline">Ver detalles</a>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-bold text-brand-dark-primary">
                                            $4.990
                                        </p>
                                        <input className="w-6 h-6 mr-5 rounded-md" type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center mb-5'>
                                <div className='rounded-10 overflow-hidden'>
                                    <Image
                                        className="transition-transform duration-300"
                                        width={80}
                                        height={80}
                                        src={`/assets/img/flower3.jpg`}
                                    />
                                </div>
                                <div className='ml-5 flex items-stratch justify-between flex-1'>
                                    <div>
                                        <h2 className="font-bold capitalize text-brand-dark-primary">
                                        festival maylar 
                                        </h2>
                                        <p className="text-brand-gray-primary text-sm">
                                        Balloons
                                        </p>
                                        <Link href={"/"}>
                                        <a className="text-brand-primary text-sm underline">Ver detalles</a>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-bold text-brand-dark-primary">
                                            $4.990
                                        </p>
                                        <input className="w-6 h-6 mr-5 rounded-md" type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-20 h-20 rounded-10 overflow-hidden'>
                                    <Image
                                        className="transition-transform duration-300"
                                        width={80}
                                        height={80}
                                        src={`/assets/img/flower4.jpg`}
                                    />
                                </div>
                                <div className='ml-5 flex items-stratch justify-between flex-1'>
                                    <div>
                                        <h2 className="font-bold capitalize text-brand-dark-primary">
                                        festival maylar 
                                        </h2>
                                        <p className="text-brand-gray-primary text-sm">
                                        Balloons
                                        </p>
                                        <Link href={"/"}>
                                        <a className="text-brand-primary text-sm underline">Ver detalles</a>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-bold text-brand-dark-primary">
                                            $4.990
                                        </p>
                                        <input className="w-6 h-6 mr-5 rounded-md" type="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Border>
                <button className="h-11 w-full flex items-center justify-center capitalize bg-brand-primary text-white rounded-base">
                Ir al Carrito
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartModal
