import React from 'react'
import Header from '../aboutcomponent/header';
import Footer from '../components/footerFirst';
import FreeTrail from '../pricingComponent/freeTrial';
import Plan from '../pricingComponent/plan';
import Price from '../pricingComponent/price';
import Prices from '../pricingComponent/prices';


const Pricing = () => {
  return (
    <>
    <Header/>
    <FreeTrail/>
    <Plan/>
    <Price/>
    <Prices/>
    <Footer/>
    </>
  )
}

export default Pricing ;
