import React, { useEffect } from 'react'
import Controls from '../commons/controls'
import DonateImageComponent from '../Components/DonateImageComponent'
import NavbarComponent from '../Components/NavbarComponent'
import DonateFormComponent from '../Components/DonateFormComponent'
import GalleryComponent from '../Components/GalleryComponent'
import VolunteerComponent from '../Components/VolunteerComponent'
import FooterComponent from '../Components/FooterComponent'
import { useLocation } from 'react-router-dom'

const DonatePage = () => {
  const location = useLocation()
  useEffect(() => {
    
    if (location.pathname === "/donate") {
      window.scrollTo({
        top: 505,
        behavior: 'smooth',
      });
    }
  }, [location.pathname]); 
  return (
    <>
    <NavbarComponent/>
    <DonateImageComponent/>
    <DonateFormComponent/>
    <GalleryComponent/>
    <VolunteerComponent textColor='#F2C21A'/>
    <FooterComponent/>
    </>
  )
}

export default DonatePage