import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme';

const YourSupportComponent = () => {
  return (
    <>
    <Controls.Grid container justifyContent="center" my={{xs:5,xl:8}} >
                <Controls.Grid item xs={10} md={11} lg={10}sx={{ marginBottom: { sm: "80px", md: "0px" } }}  >
                    <Controls.Grid container sx={{ display: { xs: "block", md: "flex" }, justifyContent: "space-between", }}>


                        <Controls.Grid
                            item
                            xs={12}
                            md={6}
                            lg={5}
                            sx={{
                                order: { xs: 2, md: 1 }, 
                                justifyContent: "center",
                                alignItems: "center",
                                marginBlockStart: "auto",
                                paddingY: "40px",
                                textAlign: "start",
                                paddingRight: { md: "15px", lg: "0px" }
                            }}
                        >
                            
                                <Controls.Typography variant='caption4' sx={{ fontFamily: 'Montserrat', fontSize: "18px", }} >
                                    Get Involved
                                </Controls.Typography>
                                
                            <Controls.Grid item>
                                <Controls.Typography variant='caption4'
                                    sx={{ 
                                        fontSize: { xs: "30px", sm: '32px', md: "28px", lg: "30px",xl:"34px" },
                                        fontWeight: 700,
                                        lineHeight: '50px',
                                        textAlign: 'left',
                                        color: theme.palette.one.green
                                    }}
                                >
                                   Your Support Is Really Powerful
                                </Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption2'
                                    sx={{ 
                                        fontSize: {xs:"14px",lg:'16px',xl:"20px"},
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        textAlign: 'left'
                                    }}
                                >
                                    Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.
                                </Controls.Typography>
                            </Controls.Grid><br/>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption2'
                                    sx={{
                                        
                                        fontSize: {xs:"14px",lg:'16px',xl:"20px"},
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        textAlign: 'left'
                                    }}
                                >
                                    Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.
                                </Controls.Typography>
                            </Controls.Grid><br/>
                            {/* <Controls.Grid item>
                                <Controls.Typography
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        textAlign: 'left'
                                    }}
                                >
                                    Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return.
                                </Controls.Typography>
                            </Controls.Grid>
                           <br/> */}
                           <Controls.Button variant='contained' sx={{backgroundColor:theme.palette.one.green,borderRadius:"20px",textTransform:"inherit"}}>Read More</Controls.Button>
                        </Controls.Grid>


                        <Controls.Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                order: { xs: 1, md: 2 },
                                position: 'relative',
                                marginBottom: { xs: "0px", sm: '30px' },
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                            }}
                        >
                            <Controls.Box
                                component="img"
                                src="./assests/images/unsplash_iUYfRlO2inE.png"
                                sx={{
                                    zIndex: 1,
                                    border: "10px solid rgba(242, 194, 26, 0.18)",
                                    width: { xs: "100%", sm: "330px", md: "340px", lg: "420px",xl:"500px" },
                                    height: { xs: "100%", sm: "280px", md: "350px", lg: "430px",xl:"400px" },
                                    objectFit: "cover",
                                    margin: { xs: "10px auto", md: "0 40px" },
                                    display: "block",
                                    marginLeft: { xs: 0, sm: "80px", md: 0 },
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    '&:hover': {
                                        transform: "scale(1.07)",
                                        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                                    },
                                }}
                            />
                            <Controls.Box
                             component="img"
                                src="./assests/images/Rectangle 2882.png"
                                sx={{
                                    backgroundColor: theme.palette.one.main,
                                    position: "absolute",
                                    zIndex: 2,
                                    top: { xs: "75%", sm: "90%", md: "70%", lg: "80%",xl:"80%" },
                                    left: { xs: "69%", sm: "70%", md: "70%", lg: "70%",xl:"50%" },
                                    transform: "translate(-50%, -50%)",
                                    border: "10px solid rgba(242, 194, 26, 0.18)",
                                    width: { xs: "147px", sm: "280px", md: "270px", lg: "330px" ,xl:"380px"},
                                    height: { xs: "130px", sm: "220px", md: "280px", lg: "300px" ,xl:"320px"},
                                    display: {xs:"none",sm:"flex"},
                                    justifyContent: "center",
                                    alignItems: "center",
                                    objectFit: "cover",
                                    overflow: "hidden",   
                                    // transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    // '&:hover': {
                                    //     transform: "scale(1.05)",  
                                    //     boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                                    // },
                                }}
                            >
                               
                            </Controls.Box>


                        </Controls.Grid>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
    </>
  )
}

export default YourSupportComponent