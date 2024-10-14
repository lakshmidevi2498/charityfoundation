
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
                width: '100%',
                height: '100vh',
                overflowX: 'hidden',
                overflowY: 'hidden',
            }}
        >
            <Controls.Box
                component='video'
                sx={{
                    width: '100%',
                    height: '100vh',
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
                    margin: 'auto',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100vh', 
                    boxSizing: 'border-box',
                }}
            >
                <Controls.Grid
                    item
                    xs={11} sm={10} md={11} lg={10}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        height: '100%',
                    }}
                >
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'We make a living by what we get, but we make a life by what we give.',
                            10000,
                            1000,
                            'We make a living by what we get, but we make a life by what we give.',
                            10000,
                            1000,
                        ]}
                        wrapper="h1"
                        className="custom-text"
                        loop={Infinity}
                        style={{
                            color: theme.palette.one.main,
                            fontWeight: 'bold',
                            fontFamily: 'Poppins',
                        }}
                    />
                    <Controls.Typography
                        variant="caption2"
                        sx={{
                            fontSize: { xs: '14px', sm: '25px', md: '28px', lg: '32px' },
                            fontWeight: 700,
                            lineHeight: { xs: '20px', sm: '25px', md: '30px', lg: '39.5px' },
                            color: '#F2C21A',
                            textAlign: 'center',
                        }}
                    >
                        {isMobile ? (
                            "The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer."
                        ) : (
                            <>
                                The simplest acts of kindness are by far more powerful than
                                <br />
                                a thousand heads bowing in prayer.
                            </>
                        )}
                    </Controls.Typography>
                    <Controls.Grid item mt={5}>
                        <AnimatedButton />
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>

        </Controls.Grid>
    );
};

export default ImageComponent;
