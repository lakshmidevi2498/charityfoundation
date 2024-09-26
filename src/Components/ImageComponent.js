import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const ImageComponent = () => {
    return (
        <Grid 
            container 
            xs={12} 
            justifyContent='center' 
            sx={{ 
                position: 'relative', 
                width: '100vw', // Ensure full width
                height: '100vh', // Ensure full height
                overflow: 'hidden' // Prevent overflow
            }}
        >
            <Box
                component='img'
                sx={{
                    width: '100%', 
                    height: '100%',  
                    objectFit: 'cover',  
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mEo-mqbBxbPddwcolCIa506d9jRZSXsCzA&s'
                alt='image'
            />

            <Grid 
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
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '76px',
                        fontWeight: 700,
                        lineHeight: '114px',
                        color: "white",
                        mb: 3,
                    }}
                >
                    We make a living by what we get,
                    <br />
                    but <Box component='span' sx={{ color: '#107A66' }}>we make a life</Box> by what we give.
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontSize: '32px',
                        fontWeight: 700,
                        lineHeight: '39.01px',
                        color: "#F2C21A",
                        mb: 3,
                    }}
                >
                    The simplest acts of kindness are by far more powerful than
                    <br /> a thousand heads bowing in prayer.
                </Typography>

                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: "#107A66",
                        color: "white",
                        textTransform: "inherit",
                        borderRadius: "20px",
                        border: "1px solid white",
                    }}
                >
                    Donate now
                </Button>
            </Grid>
        </Grid>
    );
};

export default ImageComponent;
