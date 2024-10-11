 
import React from 'react';
import theme from '../Utilities/Theme';
import Controls from '../commons/controls';
import MySwiper from './AboutCharitySwiperComponent';

const AboutCharityComponent = () => {
  return (
    <Controls.Grid container justifyContent='center' my={3}  >
      <Controls.Grid item xs={10} lg={9} container   sx={{  border:"" }}>

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
          <Controls.Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize:{xs:'24px',sm:"30px",md:"34px"},
              fontWeight: 700,
              lineHeight: {xs:'30px',sm:'60px'},
              color: theme.palette.one.green,
              marginY: 2
            }}
          >
            About Charity <Controls.Box component="span" sx={{ color: theme.palette.one.yellow, }}>Support</Controls.Box> is Really Powerful.
          </Controls.Typography>
          <Controls.Typography variant='' sx={{fontSize:{xs:'14px',sm:"15px",md:"17px"}}}>
            Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut, praesentium magnam, pariatur quae, necessitatibus. Dolor, eligendi voluptate ducimus itaque esse autem perspiciatis sint! Recusandae dolor aliqu.
          </Controls.Typography>
        </Controls.Grid>

        <Controls.Grid xs={12} item sx={{ display: {xs:"block",md:"flex"}, justifyContent: "center",  }} mt={2}>
          <Controls.Grid item xs={12} md={5} lg={4}sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Controls.Typography variant='body1' sx={{ textAlign: "justify", flexGrow: 1 ,fontFamily:"poppins",fontSize:{xs:"15px",sm:"17px"}}}>
              We are India's most trusted and also best in transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards  which are then delivered to them by us. We are India's most trusted and also best in transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, trusted and also best in transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people which are then delivered to them by us. 
            </Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item xs={12} md={7}lg={8}       >
            <MySwiper />
          </Controls.Grid>
        </Controls.Grid>

      </Controls.Grid>
    </Controls.Grid>
  );
};

export default AboutCharityComponent;
