import React from 'react';
import Controls from '../commons/controls'; 
import theme from '../Utilities/Theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const WhatWeDoComponent = () => {
  const isMobile = useMediaQuery('(max-width: 769px)');

  const content = [
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/Affiliate (1).gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/home (1).gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/Blog (1).gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/Currency (2).gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/Team (2).gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/Chatbot (1).gif" },
  ];

  return (
    <Controls.Box sx={{ position: 'relative', height: 'auto', paddingY: "10px"  }}>

      <Controls.Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, #BDFFE5 43%, #0CCE82 200%)',
          zIndex: 1
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
          zIndex: 2
        }}
      />



      {/* <Controls.Box sx={{  border:"2px solid red"}} > */}
        <Controls.Grid  container sx={{   position: 'relative', zIndex: 3,}} >
          <Controls.Grid item sx={{ justifyContent: "center", margin: "auto", zIndex: 2 }}  xs={10} md={10}lg={9} xl={10}>
            <Controls.Typography variant='caption1' sx={{ margin: "auto", textAlign: "center", zIndex: 2, display:"block",fontSize: { xs: "2.2rem", sm: "2.5rem" } }}>What we do?</Controls.Typography>
            <Controls.Grid item sx={{}}>
              <Controls.Typography variant='caption1' sx={{ margin: "auto", textAlign: "center", color: theme.palette.one.main, fontSize: { xs: "1rem", sm: "1.5rem" } }}>
                The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity:
              </Controls.Typography>
              <Controls.Grid container justifyContent='center' spacing={2} mt={2}>
                {content.map((item, index) => (
                  <Controls.Grid key={index} item xs={12} sm={6} lg={4} >
                    {isMobile ? (
                      <Controls.Card sx={{ background: 'transparent', textAlign: 'center' ,}}>
                        <Controls.CardMedia
                          component="img"
                          src={item.gif}
                          alt='gif'
                          sx={{
                            border: "2px solid green",
                            borderRadius: "20px",
                            backgroundColor: "white",
                            width: { xs: "100px", sm: "120px", md: "200px" },
                            margin: "auto",
                            display: "block",
                            marginTop: { xs: "10px", md: "0px" }
                          }}
                        />

                        <Controls.CardContent>
                          <Controls.Grid item>
                          <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main }}>
                            {item.text}
                          </Controls.Typography>
                          </Controls.Grid>
                          <Controls.Button
                            variant='contained'
                            sx={{
                              color: theme.palette.one.main,
                              backgroundColor: theme.palette.one.yellow,
                              marginY: "10px",
                              borderRadius: "10px",
                              textTransform: "inherit",
                            }}
                          >
                            Read More
                          </Controls.Button>
                        </Controls.CardContent>
                      </Controls.Card>
                    ) : (
                      <Controls.Grid container spacing={0} >
                        <Controls.Grid item xs={4} xl={3} >
                          <Controls.Box
                            component='img'
                            src={item.gif}
                            alt='gif'
                            sx={{
                              border: "2px solid green",
                              borderRadius: "20px",
                              backgroundColor: "white",
                              width: "90px",
                            }}
                          />
                        </Controls.Grid>
                        <Controls.Grid item xs={7}  >
                        <Controls.Grid item>
                          <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.main }}>
                            {item.text}
                          </Controls.Typography>
                          </Controls.Grid>
                          <Controls.Button
                            variant='contained'
                            sx={{
                              color: theme.palette.one.main,
                              backgroundColor: theme.palette.one.yellow,
                              marginY: "10px",
                              borderRadius: "10px",
                              textTransform: "inherit",
                            }}
                          >
                            Read More
                          </Controls.Button>
                        </Controls.Grid>
                      </Controls.Grid>
                    )}
                  </Controls.Grid>
                ))}
              </Controls.Grid>

            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      {/* </Controls.Box> */}
    </Controls.Box>
  );
};

export default WhatWeDoComponent;
