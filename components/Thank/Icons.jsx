import { IoCopyOutline, IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5"
import {RiMessengerFill} from "react-icons/ri"
import {BiMessageDetail} from "react-icons/bi"
import Link from "next/link"

const icons = [
    {
        id: 1,
        icon: <IoCopyOutline />,
        text: "copiar"
    },
    {
        id: 2,
        icon: <IoLogoWhatsapp />,
        text: "whatsapp"
    },
    {
        id: 3,
        icon: <RiMessengerFill />,
        text: "message"
    },
    {
        id: 4,
        icon: <IoLogoInstagram />,
        text: "instagram"
    },
    {
        id: 5,
        icon: <BiMessageDetail />,
        text: "SMS"
    },
]
const Icons = () => {
  return (
    <div className='py-20 mb-15 max-w-2xl mx-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20'>
                {icons.map(icon => (
                    <Link key={icon.id} href={"/"}>
                        <a className='flex items-center flex-col'>
                            <div className='flex items-center justify-center w-13 h-13 rounded-10 bg-brand-primary text-3xl text-white mb-2.5'>
                                {icon.icon}
                            </div>
                            <p className='capitalize'>
                                {icon.text}
                            </p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default Icons
