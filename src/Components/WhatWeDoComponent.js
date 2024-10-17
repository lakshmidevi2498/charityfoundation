import React, { useState } from 'react';
import Controls from '../commons/controls'; 
import theme from '../Utilities/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const WhatWeDoComponent = () => {
  const isMobile = useMediaQuery('(max-width: 769px)');
  const [expanded, setExpanded] = useState(Array(6).fill(false));  

  const content = [
    { text: "In general, global health problems include issues of inequality in wealth, access, and infrastructure. We know how to solve these problems but have not yet fully gotten those solutions to the poorest and most vulnerable people.",more:"CARE, through the Right to Health strategy, aims to bring these solutions to the most vulnerable people in the world with the goal of supporting 50 million people to achieve their right to health. This includes 30 million women and girls’ sexual and reproductive health rights (SRHR) by 2030.", gif: "./assests/images/Affiliate (1).gif" ,title:"Health Care"},
    { text: " Earthquakes strike without warning, rapidly causing numerous deaths and injuries. When they occur on coastlines or mid-ocean, they can cause tsunamis, which leave additional devastation in their wake.",more:" In the aftermath of the largest quakes, widespread damage to residences and health facilities often means thousands of people are left homeless and in need of medical supplies and health care. Direct Relief partners with local organizations in affected countries to ensure those who are most vulnerable are able to receive the medication and care they need.",  gif: "./assests/images/home (1).gif" ,title:"Housing and Infrastructure" },
    { text: "Charity is dedicated to empowering children and creating a brighter future for them through quality education. We create sustainable change for India’s children by educating parents, teachers, communities, and children themselves to change behaviours and practices at the grassroots level.",more:" while collaborating with the government to influence public policy at a systemic level. As one of the most trusted NGOs working for education in India, our education programs align with the guidelines set forth by the Right to Education Act (2009) and the National Education Policy 2020.",  gif: "./assests/images/Blog (1).gif"  ,title:"Education"},
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity",more:"",  gif: "./assests/images/Currency (2).gif"  ,title:"Arts & Culture"},
    { text: " In charity work, human rights and social justice are central principles that guide efforts to create a more equitable and compassionate world. ",more:"Charities that focus on human rights and social justice aim to address systemic inequalities and ensure that every individual, regardless of their background or circumstances. The Economic Justice practice engages private sector actors, uses market-based approaches, puts women at the centre, and leverages Charity’s local expertise and networks to help women earn, save, and invest more. This work reduces poverty and delivers equity.",  gif: "./assests/images/Team (2).gif"  ,title:"Human Rights and Social Justice"},
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", more:"", gif: "./assests/images/Chatbot (1).gif" ,title:"Disaster Relief and Humanitarian Aid" },
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
                          <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main }}>
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
                          <Controls.Typography variant='caption1' sx={{  fontWeight:"bold",fontSize:"16px" }}>
                            {item.title}
                          </Controls.Typography>
                          </Controls.Grid>
                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main, }}>
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
