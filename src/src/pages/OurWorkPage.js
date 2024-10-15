import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import OurWorkImageComponent from '../Components/OurWorkImageComponent'
import OurWorkComponent from '../Components/OurWorkComponent'
import OurWorkThirdComponent from '../Components/OurWorkThirdComponent'
import VolunteerComponent from '../Components/VolunteerComponent'
import FooterComponent from '../Components/FooterComponent'


const OurWorkPage = () => {
  return (
    <> 
    <NavbarComponent/>
    <OurWorkImageComponent/>
    <OurWorkComponent/>
    <OurWorkThirdComponent/>
    <VolunteerComponent textColor='#ffc700'/>
    <FooterComponent/>
    </>
  )
}

export default OurWorkPage