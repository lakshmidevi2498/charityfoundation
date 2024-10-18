import React, { useEffect } from 'react'
import NavbarComponent from '../Components/NavbarComponent' 
import MapComponent from '../Components/MapComponent'
import GetInTouchComponent from '../Components/GetInTouchComponent'
import VolunteerComponent from '../Components/VolunteerComponent'
import FooterComponent from '../Components/FooterComponent'
import ContactComponent from '../Components/ContactComponent'
import { useLocation } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'

const ContactusPage = () => {
  const location = useLocation()
 
  const isExtraSmallScreen = useMediaQuery('(max-width:600px)');
  const isSmallScreen = useMediaQuery('(min-width:601px) and (max-width:959px)');
  const isMediumOrLargerScreen = useMediaQuery('(min-width:960px)'); 

  useEffect(() => {
    if (location.pathname === '/contactus/volunteer') {
      let scrollPosition = 700;  

      
      if (isExtraSmallScreen) scrollPosition =800;
      else if (isSmallScreen) scrollPosition = 1100;
      else if (isMediumOrLargerScreen) scrollPosition = 1100;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [location.pathname, isExtraSmallScreen, isSmallScreen, isMediumOrLargerScreen]);
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