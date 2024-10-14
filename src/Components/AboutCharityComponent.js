 
import React from 'react';
import theme from '../Utilities/Theme';
import Controls from '../commons/controls';
import MySwiper from './AboutCharitySwiperComponent';

const AboutCharityComponent = () => {
  return (
    <Controls.Grid container justifyContent='center' my={3}  >
      <Controls.Grid item xs={10} md={10} lg={9}  xl={10} container   sx={{ justifyContent:'center' ,border:"2px solid red" }}>

        <Controls.Grid item xs={12} sx={{ textAlign: 'left',paddingLeft: 0 }}>
          <Controls.Button
            variant='outlined'
            sx={{
              color: theme.palette.one.green,
              border: "2px solid #107A66",
              textTransform: "inherit",
              borderRadius: "20px",
              paddingX: "50px"
            }}
          >
            Charity
          </Controls.Button>
          <Controls.Grid item mt={2}>
          <Controls.Typography variant='caption1'
            sx={{
              fontFamily: 'Poppins',
              fontSize:{xs:'1.5rem',sm:"1.8rem",md:"2.1rem",xl:"2.6rem",xxl:"3.2rem"},
              fontWeight: 700,
              lineHeight: {xs:'1.8rem',sm:'3.8rem'},
              color: theme.palette.one.green,
              marginY: 2
            }}
          >
            About Charity <Controls.Box component="span" sx={{ color: theme.palette.one.yellow, }}>Support</Controls.Box> is Really Powerful.
          </Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item >
          <Controls.Typography variant='caption1' sx={{fontSize:{xs:'1rem',sm:"1.2rem",md:"1.2rem", xl:"1.7rem",xxl:"2.8rem"}}}>
            Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut, praesentium magnam, pariatur quae, necessitatibus. Dolor, eligendi voluptate ducimus itaque esse autem perspiciatis sint! Recusandae dolor aliqu.
          </Controls.Typography>
          </Controls.Grid>
        </Controls.Grid>

        <Controls.Grid xs={12} item sx={{ display: {xs:"block",md:"flex"}, justifyContent: "center",  }} my={2}>
          <Controls.Grid item xs={12} md={5} lg={4}sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Controls.Typography variant='caption1' sx={{ textAlign: "justify", flexGrow: 1 ,fontFamily:"poppins",fontSize:{xs:"1rem",sm:"1.1rem",lg:"2rem",xl:"1rem",xxl:"1.6rem"}}}>
              We are India's most trusted and also best in transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards  which are then delivered to them by us. We are India's most trusted and also best in transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, trusted and also best in transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people which are then delivered to them by us. 
            </Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item xs={12} md={7}lg={8}       mt={{xs:2,md:0}}>
            <MySwiper />
          </Controls.Grid>
        </Controls.Grid>

      </Controls.Grid>
    </Controls.Grid>
  );
};

export default AboutCharityComponent;
