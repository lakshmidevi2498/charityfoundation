import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import ImageComponent from '../Components/ImageComponent'
import AboutCharityComponent from '../Components/AboutCharityComponent'
import MySwiper from '../Components/AboutCharitySwiperComponent'
import WhatWeDoComponent from '../Components/WhatWeDoComponent'
import Revolution from '../Components/Revolution'
import OurFunFactsComponent from '../Components/OurFunFactsComponent'
import LatestCauseComponent from '../Components/LatestCauseComponent'
import VolunteerComponent from '../Components/VolunteerComponent'
import FooterComponent from '../Components/FooterComponent'

const LandingPage = () => {
  return (
    <>
    <NavbarComponent/>
    <ImageComponent/>
    <AboutCharityComponent/>
    <WhatWeDoComponent/>
    <Revolution/>
    <OurFunFactsComponent/>
    <LatestCauseComponent/> 
    <VolunteerComponent textColor="black"/>
    <FooterComponent/>
    </>
  )
}

export default LandingPage