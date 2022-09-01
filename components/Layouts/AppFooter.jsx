import React from "react";
import Link from "next/link";
import Newsletter from "../Sections/Newsletter";

const footerLink = [
  {
    title: "Informacion",
    links: [
      {
        name: "Como comprar",
        src: "/",
      },
      {
        name: "Preguntas Frecuentas",
        src: "/",
      },
      {
        name: "Reclamos y sugerencias",
        src: "/",
      },
    ],
    // title2: "MI Cuenta",
    // links2: [
    //   {
    //     name: "Acceder a mi cuenta",
    //     src: "/",
    //   },
    // ],
  },
  {
    title: "Florería Suecia",
    links: [
      {
        name: "Sobre Nosotras",
        href: "/",
      },
      {
        name: "Nuestra Diferencia",
        href: "/",
      },
      {
        name: "Neustra Ubicacion",
        href: "/",
      },
      {
        name: "Trabaja con Nosatras",
        href: "/",
      },
      {
        name: "Referidas",
        href: "/",
      },
    ],
  },
  {
    title: "Servicio al cliente",
    links: [
      {
        name: "Seguimiento de Pedido",
        href: "/",
      },
      {
        name: "Cambiar Datos de pedido",
        href: "/",
      },
      {
        name: "Whatsapp",
        href: "/",
      },
      {
        name: "llamanos",
        href: "/",
      },
      {
        name: "RContacto",
        href: "/",
      },
    ],
  },
  {
    title: "Ocasión",
    links: [
      {
        name: "Cumpleaños",
        href: "/",
      },
      {
        name: "Aniversario",
        href: "/",
      },
      {
        name: "Condolencias",
        href: "/",
      },
      {
        name: "Agradecimiento",
        href: "/",
      },
      {
        name: "Porque sí",
        href: "/",
      },
    ],
  },
];

function AppFooter() {
  return (
    <>
      <Newsletter />
      <footer className="bg-brand-dark-primary pt-12 lg:pt-20">
        <div className="max-w-base mx-auto px-4 md:px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerLink.map((item, idx) => (
            <div className="flex lg:last:justify-center" key={idx}>
              <div className="inline-block">
                <h3 className="font-semibold text-lg lg:text-xl xl:text-2xl text-white uppercase">
                  {item.title}
                </h3>
                <div className="mt-2 lg:mt-6 xl:mt-8 lg:space-y-2 xl:space-y-4">
                  {item.links?.map((link, idx) => (
                    <Link href="/" key={idx}>
                      <a className="block text-sm lg:text-base text-brand-gray-primary lg:hover:text-white py-1">
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-center space-y-2 md:space-y-0 md:space-x-10 lg:space-x-15 px-4 md:px-6 mt-14 lg:mt-24 xl:mt-32">
          <Link href="/">
            <a className="font-semibold text-brand-primary uppercase text-xs lg:text-sm py-1">
              terminos y condiciones
            </a>
          </Link>
          <Link href="/">
            <a className="font-semibold text-brand-primary uppercase text-xs lg:text-sm py-1">
              politica de privacidad
            </a>
          </Link>
          <Link href="/">
            <a className="font-semibold text-brand-primary uppercase text-xs lg:text-sm py-1">
              politica envios
            </a>
          </Link>
          <Link href="/">
            <a className="font-semibold text-brand-primary uppercase text-xs lg:text-sm py-1">
              politica de reembolsos
            </a>
          </Link>
        </div>
        <p className="text-white text-center uppercase mt-8 lg:mt-15 py-10">
          floreria suecia 2022
        </p>
      </footer>
    </>
  );
}

export default AppFooter;
