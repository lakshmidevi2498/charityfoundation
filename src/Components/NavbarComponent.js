import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'; 

const NavbarComponent = () => {
    const [activeLink, setActiveLink] = useState('Home');


    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    const links = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Get Involved', href: '#' },
        { name: 'Our work', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];
    const ButtonWrapper = styled('div')({
        position: 'relative',
    });

    const StyledButton = styled(Button)(({ theme }) => ({
        display: 'block',
        fontSize: '15px',
        lineHeight: '10px',
        fontWeight: 200,
        textTransform: 'inherit',
        padding: "15px",
        backgroundColor: '#ffc700',
        color: 'black',
        borderRadius: '50px',
        border: '0',
        cursor: 'pointer',
        position: 'relative',
        zIndex:1, // Ensure the button is positioned relative for the background

        '&:hover .button-bg': {
            filter: 'blur(10px)',
            transition: 'filter .4s ease-in',
        },
    }));

    const ButtonBg = styled('div')({
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(100% + 4px)',
        height: 'calc(100% + 4px)',
        background: 'linear-gradient(90deg,     #219D80 68.23%, #FFFFFF 100%)',
        backgroundSize: '600% 600%',
        borderRadius: '50px',
        animation: 'AnimateBorder 4s ease infinite',
        zIndex: 0,
        transform: 'translate(-2px, -2px)',
    });

    const GlobalStyles = () => {
        return (
            <style>{`
                @keyframes AnimateBorder {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        );
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#107A66" }}>
                    <Toolbar>

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item sx={{ display: "flex" }} gap={1}>
                                
                                {/* <img src="assests/images/Vector.png" alt="Vector Image" className="" width='30px' height="30px"/> */}
                                <Box component="img" src="assests/images/Vector.png" alt="Vector Image" width='30px' height="30px"mt={1}/>
                                <Typography variant="h5" component="div" mt={1}>
                                    Foundation
                                </Typography>
                            </Grid>


                            <Grid item>
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    {links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            color="inherit"
                                            underline="none"
                                            sx={{
                                                color: activeLink === link.name ? '#ffc700' : 'white',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#ffc700',
                                                }
                                            }}
                                            onClick={() => handleLinkClick(link.name)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </Box>
                            </Grid>


                            <Grid item>
                                <ButtonWrapper>
                                    <ButtonBg className="button-bg" />
                                    <StyledButton>
                                        Donate Now
                                    </StyledButton>
                                </ButtonWrapper>
                                <GlobalStyles />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default NavbarComponent;
