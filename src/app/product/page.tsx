import Header from '@/app/productListPage/header'
import React from 'react'
import Hero from '../productListPage/hero'
import Company from '../productListPage/company'
import Cards from '../productListPage/card'
import Footer from '../components/footerFirst'

const ProductPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Company/>
        <Cards/>
        <Footer/>

    </div>
  )
}

export default ProductPage