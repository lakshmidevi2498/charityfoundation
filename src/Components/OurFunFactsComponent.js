import React from 'react'
import Controls from '../commons/controls'
import { Divider } from '@mui/material'
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
            <Controls.Box sx={{ position: 'relative',paddingY:"30px" }}  >
                <Controls.Grid container xs={12} sx={{ justifyContent: "center",   }}>
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
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: 'url(./assests/images/bgimage.png)',
                            backgroundSize: 'cover',
                            opacity: 0.5,
                            zIndex: 1
                        }}
                    />
                    <Controls.Box sx={{ position: 'relative', zIndex: 3,   }}>
                        <Controls.Grid container sx={{ justifyContent: "center", margin: "auto", alignItems: "center",   }} item xs={11}>


                            <Controls.Grid item xs={12} sx={{ textAlign: "left", marginBottom: "20px" }}>
                                <Controls.Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Controls.Typography variant='body' sx={{ fontFamily: 'Montserrat', fontSize: "18px",   }} >
                                        Our Fun Facts
                                    </Controls.Typography>
                                    <Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                                </Controls.Box>
                                <Controls.Typography variant='h5' sx={{ fontFamily: 'Montserrat', fontSize: "22px", fontWeight: 700, color: '#252A34', marginY: "10px" }}>
                                    We Believe that We can Save<br /> More Life’s with you
                                </Controls.Typography>
                            </Controls.Grid>


                            <Controls.Grid container sx={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                {cards.map((item, index) => (
                                    <Controls.Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                                        <Controls.Card
                                            sx={{
                                                backgroundColor: theme.palette.one.green,
                                                paddingX: "15px",
                                                height: "300px",
                                                width: "217px",
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                paddingY: 0,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Controls.Box component="img" src={item.img} alt="image" sx={{ marginBottom: "15px" }} />
                                            <Controls.Typography variant="h4" sx={{ color: theme.palette.one.main }}>
                                                {item.Number}+
                                            </Controls.Typography>
                                            <Controls.Typography variant="body" sx={{ color: theme.palette.one.main }}>
                                                {item.text}
                                            </Controls.Typography>
                                        </Controls.Card>
                                    </Controls.Grid>
                                ))}
                            </Controls.Grid>

                        </Controls.Grid>
                    </Controls.Box>

                </Controls.Grid>
            </Controls.Box>



        </>
    )
}

export default OurFunFactsComponent