import Image from 'next/image'

const pays = [
    {
        img: 1,
        title: "Mercado Pago",
    },
    {
        img: 2,
        title: "Mercado Pago",
    },
    {
        img: 3,
        title: "Mercado Pago",
    },
]

const Payment = () => {
  return (
    <div>
        <h1 className='font-bold text-xl text-brand-dark-primary mb-2.5'>
        5. Método de Pago
        </h1>

        <form >
            {pays.map((pay, i) => (
                <PaymentItem key={i} pay={pay} />
            ))}
        </form>

        <div>
            <div className='flex items-center gap-2.5 mb-5'>
                <input type="checkbox" />
                <p className='font-light text-brand-dark-primary'>
                Acepto los <span className='text-brand-primary'>Términos y Condiciones</span> de Florería Suecia
                </p>
            </div>
            <div className='flex items-center gap-2.5 mb-5'>
                <input type="checkbox" />
                <p className='font-light text-brand-dark-primary'>
                Activar <span className='text-brand-primary'>recordatorio anuals</span>
                </p>
            </div>
        </div>
    </div>
  )
}

const PaymentItem = ({pay}) => {
    return (
        <div className='flex items-center gap-5 px-3 bg-white rounded-10 shadow-2.5xl mb-5'>
            <input type="checkbox" />
            <Image
                className='ml-5' 
                src={`/assets/pay${pay.img}.png`}
                width={48}
                height={48}
            />
            <h3 className='text-brand-dark-primary ml-2.5'>
                {pay.title}
            </h3>
        </div>
    )
}

export default Payment
