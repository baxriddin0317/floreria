import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from "next/link"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const ProductTab = () => {
    let [categories] = useState({
        "Descripción del producto": [
          {
            id: 1,
            title: 'Vino 3V y botanas con globo "Love You"',
            subTitle: "Especificaciones del Empaque:",
            texts: [ "Caja rígida decorativa o reutilizable tipo libro color hueso y foil color champagne", "Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm"]
          }
        ],
        "Políticas de envío": [
          {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            subTitle: "Especificaciones del Empaque:",
            texts: [ "reutilizable tipo libro color hueso y foil color champagne", "Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm"]
          }
        ],
        "Políticas de Sustitución": [
          {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            subTitle: "Especificaciones del Empaque:",
            texts: [ "Caja rígida decorativa o reutilizable tipo libro color hueso y foil color champagne", "Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm"]
          }
        ],
      })
    
  return (
    <div className="w-full px-2 py-24 sm:px-0">
        <Tab.Group>
            <Tab.List className="flex items-center gap-28 max-w-4xl mx-auto">
                {Object.keys(categories).map((category) => (
                    <Tab
                        key={category}
                        className={({ selected }) =>
                        classNames(
                        'w-full py-2.5',
                        '',
                        selected
                            ? 'bg-white border-b-4 border-brand-primary text-lg text-brand-primary outline-none'
                            : 'text-lg text-brand-gray-primary hover:text-brand-primary border-b-4 hover:border-b-4 border-transparent hover:border-brand-primary'
                        )
                    }
                    >
                    {category}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                        key={idx}
                        className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                    )}
                    >
                        {posts.map(post => (
                            <div key={post.id} className='py-28'>
                                <h1 className='text-3xl text-brand-dark-primary font-bold mb-3.5'>
                                {post.title}
                                </h1>
                                <p className='text-xl text-brand-gray-primary mb-6'>
                                Demuestra tu agradecimiento y cariño con nuestra exclusiva canasta Vinum la cual contiene la combinación perfecta de vino y botanas que hará de este, el regalo perfecto junto con un globo con la frase "Love you".
                                </p>
                                <p className='text-xl text-brand-gray-primary'>
                                Nuestra caja titulada Vinum, palabra de origen latin que significa Vino, conecta el origen de esta bebida que tiene presencia desde antiguas civilizaciones, y se posiciona hasta el día de hoy como la bebida por excelencia para celebraciones.
                                </p>
                                <div className='mt-9'>
                                    <h3 className='font-bold text-brand-dark-primary text-2xl mb-3.5'>{post.subTitle}</h3>
                                    {post.texts.map(text => (
                                        <p key={text} className='border-l-4 border-brand-primary mb-6 py-1 pl-2.5 text-brand-dark-primary text-lg'>
                                            {text}
                                        </p>
                                    ))}
                                    <Link href={"/"}>
                                        <a className='font-bold text-2xl underline text-brand-primary capitalize'>
                                        ver más
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    </div>
  )
}

export default ProductTab
