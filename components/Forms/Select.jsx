import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const people = [
  { id: 1, name: "ocasion", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Select = () => {
  const [selected, setSelected] = useState(people[3]);
  return (
    <Listbox as="div" value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-bold mb-1.5">
            Assigned to
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="h-10 w-full bg-white text-black text-left rounded-base placeholder-brand-gray-primary px-5">
              <span
                className={classNames(
                  selected.name === "ocasion"
                    ? "text-brand-gray-primary"
                    : "text-brand-dark-primary",
                  "block capitalize"
                )}
              >
                {selected.name}
              </span>

              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <FaChevronDown className="text-brand-primary text-lg" />
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

export default Select;
