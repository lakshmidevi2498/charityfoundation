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
        <Controls.Grid item xs={10}md={11} lg={10} sx={{ justifyContent: "center", }}>
          <Controls.Grid item>
          <Controls.Typography variant="caption1"sx={{ color: theme.palette.one.green, textAlign: "left", fontWeight: 700, fontSize: {xs:'24px',sm:"26px"},   }}>Still Need Help</Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item>
          <Controls.Typography variant="caption1"sx={{   }}>We enjoy adapting our strategies to offer We believe in the equal value of every human being and the importance of respecting and honoring each individual; we know that change happens through people. every client the best solutions that are at the forefront of the industry.</Controls.Typography>
          </Controls.Grid>
          <Controls.Grid container display='flex' spacing={{xs:2,sm:5,md:5,lg:10}}  >
  {content.map((item, index) => (
    <Controls.Grid item   key={index} xs={12} sm={6} md={4} mt={3}>
      <Controls.Card
        sx={{
          backgroundColor: "rgba(242, 194, 26, 0.16)",
          height: "230px",
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
          <Controls.Typography variant="caption2" sx={{ fontSize: "24px",fontWeight:700 ,   }} my={2}>{item.text}</Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item>
          <Controls.Typography variant="caption2" sx={{ fontSize: '15px'   ,paddingX:"10px"}}>{item.descp}</Controls.Typography>
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
