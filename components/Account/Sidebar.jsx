import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IoHomeOutline, IoArrowRedoSharp } from "react-icons/io5"
import { TbBellRinging2 } from "react-icons/tb"
import { RiRoadMapLine } from "react-icons/ri"
import { BiShoppingBag } from "react-icons/bi"

const sidebarMenu = [
    {
        id: 1,
        name: "inicio",
        icon: <IoHomeOutline className='text-2xl' />,
        rout: ""
    },
    {
        id: 2,
        name: "recordatorios",
        icon: <TbBellRinging2 className='text-2xl' />,
        rout: "recordatorios"
    },
    {
        id: 3,
        name: "direcciones",
        icon: <RiRoadMapLine className='text-2xl' />,
        rout: "direcciones"
    },
    {
        id: 4,
        name: "pedidos",
        icon: <BiShoppingBag className='text-2xl' />,
        rout: "pedidos"
    },
    {
        id: 6,
        name: "referidos",
        icon: <IoArrowRedoSharp className='text-2xl' />,
        rout: "referidos"
    },
]

const Sidebar = () => {
    const router = useRouter()
    const { dynamik } = router.query
    const [active, setActive ] = useState(dynamik === undefined ? "" : dynamik)

    useEffect(() => {
        setActive(dynamik === undefined ? "" : dynamik);
    }, [dynamik])
    
  return (
    <div className="w-[300px] py-10 px-5 bg-white shadow-3xl rounded-20">
        <div className='flex flex-col items-center justify-center'>
            <div className='w-20 h-20 rounded-full bg-brand-primary mb-5 flex items-center justify-center'>
                <span className='text-3xl font-bold text-white'>
                    M
                </span>
            </div>
            <span className='text-brand-dark-primary text-xl font-bold capitalize mb-6'>
            milovan
            </span>
        </div>
        <div>
        {sidebarMenu.map(menu => (
            <button
                onClick={() => {
                    setActive(dynamik)
                    router.push(`/account/${menu.rout}`)
                }}
                
                key={menu.id} 
                className={`flex gap-2 w-full py-4 px-5 text-left mb-1 rounded-10 ${(active === menu.rout) ? 'bg-brand-primary text-white' : 'bg-transparent hover:bg-brand-primary hover:text-white text-brand-gray-primary'}`}
            >
            {menu.icon}
            {menu.name}
            </button>
        ))}
        </div>
    </div>
  )
}

export default Sidebar
