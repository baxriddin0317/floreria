import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative md:bg-[url(/assets/img/hero.png)] md:bg-[length:45rem] xl:bg-contain bg-no-repeat bg-right py-16 lg:pb-40">
        <div className="relative max-w-base mx-auto z-10 px-6">
          <div className="max-w-sm lg:max-w-lg md:pr-10">
            <h1 className="font-cormorant-upright font-bold text-5xl lg:text-7xl">
              Florería Suecia
            </h1>
            <p className="lg:text-xl text-brand-gray-primary mt-5">
              ¿Necesitas regalar algo y no sabes qué?
              <br /> <br />
              Tenemos todo para que puedas elegir el regalo perfecto de forma
              rápida y sencilla.
              <br /> <br />
              Además podemos entregar hoy mismo si deseas
            </p>

            <Link href="/">
              <a className="inline-flex items-center gap-2.5 bg-brand-primary text-white rounded-full group px-7 py-3.5 lg:px-12 lg:py-5 mt-10">
                <strong className="text-sm">Entrega Inmediata</strong>
                <svg
                  className="w-4 h-3 lg:w-5 lg:h-4 lg:group-hover:translate-x-2 transition-transform duration-200"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5969 5.57314L13.6792 0.60801C13.2933 0.218578 12.77 -0.000129777 12.2244 5.77735e-08C11.6788 0.000129892 11.1556 0.219086 10.7699 0.608702C10.3842 0.998318 10.1676 1.52668 10.1677 2.07755C10.1678 2.62842 10.3847 3.15667 10.7706 3.54611L14.1153 6.92312H2.05702C1.51147 6.92312 0.988255 7.14193 0.602488 7.53142C0.216721 7.92091 0 8.44918 0 9C0 9.55082 0.216721 10.0791 0.602488 10.4686C0.988255 10.8581 1.51147 11.0769 2.05702 11.0769H14.1153L10.7706 14.4539C10.3847 14.8433 10.1678 15.3716 10.1677 15.9225C10.1676 16.4733 10.3842 17.0017 10.7699 17.3913C11.1556 17.7809 11.6788 17.9999 12.2244 18C12.77 18.0001 13.2933 17.7814 13.6792 17.392L18.5969 12.4269C19.4954 11.5171 20 10.2848 20 9C20 7.71522 19.4954 6.48287 18.5969 5.57314Z"
                    fill="white"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
