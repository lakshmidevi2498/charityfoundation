import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const NeedHelpComponent = () => {
  const content = [
    {
      icon: "./assests/images/Group 3293.png",
      text: "Call support",
      descp: "We analyse your website’s structure, internal architecture & other key"
    },
    {
      icon: "./assests/images/Group 3294.png",
      text: "Chat With Us",
      descp: "We are well known within the industries for our technical capabilities"
    },
    {
      icon: "./assests/images/Group 3427.png",
      text: "Address ",
      descp: "4517 Washington Ave. Manchester Kentucky 39495. Kentucky 6543"
    },
  ];

  return (
    <>
      <Controls.Grid container justifyContent="center" my={5}>
        <Controls.Grid item xs={10}md={10} lg={9} xl={10} sx={{ justifyContent: "center", }}>
          <Controls.Grid item>
          <Controls.Typography variant="caption1"sx={{ color: theme.palette.one.green, textAlign: "left", fontWeight: 700, fontSize: {xs:'24px',sm:"26px",xl:"30px"},   }}>Still Need Help</Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item>
          <Controls.Typography variant="caption1"sx={{ fontSize:{xs:"12px",sm:"14px",lg:"16px",xl:"22px"}  }}>Your generosity has the power to change lives and uplift communities. By making a donation to Charity, you are directly contributing to our mission of is to empower individuals and communities in need by providing essential resources, support, and opportunities for growth.</Controls.Typography>
          </Controls.Grid>
          <Controls.Grid container display='flex' spacing={{xs:2,sm:5,md:5,lg:10}}  >
  {content.map((item, index) => (
    <Controls.Grid item   key={index} xs={12} sm={6} md={4} mt={3}>
      <Controls.Card
        sx={{
          backgroundColor: "rgba(242, 194, 26, 0.16)",
          height: {xs:"230px",xl:"300px"},
          display: 'flex',  
          justifyContent: "center",  
          alignItems: "center",  
          margin: "auto",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          '&:hover': {
              transform: "scale(1.05)",  
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
          },
          
        }}
      >
        <Controls.Grid
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Controls.Box
            component='img'
            src={item.icon}
            width='50px'
            height='50px'
            alt={item.text}
          />
          <Controls.Grid item>
          <Controls.Typography variant="caption2" sx={{ fontSize: {xs:"24px",xl:"26px"},fontWeight:700 ,   }} my={2}>{item.text}</Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item>
          <Controls.Typography variant="caption2" sx={{ fontSize: {xs:'14px',md:"16px",xl:"22px"}   ,paddingX:"10px"}}>{item.descp}</Controls.Typography>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Card>
    </Controls.Grid>
  ))}
</Controls.Grid>

        </Controls.Grid>
      </Controls.Grid>
    </>
  );
}

export default NeedHelpComponent;
