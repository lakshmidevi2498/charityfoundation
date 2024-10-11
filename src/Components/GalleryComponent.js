import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const GalleryComponent = () => {
    const images = [
        './assests/images/Rectangle 3004.png',
        './assests/images/unsplash_mifNUoREqjA.png',
        './assests/images/unsplash_NLTbKZvl0us.png',
        './assests/images/Rectangle 3010.png',
        './assests/images/unsplash_Mn7Wv6-FfCM.png',
    ];

    return (
        <>
            <Controls.Grid container justifyContent='center'>
                <Controls.Grid item xs={12}>
                    <Controls.Grid item sx={{ textAlign: 'center' }} my={3}>
                        <Controls.Typography
                            variant='caption1'
                            sx={{
                                color: theme.palette.one.green,
                                fontWeight: 'bold',
                                fontSize: '30px',
                            }}
                        >
                            Gallery Shows Our Presence
                        </Controls.Typography>
                    </Controls.Grid>

                    {/* Container for Images */}
                    <Controls.Grid
                        container
                        justifyContent='center'
                        display='flex'
                        alignItems='center'
                        margin='auto'
                        sx={{ maxWidth: '100%' }} // Ensures the images take the full available space
                    >
                        {images.map((img, index) => (
                            <Controls.Grid
                                item
                                xs={12}
                                sm={4}
                                md={3}
                                lg={2.4}
                                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                key={index}
                            >
                                <Controls.Card
                                    sx={{
                                        width: '100%',
                                        height: '350px',
                                        border: '2px solid black',
                                        margin: 0,
                                        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                                        overflow: "hidden",
                                        transition: "transform 0.3s ease, background-color 0.3s ease",
                                        transformOrigin: "top",  
                                        "&:hover": {
                                          transform: "scaleY(1.09) ",  
                                        },

                                    }}
                                >
                                    <Controls.Box
                                        component='img'
                                        src={img}
                                        width='100%'
                                        height='100%'
                                        sx={{
                                            objectFit: 'cover',

                                        }}
                                    />
                                </Controls.Card>
                            </Controls.Grid>
                        ))}
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    );
};

export default GalleryComponent;
