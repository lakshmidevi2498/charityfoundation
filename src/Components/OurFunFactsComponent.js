import React from 'react'
import Controls from '../commons/controls' 
import theme from '../Utilities/Theme'

const OurFunFactsComponent = () => {

  const cards = [
    { img: "./assests/images/Group 3236.png", Number: "4597", text: "People Raised" },
    { img: "./assests/images/Group 3237.png", Number: "8945", text: "Volunteer " },
    { img: "./assests/images/Group 3238.png", Number: "10M", text: "Poor People Saved" },
    { img: "./assests/images/Group 3239.png", Number: "100", text: "Country Member" }
  ]
  return (
    <>
      <Controls.Box   position= 'relative'paddingY= "30px" >
        <Controls.Grid container xs={12} sx={{ justifyContent: "center", }} item >
          <Controls.Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(white 70%)',
              zIndex: 1
            }}
          />
          <Controls.Box
          component='img'
          src="./assests/images/header-bg 2.png"
          height="480px"
            sx={{
              height:"100%",
              width:"100%",
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0, 
              objectFit: 'cover',
              opacity: 0.5,
              zIndex: 1
            }}
          />
          <Controls.Box sx={{ position: 'relative', zIndex: 3, }}>
            <Controls.Grid container sx={{ justifyContent: "center", margin: "auto", alignItems: "center", }} item xs={12}  >

              <Controls.Grid item xs={10} md={11} lg={10} sx={{ }} >
                <Controls.Grid item xs={12} sx={{ textAlign: "left", marginBottom: "20px",paddingX:{sm:"8px",lg:"10px" }}} >
                  <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
                    <Controls.Typography variant='caption4' sx={{  fontSize: "18px", }} >
                      Our Fun Facts
                    </Controls.Typography>
                    <Controls.Divider sx={{ flexBasis: '50px', height: '2px', width: "50px" }} />
                  </Controls.Box>
                  <Controls.Typography variant='caption4' sx={{   fontSize: { xs: "18px", sm: "22px" }, fontWeight: 700, color: '#252A34', marginY: "10px" }}>
                    We Believe that We can Save<br /> More Life’s with you
                  </Controls.Typography>
                </Controls.Grid>
              </Controls.Grid>
              <Controls.Grid xs={10} sm={10} md={11} lg={10}item  >
                <Controls.Grid
                  container
                  sx={{ justifyContent: "center", textAlign: "center", alignItems: "center", }} 
                >
                  {cards.map((item, index) => (
                    <Controls.Grid
                      item
                      xs={12} sm={6} md={4} lg={3}
                      key={index}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Controls.Card
                        sx={{
                          backgroundColor: theme.palette.one.green, 
                          height: "300px",
                          width: {xs:"307px",sm:"300px",md:"300px",lg:"247px"},
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          transition: "transform 0.3s ease, box-shadow 0.3s ease",
                          marginBottom:"10px",
                          '&:hover': {
                            transform: "scale(1.07)",
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                          },
                        }}
                      >
                        <Controls.Box
                          component="img"
                          src={item.img}
                          alt="image"
                          sx={{ marginBottom: "15px" }}
                        />
                        <Controls.Typography
                          variant='caption4'
                          sx={{ color: theme.palette.one.main }}
                        >
                          {item.Number}+
                        </Controls.Typography>
                        <Controls.Typography
                          variant='caption4'  
                          sx={{ color: theme.palette.one.main }}
                        >
                          {item.text}
                        </Controls.Typography>
                      </Controls.Card>
                    </Controls.Grid>
                  ))}
                </Controls.Grid>
              </Controls.Grid>


            </Controls.Grid>
          </Controls.Box>

        </Controls.Grid>
      </Controls.Box>



    </>
  )
}

export default OurFunFactsComponent