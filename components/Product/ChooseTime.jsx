import { MdDateRange } from "react-icons/md"
import ChooseCard from "../Cards/ChooseCard"

const ProductDate = [
    {
        id: 1,
        title: "hoy",
        date: "25 febraro",
    },
    {
        id: 2,
        title: "mañana",
        date: "26 febraro",
    },
    {
        id: 1,
        title: null,
        icon: <MdDateRange className='text-3xl' />,
        date: "Más fechas",
    }
]

const ChooseTime = () => {
  return (
    <>
        <h1 className='text-2xl mb-1 font-bold text-brand-dark-primary capitalize'>
            1.- Selecciona un horario
        </h1> 
        <p className='text-lg text-brand-dark-primary'>
         Se hará un cargo de envío de $3.990
        </p>

        <div className="mt-5">
            <div className='grid grid-cols-3 gap-6 items-start'>
                {ProductDate.map(p => (
                    <ChooseCard key={p.id} p={p} />
                ))}
            </div>
        </div>
    </>
  )
}

export default ChooseTime

