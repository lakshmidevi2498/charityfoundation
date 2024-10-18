import React, { useState } from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import { useNavigate } from 'react-router-dom';

const ContactComponent = () => {
    const navigate = useNavigate()
    const [hoverIndex, setHoverIndex] = useState(null);
    const content = [
        "./assests/images/unsplash_LqOO5Ko0zSo.png",
        "./assests/images/unsplash_f_UejVoQu1c.png",
        "./assests/images/unsplash_f8ld5zt3a3k.png",
        "./assests/images/Rectangle 2965.png"
    ];
    const handleDonatePage = () => {
        navigate('/supportus/donate')
      }

    return (
        <>
            <Controls.Grid container justifyContent='center' alignItems='center' sx={{ position: 'relative', width: '100%', overflow: 'visible',height:"auto" }} mb={{xs:0,md:20,lg:15,xl:20}}>

                <Controls.Grid
                    item
                    xs={12}
                    sx={{
                        width: '100vw',
                        height: 500,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Controls.Box
                        component='img'
                        src='./assests/images/unsplash_6Q21PMaVkdI.png'
                        sx={{
                            objectFit: 'cover',
                            width: "100%",
                            height: "100%",
                            position: 'relative',
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
                            background: 'rgba(37, 42, 52, 0.74)',
                            zIndex: 2,
                        }}
                    />
                </Controls.Grid>


                <Controls.Grid
                    container 
                    sx={{
                        width: '100%',
                        padding: 2,
                        position: 'absolute',
                        zIndex: 3,
                        display:"block",alignItems:"center",textAlign:"center",justifyContent:"center", 
                    }}xs={12} md={11} lg={10}  mt={{xs:0,md:10}} 

                >
                    <Controls.Grid item   sx={{marginTop:{xs:0,md:'100px'}}} >
                    <Controls.Typography
                        variant="caption1"
                        sx={{
                            color: theme.palette.one.main,
                            fontSize: { xs: "20px", sm: "28px", lg: '34px' },
                            fontWeight: "bold",
                            textAlign: 'center',
                            lineHeight:{xs:"30px",sm:"40px",md:"50px",lg:"50px"},

                        }} mt={45}
                    >
                        The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer. Helping one person might not change the whole world, but it could change the world for one person. not change the whole world, but it could change the world for one person.
                    </Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item   marginTop='60px' marginBottom="30px" >
                        <Controls.Button variant='outlined' sx={{ color: theme.palette.one.main, border: "2px solid white" ,textTransform:'initial',paddingX:"50px",borderRadius:"10px"}} onClick={handleDonatePage}>Donate Now</Controls.Button>
                    </Controls.Grid> 
                    <Controls.Grid
                        item
                        xs={12} 
                        lg={9}  
                        justifyContent='center'
                        margin='auto'sx={{display:{xs:"none",md:"flex"}}}
                    >
                        {content.map((item, index) => (
                            <Controls.Grid
                                item
                                xs={3}
                                key={index}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                
                            >
                                <Controls.Card
                                    sx={{
                                        width: {xs:'170px',xl:"220px"},
                                        height: {xs:'200px',xl:"250px"},
                                        borderRadius: '10px',
                                        position: 'relative',
                                        transition: "transform 0.4s ease, background-color 0.3s ease",
                                        transformOrigin: "left",  
                                        "&:hover": {
                                          transform: " scaleX(1.07)",  
                                        },
                                    }}
                                >
                                    <Controls.CardActionArea
                                        onMouseEnter={() => setHoverIndex(index)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        <Controls.CardMedia
                                            component='img'
                                            image={item}
                                            alt="Image"
                                            sx={{
                                                width: {xs:'170px',xl:"220px"},
                                                height: {xs:'200px',xl:"250px"},
                                                borderRadius: '10px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        {hoverIndex === index && (
                                            <Controls.Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                                                    borderRadius: "10px",
                                                    padding: 1,
                                                }}
                                            >
                                                <Controls.Typography variant='caption1' sx={{ color: 'white', textAlign: 'center' }}>
                                                    Charity begins at home, but should not end there.
                                                </Controls.Typography>
                                                <Controls.Button
                                                    variant="outlined"
                                                    sx={{
                                                        color: 'white',
                                                        border: "2px solid white",
                                                        borderRadius: "20px",
                                                        textTransform: "initial",
                                                        fontWeight: "bold",
                                                        marginTop: "10px",
                                                        
                                                    }} onClick={handleDonatePage}
                                                >
                                                    Donate Now
                                                </Controls.Button>
                                            </Controls.Box>
                                        )}
                                    </Controls.CardActionArea>
                                </Controls.Card>
                            </Controls.Grid>
                        ))}
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    );
};

export default ContactComponent;
