import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const SpinnerComponent = () => {
    return (
        <>
            <Controls.Grid container justifyContent='center' my={4}>
                <Controls.Grid item xs={12} md={10} lg={9} xl={10} sx={{ justifyContent: "space-between", display: {xs:"block",md:"flex"} }} spacing={10}  >
                    <Controls.Grid item xs={11} sm={10} md={6}   sx={{justifyContent:"center",margin:"auto"}}>
                        <Controls.Grid>
                            <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontSize: {xs:"20px",sm:"25px",xl:"45px"}, fontWeight: "bold", textTransform: 'initial' }}>Our approach is modelled around bringing change at all levels :</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid>
                            <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"14px",sm:"18px",md:"16px",lg:"18px",xl:"30px"}, lineHeight: {xs:"20px",sm:"35px",md:"30px",lg:"35px",xl:"40px"} }}>Our approach is designed to create meaningful change at every level—individual, community, and systemic. We believe that by addressing immediate needs while also tackling the root causes of societal challenges, we can bring about long-lasting transformation. Whether through direct support, education, or advocacy, our goal is to uplift individuals and empower communities, creating a ripple effect of positive change.</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid>
                            <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"14px",sm:"18px",md:"16px",lg:"18px",xl:"30px"}, lineHeight:{xs:"20px",sm:"35px"} }}>
                            Charity organizations, often called non-profits or NGOs, work to deliver aid and support to vulnerable populations. Whether through fundraising, volunteering, or advocacy, charity aims to create a positive impact and promote the welfare of others.</Controls.Typography>
                        </Controls.Grid>
                    </Controls.Grid>
                    <Controls.Grid item xs={12} md={6} sx={{ display: "block", alignItems: "center", textAlign: "center", height: "auto", position: "relative", margin:"auto"}}>
                         
                        <Controls.Box
                            component='img'
                            src='./assests/images/Ellipse 384.png'
                            sx={{
                                width: {xs:"130px",lg:"110px",xl:"230px"},
                                height: {xs:"130px",lg:"110px",xl:"230px"},
                                position: "absolute",
                                zIndex: 2,
                                top: {sm:"0%",md:"-17%",lg:"-1%",xl:"-3%"}, 
                                 left:{sm:"17%",md:"1%", lg:"8%",xl:"11%"},
                                 display:{xs:"none",sm:"block"}  
                            }}
                        />

                         
                        <Controls.Box
                            component='img'
                            src='./assests/images/Ellipse 385.png'
                            sx={{
                                width: {xs:"130px",lg:"110px",xl:"230px"},
                                height: {xs:"130px",lg:"110px",xl:"230px"},
                                position: "absolute",
                                zIndex: 2,
                                top: {sm:"0%",md:"-17%",lg:"-1%",xl:"-3%"},
                                right: {sm:"17%",md:"1%", lg:"8%",xl:"11%"},
                                display:{xs:"none",sm:"block"} 
                            }}
                            // border='2px solid red'
                        />

                         
                        <Controls.Box
                            component='img'
                            src='./assests/images/Ellipse 386.png'
                            sx={{
                                width: {xs:"130px",lg:"110px",xl:"230px"},
                                height: {xs:"130px",lg:"110px",xl:"230px"},
                                position: "absolute",
                                zIndex: 2,
                                bottom: {sm:"0%",md:"-17%",lg:"-1%",xl:"-3%"},
                                left: {sm:"17%",md:"1%", lg:"8%",xl:"11%"},
                                display:{xs:"none",sm:"block"} 
                            }}
                        />

                        
                        <Controls.Box
                            component='img'
                            src='./assests/images/Ellipse 387.png'
                            sx={{
                                width: {xs:"130px",lg:"110px",xl:"230px"},
                                height: {xs:"130px",lg:"110px",xl:"230px"},
                                position: "absolute",
                                zIndex: 2,
                                bottom: {sm:"0%",md:"-17%",lg:"-1%",xl:"-3%"}, 
                                right: {sm:"17%",md:"1%", lg:"8%",xl:"11%"},
                                display:{xs:"none",sm:"block"} 
                            }}
                            // border='2px solid red'
                        />


                        
                        <Controls.Box
                            component='img'
                            src='./assests/images/spineer.gif'
                            sx={{
                                width: {xs:"320px",lg:"290px",xl:"490px"},
                                height: {xs:"320px",lg:"290px",xl:"490px"},
                                position: "relative",
                                zIndex: 1
                            }}
                            autoPlay
                            loop
                            muted
                            playsInline
                            // border='2px solid red'
                        />

                        
                        <Controls.Box
                            component='img'
                            src='./assests/images/Ellipse 383.png'   
                            sx={{
                                width: {xs:"130px",lg:"120px",xl:"230px"},
                                height: {xs:"130px",lg:"120px",xl:"230px"},
                                position: "absolute",
                                zIndex: 3,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }}
                        />
                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default SpinnerComponent