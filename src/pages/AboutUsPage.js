import React from 'react'
import AboutUsComponentsOne from '../Components/AboutUsComponentsOne'
import NavbarComponent from '../Components/NavbarComponent'
import FlipCardComponent from '../Components/FlipCardComponent'
import AboutUsComponentTwo from '../Components/AboutUsComponentTwo'
import AboutUsComponentThree from '../Components/AboutUsComponentThree'
import AboutUsComponentFour from '../Components/AboutUsComponentFour'
import AboutUsComponentFive from '../Components/AboutUsComponentFive'
import VolunteerComponent from '../Components/VolunteerComponent'
import theme from '../Utilities/Theme'
import FooterComponent from '../Components/FooterComponent'

const AboutUsPage = () => {
  return (
    <>
    <NavbarComponent/>
    <AboutUsComponentsOne/>
    <FlipCardComponent/>
    <AboutUsComponentTwo/>
    <AboutUsComponentThree/>
    <AboutUsComponentFour/>
    <AboutUsComponentFive/>
    <VolunteerComponent textColor="#F2C21A"/>
    <FooterComponent/>
    
    </>
  )
}

export default AboutUsPage