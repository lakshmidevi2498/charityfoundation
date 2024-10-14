import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    fname: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters long'),
    lname: Yup.string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters long'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is not valid'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number contains 10 digits only'),
    message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters long'),
});

const GetInTouchComponent = () => {



    const initialValues = { fname: '', lname: '', email: '', phone: '', message: "" };

    const onSubmit = (values, actions) => {
        console.log("Form Values:", values);
        actions.resetForm();
    };

    return (
        <>
            <Controls.Grid
                container
                justifyContent='center'
                sx={{
                    boxShadow: 3,
                    borderRadius: '8px',
                }}>
                <Controls.Grid
                    item xs={11} sm={10} md={11} lg={10}
                    sx={{ justifyContent: "center", paddingY: "30px", height: "auto" }} >

                    <Controls.Grid item paddingX={{ xs: "0px", md: "15px", lg: "20px" }}>
                        <Controls.Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Controls.Typography variant='caption1' sx={{ fontSize: { xs: "14px", sm: "18px" } }}>
                               Get In Touch
                            </Controls.Typography>
                            <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px", marginLeft: '8px' }} />
                        </Controls.Box>
                        <Controls.Grid item my={2}>
                        <Controls.Typography variant='caption1' sx={{ fontSize: "24px", fontWeight: "bold" }} >Send me a message</Controls.Typography>
                        </Controls.Grid>                    
                    </Controls.Grid>

                    <Controls.Grid
                        container
                        display={{ xs: "block", md: 'flex' }}
                        justifyContent={{ xs: "center", md: 'space-between' }}
                        gap={1}
                        height="auto"
                        sx={{ flexGrow: 1 , }} 
                    >
                        <Controls.Grid item xs={12} md={6} lg={7.5} justifyContent='center'>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {({ errors, touched, isSubmitting }) => (
                                    <Form>
                                        <Controls.Grid item sx={{ height: "auto" }}>
                                            <Controls.Grid
                                                item
                                                sx={{ display: { xs: "block", md: 'flex' }, justifyContent: { xs: "center", md: 'space-between' } }}
                                                gap={2}
                                            >
                                                <Controls.Grid item xs={12} md={6} sx={{ mb: { xs: 1, sm: 2 } }}>
                                                    <Field
                                                        name="fname"
                                                        as={Controls.TextField}
                                                        label="First Name"
                                                        size="small"
                                                        fullWidth
                                                        sx={{
                                                            '& .MuiInputBase-input': {
                                                                backgroundColor: theme.palette.one.fields,
                                                            },
                                                        }}
                                                        error={touched.fname && Boolean(errors.fname)}
                                                        helperText={touched.fname && errors.fname}
                                                    />
                                                </Controls.Grid>
                                                <Controls.Grid item xs={12} md={6} sx={{ mb: { xs: 1, sm: 2 } }}>
                                                    <Field
                                                        name="lname"
                                                        as={Controls.TextField}
                                                        label="Last Name"
                                                        size="small"
                                                        fullWidth
                                                        sx={{
                                                            '& .MuiInputBase-input': {
                                                                backgroundColor: theme.palette.one.fields,
                                                            },
                                                        }}
                                                        error={touched.lname && Boolean(errors.lname)}
                                                        helperText={touched.lname && errors.lname}
                                                    />
                                                </Controls.Grid>
                                            </Controls.Grid>

                                            <Controls.Grid
                                                item
                                                sx={{ display: { xs: "block", md: 'flex' }, justifyContent: { xs: "center", md: 'space-between' } }}
                                                gap={2}
                                            >
                                                <Controls.Grid item xs={12} md={6} sx={{ mb: { xs: 1, sm: 2 } }}>
                                                    <Field
                                                        name="email"
                                                        as={Controls.TextField}
                                                        label="Email"
                                                        size="small"
                                                        fullWidth
                                                        sx={{
                                                            '& .MuiInputBase-input': {
                                                                backgroundColor: theme.palette.one.fields,
                                                            },
                                                        }}
                                                        error={touched.email && Boolean(errors.email)}
                                                        helperText={touched.email && errors.email}
                                                    />
                                                </Controls.Grid>
                                                <Controls.Grid item xs={12} md={6} sx={{ mb: { xs: 1, sm: 2 } }}>
                                                    <Field
                                                        name="phone"
                                                        as={Controls.TextField}
                                                        label="Phone"
                                                        size="small"
                                                        fullWidth
                                                        sx={{
                                                            '& .MuiInputBase-input': {
                                                                backgroundColor: theme.palette.one.fields,
                                                            },
                                                        }}
                                                        error={touched.phone && Boolean(errors.phone)}
                                                        helperText={touched.phone && errors.phone}
                                                    />
                                                </Controls.Grid>
                                            </Controls.Grid>

                                            <Controls.Grid item xs={12}>
                                                <Field
                                                    name="message"
                                                    as={Controls.TextField}
                                                    label="Message"
                                                    size="small"
                                                    multiline
                                                    rows={4}
                                                    fullWidth
                                                    sx={{
                                                        '& .MuiInputBase-root': {
                                                            backgroundColor: theme.palette.one.fields,
                                                            padding: 0,
                                                            borderRadius: 1,
                                                        },
                                                        '& .MuiInputBase-input': {
                                                            padding: '10px',
                                                            height: 'auto',
                                                            boxSizing: 'border-box',
                                                        },
                                                    }}
                                                    error={touched.message && Boolean(errors.message)}
                                                    helperText={touched.message && errors.message}
                                                />
                                            </Controls.Grid>
                                        </Controls.Grid>

                                        <Controls.Grid item my={{ xs: 2, sm: 2 }}>
                                            <Controls.Button
                                                variant='contained'
                                                sx={{ backgroundColor: theme.palette.one.green }}
                                                disabled={isSubmitting}
                                                type='submit'
                                            >
                                                Send Message
                                            </Controls.Button>
                                        </Controls.Grid>
                                    </Form>
                                )}
                            </Formik>
                        </Controls.Grid>

                        <Controls.Grid
                            item
                            xs={12}
                            md={5} lg={4}
                            sx={{
                                backgroundColor: theme.palette.one.fields,
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "auto", 
                            }}
                        >
                            <Controls.Grid item sx={{ marginBottom: "10px", textAlign: "left", width: "100%" }}>
                                <Controls.Typography variant='caption4' sx={{ fontWeight: "bold", fontSize: { xs: "16px", sm: "18px", md: "14px", lg: "16px" } }}>Address</Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid item sx={{ marginBottom: "10px", textAlign: "left", width: "100%" }}>
                                <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "16px", sm: "18px", md: "14px", lg: "16px" } }}>
                                    If you still have questions, please fill out the form below and our Supporter Services team will get back to you.
                                    If you prefer, you can give us a call at 6305196668.
                                </Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid item sx={{ marginBottom: "10px", fontSize: { xs: "16px", sm: "18px", md: "14px", lg: "16px" }, textAlign: "left", width: "100%" }}>
                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>
                                    Location:
                                    <Controls.Box component='span' sx={{ fontWeight: "medium" }}>
                                        D.No: 4-7-1, Tarvanipeta, Mandapeta,<br />Andhrapradesh, 533308, India.
                                    </Controls.Box>
                                </Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid item sx={{ marginBottom: "10px", fontSize: { xs: "16px", sm: "18px", md: "14px", lg: "16px" }, textAlign: "left", width: "100%" }}>
                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>
                                    Phone:
                                    <Controls.Box component='span' sx={{ fontWeight: "medium" }}>
                                        +91 6305196668
                                    </Controls.Box>
                                </Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid item sx={{ fontSize: { xs: "16px", sm: "18px", md: "16px" }, textAlign: "left", width: "100%" }}>
                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>
                                    Email:
                                    <Controls.Box component='span' sx={{ fontWeight: "medium" }}>
                                        givelifecharity@gmail.com
                                    </Controls.Box>
                                </Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>


                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default GetInTouchComponent