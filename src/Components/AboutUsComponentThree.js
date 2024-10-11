import React from 'react'
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const AboutUsComponentThree = () => {

    const content = [
        "Together, we're going to make the future", "children where we are able to fulfill all", "Their requirements to keep them safefrom withered world",
        "We have already stepped out andstart changing the world", "Keeping safe them from war, inhumanity"
    ]

    const content2 = [
        { icon: "./assests/images/Group 3181.png", text: "Our Mission", descp: "Lorem ipsum dolor sit amet,consetetur elitr sed deim" },
        { icon: "./assests/images/Group 3180.png", text: "Our Vision", descp: "Lorem ipsum dolor sit amet,consetetur elitr sed deim" }
    ]

    const bar = [
        { text: "Donation", percentage: "75" },
        { text: "Medical Help", percentage: "90" }
    ]
    return (
        <>
            <Controls.Grid container justifyContent="center" mt={5}  >
                <Controls.Grid item xs={10} md={11} lg={10} sx={{ marginBottom: { sm: "80px", md: "0px" } }}  >
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
                                paddingRight: { md: "15px", lg: "0px" }, 
                            }}
                        >
                            <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
                                <Controls.Typography variant='caption2' sx={{ fontSize: "18px", }} >
                                    Welcome to charity
                                </Controls.Typography>
                                <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                            </Controls.Box>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption4'
                                    sx={{ 
                                        fontSize: { xs: "30px", sm: '32px', md: "28px", lg: "30px" },
                                        fontWeight: 700,
                                        lineHeight: '50px',
                                        textAlign: 'left',
                                        color: theme.palette.one.green
                                    }}
                                >
                                    Let Us Come Together
                                    To Make a Difference
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
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam et justo.
                                </Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} xs={12} my={2}>
                                {content2.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Controls.Grid item  xs={5} sx={{ backgroundColor: "#EDF7F5", padding: {xs:"10px",sm:"20px"} }}>
                                            <Controls.Grid item sx={{ display: "flex", }} gap={1}>
                                                <Controls.Box component='img' src={item.icon} width="20px" height="20px" />
                                                <Controls.Typography variant='caption2' sx={{ color: theme.palette.one.green, fontWeight: 600,   fontSize: { xs: "12px", sm: "14px", md: "12px", lg: "16px" } }}>{item.text}</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Typography variant='caption2' sx={{ fontSize: { xs: "10px", sm: "12px",lg:"14px" } }}>{item.descp}</Controls.Typography>
                                        </Controls.Grid>
                                    </React.Fragment>
                                ))}

                            </Controls.Grid>
                            <Controls.Grid item my={1}>
                                {bar.map((item, index) => (
                                    <>
                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} key={index}>
                                            <Controls.Typography variant='caption2'>{item.text}</Controls.Typography>
                                            <Controls.Typography variant='caption2'>{item.percentage}%</Controls.Typography>

                                        </Controls.Grid>
                                        <Controls.LinearProgress
                                            variant="determinate"
                                            value={item.percentage}
                                            sx={{
                                                height: '5px',
                                                marginY: '5px',
                                                backgroundColor: theme.palette.one.lightGreen,
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: theme.palette.one.green,
                                                }
                                            }}
                                        />
                                    </>

                                ))}
                            </Controls.Grid>
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
                                src="./assests/images/unsplash_AEaTUnvneik.png"
                                sx={{
                                    zIndex: 1,
                                    border: "10px solid #219D8078",
                                    width: { xs: "100%", sm: "310px", md: "340px", lg: "470px" },
                                    height: { xs: "100%", sm: "320px", md: "370px", lg: "350px" },
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
                                sx={{
                                    backgroundColor: theme.palette.one.main,
                                    position: "absolute",
                                    zIndex: 2,
                                    top: { xs: "75%", sm: "90%", md: "73%", lg: "80%" },
                                    left: { xs: "69%", sm: "60%", md: "68%", lg: "70%" },
                                    transform: "translate(-50%, -50%)",
                                    border: "10px solid #219D8078",
                                    width: { xs: "147px", sm: "280px", md: "290px", lg: "330px" },
                                    height: { xs: "130px", sm: "260px", md: "320px", lg: "250px" },
                                    display: {xs:"none",sm:"flex"},
                                    justifyContent: "center",
                                    alignItems: "center",
                                    overflow: "hidden",   
                                    // transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    // '&:hover': {
                                    //     transform: "scale(1.05)",  
                                    //     boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                                    // },
                                }}
                            >
                                <Controls.List
                                    sx={{
                                        listStyleType: "disc",
                                        width: "100%",
                                        height: "100%",
                                        padding: 0,
                                        margin: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        overflow: "hidden",   
                                        paddingLeft: "20px",
                                    }}
                                >
                                    {content.map((item, index) => (
                                        <Controls.ListItem
                                            sx={{
                                                display: 'list-item',
                                                fontSize: { sm: "12px", md: "14px" },
                                                color: index === 0 ? theme.palette.one.green : "black",
                                                fontWeight: 600,
                                                fontFamily: "Poppins",
                                                transition: "color 0.3s ease",   
                                            }}
                                            key={index}
                                        >
                                            {item}
                                        </Controls.ListItem>
                                    ))}
                                </Controls.List>
                            </Controls.Box>


                        </Controls.Grid>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default AboutUsComponentThree