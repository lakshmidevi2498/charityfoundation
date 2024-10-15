import React from 'react'
import Slider from '../Components/AutoSliderComponent'
import NavbarComponent from '../Components/NavbarComponent'
import NeedHelpComponent from '../Components/NeedHelpComponent'
import YourSupportComponent from '../Components/YourSupportComponent'
import TestimonialsComponent from '../Components/TestimonialsComponent'
import Revolution from '../Components/Revolution'
import FrequentlyQuestionsComponent from '../Components/FrequentlyQuestionsComponent'
import VolunteerComponent from '../Components/VolunteerComponent'
import FooterComponent from '../Components/FooterComponent'

const GetInvolvedPage = () => {
  return (
    <>
    <NavbarComponent/>
    <Slider/>
    <NeedHelpComponent/>
    <YourSupportComponent/>
    <TestimonialsComponent/>
    <Revolution/>
    <FrequentlyQuestionsComponent/>
    <VolunteerComponent textColor='#F2C21A'/>
    <FooterComponent/>
    </>
  )
}

export default GetInvolvedPage