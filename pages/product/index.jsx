import React from 'react'
import AppLayout from "../../components/Layouts/AppLayout"
import ProductContent from '../../components/Product/ProductContent'
import ProductSlider from '../../components/Product/ProductSlider'
import ProductTab from '../../components/Product/ProductTab'
import HomeProductsSlider from "../../components/Home/HomeProductsSlider"


export default function index() {
  return (
    <AppLayout>
      <div className='max-w-base mx-auto px-6'>
        <div className='flex flex-col xl:flex-row items-start gap-10 pt-14 mb-28'>
          <ProductSlider />
          <ProductContent />
        </div>
        <ProductTab />
        <HomeProductsSlider />
      </div>
    </AppLayout>
  )
}

