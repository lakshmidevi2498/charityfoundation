import React, { useState } from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormicFormComponent from './FormicFormComponent';





const DonateFormComponent = () => {
    const content = [
        { title: "Provide Essential Support", text: "We offer critical assistance to individuals and families in need, including food, clothing, and shelter." },
        { title: "Educational Programs", text: "We run educational initiatives aimed at empowering communities through knowledge, skills training, and literacy programs." },
        { title: "Health and Wellness Services", text: "Our charity provides access to healthcare services, including medical check-ups, mental health support, and wellness workshops." },
        { title: "Community Development", text: " We work on projects that promote sustainable development, including job training, micro-financing, and infrastructure improvement." },
        { title: "Advocacy and Awareness", text: "We advocate for social change and raise awareness about important issues affecting vulnerable populations, encouraging community engagement and support." },
        { title: "Volunteer Opportunities", text: " We engage community members by offering volunteer opportunities that allow individuals to contribute their time and skills to meaningful causes" },
    ]
    const content2 = [
        "Program Funding: Donations help fund our various programs, including educational initiatives, healthcare services, and skill development workshops. These programs empower individuals and equip them with the tools they need to succeed.",
        "Community Development: Your support enables us to invest in community development projects, creating sustainable solutions that uplift entire neighbourhood’s and foster long-term growth.",
        "Emergency Relief: In times of crisis, such as natural disasters or economic downturns, your donations help us provide immediate relief and support to affected individuals and families,",
        "ensuring they receive the assistance they need quickly.",
        "Volunteer Support: Your donations help us train and coordinate volunteers, ensuring that our programs run smoothly and effectively. Volunteers are essential to our operations, and your support allows us to maximize their impact.",
       ]




    return (
        <>
            <Controls.Grid container justifyContent='center' py={4}>
                <Controls.Grid item xs={10} lg={9} xl={10} sx={{ justifyContent: { md: "space-between" }, display: { xs: 'block', md: "flex" }, padding: { sm: "20px", md: "0px" } }} gap={2}>
                    <Controls.Grid item xs={12} md={6} paddingX={{ xs: "10px", md: "0px" }}>
                        <Controls.Grid item xs={12}>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontSize: { xs: "22px", lg: "28px", xl: "40px" }, fontWeight: "bold" }}>What We <Controls.Box component="span" sx={{ color: theme.palette.one.yellow, fontSize: { xs: "22px", md: "28px" }, fontWeight: "bold" }}>Do ?</Controls.Box></Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                {content.map((item, index) => (
                                    <Controls.Grid item >
                                        <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "14px", md: "15px", lg: "16px", lg: "16px", xl: "22px" }, lineHeight: { xs: "25px", md: "18px", lg: "25px", xl: "30px" } }}><Controls.Box component="span" sx={{ fontWeight: "bold" }}>{item.title}:</Controls.Box>{item.text}</Controls.Typography>
                                    </Controls.Grid>
                                ))}
                            </Controls.Grid>
                           
                            <Controls.Grid item my={2}>
                                <Controls.Divider sx={{ flexBasis: '50px', height: '5px', width: "200px", borderRadius: "20px", backgroundColor: theme.palette.one.yellow }} />
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item xs={12}>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontSize: { xs: "22px", md: "28px", xl: "40px" }, fontWeight: "bold" }}>How will your<Controls.Box component="span" sx={{ color: theme.palette.one.yellow, fontSize: { xs: "22px", md: "28px" }, fontWeight: "bold" }}> &nbsp;Donation Help?</Controls.Box></Controls.Typography>
                            </Controls.Grid>
                            <Controls.List sx={{ listStyleType: "numbers",paddingLeft:"10px" , }}>
                                            {content2.map((point, innerindex) => (
                                                <Controls.ListItem
                                                    key={innerindex}
                                                    sx={{ display: "list-item", fontFamily: "poppins" ,padding:{xs:"2px",md:"2px",lg:"2px"},fontSize: { xs: "14px", md: "15px", lg: "16px", lg: "16px", xl: "22px" }}}
                                                >
                                                    {point}
                                                </Controls.ListItem>
                                            ))}
                                        </Controls.List>
                           

                        </Controls.Grid>
                    </Controls.Grid>
                    <Controls.Grid item xs={12} md={6} mt={{ xs: 2, md: 0 }} sx={{
                        backgroundColor: theme.palette.one.fields, margin: "auto", 
                    }} px={3} py={5}   >


                        <FormicFormComponent />



                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default DonateFormComponent