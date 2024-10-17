import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const AboutUsComponentFour = () => {

    const cards = [
        { icon: "./assests/images/Group 3268.png", h1: "Food & Homeless Charity", descp: "To create the right solutions to end hunger, we must understand the people and communities facing hunger. Every year, Charity conducts research like the Map the Meal Gap study to learn more about food insecurity in local communities.", points: ["Join your hands with us for a better life", "Lets Do Tte Right Thing Now",] },
        { icon: "./assests/images/Group 3269.png", h1: "Make a Donation", descp: "Your generosity has the power to change lives and uplift communities. By making a donation to Charity, you are directly contributing to our mission of is to empower individuals and communities in need by providing essential resources, support, and opportunities for growth.", points: ["Transform Lives", "  Support Sustainable Solutions", "Create Hope"] },
        { icon: "./assests/images/Group 3270.png", h1: "Non Profit NGO", descp: "A non-profit NGO for charity refers to a non-governmental organization that operates without the intention of making a profit and is specifically focused on charitable activities. These organizations aim to provide assistance, support, and resources to individuals and communities in need, often addressing various social issues", points: ["Charitable Purpose", " Non-Profit Status", "Community Focus", "Funding Sources"] }

    ]
    return (
        <>
            <Controls.Grid container justifyContent='center' my={5}>
                <Controls.Grid item xs={10}  lg={9} xl={10}sx={{ justifyContent: "center" }}>
                    <Controls.Grid item >
                        <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} gap={2}>
                            <Controls.Typography variant='caption4' sx={{ fontFamily: 'Montserrat', fontSize: "18px", }} >
                                About
                            </Controls.Typography>
                            <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                        </Controls.Box>
                        <Controls.Typography variant='caption4' sx={{ color: theme.palette.one.green, fontFamily: "lato", fontWeight: 700, fontSize: "30px" }}>Our Features</Controls.Typography>

                    </Controls.Grid>
                    <Controls.Grid container justifyContent="center" spacing={{xs:5,md:2,xl:5}} >
                        {cards.map((item, index) => (
                            <Controls.Grid item key={index} xs={12} sm={6} md={4}  height="auto">
                                <Controls.Card 
                                    sx={{
                                        backgroundColor: index === 0 ? theme.palette.one.green : "#EDF7F5",
                                        color: index === 0 ? theme.palette.one.main : "#252A34",
                                        paddingTop: {xs:"25px",sm:"10px"},
                                        paddingX:{xs:"15px",sm:"20px"},
                                        height:"auto",
                                        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", 
                                        overflow: "hidden",  
                                        transition: "transform 0.3s ease, background-color 0.3s ease",
                                        transformOrigin: "top",
                                        "&:hover":{backgroundColor:theme.palette.one.green, transform: "scaleY(1.07)", color:theme.palette.one.main,height:"auto",}
                                    }}
                                >
                                    <Controls.Box
                                        component="img"
                                        src={item.icon}
                                        width="100px"
                                        height="100px"
                                    />
                                    <Controls.CardContent sx={{ textAlign: "start" ,padding:"5px"}}>
                                        <Controls.Grid item>
                                        <Controls.Typography variant='caption4'
                                            sx={{ fontSize: "18px", fontWeight: "bold", fontFamily: "lato" }}
                                        >
                                            {item.h1}
                                        </Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Typography variant='caption4' sx={{ fontSize: "14px", fontFamily: "poppins" }} my={2}>
                                            {item.descp}
                                        </Controls.Typography>
                                        <Controls.List sx={{ listStyleType: "numbers",paddingLeft:"10px" , }}>
                                            {item.points.map((point, innerindex) => (
                                                <Controls.ListItem
                                                    key={innerindex}
                                                    sx={{ display: "list-item", fontFamily: "poppins" ,padding:"2px"}}
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