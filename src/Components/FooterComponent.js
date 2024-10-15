import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import { useNavigate } from 'react-router-dom';

const FooterComponent = () => {
    const navigate = useNavigate()
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/aboutus' },
        { name: 'Get Involved', href: '/getinvolved' },
        { name: 'Our Work', href: '/ourwork' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contactus' },
        { name: 'Donate Now', href: '/donate'}
      ];

    const content2 = [
        "Child Education Services", "Child Health & Nutrition Assistance", "Food & Shelter Programs",
        "Environmental Conservation", "Stop Child Marriage", "Emergency Relief & Disasters"
    ];

    const content3 = [
        "Volunteering & Internships", "Corporate Partners", "Careers"
    ];

    const content4 = [
        "Email: infocharity@actimize.in", "Contact No: +91 7396455771"
    ];

    const icons = [
        { Icon: Controls.FacebookIcon, key: 'facebook' },
        { Icon: Controls.LinkedInIcon, key: 'linkedin' },
        { Icon: Controls.WhatsAppIcon, key: 'whatsapp' },
        { Icon: Controls.InstagramIcon, key: 'instagram' }
    ]

    const handleNavigate = (value) => {
        // console.log("vlaue",value)
        navigate(value)
    }

    return (
        <Controls.Grid container justifyContent='center'>
            <Controls.Grid item xs={12} sx={{ backgroundColor: theme.palette.one.green, color: theme.palette.one.main }} gap={2} padding='20px'>
                <Controls.Grid container xs={10} lg={9} xl={10}sx={{ margin: "auto" }} justifyContent='center' item>
                    <Controls.Grid container sx={{ display: "flex", justifyContent: "space-between" }} mb={3}>

                        <Controls.Grid item xs={12} sm={6} md={4} lg={2}>
                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold",fontSize:{xs:"22px",xl:"26px"} }}>
                                Who We Are?
                            </Controls.Typography>
                            <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc', }}>
                                {links.map((item, index) => (
                                    <Controls.ListItem key={index} sx={{ fontWeight: "medium", padding: 1, display: 'list-item',fontFamily:"poppins",cursor:"pointer" ,fontSize:{xs:"16px",xl:"24px"}}} onClick={()=>{handleNavigate(item.href)}}>
                                        {item.name}
                                    </Controls.ListItem>
                                ))}
                            </Controls.List>
                        </Controls.Grid>


                        <Controls.Grid item xs={12} sm={6} md={4} >
                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold",fontSize:{xs:"22px",xl:"26px"} }}>What We Do?</Controls.Typography>
                            <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                {content2.map((item, index) => (
                                    <Controls.ListItem key={index} sx={{ fontWeight: "medium", display: 'list-item', fontFamily:"poppins",fontSize:{xs:"16px",xl:"24px"}}}>{item}</Controls.ListItem>
                                ))}
                            </Controls.List>
                        </Controls.Grid>


                        <Controls.Grid item xs={12} sm={6} md={4}>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold",fontSize:{xs:"22px",xl:"26px"} }}>Get Involved</Controls.Typography>
                                <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    {content3.map((item, index) => (
                                        <Controls.ListItem key={index} sx={{ fontWeight: "medium", display: 'list-item', fontFamily:"poppins",fontSize:{xs:"16px",xl:"24px"}}}>{item}</Controls.ListItem>
                                    ))}
                                </Controls.List>
                            </Controls.Grid>


                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold",fontSize:{xs:"22px",xl:"26px"} }}>For any queries</Controls.Typography>
                                <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    {content4.map((item, index) => (
                                        <Controls.ListItem key={index} sx={{ fontWeight: "medium", display: 'list-item', fontFamily:"poppins",fontSize:{xs:"16px",xl:"24px"}}}>{item}</Controls.ListItem>
                                    ))}
                                </Controls.List>
                            </Controls.Grid>
                        </Controls.Grid>

                        <Controls.Grid
                            item
                            xs={12}
                            sm={6}
                            md={12}
                            lg={1}
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "row", lg: "column" },   
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center", 
                            }}
                            gap={2}
                        >
                           
                            {icons.map(({ Icon, key }) => (
                                <Icon key={key} className="flip-icon" fontSize="large" sx={{ fontSize: "50px" }} />
                            ))}
                        </Controls.Grid>


                    </Controls.Grid>


                    <Controls.Divider sx={{ width: '100%', height: '2px', backgroundColor: theme.palette.one.main, justifyContent: "center", textAlign: "center", margin: "auto" }} />
                   
                </Controls.Grid>
                <Controls.Grid sx={{ justifyContent: "center", textAlign: "center", display: "flex" }} mt={3} gap={1}>
                        <Controls.Box component='img' src='./assests/images/Vector (1).png'  sx={{width:{xs:"25px",sm:"30px"},height:{xs:"25px",sm:"30px"}}} />
                        <Controls.Typography variant='caption1' sx={{ fontWeight: "bold",fontSize:{xs:"12px",sm:"15px",xl:"24px"} }}>All copyrights Reserved 2024 | Terms and Conditions | Privacy Policy | Charity No: ACT1002</Controls.Typography>
                    </Controls.Grid>
            </Controls.Grid>
        </Controls.Grid>
    );
}

export default FooterComponent;
