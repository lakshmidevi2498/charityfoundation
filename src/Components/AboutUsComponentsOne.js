import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const AboutUsComponentsOne = () => {
  return (
    <>
      <Controls.Grid container spacing={0} justifyContent='center'>
        <Controls.Grid item xs={12}>
          <Controls.Box
            src="./assests/images/unsplash_6ner152Cc6c.png"
            component="img"
            width="100%"
            
            sx={{ objectFit: "cover", position: "relative" ,zIndex:-1,height:"480px",
              
            }}
          />
          <Controls.Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#00000066',
              opactity:40,
              zIndex: 1, 
              height:{xs:"540px",sm:"560px"}, 
            }}
          />

          <Controls.Grid
            container
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: 'Lato',
              color: theme.palette.one.main,
              fontWeight: 700,
              lineHeight: {xs:"30px",sm:"50px",md:'76.8px'},
              zIndex:2,
              fontSize:{xs:"30px",sm:"48px"}
            }}item xs={11} sm={10} md={8}
          >
            <Controls.Typography variant=''  sx={{}}>
              The best way to find yourself is to lose   yourself in the 
              <Controls.Typography
                component="span" variant=''
                sx={{ color: theme.palette.one.yellow,  }}
              >
              &nbsp;service of others.
              </Controls.Typography>
            </Controls.Typography>
          </Controls.Grid>


        </Controls.Grid>


      </Controls.Grid>

    </>
  )
}

export default AboutUsComponentsOne