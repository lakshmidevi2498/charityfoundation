import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const FooterComponent = () => {
    const content1 = [
        "About Us", "Get Involved", "Our Work", "Blog", "Contact Us", "Donate Now"
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

    return (
        <Controls.Grid container justifyContent='center'>
            <Controls.Grid item xs={12} sx={{ backgroundColor: theme.palette.one.green, color: theme.palette.one.main }} gap={2} padding='20px'>
                <Controls.Grid container xs={10} sx={{ margin: "auto" }} justifyContent='center' item>
                    <Controls.Grid container sx={{ display: "flex", justifyContent: "space-between" }} mb={3}>

                        <Controls.Grid item xs={12} sm={6} md={4} lg={2}>
                            <Controls.Typography variant='h5' sx={{ fontWeight: "bold" }}>
                                Who We Are?
                            </Controls.Typography>
                            <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc', }}>
                                {content1.map((item, index) => (
                                    <Controls.ListItem key={index} sx={{ fontWeight: "medium", padding: 1, display: 'list-item', }}>
                                        {item}
                                    </Controls.ListItem>
                                ))}
                            </Controls.List>
                        </Controls.Grid>


                        <Controls.Grid item xs={12} sm={6} md={4} >
                            <Controls.Typography variant='h5' sx={{ fontWeight: "bold" }}>What We Do?</Controls.Typography>
                            <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                {content2.map((item, index) => (
                                    <Controls.ListItem key={index} sx={{ fontWeight: "medium", display: 'list-item', }}>{item}</Controls.ListItem>
                                ))}
                            </Controls.List>
                        </Controls.Grid>


                        <Controls.Grid item xs={12} sm={6} md={4}>
                            <Controls.Grid item>
                                <Controls.Typography variant='h5' sx={{ fontWeight: "bold" }}>Get Involved</Controls.Typography>
                                <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    {content3.map((item, index) => (
                                        <Controls.ListItem key={index} sx={{ fontWeight: "medium", display: 'list-item', }}>{item}</Controls.ListItem>
                                    ))}
                                </Controls.List>
                            </Controls.Grid>


                            <Controls.Grid item>
                                <Controls.Typography variant='h5' sx={{ fontWeight: "bold" }}>For any queries</Controls.Typography>
                                <Controls.List sx={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                                    {content4.map((item, index) => (
                                        <Controls.ListItem key={index} sx={{ fontWeight: "medium", display: 'list-item', }}>{item}</Controls.ListItem>
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
                        <Controls.Typography sx={{ fontWeight: "bold",fontSize:{xs:"12px",sm:"15px"} }}>All copyrights Reserved 2024 | Terms and Conditions | Privacy Policy | Charity No: ACT1002</Controls.Typography>
                    </Controls.Grid>
            </Controls.Grid>
        </Controls.Grid>
    );
}

export default FooterComponent;
