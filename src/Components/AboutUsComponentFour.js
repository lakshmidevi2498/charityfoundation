import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const AboutUsComponentFour = () => {

    const cards = [
        { icon: "./assests/images/Group 3268.png", h1: "Food & Homeless Charity", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy tempor invidunt ut labore et dolore magna aliquyam  erat, sed diam voluptua. At vero eos et accusam et justo....", points: ["Join your hands with us for a better life", "Lets Do Tte Right Thing Now",] },
        { icon: "./assests/images/Group 3269.png", h1: "Make a Donation", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy tempor invidunt ut labore et dolore magna aliquyam  erat, sed diam voluptua. At vero eos et accusam et justo....", points: ["Join your hands with us for a better life", "Lets Do Tte Right Thing Now", "Lorem Ipsum Dolor  Sit Amit"] },
        { icon: "./assests/images/Group 3270.png", h1: "Non Profit NGO", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy tempor invidunt ut labore et dolore magna aliquyam  erat, sed diam voluptua. At vero eos et accusam et justo....", points: ["Join your hands with us for a better life", "Lets Do Tte Right Thing Now", "Lorem Ipsum Dolor  Sit Amit", "Chideren Where We Are Able To Fulfill All"] }

    ]
    return (
        <>
            <Controls.Grid container justifyContent='center' my={5}>
                <Controls.Grid item xs={10} sx={{ justifyContent: "center" }}>
                    <Controls.Grid item >
                        <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} gap={2}>
                            <Controls.Typography variant='body' sx={{ fontFamily: 'Montserrat', fontSize: "18px", }} >
                                About
                            </Controls.Typography>
                            <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                        </Controls.Box>
                        <Controls.Typography sx={{ color: theme.palette.one.green, fontFamily: "lato", fontWeight: 700, fontSize: "30px" }}>Our Features</Controls.Typography>

                    </Controls.Grid>
                    <Controls.Grid container justifyContent="center" spacing={2} >
                        {cards.map((item, index) => (
                            <Controls.Grid item key={index} xs={12} sm={6} md={4}  >
                                <Controls.Card 
                                    sx={{
                                        backgroundColor: index === 0 ? theme.palette.one.green : "#EDF7F5",
                                        color: index === 0 ? theme.palette.one.main : "#252A34",
                                        padding: {xs:"25px",sm:"20px"},
                                        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", 
                                        overflow: "hidden",  
                                        transition: "transform 0.3s ease, background-color 0.3s ease",
                                        transformOrigin: "top",
                                        "&:hover":{backgroundColor:theme.palette.one.green, transform: "scaleY(1.07)", color:theme.palette.one.main}
                                    }}
                                >
                                    <Controls.Box
                                        component="img"
                                        src={item.icon}
                                        width="100px"
                                        height="100px"
                                    />
                                    <Controls.CardContent sx={{ textAlign: "start" ,padding:"5px"}}>
                                        <Controls.Typography
                                            sx={{ fontSize: "18px", fontWeight: "bold", fontFamily: "lato" }}
                                        >
                                            {item.h1}
                                        </Controls.Typography>
                                        <Controls.Typography sx={{ fontSize: "14px", fontFamily: "poppins" }} my={2}>
                                            {item.descp}
                                        </Controls.Typography>
                                        <Controls.List sx={{ listStyleType: "numbers",paddingLeft:"10px" ,}}>
                                            {item.points.map((point, innerindex) => (
                                                <Controls.ListItem
                                                    key={innerindex}
                                                    sx={{ display: "list-item", fontFamily: "poppins" ,padding:"5px"}}
                                                >
                                                    {point}
                                                </Controls.ListItem>
                                            ))}
                                        </Controls.List>
                                    </Controls.CardContent>
                                </Controls.Card>
                            </Controls.Grid>
                        ))}
                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default AboutUsComponentFour