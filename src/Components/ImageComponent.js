
import Controls from '../commons/controls';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AnimatedButton from './AnimatedButton';
import { TypeAnimation } from 'react-type-animation';
import theme from '../Utilities/Theme';

const ImageComponent = () => {
    const isMobile = useMediaQuery('(max-width: 769px)');
    return (
        <Controls.Grid
            container 
            justifyContent='center'
            sx={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <Controls.Box
                component='video'
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
                src='.\assests\images\We make a living by what we get, but we make a life by what we give. (1).mp4'
                autoPlay
                loop
                muted
                playsInline
            />

            <Controls.Grid
                item
                xs={12}
                sx={{
                    textAlign: 'center',
                    zIndex: 1,
                    margin: "auto",
                    alignItems: "center",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                {/* <Controls.Grid item xs={12} md={10} lg={10}>   */}
                {/* <Controls.Typography variant='caption1'
                    sx={{  
                        fontSize: {xs:"20px",sm:"40px",md:'56px',lg:"76px"},
                        fontWeight: 700,
                        lineHeight: {xs:"25px",sm:"45px",md:'74px',lg:"114px"},
                        color: "white",
                        mb: 3,
                    }}
                >
                    We make a living by what we get, 
                    but we make a life  by what we give.
                </Controls.Typography> */}
                <TypeAnimation
                    cursor={true}
                    sequence={[  'We make a living by what we get, but we make a life by what we give.',  10000,  1000,  'We make a living by what we get, but we make a life by what we give.',  10000,  1000,  ]}
                    wrapper="h1"
                    className="custom-text"
                    loop={Infinity}
                    style={{
                        color: theme.palette.one.main,
                        fontWeight: 'bold',
                        fontFamily: "Poppins",  
                    }}
                />


                {/* </Controls.Grid> */}

                <Controls.Typography variant='caption2'
                    sx={{
                        fontSize: { xs: "14px", sm: "25px", md: '28px', lg: "32px" },
                        fontWeight: 700,
                        lineHeight: { xs: "20px", sm: "25px", md: '30px', lg: "39.5px" },
                        color: "#F2C21A",
                        mb: 3,
                    }}
                >
                    {isMobile
                        ? "The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer."
                        : (
                            <>
                                The simplest acts of kindness are by far more powerful than
                                <br />
                                a thousand heads bowing in prayer.
                            </>
                        )
                    }
                </Controls.Typography>


                <AnimatedButton />
            </Controls.Grid>
        </Controls.Grid>
    );
};

export default ImageComponent;
