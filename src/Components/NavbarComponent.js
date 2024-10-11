import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';  
import { NavLink } from 'react-router-dom';  
import useMediaQuery from '@mui/material/useMediaQuery';
import Controls from '../commons/controls';
import AnimatedButton from './AnimatedButton';

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');  

  const handleLinkClick = (link) => {
    setActiveLink(link); 
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
   
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      alert("cvbnm")
      return;
    }
    setDrawerOpen(open);
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Get Involved', href: '/getinvolved' },
    { name: 'Our Work', href: '/ourwork' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contactus' },
  ];

 

  const drawerLinks = (
    <Controls.Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}  
      onKeyDown={() => setDrawerOpen(false)}
    >
      <Controls.List>
        {links.map((link) => (
          <Controls.ListItem
            button
            key={link.name}
            component={NavLink}  
            to={link.href}
            onClick={() => handleLinkClick(link.name)}  
            style={({ isActive }) => ({
              color: isActive ? '#ffc700' : 'black',  
              textDecoration: 'none', 
            })}
          >
            <Controls.ListItemText
              primary={link.name}
            />
          </Controls.ListItem>
        ))}
      </Controls.List>
    </Controls.Box>
  );

  return (
    <>
      <Controls.Box sx={{ flexGrow: 1, position: "relative", zIndex: 10 }}>
        <AppBar position="static" sx={{ backgroundColor: '#107A66', height: { xs: "60px", sm: '80px' }, justifyContent: 'center', padding: { xs: "10px", sm: "10px", md: "20px" } }}>
          <Controls.Grid container alignItems="center" justifyContent="space-between">
            <Controls.Grid item sx={{ display: 'flex', order: { xs: 1 } }} gap={1}>
              <Controls.Box component="img" src="assests/images/Vector.png" alt="Vector Image" width="30px" height="30px" mt={1} />
              <Controls.Typography variant="h5" component="div" sx={{ display: { xs: 'none', sm: "block" }, fontSize: { xs: '10px', sm: "15px", md: "24px" }, marginTop: { xs: "10px", sm: "" } }}>
                Foundation
              </Controls.Typography>
            </Controls.Grid>

            {isMobile ? (
              <Controls.Grid item sx={{ order: { xs: 3, sm: 2 } }}>
                <Controls.IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                  <Controls.MenuIcon />
                </Controls.IconButton>
              </Controls.Grid>
            ) : (
              <Controls.Grid item sx={{ order: { xs: 3, sm: 2 } }}>
                <Controls.Box sx={{ display: 'flex', gap: {xs:3,sm:2,md:3} }}>
                  {links.map((link) => (
                    <NavLink  
                      key={link.name}
                      to={link.href}
                      style={({ isActive }) => ({
                        color: isActive ? '#ffc700' : 'white',
                        textDecoration: 'none',
                        cursor: 'pointer',
                      })}
                      onClick={() => handleLinkClick(link.name)}  
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </Controls.Box>
              </Controls.Grid>
            )}

            <Controls.Grid item sx={{ order: { xs: 2, sm: 3 } }}>
              <AnimatedButton/>
            </Controls.Grid>
          </Controls.Grid>
        </AppBar>

        <Controls.Drawer anchor="right" open={ drawerOpen} onClose={toggleDrawer(false)}>
          {drawerLinks}
        </Controls.Drawer>
      </Controls.Box>
    </>
  );
};

export default NavbarComponent;
