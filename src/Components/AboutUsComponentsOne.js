import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const AboutUsComponentsOne = () => {
  return (
    <>
      <Controls.Grid container spacing={0} justifyContent='center'  >
       
          <Controls.Box
            src="./assests/images/unsplash_6ner152Cc6c.png"
            component="img"
            width="100vw"
            height="100vh"
            
            sx={{ objectFit: "cover", position: "relative" ,zIndex:-1 ,
              
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
              height:{xs:"596px",sm:"618px",xl:'1050px'}, 
            }}
          />

          <Controls.Grid
            container
            sx={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              // display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center", 
              color: theme.palette.one.main,
              fontWeight: 700,
              lineHeight: {xs:"30px",sm:"50px",md:'76.8px',xl:"120px"},
              zIndex:2,
              fontSize:{xs:"1.2rem",sm:"2.5rem",md:"3.5rem",lg:"4.3rem",xl:"5.8rem"},
              
            }} 
          >
            < Controls.Grid item  xs={10} sm={10} lg={9} xl={10}  >
            <Controls.Typography variant='caption3'  sx={{}}>
              The best way to find yourself is to lose   yourself in the 
              <Controls.Box
                component="span"  
                sx={{ color: theme.palette.one.yellow,  }}
              >
              &nbsp;service of others.
              </Controls.Box>
            </Controls.Typography>
          </Controls.Grid>
          </Controls.Grid>




      </Controls.Grid>

    </>
  )
}

export default AboutUsComponentsOne