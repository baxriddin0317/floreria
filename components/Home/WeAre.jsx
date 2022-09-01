import React, { useEffect, useRef, useState } from "react";

const WeAre = () => {
  const [tx, setTx] = useState(0);
  const svgRef = useRef(null);
  const imageRef = useRef(null);

  const count = (params) => {
    console.clear();
    // const interval = setInterval(() => {
    //   setTx((currentCount) => --currentCount);
    // }, 1000);

    if (tx === -320) {
      console.log("done");
    }

    console.log(tx);
    // cleanup
    return () => clearInterval(interval);
  };

  useEffect(() => {
    const trWidth = imageRef.current.offsetWidth - svgRef.current.offsetWidth;
    console.log(trWidth);
    // setTx(trWidth);

    // const interval = setInterval(() => {
    //   setTx((currentCount) =>
    //     currentCount == 0
    //       ? --currentCount
    //       : currentCount == trWidth && ++currentCount
    //   );
    // }, 50);

    // console.log(interval);
    // // cleanup
    // return () => clearInterval(interval);
  }, [tx]);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-10 lg:py-24">
      <div className="text-center py-1">
        <h2 className="font-cormorant-upright text-brand-dark-primary font-bold text-5xl lg:text-6xl">
          Nosotras
        </h2>
        <div className="lg:text-xl text-brand-gray-primary space-y-6 mt-8">
          <p>
            En Florería Suecia estamos orgullosos de entregar la experiencia de
            enviar flores en línea, recordando a las personas lo especial que es
            enviar y recibir flores.
          </p>
          <p>
            Nuestro objetivo es combinar un servicio de entrega de flores
            hermoso, flexible y fácil de usar con la magia que solo nuestras
            excelentes floristas pueden brindar a nuestros bellos ramos y
            arreglos.
          </p>
          <p>
            Seleccionamos cuidadosamente cada flor con las que trabajamos para
            asegurarnos de mantener una altísima calidad y ofrecer una increíble
            experiencia en las flores o regalos que envíes a tus seres queridos.
          </p>
        </div>
      </div>

      <div
        ref={svgRef}
        className="relative max-w-[880px] h-[330px] mx-auto overflow-hidden"
      >
        <svg
          className="relative w-full h-full bg-white mix-blend-lighten z-10"
          viewBox="0 0 880 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="140" y="30" width="160" height="240" rx="80" fill="black" />
          <rect y="75" width="100" height="150" rx="50" fill="black" />
          <rect x="780" y="75" width="100" height="150" rx="50" fill="black" />
          <rect x="340" width="200" height="300" rx="100" fill="black" />
          <rect
            x="580"
            y="30"
            width="160"
            height="240"
            rx="80"
            fill="#D9D9D9"
          />
        </svg>

        <div
          ref={imageRef}
          className="absolute top-1/2"
          style={{ transform: `translate(${tx}px, -50%)` }}
        >
          <img
            className="max-w-none h-[600px] w-[1200px] object-contain"
            src="/assets/img/we-are.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WeAre;
