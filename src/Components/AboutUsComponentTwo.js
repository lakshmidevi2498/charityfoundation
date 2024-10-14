import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const AboutUsComponentTwo = () => {
  return (
    <>
      <Controls.Grid container justifyContent="center" mt={5}   >
        <Controls.Grid item xs={10} md={11} lg={10}>
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
                textAlign: "justify"
              }}
            >
              <Controls.Grid item>
                <Controls.Typography variant='caption2' sx={{fontSize:{xs:'18px',sm:"20px"}}}>About us</Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item>
                <Controls.Typography variant='caption4'
                  sx={{ 
                    fontSize: {xs:"32px",md:'37px'},
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
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    textAlign: 'left'
                  }}
                >
                  Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.
                </Controls.Typography>
              </Controls.Grid>
              <br />
              <Controls.Grid item>
                <Controls.Typography variant='caption2'
                  sx={{ 
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    textAlign: 'left'
                  }}
                >
                  Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.
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
                  }}
                >
                  Read More
                </Controls.Button>
              </Controls.Grid>
              
            </Controls.Grid>

            
            <Controls.Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, md: 1 },  
                position: 'relative',
                marginBottom: '30px',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Controls.Box
                component="img"
                src="./assests/images/unsplash_iUYfRlO2inE (2).png"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  border: "10px solid #219D8078",
                  width: { xs: "180px",sm:"280px", md: "280px",lg:"300px" },
                  height: { xs: "160px", sm:"250px",md: "320px",lg:"350px" },
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
                  top: { xs: "75%", sm: "80%",md:"75%",lg:"75%" },
                  left: { xs: "69%", sm: "65%",md:"60%" ,lg:"55%"},
                  transform: "translate(-50%, -50%)",
                  border: "10px solid #219D8078",
                  width: { xs: "147px",sm:"220px", md: "270px",lg:"320px" },
                  height: { xs: "130px",sm:"200px", md: "260px",lg:"240px" },
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
