import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const people = [
  { id: 1, name: "Sugerencia", unavailable: true },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: false },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Message = () => {
  return (
    <div className="mb-13">
        <h1 className='font-bold text-xl text-brand-dark-primary mb-5'>
        4. Mensaje (opcional)
        </h1>
        <form>
            <div className="mb-5">
                <div className="">
                    <input type="checkbox" id='check' />
                    <label className="ml-2.5 text-brand-gray-primary" htmlFor="check">No enviar tarjeta</label>
                </div>
            </div>
            <Select />
            <div className="flex justify-end mb-2.5">
                <div>
                    <span className="text-brand-primary font-bold">
                    Vista previa
                    </span>
                </div>
            </div>
            <textarea 
                className="bg-brand-gray-light p-5 rounded-10 w-full outline-none mb-5"  
                placeholder="Escribe aquí..."
            >
            </textarea>

            <div className="flex justify-between mb-2.5">
                <div className="">
                    <input type="checkbox" id='check2' />
                    <label className="ml-2.5 text-brand-gray-primary" htmlFor="check2">Enviar sin firma</label>
                </div>
                <div>
                    <span className="text-brand-primary capitalize font-bold">
                    info
                    </span>
                </div>
            </div>
            <input 
                className="w-full bg-brand-gray-light text-brand-gray-primary px-5 py-3.5 mb-5 rounded-10"
                type="text" 
                placeholder="Firma la tarjeta con el nombre que quieras." 
            />
        </form>
    </div>
  )
}

const Select = () => {
  const [selected, setSelected] = useState(people[3]);
  return (
    <Listbox as="div" value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mb-5">
            <Listbox.Button className="h-10 w-full bg-brand-gray-light text-black text-left rounded-base placeholder-brand-gray-primary px-5">
              <span
                className={classNames(
                  selected.name === "Sugerencia"
                    ? "text-brand-gray-primary"
                    : "text-brand-dark-primary",
                  "block capitalize"
                )}
              >
                {selected.name}
              </span>

              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <IoMdArrowDropdown className="text-brand-gray-primary text-3xl" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="bg-white absolute left-0 w-full drop-shadow-lg rounded-base overflow-hidden mt-1">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? " bg-brand-gray-light" : "",
                        "relative capitalize text-black cursor-pointer select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-bold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Message
