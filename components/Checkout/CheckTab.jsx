import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { BsTruck, BsShop } from "react-icons/bs";
import { FaPlus } from "react-icons/fa"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const datas = [
  {
    id: 1,
    shaxar: "Lía Busolich",
    moljal: "Las Hualtatas 5951,",
    manzil: "Vitacura",
    tel: "+56994126425"
  },
  {
    id: 2,
    shaxar: "Lía Busolich",
    moljal: "Las Hualtatas 5951,",
    manzil: "Vitacura",
    tel: "+56994126425"
  }
]

const CheckTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className='mb-13'>
      <h1 className='font-bold text-xl text-brand-dark-primary mb-2.5'> 
      3. ¿Quieres enviar o retirar en nuestra oficina?
      </h1>
      <div className="w-full p-8 rounded-20 bg-brand-gray-light">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="grid grid-cols-2 space-x-1 w-full border border-brand-primary rounded-10 bg-white p-0.5">
            <Tab
              className={({ selected }) =>
              classNames(
                "py-3.5 rounded-10 outline-none text-brand-gray-primary flex items-center gap-2 justify-center",
                selected
                  ? 'bg-brand-primary text-white'
                  : 'hover:bg-brand-primary hover:text-white'
              )
            }
            >
              <BsTruck className="text-2xl" />
              Despacho a domicilio
            </Tab>
            <Tab
              className={({ selected }) =>
              classNames(
                "py-3.5 rounded-10 outline-none text-brand-gray-primary flex items-center gap-2 justify-center",
                selected
                  ? 'bg-brand-primary text-white'
                  : 'hover:bg-brand-primary hover:text-white'
              )
            }
            >
              <BsShop className="text-2xl" />
              Retira tu compra
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-8 mb-13">
            <Tab.Panel>
              <TabPanelcontent title={"¿Donde enviamos este pedido?"} data={datas} map={true} />
            </Tab.Panel>
            <Tab.Panel>
              <TabPanelcontent title={"Ministro Carvajal 27, Providencia"} map={false} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

const TabPanelcontent = ({title, data, map}) => {
  return (
    <>
      <h2 className='font-bold text-xl text-brand-dark-primary mb-2.5'> 
        {title}
      </h2>
      {map ?  
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:w-[640px]'>
        {data.map(d => (
          <div key={d.id} className='w-full p-5 flex flex-col bg-white rounded-10 text-brand-dark-primary'>
            <p>
              {d.shaxar}
            </p>
            <p>
              {d.moljal}
            </p>
            <p>
              {d.manzil}
            </p>
            <p>
              {d.tel}
            </p>
          </div>
        ))}
        <div className='bg-brand-primary rounded-10 cursor-pointer'>
          <div className='text-white p-5 h-full flex items-center justify-center flex-col gap-2.5'>
            <FaPlus className='text-2xl' />
            Añadir Dirección
          </div>
        </div>
      </div> : <div className='rounded-20 overflow-hidden'>
      <iframe className='w-full h-52' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773449.0428205093!2d72.32835650000001!3d40.777741049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc939c2cc9f571%3A0xf677ebc7b76654c8!2sAndijon%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2sus!4v1663048507618!5m2!1suz!2sus"></iframe>
      </div>}
    </>
  )
}

export default CheckTab

