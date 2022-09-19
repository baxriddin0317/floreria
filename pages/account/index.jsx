import AccountScores from "../../components/Account/AccountScores"
import Cards from "../../components/Account/Cards"
import AccountLayout from "../../components/Layouts/AccountLayout"
import Border from "../../components/Product/Border"

const index = () => {
  return (
    <AccountLayout>
      <Border>
        <AccountScores />
        <Cards />
        <Rewards />
      </Border>
    </AccountLayout>
  )
}

const Rewards = () => {
  return (
    <div className="w-full rounded-20 bg-brand-primary/10 mb-15">
      <div className="text-center py-10">
        <h2 className="text-brand-primary text-2xl font-semibold mb-4 "> 
        Tus recompensas
        </h2>
        <p className="text-brand-dark-primary mb-2">
        Todavia no has canjeado un cupon de descuento. Tus recompensas
        </p>
      </div>
    </div>
  )
} 

export default index
