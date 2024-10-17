import React, { useState } from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme';

const YourSupportComponent = () => {
    const [more, setMore] = useState(false)
    return (
        <>
            <Controls.Grid container justifyContent="center" my={{ xs: 5, xl: 8 }} height="auto">
                <Controls.Grid item xs={10}  lg={9} xl={10}sx={{ marginBottom: { sm: "80px", md: "0px" } }}   >
                    <Controls.Grid container sx={{ display: { xs: "block", md: "flex" }, justifyContent: "space-between", }} >


                        <Controls.Grid

                            item
                            xs={12}
                            md={6}
                            lg={5}
                            sx={{
                                order: { xs: 2, md: 1 },
                                justifyContent: "center",
                                alignItems: "center",
                                // marginBlockStart: "auto",
                                paddingY: "40px",
                                textAlign: "start",
                                paddingRight: { md: "15px", lg: "0px" },
                                height: "auto",
                                marginY: "auto", 
                            }}
                        >

                            <Controls.Typography variant='caption4' sx={{ fontFamily: 'Montserrat', fontSize: "18px", }} >
                                Get Involved
                            </Controls.Typography>

                            <Controls.Grid item>
                                <Controls.Typography variant='caption4'
                                    sx={{
                                        fontSize: { xs: "30px", sm: '32px', md: "28px", lg: "30px", xl: "34px" },
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
                                        fontSize: { xs: "14px", lg: '16px', xl: "20px" },
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        textAlign: 'left'
                                    }}
                                >
                                    Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return. Your generosity has the power to change lives and uplift communities.
                                </Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item mt={1}>
                                <Controls.Typography variant='caption2'
                                    sx={{

                                        fontSize: { xs: "14px", lg: '16px', xl: "20px" },
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        textAlign: 'left'
                                    }}
                                >
                                    By making a donation to Charity, you are directly contributing to our mission of is to empower individuals and communities in need by providing essential resources, support, and opportunities for growth. </Controls.Typography>
                            </Controls.Grid>
                            {more ? <>
                                <Controls.Grid item mt={1}>
                                    <Controls.Typography variant='caption2'
                                        sx={{
                                            fontSize: { xs: "14px", lg: '16px', xl: "20px" },
                                            fontWeight: 500,
                                            lineHeight: '24px',
                                            textAlign: 'left'
                                        }}
                                    >
                                        Charity is the act of giving help, typically in the form of money, goods, or time, to those in need. It involves voluntary actions motivated by a desire to assist others without expecting anything in return. Its support is powerful because it has the ability to transform lives, strengthen communities, and create lasting positive change in society.
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
                                        }} onClick={() => setMore(false)}
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
                                        }} onClick={() => setMore(true)}
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
                                order: { xs: 1, md: 2 },
                                position: 'relative',
                                marginBottom: { xs: "0px", sm: '30px',xl:"40px" },
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                height: { xs: "200px", sm: "300px", md: "560px", lg: "550px" }

                            }}
                        >
                            <Controls.Box
                                component="img"
                                src="./assests/images/unsplash_iUYfRlO2inE.png"
                                sx={{
                                    zIndex: 1,
                                    border: "10px solid rgba(242, 194, 26, 0.18)",
                                    width: { xs: "100%", sm: "330px", md: "340px", lg: "420px", xl: "800px" },
                                    height: { xs: "100%", sm: "280px", md: "350px", lg: "400px", xl: "420px" },
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
                                    top: { xs: "75%", sm: "90%", md: "70%", lg: "80%", xl: "80%" },
                                    left: { xs: "69%", sm: "70%", md: "70%", lg: "68%", xl: "75%" },
                                    transform: "translate(-50%, -50%)",
                                    border: "10px solid rgba(242, 194, 26, 0.18)",
                                    width: { xs: "147px", sm: "280px", md: "270px", lg: "330px", xl: "580px" },
                                    height: { xs: "130px", sm: "220px", md: "280px", lg: "300px", xl: "380px" },
                                    display: { xs: "none", sm: "flex" },
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