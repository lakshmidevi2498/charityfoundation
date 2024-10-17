import React, { useState } from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const AboutUsComponentTwo = () => {
  const [more , setMore] = useState(false)
  return (
    <>
      <Controls.Grid container justifyContent="center" mt={5}    >
        <Controls.Grid item xs={10}  lg={9} xl={10}>
          <Controls.Grid container justifyContent="center" sx={{ display: { xs: "block", md: "flex" } }}>
            
            
            <Controls.Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 1, md: 2 },  
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                paddingY: "40px",
                textAlign: "justify",
                height:"auto"
              }}
            >
              <Controls.Grid item>
                <Controls.Typography variant='caption2' sx={{fontSize:{xs:'1.4rem',sm:"1.8rem",md:"1.4rem",lg:"1.8rem",xl:"2.2rem"}}}>About us</Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item mb={2}>
                <Controls.Typography variant='caption4'
                  sx={{ 
                    fontSize: {xs:"2rem",md:'1.7rem',lg:"2.1rem",xl:"2.6rem"},
                    fontWeight: 700,
                    lineHeight: '40px',
                    textAlign: 'left',
                    color: theme.palette.one.green
                  }}
                >
                  Your Support is Really Powerful.​
                </Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item>
                <Controls.Typography variant='caption2'
                  sx={{ 
                    fontSize: {xs:'1.2rem',md:"1.2rem",xl:"1.8rem"},
                    fontWeight: 500,
                    lineHeight: '24px',
                    textAlign: 'left'
                  }}
                > Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.
                  
                  </Controls.Typography>
                  </Controls.Grid>
                 <Controls.Grid item mt={1}>
                  <Controls.Typography variant='caption2'
                  sx={{ 
                    fontSize: {xs:'1.2rem',md:"1.2rem",xl:"1.8rem"},
                    fontWeight: 500,
                    lineHeight: '24px',
                    textAlign: 'left'
                  }}
                >
                   Its support is powerful because it has the ability to transform lives, strengthen communities, and create lasting positive change in society.
                   </Controls.Typography>
                    
                  </Controls.Grid>
                 
             
              {more ? <>
                <Controls.Grid item mt={1}>
                <Controls.Typography variant='caption2'
                  sx={{ 
                    fontSize: {xs:'1.2rem',md:"1.2rem",xl:"1.8rem"},
                    fontWeight: 500,
                    lineHeight: '24px',
                    textAlign: 'left'
                  }}
                >
                 It plays a critical role across all sectors of society by filling gaps in government services and addressing unmet needs. From healthcare to education, environmental conservation to social justice, charity transforms lives, uplifts communities, and tackles some of the world’s most pressing challenges.
                </Controls.Typography>
              </Controls.Grid>
                <Controls.Grid item mt={5}>
                <Controls.Button
                  variant="contained"
                  sx={{
                    color: theme.palette.one.main,
                    backgroundColor: theme.palette.one.green,
                    border: "1px solid lightgray",
                    borderRadius: "20px",
                    textTransform: "inherit"
                  }} onClick = {()=>setMore(false)}
                >
                  Read less
                </Controls.Button>
              </Controls.Grid>
              </> : <>
              <Controls.Grid item mt={5}>
                <Controls.Button
                  variant="contained"
                  sx={{
                    color: theme.palette.one.main,
                    backgroundColor: theme.palette.one.green,
                    border: "1px solid lightgray",
                    borderRadius: "20px",
                    textTransform: "inherit"
                  }} onClick = {()=>setMore(true)}
                >
                  Read More
                </Controls.Button>
              </Controls.Grid>
              </>}
              
              
            </Controls.Grid>

            
            <Controls.Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, md: 1 },  
                position: 'relative',
                // marginBottom: '30px',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' }, 
                height:{xs:"230px",sm:"280px",md:"500px",lg:"500px"}              }}
            >
              <Controls.Box
                component="img"
                src="./assests/images/unsplash_iUYfRlO2inE (2).png"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  border: "10px solid #219D8078",
                  width: { xs: "180px",sm:"280px", md: "280px",lg:"300px",xl:"480px" },
                  height: { xs: "160px", sm:"250px",md: "320px",lg:"350px",xl:"500px" },
                  objectFit: "cover",
                  marginRight:{xs:"50px",sm:"90px",md:" "},
                }}
              />
              <Controls.Box
                component="img"
                src="./assests/images/Rectangle 2882 (2).png"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  top: { xs: "75%", sm: "80%",md:"75%",lg:"75%",xl:"80%" },
                  left: { xs: "69%", sm: "65%",md:"60%" ,lg:"55%",xl:"45%"},
                  transform: "translate(-50%, -50%)",
                  border: "10px solid #219D8078",
                  width: { xs: "147px",sm:"220px", md: "270px",lg:"320px",xl:"380px" },
                  height: { xs: "130px",sm:"200px", md: "260px",lg:"240px",xl:"350px" },
                  objectFit: "cover"
                }}
              />
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    </>
  );
};

export default AboutUsComponentTwo;
