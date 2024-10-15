import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const DonateImageComponent = () => {
  return (
    <>
      <Controls.Grid container justifyContent='center'>
        <Controls.Grid item xs={12} sx={{
          width: '100vw',
          height: 500,
          position: 'relative',
          overflow: 'hidden',
          justifyContent:"center",
          alignItems:"center"
        }}> 
          <Controls.Box
            component='img'
            src='./assests/images/unsplash_jEEYZsaxbH4.png'
            sx={{
              objectFit: 'cover',
              width: "100%",
              height: "100%",
              position: 'relative',
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
              background: 'rgba(37, 42, 52, 0.80)',
              zIndex: 2,
            }}
          />
 
          <Controls.Grid item sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',  
              textAlign: 'center', 
              margin:"auto", 
            }} xs={12} md={10} lg={8}>
            <Controls.Typography variant='caption1' sx={{ color:theme.palette.one.main, fontSize: {xs:"30px",sm:"37px",md:"45px"}, fontWeight: 'bold' }}>
              Invest in the future of India’s children and get rewarded with tax savings.
            </Controls.Typography>
          </Controls.Grid>

        </Controls.Grid>
      </Controls.Grid>
    </>
  )
}

export default DonateImageComponent
