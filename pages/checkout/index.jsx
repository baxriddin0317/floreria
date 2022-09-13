import React from 'react'
import Border from "../../components/Product/Border"
import CheckForm from '../../components/Forms/CheckForm'
import AppNavigation from "../../components/Layouts/AppNavigation"
import Delivery from '../../components/ThankYou/Delivery'
import CheckCard from '../../components/Cards/CheckCard'
import CheckTab from '../../components/ThankYou/CheckTab'
import Message from '../../components/ThankYou/Message'
import Payment from '../../components/ThankYou/Payment'

const index = () => {
  return (
    <>
      <AppNavigation />
      <main>
        <section className='max-w-base mx-auto pt-10 px-4'>
          <Border>
            <div className='flex items-start flex-col-reverse xl:flex-row xl:gap-28'>
              <div className='flex-1 w-full sm:w-4/5 mx-auto'>
                <CheckForm />
                <Delivery />
                <CheckTab />
                <Message />
                <Payment />
              </div>
              <CheckCard />
            </div>
          </Border>
        </section>
      </main>
    </>
  )
}

export default index
