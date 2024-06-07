import React from 'react'
import  Carousel from "../../Components/Carousel/Carousel"
import Testimonials from '../../Components/TestimonialCard/Testimonials';
import AllAchievement from '../../Components/Achievements/AllAchievement';
import CompanyIntro from '../../Components/Introdunctionhome.jsx/CompanyIntro';
function HomePage() {
  return (
    <>
      <Carousel/>
      <CompanyIntro/>
      <Testimonials/>
      <AllAchievement/>
    </>
  )
}

export default HomePage