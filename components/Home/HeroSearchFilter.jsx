import Select from "../Forms/Select";

const HeroSearchFilter = () => {
  return (
    <div className="relative max-w-base mx-auto px-6 -mt-5 z-10">
      <form className="bg-brand-dark-primary text-brand-label grid lg:grid-cols-5 items-end gap-5 rounded-20 p-5 pb-7">
        <p className="font-poppins text-xl text-white font-bold uppercase text-center xl:text-right xl:pr-5 xxl:pr-10">
          busca tu regalo
        </p>

        <div>
          <label htmlFor="place" className="block text-sm font-bold mb-1.5">
            ¿Donde envías?
          </label>
          <input
            type="text"
            id="place"
            placeholder="Comuna"
            className="h-10 w-full bg-white text-black rounded-base placeholder-brand-gray-primary px-5"
          />
        </div>
        <Select />
        <div>
          <label htmlFor="date" className="block text-sm font-bold mb-1.5">
            Ocasión
          </label>
          <input
            type="date"
            id="date"
            placeholder="Lunes, 21 feb"
            className="h-10 w-full bg-white text-black rounded-base placeholder-brand-gray-primary px-5"
          />
        </div>

        <button
          type="button"
          className="h-10 bg-brand-primary text-white font-medium rounded-base py-2"
        >
          Encontrar Regalo
        </button>
      </form>
    </div>
  );
};

export default HeroSearchFilter;
