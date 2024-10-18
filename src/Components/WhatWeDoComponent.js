import React, { useState } from 'react';
import Controls from '../commons/controls'; 
import theme from '../Utilities/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const WhatWeDoComponent = () => {
  const isMobile = useMediaQuery('(max-width: 769px)');
  const [expanded, setExpanded] = useState(Array(6).fill(false));  

  const content = [
    { text: "Global health issues stem from inequalities in wealth, access, and infrastructure. Although solutions exist, they haven't reached the poorest and most vulnerable populations. ",more:"CARE's Right to Health strategy aims to support 50 million people in realizing their right to health, including 30 million women and girls' sexual and reproductive health rights (SRHR) by 2030.", gif: "./assests/images/Affiliate (1).gif" ,title:"Health Care"},
    { text: "Earthquakes occur suddenly, leading to significant fatalities and injuries. When they happen near coastlines or in the ocean, they can trigger tsunamis, resulting in further destruction.",more:" The aftermath of major quakes often leaves many homeless and in urgent need of medical supplies and care. Direct Relief collaborates with local organizations in impacted areas to provide essential medication and support to the most vulnerable populations.",  gif: "./assests/images/home (1).gif" ,title:"Housing and Infrastructure" },
    { text: " Charity is dedicated to empowering children through quality education, fostering sustainable change  for India’s children by educating parents,  teachers, and communities. ",more:" We collaborate with the government to influence public policy and ensure our programs align with the Right to Education Act (2009) and the National Education Policy 2020, establishing ourselves as a trusted NGO in India.",  gif: "./assests/images/Blog (1).gif"  ,title:"Education"},
    { text: "Incorporating arts and culture into charity fosters creativity, preserves heritage, & unites communities. Many charities use arts to promote education, healing, & social cohesion. ",more:" Organizations focusing on cultural preservation aim to safeguard at-risk traditions, languages, and art forms, ensuring that future generations can learn from their rich heritage. These charities may fund museum projects, cultural festivals, or community workshops that preserve traditional crafts and folklore.",  gif: "./assests/images/Currency (2).gif"  ,title:"Arts & Culture"},
    { text: "Human rights and social justice are key principles in charity work, driving efforts toward equity. These charities tackle systemic inequalities to ensure fair treatment for all.",more:" The economic justice practice focuses on engaging private sector actors and utilizing market-based approaches, centering on women's empowerment. By leveraging local expertise and networks, these charities help women earn, save, and invest more, reducing poverty and promoting equity.",  gif: "./assests/images/Team (2).gif"  ,title:"Human Rights and Social Justice"},
    { text: "Disaster relief and humanitarian aid are key to many charities, providing immediate and long-term support to those affected by natural disasters, conflicts, or crises.", more:" Charities are vital in responding to these emergencies, saving lives and helping restore dignity to those impacted.", gif: "./assests/images/Chatbot (1).gif" ,title:"Disaster Relief and Humanitarian Aid" },
  ];

  const handleToggle = (index) => {
    setExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; 
      return newState;
    });
  };

  return (
    <Controls.Box sx={{ position: 'relative', height: 'auto', paddingY: '10px' }}>
      <Controls.Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, #BDFFE5 43%, #0CCE82 200%)',
          zIndex: 1,
        }}
      />
      <Controls.Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(./assests/images/bgimage.png)',
          backgroundSize: 'cover',
          opacity: 0.3,
          zIndex: 2,
        }}
      />

      <Controls.Grid container sx={{ position: 'relative', zIndex: 3 }}>
        <Controls.Grid
          item
          sx={{ justifyContent: 'center', margin: 'auto', zIndex: 2 }}
          xs={10}
          md={10}
          lg={9}
          xl={10}
        >
          <Controls.Typography
            variant='caption1'
            sx={{ margin: 'auto', textAlign: 'center', zIndex: 2, display: 'block', fontSize: { xs: '2.2rem', sm: '2.5rem' } }}
          >
            What we do?
          </Controls.Typography>
          <Controls.Grid item>
            <Controls.Typography
              variant='caption1'
              sx={{ margin: 'auto', textAlign: 'center', color: theme.palette.one.main, fontSize: { xs: '1rem', sm: '1.2rem' } }}
            >
             Charity has historically played a crucial role in various sectors of society, addressing a wide range of issues and needs. Here’s how charity has been used to support different sectors of society, driving positive change across the board:
            </Controls.Typography>
            <Controls.Grid container justifyContent='center' spacing={2} mt={2}>
              {content.map((item, index) => (
                <Controls.Grid key={index} item xs={12} sm={6} lg={4}>
                  {isMobile ? (
                    <Controls.Card sx={{ background: 'transparent', textAlign: 'center' }}>
                      <Controls.CardMedia
                        component='img'
                        src={item.gif}
                        alt='gif'
                        sx={{
                          border: '2px solid green',
                          borderRadius: '20px',
                          backgroundColor: 'white',
                          width: { xs: '100px', sm: '120px', md: '200px' },
                          margin: 'auto',
                          display: 'block',
                          marginTop: { xs: '10px', md: '0px' },
                        }}
                      />
                      <Controls.CardContent>
                      <Controls.Grid item>
                          <Controls.Typography variant='caption1' sx={{  fontWeight:"bold",fontSize:"16px"  }}>
                            {item.title}
                          </Controls.Typography>
                          </Controls.Grid>
                        <Controls.Grid item>
                          <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main,fontSize:{xs:"12px",sm:"14px",} }}>
                            {item.text}
                          </Controls.Typography>
                        </Controls.Grid>

                        {expanded[index] ? (
                          <>
                            <Controls.Grid item>
                              <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main }}>
                                {item.more}
                              </Controls.Typography>
                            </Controls.Grid>
                            <Controls.Button
                              variant='contained'
                              sx={{
                                color: theme.palette.one.main,
                                backgroundColor: theme.palette.one.yellow,
                                marginY: '10px',
                                borderRadius: '10px',
                                textTransform: 'inherit',
                              }}
                              onClick={() => handleToggle(index)}
                            >
                              Read Less
                            </Controls.Button>
                          </>
                        ) : (
                          <Controls.Button
                            variant='contained'
                            sx={{
                              color: theme.palette.one.main,
                              backgroundColor: theme.palette.one.yellow,
                              marginY: '10px',
                              borderRadius: '10px',
                              textTransform: 'inherit',
                            }}
                            onClick={() => handleToggle(index)}
                          >
                            Read More
                          </Controls.Button>
                        )}
                      </Controls.CardContent>
                    </Controls.Card>
                  ) : (
                    <Controls.Grid container spacing={0}>
                      <Controls.Grid item xs={4} xl={3}>
                        <Controls.Box
                          component='img'
                          src={item.gif}
                          alt='gif'
                          sx={{
                            border: '2px solid green',
                            borderRadius: '20px',
                            backgroundColor: 'white',
                            width: '90px',
                          }}
                        />
                      </Controls.Grid>
                      <Controls.Grid item xs={7}>
                      <Controls.Grid item>
                          <Controls.Typography variant='caption1' sx={{  fontWeight:"bold",fontSize:{md:"18px",lg:"16px"} }}>
                            {item.title}
                          </Controls.Typography>
                          </Controls.Grid>
                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main,fontSize:{md:"17px",lg:"14px"} }}>
                          {item.text}
                        </Controls.Typography>

                        {expanded[index] ? (
                          <>
                            <Controls.Grid item>
                              <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main }}>
                                {item.more}
                              </Controls.Typography>
                            </Controls.Grid>
                            <Controls.Button
                              variant='contained'
                              sx={{
                                color: theme.palette.one.main,
                                backgroundColor: theme.palette.one.yellow,
                                marginY: '10px',
                                borderRadius: '10px',
                                textTransform: 'inherit',
                              }}
                              onClick={() => handleToggle(index)}
                            >
                              Read Less
                            </Controls.Button>
                          </>
                        ):(
                          <Controls.Grid item>

                          <Controls.Button
                          variant='contained'
                          sx={{
                            color: theme.palette.one.main,
                            backgroundColor: theme.palette.one.yellow,
                            marginY: '10px',
                            borderRadius: '10px',
                            textTransform: 'inherit',
                          }}
                          onClick={() => handleToggle(index)}
                        >
                          Read More
                        </Controls.Button>
                        </Controls.Grid>
                        )}
                        
                      </Controls.Grid>
                    </Controls.Grid>
                  )}
                </Controls.Grid>
              ))}
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    </Controls.Box>
  );
};

export default WhatWeDoComponent;
