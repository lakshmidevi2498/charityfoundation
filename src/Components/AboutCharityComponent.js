import { Button, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import theme from '../Utilities/Theme';
import Controls from '../commons/controls';
import MySwiper from './AboutCharitySwiperComponent';

const AboutCharityComponent = () => {
  return (
    <Controls.Grid container justifyContent='center' my={3} xs={12}>
      <Controls.Grid item xs={11} md={11} container spacing={4} sx={{}}>

        <Controls.Grid item xs={11}  sx={{ textAlign: 'left', }}>
          <Button
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
          </Button>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '30px',
              fontWeight: 700,
              lineHeight: '60px',
              color: theme.palette.one.green,
              marginY: 2
            }}
          >
            About Charity <Box component="span" sx={{ color: theme.palette.one.yellow }}>Support</Box> is Really Powerful.
          </Typography>
          <Typography variant='body1'>
            Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut, praesentium magnam, pariatur quae, necessitatibus. Dolor, eligendi voluptate ducimus itaque esse autem perspiciatis sint! Recusandae dolor aliqu.
          </Typography>
        </Controls.Grid>

        <Controls.Grid xs={12} sx={{ display: "flex", justifyContent: "center", paddingLeft: "28px" }} gap={2} mt={2}>
  <Controls.Grid xs={4} sx={{ display: "flex", flexDirection: "column", width: "100%" }}> 
    <Typography variant='body1' sx={{ textAlign: "justify", flexGrow: 1 }}>  
      We are India's most trusted and also best in transparent crowdfunding platform, with a vision to create a social impact. Our unique model allows people from across the globe to donate towards raising funds for products required by NGOs and charities in India, which are then delivered to them by us. required by NGOs and charities in India, which are then delivered to them by us.
    </Typography>
  </Controls.Grid>
  <Controls.Grid item xs={9} md={10}>
    <MySwiper />
  </Controls.Grid>
</Controls.Grid>

      </Controls.Grid>
    </Controls.Grid>
  );
};

export default AboutCharityComponent;
