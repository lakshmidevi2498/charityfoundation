import React from 'react';
import Controls from '../commons/controls';
import { Box } from '@mui/material';
import theme from '../Utilities/Theme';

const WhatWeDoComponent = () => {
  const content = [
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/7a7366d0bb4f40d4772d45d8d817a1f9.gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/homegif.gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/doorgif.gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/cameragif.gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/staffgif.gif" },
    { text: "The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity", gif: "./assests/images/riskgif.gif" },
  ];

  return (
    <Controls.Grid container xs={12} sx={{ justifyContent: "center" }}>
      <Controls.Grid item xs={11} sx={{
        backgroundImage: 'url(./assests/images/bgimage.png)',
        backgroundSize: 'cover',
        position: 'relative',
        height: 'auto',
        justifyContent: "center",
        padding: 2,
      }}>
        {/* Overlay for background opacity */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.3)', 
            zIndex: 1
          }}
        />
        
        <Controls.Grid sx={{ position: "relative", zIndex: 2 }}>
          <Controls.Typography variant='h1' sx={{ margin: "auto", textAlign: "center" }}>What we do?</Controls.Typography>
          <Controls.Grid item sx={{ paddingX: "60px" }}>
            <Controls.Typography variant='body1' sx={{ margin: "auto", textAlign: "center", color: theme.palette.one.main }}>
              The greatness of a community is most accurately measured by the compassionate actions of its members. It is more blessed to give than to receive. A charity that costs nothing is worth nothing. Here about Charity:
            </Controls.Typography>
            <Controls.Grid container xs={12} justifyContent='center' mt={2}>
              {content.map((item, index) => (
                <Controls.Grid key={index} display='flex' xs={4} gap={2}>
                  <Controls.Grid>
                    <Box component='img' src={item.gif} alt='gif' sx={{ border: "2px solid green", borderRadius: "20px", backgroundColor: "white" }} />
                  </Controls.Grid>
                  <Controls.Grid>
                    <Controls.Typography variant='body1' sx={{ color: theme.palette.one.main }}>{item.text}</Controls.Typography>
                    <Controls.Button variant='contained' sx={{ color: theme.palette.one.main, backgroundColor: theme.palette.one.yellow, marginY: "10px", borderRadius: "20px" }}>Read More</Controls.Button>
                  </Controls.Grid>
                </Controls.Grid>
              ))}
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    </Controls.Grid>
  );
};

export default WhatWeDoComponent;
