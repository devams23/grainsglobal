import React from 'react'
import  Carousel from "../../Components/Carousel/Carousel"
import Testimonials from '../../Components/TestimonialCard/Testimonials';
import Achievements from '../../Components/Achievements/Achievements';
import CompanyIntro from '../../Components/Introdunctionhome.jsx/CompanyIntro';
import ProductsHome from '../../Components/ProductsHome/ProductsHome';

function HomePage() {
  return (
    <>
      <Carousel/>
      <CompanyIntro/>
      <ProductsHome/>
      <Testimonials/>
      <Achievements/>
    </>
  )
}

export default HomePage