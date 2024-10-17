import React, { useEffect } from 'react';
import Controls from '../commons/controls';
import DonateImageComponent from '../Components/DonateImageComponent';
import NavbarComponent from '../Components/NavbarComponent';
import DonateFormComponent from '../Components/DonateFormComponent';
import GalleryComponent from '../Components/GalleryComponent';
import VolunteerComponent from '../Components/VolunteerComponent';
import FooterComponent from '../Components/FooterComponent';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const DonatePage = () => {
  const location = useLocation();

  
  const isExtraSmallScreen = useMediaQuery('(max-width:600px)');
  const isSmallScreen = useMediaQuery('(min-width:601px) and (max-width:959px)');
  const isMediumOrLargerScreen = useMediaQuery('(min-width:960px)'); 

  useEffect(() => {
    if (location.pathname === '/donate') {
      let scrollPosition = 505;  

      
      if (isExtraSmallScreen) scrollPosition = 1500;
      else if (isSmallScreen) scrollPosition = 1300;
      else if (isMediumOrLargerScreen) scrollPosition = 700;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [location.pathname, isExtraSmallScreen, isSmallScreen, isMediumOrLargerScreen]);

  return (
    <>
      <NavbarComponent />
      <DonateImageComponent />
      <DonateFormComponent />
      <GalleryComponent />
      <VolunteerComponent textColor="#F2C21A" />
      <FooterComponent />
    </>
  );
};

export default DonatePage;
