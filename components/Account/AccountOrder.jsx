import Image from 'next/image'
import Link from "next/link"

const carddate = [
    {
        img: 1,
        flowerName: "Vino Rosa",
        text: "Ramo del día",
        delivery: "!Entrega el Mismo Día!",
        price: 19.99,
    },
    {
        img: 2,
        flowerName: "Name of Product",
        text: "Compra hoy, entrega cuando quieras",
        delivery: "!Entrega el Mismo Día!",
        price: 90.01,
    }
]

const AccountOrder = () => {
  return (
    <div className='grid xl:grid-cols-2 gap-10'>
      {[...Array(2).keys()].map((item, idx) => (
        <OrderCard key={idx} />
      ))}
    </div>
  )
}

const OrderCard = () => {
    return (
        <div className='bg-white xxl:w-120 shadow-3xl p-8 rounded-20 w-full'>
            <div className='mb-5'>
                {carddate.map(item => (
                    <CardItem item={item} />
                ))}
            </div>
            <div className='mb-5'>
                <Link href={"/"}>
                    <a className='font-bold underline text-brand-primary capitalize'>
                    {carddate.length} Item Más
                    </a>
                </Link>
            </div>
            <div className='mb-5'>
                <h3 className='font-poppins mb-1'>
                Fecha & Hora
                </h3>
                <div className='flex items-center justify-between font-bold  text-brand-gray-primary'>
                    <p>
                    Domingo 20 Agosto 2022
                    </p>
                    <p>
                    12:00 PM - 04:00 PM
                    </p>
                </div>
            </div>
            <div className='mb-5'>
                <h3 className='font-poppins mb-1'>
                Mensaje
                </h3>
                <p className='text-brand-dark-primary'>
                Lörem ipsum dekatrepp ultrast: men susade så adåligt #metoo. Ner klimatångest deterat sedan jäliga när kis hexagov. Iskap gigaburen, gåras. 
                </p>
            </div>
            <div className='mb-5'>
                <h3 className='font-poppins mb-1'>
                Dirección
                </h3>
                <div className='flex items-center justify-between font-roboto'>
                    <p className='text-brand-gray-primary'>
                    Lía Busolich Las Hualtatas 5951, Vitacura 
                    </p>
                    <p className='text-brand-dark-primary'>
                    +56994126425
                    </p>
                </div>
            </div>
            <div className='mt-8 flex flex-col sm:flex-row items-center gap-5'>
                <button className='w-full md:w-60 py-2.5 bg-brand-primary text-white rounded-10'> 
                Editar Pedido
                </button>
                <button className='w-full md:w-40 py-2.5 bg-white text-brand-primary shadow-4 rounded-10'>
                Seguimiento
                </button>
            </div>  
        </div>
    )
}

const CardItem = ({item}) => {
    return (
        <div className='flex items-center mb-2.5 justify-between'>
            <div className='flex items-center gap-2.5'>
                <div className='rounded-10 w-15 h-15 overflow-hidden'>
                    <Image
                        width={60}
                        height={60}
                        src={`/assets/img/flower${item.img}.jpg`}
                    />
                </div>
                <div className='ml-5 flex items-start justify-between'>
                    <div>
                        <h2 className="font-bold text-brand-dark-primary">
                            {item.flowerName}
                        </h2>
                        <p className="text-brand-gray-primary text-sm w-20 md:w-48 truncate">
                            {item.text}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-bold text-brand-dark-primary">
                    ${item.price}
                </p>
            </div>
        </div> 
    )
}

export default AccountOrder
