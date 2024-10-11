import React from 'react'
import BlogSwiperComponent from '../Components/BlogSwiperComponent'
import NavbarComponent from '../Components/NavbarComponent'
import QuoteComponent from '../Components/QuoteComponent'
import SpinnerComponent from '../Components/SpinnerComponent'
import HelpingComponent from '../Components/HelpingComponent'
import OurCampaignComponent from '../Components/OurCampaignComponent'
import VolunteerComponent from '../Components/VolunteerComponent'
import FooterComponent from '../Components/FooterComponent'

const BlogPage = () => {
  return (
    <>
    <NavbarComponent/>
   <BlogSwiperComponent/>
   <QuoteComponent/>
   <SpinnerComponent/>
   <HelpingComponent/>
   <OurCampaignComponent/>
   <VolunteerComponent textColor="#F2C21A"/>
   <FooterComponent/>
    </>
  )
}

export default BlogPage