import AppLayout from "../../components/Layouts/AppLayout"
import Border from "../../components/Product/Border"
import Contact from "../../components/Thank/Contact"
import Order from "../../components/Thank/Order"
import ThankMap from "../../components/Thank/ThankMap"

const index = () => {
  return (
    <AppLayout>
      <section className="max-w-7xl mx-auto pt-16 px-5 md:px-10 pb-5">
        <Border>
          <div className="text-center">
            <h1 className="text-7xl md:text-8.5xl font-bonheur-royalw text-brand-primary capitalize mb-5">
              gracias, andrea
            </h1>
            <p className="text-lg md:text-xl text-brand-gray-primary mb-6">
            Podrás ver el seguimiento de tu pedido en la sección “Mi Cuenta” arriba a la derecha
            </p>
          </div>
        </Border>
      </section>
      <section className="max-w-7xl mx-auto px-5 md:px-10">
        <Border>
          <div className="py-15">
            <MapTitle title={"Pedido realizado"} />
            <ThankMap />
          </div>
        </Border>
      </section>
      <section className="max-w-7xl mx-auto px-5 md:px-10">
        <Border>
          <div className="py-15">
            <MapTitle title={"pedido #11685"} />
            <Order />
          </div>
        </Border>
      </section>
      <section className="max-w-7xl mx-auto px-5 md:px-10 mb-24">
        <Border>
          <div className="py-15">
            <MapTitle title={"Refiere a alguien"} />
            <Contact />
          </div>
        </Border>
      </section>
    </AppLayout>
  )
}

const MapTitle = ({title}) => (
  <h2 className='font-cormorant-upright text-5xl md:text-6xl text-brand-dark-primary capitalize text-center mb-5'>
  {title}
  </h2>
)

export default index
