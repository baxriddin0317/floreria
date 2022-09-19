import Image from 'next/image'
import InfoCard from '../Cards/InfoCard'
import Border from '../Product/Border'

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
        price: 19.99,
    },
    {
        img: 3,
        flowerName: "Name of Product",
        text: "Compra hoy, entrega cuando quieras",
        delivery: "!Entrega el Mismo Día!",
        price: 19.99,
    },
]

const Order = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col lg:flex-row gap-24'>
        <div>
            <ThankCard />
        </div>
        <div className='flex-1'>
            <InfoCard />
        </div>
      </div>
    </div>
  )
}


const ThankCard = () => {
  return (
    <div className='flex w-full md:w-120 mx-auto flex-col'>
        <div className='rounded-20 shadow-3xl p-8'>
            <Border>
                <div>
                    {carddate.map((item, i) => (
                        <CardItem key={i} item={item} />
                    ))}
                </div>
            </Border>
            <Border>
                <div className='flex items-center justify-between mb-2.5'>
                    <span className='text-brand-gray-primary'>
                    Subtotal
                    </span>
                    <span className='text-brand-dark-primary'>
                    $27.990
                    </span>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-brand-gray-primary'>
                    Envío
                    </span>
                    <span className='text-brand-dark-primary'>
                    $3.990
                    </span>
                </div>
            </Border>
            <Border>
                <div className='flex items-center justify-between'>
                    <span className='text-brand-gray-primary'>
                    Total
                    </span>
                    <span className='text-brand-dark-primary'>
                    $270.00
                    </span>
                </div>
            </Border>
            <div className='flex items-center justify-between'>
                <span className='text-brand-gray-primary'>
                N° de Pedido
                </span>
                <span className='text-brand-dark-primary'>
                #11685
                </span>
            </div>
        </div>
    </div>
  )
}

const CardItem = ({item}) => {
    return (
        <div className='flex items-center mb-5 justify-between'>
            <div className='flex items-center gap-5'>
                <div className='rounded-10 w-20 h-20 overflow-hidden'>
                    <Image
                        width={80}
                        height={80}
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

export default Order
