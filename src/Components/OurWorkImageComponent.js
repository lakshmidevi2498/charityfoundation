import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const OurWorkImageComponent = () => {
    return (
        <>
            <Controls.Grid container justifyContent='center' alignItems='center'>
                <Controls.Grid 
                    item 
                    xs={12} 
                    sx={{
                        width: '100vw',
                        height: {xs:"100vh",sm:"100vh"},  
                        position: 'relative', 
                        overflow: 'hidden',
                    }}
                >
                    <Controls.Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(#0F0E0E80 50%)',
              zIndex: 2,
            }}
          />
                    <Controls.Box 
                        component='img' 
                        src='./assests/images/unsplash_8ldqRkOk5oo.png' 
                        sx={{  
                            objectFit: 'cover', 
                            width: "100%",
                            height: "100%", 
                            position: 'absolute',
                            zIndex: 1
                        }}
                    />
                    <Controls.Grid 
                        container   
                        item 
                        xs={12} 
                        sm={10} 
                        md={8} 
                        lg={7}
                        sx={{
                            justifyContent: "center",  
                            alignItems: "center",  
                            textAlign: "center",
                            position: 'absolute',  
                            top: '50%',  
                            left: '50%',  
                            transform: 'translate(-50%, -50%)',  
                            zIndex: 3  
                        }}
                    >
                        <Controls.Typography 
                            variant='caption1' 
                            sx={{
                                color: theme.palette.one.main,
                                fontSize: {xs:"20px",sm:"35px",md:"40px",lg:"45px"},
                                fontWeight: 700
                            }}
                        >
                            The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer.
                        </Controls.Typography>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    );
};

export default OurWorkImageComponent;
