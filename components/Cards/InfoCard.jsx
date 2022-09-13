const infoData = [
    {
        id: 1,
        title: "Dirección de envío",
        text: ["Av Suecia 3134, Depto 1105, Ñuñoa, RM"]
    },
    {
        id: 2,
        title: "Rango horario",
        text: ["16:00-17:00 horas"]
    },
    {
        id: 3,
        title: "Mensaje en tarjeta",
        text: ["Te Amo Albita..."]
    },
    {
        id: 4,
        title: "Tus datos",
        text: ["Milovan Busolich", "milovan.busolich@gmail.com", "+56 9 9938 8926"],
        
    },
]

const InfoCard = () => {
  return (
    <div className='bg-brand-gray-light p-8 rounded-30 w-full h-full'>
        <h2 className='font-bold text-3xl text-brand-dark-primary mb-7'>
        Información del pedido
        </h2>

        {infoData.map(info => (
            <InfoItem key={info.id} info={info} />
        ))}
    </div>
  )
}

const InfoItem = ({info}) => {
    return (
        <div className="mb-10">
            <h3 className="border-l-4 border-brand-primary mb-2.5 pl-2.5 text-brand-dark-primary text-lg font-medium">
                {info.title}
            </h3>
            {info.text.map((t, i) => (    
                <p key={i} className="text-brand-gray-primary pl-3">
                    {t}
                </p>
            ))}
        </div>
    )
}

export default InfoCard
