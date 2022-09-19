import { useRouter } from 'next/router'

import AccountOrder from '../../components/Account/AccountOrder'
import Addresses from '../../components/Account/Addresses'
import Referrals from '../../components/Account/Referrals'
import AccountLayout from '../../components/Layouts/AccountLayout'

const AccountPage = () => {
    const { dynamik } = useRouter().query

  return (
    <AccountLayout>
        {renderSections(dynamik)}
    </AccountLayout>
  )
}

const renderSections = (dynamik) => {
  switch (dynamik) {
    case "recordatorios":
      return <p>recordatorios</p>
    case "direcciones":
      return <Addresses />
    case "pedidos":
      return <AccountOrder />
    case "referidos":
      return <Referrals />
  
    default:
      return null;
  }
}

export default AccountPage
