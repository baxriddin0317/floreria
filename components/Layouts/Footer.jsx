import React from 'react'
import Link from "next/link"

function Footer() {

  const footerLink = [
    {
      title: "Informacion",
      links: [
        {
          name: "Como comprar",
          src: "/"
        },
        {
          name: "Preguntas Frecuentas",
          src: "/"
        },
        {
          name: "Reclamos y sugerencias",
          src: "/"
        },
        
      ],
      title2: "MI Cuenta",
      links2: [
        {
          name: "Acceder a mi cuenta",
          src: "/"
        }
      ]
    },
    {
      title: "Florería Suecia",
      links: [
        {
          name: "Sobre Nosotras",
          src: "/"
        },
        {
          name: "Nuestra Diferencia",
          src: "/"
        },
        {
          name: "Neustra Ubicacion",
          src: "/"
        },
        {
          name: "Trabaja con Nosatras",
          src: "/"
        },
        {
          name: "Referidas",
          src: "/"
        },
        
      ]
    },
    {
      title: "Servicio al cliente",
      links: [
        {
          name: "Seguimiento de Pedido",
          src: "/"
        },
        {
          name: "Cambiar Datos de pedido",
          src: "/"
        },
        {
          name: "Whatsapp",
          src: "/"
        },
        {
          name: "llamanos",
          src: "/"
        },
        {
          name: "RContacto",
          src: "/"
        },
      ]
    },
    {
      title: "Ocasión",
      links: [
        {
          name: "Cumpleaños",
          src: "/"
        },
        {
          name: "Aniversario",
          src: "/"
        },
        {
          name: "Condolencias",
          src: "/"
        },
        {
          name: "Agradecimiento",
          src: "/"
        },
        {
          name: "Porque sí",
          src: "/"
        },
      ]
    }
  ]

  return (
    <footer className='bg-dark-color pt-[316px] pb-10'>
      <div className='max-w-7xl mx-auto mb-24 pl-10'>
        {footerLink && <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {footerLink.map((footerItem, i) => (
            <li className='flex flex-col text-center md:text-left' key={i} >
              <h2 className='font-semibold text-2xl mb-3.5 text-white uppercase'>
                {footerItem.title}
              </h2>
              {footerItem.links.map((link, i) => (
                <Link href={link.src} key={i}>
                  <a className='font-normal text-base text-gray-text capitalize mb-3 hover:text-text-pink'>
                    {link.name}
                  </a>
                </Link>
              ))}

              {footerItem.title2 && (
                <h2 className='font-semibold text-2xl mt-12 mb-3.5 text-white uppercase'>
                  {footerItem.title2}
                </h2>
              )}
              {footerItem.links2 && footerItem.links2.map((link, i) => (
                <Link href={link.src} key={i}>
                  <a className='font-normal text-base text-gray-text capitalize mb-3 hover:text-text-pink'>
                    {link.name}
                  </a>
                </Link>
              ))}
            </li>
          ))}
        </ul>}
      </div>

      <div className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-60 mb-24 '>
          <Link href={"/"}>
            <a className='text-text-pink text-center lg:text-left font-semibold text-base uppercase'>
            terminos y condiciones
            </a>
          </Link>
          <Link href={"/"}>
            <a className='text-text-pink text-center lg:text-left font-semibold text-base uppercase'>
            politica de privacidad
            </a>
          </Link>
          <Link href={"/"}>
            <a className='text-text-pink text-center lg:text-left font-semibold text-base uppercase'>
            politica envios
            </a>
          </Link>
          <Link href={"/"}>
            <a className='text-text-pink text-center lg:text-left font-semibold text-base uppercase'>
            politica de reembolsos
            </a>
          </Link>
          
        </div>

        <h3 className='uppercase font-normal text-base text-white text-center'>
        floreria suecia 2022
        </h3>
      </div>
    </footer>
  )
}

export default Footer