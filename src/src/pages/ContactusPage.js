import React from 'react'
import NavbarComponent from '../Components/NavbarComponent' 
import MapComponent from '../Components/MapComponent'
import GetInTouchComponent from '../Components/GetInTouchComponent'
import VolunteerComponent from '../Components/VolunteerComponent'
import FooterComponent from '../Components/FooterComponent'
import ContactComponent from '../Components/ContactComponent'

const ContactusPage = () => {
  return (
    <>
    <NavbarComponent/>
    <ContactComponent/> 
    <MapComponent/>
    <GetInTouchComponent/>  
    <VolunteerComponent textColor='#F2C21A'/>
    <FooterComponent/>
    </>
  )
}

export default ContactusPage