 
import React from 'react';
import theme from '../Utilities/Theme';
import Controls from '../commons/controls';
import MySwiper from './AboutCharitySwiperComponent';

const AboutCharityComponent = () => {
  return (
    <Controls.Grid container justifyContent='center' my={3}  >
      <Controls.Grid item xs={10} md={10} lg={9} xl={10} container   sx={{  border:"" }}>

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
              fontSize:{xs:'24px',sm:"30px",md:"34px"},
              fontWeight: 700,
              lineHeight: {xs:'30px',sm:'60px'},
              color: theme.palette.one.green,
              marginY: 2
            }}
          >
            About Charity<Controls.Box component="span" sx={{ color: theme.palette.one.yellow, }}>Support</Controls.Box> is Really Powerful.
          </Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item >
          <Controls.Typography variant='caption1' sx={{fontSize:{xs:'0.7rem',sm:"0.9rem",md:"1.2rem",lg:"1.2rem",xl:"1.9re",xxl:"0.5rem"}}}>
          At its core, charity support is one of the most powerful forces for good in the world. It not only provides immediate relief to those in need but also creates long-term, transformative change in communities. Every act of giving—whether it’s a donation, volunteering time, or spreading awareness—has a ripple effect. It helps individuals rise out of poverty, access education, and live healthier lives.
          </Controls.Typography>
          </Controls.Grid>
        </Controls.Grid>

        <Controls.Grid xs={12} item sx={{ display: {xs:"block",md:"flex"}, justifyContent: "center",  }} my={2}>
          <Controls.Grid item xs={12} md={5} lg={4}sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Controls.Typography variant='caption1' sx={{ textAlign: "justify", flexGrow: 1 , fontSize:{xs:"0.9rem",sm:"1.1rem",lg:"1.1rem",xl:"2.6rem"}}}>
            Charity support is powerful because it has the ability to transform lives, strengthen communities, and create lasting positive change in society.<br/>
            Charity plays a critical role across all sectors of society by filling gaps in government services and addressing unmet needs. From healthcare to education, environmental conservation to social justice, charity transforms lives, uplifts communities, and tackles some of the world’s most pressing challenges. Through acts of giving, volunteering, and advocacy, charity not only solves immediate problems but also lays the foundation for a more equitable and sustainable world. 
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
