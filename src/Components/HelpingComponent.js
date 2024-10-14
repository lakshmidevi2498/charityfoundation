import React, { useState } from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const HelpingComponent = () => {
    const [readMore, setReadMore] = useState(false)
    const content = [
        "./assests/images/Ellipse 381.png", "./assests/images/Ellipse 382.png", "./assests/images/Ellipse 385.png", "./assests/images/Ellipse 381 (1).png",
    ]

    const handleMore = () => {
        setReadMore(true)
    }

    const handleLess = () => {
        setReadMore(false)
    }
    return (
        <>
            <Controls.Grid container justifyContent='center'>
                <Controls.Grid item xs={12} md={10} paddingX="10px">
                    <Controls.Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Controls.Typography variant='caption1' sx={{ fontFamily: 'Montserrat', fontSize: "18px", }} >
                            Helping Story
                        </Controls.Typography>
                        <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                    </Controls.Box>
                    <Controls.Grid item>
                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.yellow, fontSize: {xs:"18px",sm:"22px"}, fontWeight: "bold", textTransform: "capitalize" }}>Helping one person might not change the whole world, but it could change the world for one person.</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid container spacing={10}>
                        <Controls.Grid item mt={2}>
                            {content.map((item, index) => (
                                <Controls.Card key={index} sx={{ display: "flex",justifyContent:"center", backgroundColor: theme.palette.one.cardbg, padding: {xs:"5px",sm:"25px"}, marginBottom: "10px" }}>
                                    <Controls.Grid container spacing={2}>


                                        <Controls.Grid
                                            item
                                            xs={12}
                                            sm={5} lg={4}
                                            sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}
                                        >
                                            <Controls.CardMedia
                                                component='img'
                                                src={item}
                                                sx={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "8px" }}
                                            />
                                        </Controls.Grid>


                                        <Controls.Grid item xs={12} sm={7} lg={8}  sx={{paddingRight:{lg:'20px'}}}>
                                            <Controls.CardContent>
                                                <Controls.Grid item sx={{textAlign:"justify", }}>
                                                    <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontWeight: "bold", fontSize: {xs:"14px",sm:"20px"} }}>
                                                        Helping one person might not change the whole world, but it could change the world for one person.
                                                    </Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"12px",sm:"18px"} }}>
                                                    With your support, we address children’s critical needs by working with parents, teachers, Anganwadi workers, communities, district and state level governments as well as the children themselves. We focus on changing behaviors and practices at the grassroots level and influencing public policy.
                                                </Controls.Typography>

                                                {readMore ? (
                                                    <>
                                                        <Controls.Grid item>
                                                            <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"12px",sm:"18px"}  }}>
                                                                With your support, we address children’s critical needs by working with parents, teachers, Anganwadi workers, communities, district and state level governments as well as the children themselves. We focus on changing behaviors and practices at the grassroots level and influencing public policy.
                                                            </Controls.Typography>
                                                            <Controls.Grid item my={2}>
                                                                <Controls.Button variant='contained' sx={{ backgroundColor: theme.palette.one.green }}>Donate Now</Controls.Button>
                                                            </Controls.Grid>
                                                        </Controls.Grid>

                                                        <Controls.Grid item sx={{ justifyContent: "center", alignItems: "center", display: "flex" }} onClick={handleLess} my={2}>
                                                            <Controls.Button variant='outlined' sx={{ color: theme.palette.one.green, border: "2px solid #107A66", textTransform: "capitalize", paddingX: { xs: "10px", sm: "20px" }, fontSize: { xs: "10px", sm: "15px" }, borderRadius: "20px" }}>
                                                                Read less Stories
                                                            </Controls.Button>
                                                        </Controls.Grid>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Controls.Grid item sx={{ justifyContent: "center", alignItems: "center", display: "flex" }} onClick={handleMore} my={2}>
                                                            <Controls.Button variant='outlined' sx={{ color: theme.palette.one.green, border: "2px solid #107A66", textTransform: "capitalize", paddingX: { xs: "10px", sm: "20px" }, fontSize: { xs: "10px", sm: "15px" }, borderRadius: "20px" }}>
                                                                Read more Stories here
                                                            </Controls.Button>
                                                        </Controls.Grid>
                                                    </>
                                                )}
                                            </Controls.CardContent>
                                        </Controls.Grid>
                                    </Controls.Grid>
                                </Controls.Card>
                            ))}
                        </Controls.Grid>
                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default HelpingComponent