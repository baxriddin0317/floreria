import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { MdDateRange } from "react-icons/md"

const ChooseCard = ({p}) => {
    const [active, setActive] = useState(false);

    return (
        <div className={active ? `border-2 border-brand-primary rounded-20 p-5` : 'border border-brand-gray-primary rounded-20 p-5'}>
            <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button 
                        onClick={() => setActive(!open)}
                        className="flex flex-col w-full items-center justify-center"
                    >
                        <h2 className='text-brand-gray-primary text-lg mb-2 capitalize'>
                            {p.title === null ? p.icon : p.title}
                        </h2>
                        <p className='text-brand-gray-primary text-lg mb-2'>
                            25 febrero
                        </p>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-brand-gray-primary capitalize text-center grid gap-y-3">
                        {({ close }) => (
                            <>
                                <button
                                    onClick={async () => {
                                    await fetch('/accept-terms', { method: 'POST' })
                                    close();
                                    setActive(!open)
                                    }}
                                    className="bg-transparent hover:bg-brand-primary hover:text-white w-full py-3.5 rounded-10"
                                >
                                    08:00am - 02:00pm
                                </button>
                                <button
                                    onClick={async () => {
                                    await fetch('/accept-terms', { method: 'POST' })
                                    close()
                                    setActive(!open)
                                    }}
                                    className="bg-transparent hover:bg-brand-primary hover:text-white w-full py-3.5 rounded-10"
                                >
                                    10:00am - 04:00pm
                                </button>
                                <button
                                    onClick={async () => {
                                    await fetch('/accept-terms', { method: 'POST' })
                                    close()
                                    setActive(!open)
                                    }}
                                    className="bg-transparent hover:bg-brand-primary hover:text-white w-full py-3.5 rounded-10"
                                >
                                    03:00am - 08:00pm
                                </button>
                                <button
                                    onClick={async () => {
                                    await fetch('/accept-terms', { method: 'POST' })
                                    close()
                                    setActive(!open)
                                    }}
                                    className="bg-transparent hover:bg-brand-primary hover:text-white w-full py-3.5 rounded-10"
                                >
                                    Elegir horario más acotado
                                </button>
                            </>    
                        )}
                    </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
    )
}

export default ChooseCard