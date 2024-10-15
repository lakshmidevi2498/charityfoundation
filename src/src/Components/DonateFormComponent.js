import React, { useState } from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormicFormComponent from './FormicFormComponent';


const validationSchema = Yup.object().shape({
    fname: Yup.string().required('First name is required'),
    lname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number contains 10 digits only'),
    message: Yup.string().required('Message is required'),
    citizenship: Yup.string().required('Citizenship is required'),
    donationFrequency: Yup.string().required('Please select a donation frequency'),
    donationAmount: Yup.number().required('Please select a donation amount'),
});



const DonateFormComponent = () => {
    const initialValues = {
        fname: '', lname: '', email: '', phone: '', message: "", citizenship: '',
        donationFrequency: '',
        donationAmount: '',
    };



    return (
        <>
            <Controls.Grid container justifyContent='center' py={4}>
                <Controls.Grid item xs={12} md={11} lg={10} sx={{ justifyContent: {  md: "space-between"}, display: {xs:'block',md:"flex"},  padding:{sm:"20px",md:"0px"}}} gap={2}>
                    <Controls.Grid item xs={12} md={6}  paddingX={{xs:"10px",md:"0px"}}>
                        <Controls.Grid item xs={12}>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontSize: { xs: "22px", md: "28px" }, fontWeight: "bold" }}>What We <Controls.Box component="span" sx={{ color: theme.palette.one.yellow, fontSize: { xs: "22px", md: "28px" }, fontWeight: "bold" }}>Do ?</Controls.Box></Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "14px", md:"16px",lg: "18px" }, lineHeight: { xs: "25px", md: "38px" } }}>Thank you for being a part of our journey and painting a brighter future for children in need. Together, we can ensure that every child has the opportunity to explore, learn, and grow with the help of education. Your kindness, generosity, and support mean the world to us.</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "14px", md:"16px",lg: "18px" }, lineHeight: { xs: "25px", md: "38px" } }}>Thank you for being a part of our journey and painting a brighter future for children in need. Together, we can ensure that every child has the opportunity to explore, learn, and grow with the help of education. Your kindness, generosity, and support mean the world to us.</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item my={2}>
                                <Controls.Divider sx={{ flexBasis: '50px', height: '5px', width: "200px", borderRadius: "20px", backgroundColor: theme.palette.one.yellow }} />
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item xs={12}>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontSize: { xs: "22px", md: "28px" }, fontWeight: "bold" }}>How will your<Controls.Box component="span" sx={{ color: theme.palette.one.yellow, fontSize: { xs: "22px", md: "28px" }, fontWeight: "bold" }}>Donation Help?</Controls.Box></Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "14px", md:"16px",lg: "18px" }, lineHeight: { xs: "25px", md: "38px" } }}>CHARITY currently operates 102 projects in 19 states and 80 districts, including Mumbai, Pune, Bangalore, Kolkata, and Chennai. With your support, we address children’s critical needs by working with parents, teachers, Anganwadi workers, communities, district and state-level governments as well as the children themselves. We work on changing behaviors' and practices at the grassroots level and influencing public policy at a systemic level – thereby creating an ecosystem where children are made the nation’s priority. Our key focus areas include –Anganwadi workers, communities, district and state-level governments as well as the children themselves. </Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "14px",md:"16px", lg: "18px" }, lineHeight: { xs: "25px", md: "38px" } }}>Thank you for being a part of our journey and painting a brighter future for children in need. Together, we can ensure that every child has the opportunity to explore, learn, and grow with the help of education. Your kindness, generosity, and support mean the world to us.</Controls.Typography>
                            </Controls.Grid>

                        </Controls.Grid>
                    </Controls.Grid>
                    <Controls.Grid item xs={12} md={6}   sx={{ backgroundColor: theme.palette.one.fields ,margin:"auto",
                        // height:{xs:'1000px',sm:"1000px",md:"1100px",lg:"950px"}
                        }} px={3} py={5}   >
                         

                            <FormicFormComponent validationSchema={validationSchema} initialValues={initialValues} />

                         

                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default DonateFormComponent