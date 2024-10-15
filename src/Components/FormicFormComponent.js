import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import { connect } from 'react-redux';
import { postDonarDataError, postDonarDataStart, postDonarDataSuccess } from '../redux/actions/postDonationAction';
import { donateMoney } from '../backend/donateApi';



const FormicFormComponent = ({ dispatch, data }) => {
    const [selected, setSelected] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedRadio, setSelectedRadio] = useState(null);
    const [customAmount, setCustomAmount] = useState('');
    console.log("firebase data", data.data)
    const initialValues = {
        fname: '', lname: '', email: '', phone: '', message: "", citizenship: '',
        donationFrequency: '',
        donationAmount: '',
    };

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



    const handleButtonClick = (value, setFieldValue) => {
        setSelected(value);
        setCustomAmount('');
        setFieldValue("donationAmount", value);
    };


    const handleChange = (e, setFieldValue) => {
        const value = e.target.value;
        if (value && !isNaN(value)) {
            setCustomAmount(value);
            setSelected(null);
            setFieldValue("donationAmount", value);
        } else {
            setCustomAmount('');
            setFieldValue("donationAmount", '');
        }
    };

    const handleTextClick = (value, setFieldValue) => {
        setSelectedText(value);
        setFieldValue("donationFrequency", value);
    };


    const onSubmit = async (values, actions) => {
        console.log("Form Values:", values);


        const paymentSuccess = await handlePayment(values);
        if (paymentSuccess) {

            await saveDonationData(values);
        }

        actions.resetForm();
        setSelectedRadio(null);
        setSelectedText(null);
        setSelected(null);
        setCustomAmount('');
        console.log("customAmount", customAmount)
    };



    const handlePayment = async (values) => {
        try {

            const orderOptions = {
                amount: values.donationAmount,
                currency: "INR",
                receipt: `receipt#${new Date().getTime()}`,
                payment_capture: 1
            };
            console.log("orderOptions", orderOptions)

            // const response = await donateMoney(orderOptions);
            // const order = response;
            // console.log("response from api", order) 

            const paymentOptions = {
                key: 'rzp_test_mqSCiPTo2G5Peh',
                secret_key: "yMu3bqDqKpe5KJ0ryQd4SWCW",
                amount: values.donationAmount * 100,
                currency: "INR",
                name: values.fname,
                description: "Test Transaction",
                image: "https://t4.ftcdn.net/jpg/01/41/21/29/360_F_141212995_KgFuZBhyK8eq5qb39biJtmcY6N4WwuS7.jpg",
                order_id: "",
                "handler": async function (paymentResponse) {
                    console.log("paymentResponse", paymentResponse)
                    const body = {

                        razorpay_payment_id: paymentResponse.razorpay_payment_id,

                    };
                    console.log("paymentResponse.razorpay_payment_id", paymentResponse.razorpay_payment_id);

                    try {
                        const paymentData = {
                            paymentId: paymentResponse.razorpay_payment_id,
                            amount: values.donationAmount,
                            user: {
                                name: values.fname,
                                email: values.email,
                                contact: values.phone
                            }
                        };


                        saveDonationData(paymentData);
                    } catch (firebaseError) {
                        console.error("Error saving payment data to Firebase:", firebaseError);
                    }
                },
                prefill: {
                    name: values.fname,
                    email: values.email,
                    contact: values.phone
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            console.log("paymentOptions", paymentOptions)
            const rzp1 = new window.Razorpay(paymentOptions);
            rzp1.open();
        } catch (error) {
            console.error("Error processing the order or payment:", error);

        }
    };



    const saveDonationData = async (data) => {
        dispatch(postDonarDataStart());
        try {
            const responseObject = await donateMoney(data);
            console.log("responseObject from firebase to form", responseObject)
            dispatch(postDonarDataSuccess(responseObject));
        } catch (error) {
            dispatch(postDonarDataError(error));
        }
    };




    return (
        <>
            <Controls.Grid container display={{ xs: "block" }} justifyContent={{ xs: "center" }} gap={1} margin='auto'>
                <Controls.Grid item xs={12} justifyContent='center' >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched, isSubmitting, setFieldValue }) => (
                            <Form>
                                <Controls.Grid item sx={{ height: "auto" }}>
                                    <Controls.Grid item>
                                        <Controls.Grid item>
                                            <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontWeight: "bold", fontSize: { xs: "15px", md: "20px", xl: "25px" } }}>Support a cause and reduce your tax burden!</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item my={1}>
                                            <Controls.Typography variant='caption2' sx={{ color: theme.palette.one.green, fontWeight: "bold", fontSize: { xs: "20px", md: "25px", xl: "25px" } }}>Citizenship*</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item>
                                            <Controls.FormControl>
                                                <Field
                                                    as={Controls.RadioGroup}
                                                    row
                                                    name="citizenship"
                                                    value={selectedRadio || ""}
                                                    onChange={(event) => {
                                                        setSelectedRadio(event.target.value);
                                                        setFieldValue('citizenship', event.target.value);
                                                    }}
                                                >
                                                    <Controls.FormControlLabel
                                                        value="Indian Citizen"
                                                        control={
                                                            <Controls.Radio
                                                                sx={{
                                                                    '& .MuiSvgIcon-root': {
                                                                        fontSize: { xs: '18px', xl: '24px' },
                                                                        color: theme.palette.one.green,
                                                                        '&.Mui-checked': {
                                                                            color: theme.palette.one.green,
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        }
                                                        label="Indian Citizen"
                                                    />

                                                    <Controls.FormControlLabel
                                                        value="Foreign citizen / NRI"
                                                        control={<Controls.Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { xs: '18px', xl: '24px' }, }, color: theme.palette.one.green, '&.Mui-checked': { color: theme.palette.one.green } }} />}
                                                        label="Foreign citizen / NRI"
                                                    />
                                                </Field>

                                            </Controls.FormControl>
                                        </Controls.Grid>
                                        {touched.citizenship && errors.citizenship && (
                                            <Controls.FormHelperText error>{errors.citizenship}</Controls.FormHelperText>
                                        )}
                                        <Controls.Grid item>
                                            <Controls.Typography variant='caption2' sx={{ fontSize: { xs: "12px", sm: "18px" }, fontWeight: "medium" }}>Indian citizen option is for transacting through Indian bank accounts or cards issued by Indian banks.</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item gap={2} display='flex' my={{xs:1,xl:3}}>
                                            <Controls.Grid item>
                                                <Controls.Button
                                                    variant={selectedText === "Give Once" ? 'contained' : 'outlined'}
                                                    sx={{ color: selectedText === "Give Once" ? theme.palette.one.main : theme.palette.one.green, border: "2px solid #107A66", textTransform: 'initial', paddingX: { xs: "10px", md: "30px" }, backgroundColor: selectedText === "Give Once" ? theme.palette.one.green : 'transparent', "&:hover": { backgroundColor: theme.palette.one.green, color: theme.palette.one.main } }}
                                                    onClick={() => handleTextClick('Give Once', setFieldValue)}
                                                >
                                                    Give Once
                                                </Controls.Button>
                                            </Controls.Grid>
                                            <Controls.Grid item>
                                                <Controls.Button
                                                    variant={selectedText === "Give Monthly" ? 'contained' : 'outlined'}
                                                    sx={{ color: selectedText === "Give Monthly" ? theme.palette.one.main : theme.palette.one.green, border: "2px solid #107A66", textTransform: 'initial', paddingX: { xs: "10px", md: "20px" }, backgroundColor: selectedText === "Give Monthly" ? theme.palette.one.green : 'transparent', "&:hover": { backgroundColor: theme.palette.one.green, color: theme.palette.one.main } }}
                                                    onClick={() => handleTextClick('Give Monthly', setFieldValue)}
                                                >
                                                    Give Monthly
                                                </Controls.Button>
                                            </Controls.Grid>

                                        </Controls.Grid>
                                        {touched.donationFrequency && errors.donationFrequency && (
                                            <Controls.FormHelperText error>{errors.donationFrequency}</Controls.FormHelperText>
                                        )}

                                        <Controls.Grid item>
                                            <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"16px",sm:"20px"}, fontWeight: "bold" }}>Choose amount to Donate :</Controls.Typography>
                                        </Controls.Grid>
                                        <Controls.Grid item gap={4} display={{ xs: "block", sm: 'flex' }} my={{xs:1,md:3}}>
                                            <Controls.Grid item xs={12} sm={6} display={{ xs: "flex", }} gap={{ xs: 5, sm: 3, md: 2 }}>
                                                <Controls.Grid item>
                                                    <Controls.Button
                                                        variant={selected === 500 ? 'contained' : 'outlined'}
                                                        sx={{ color: selected === 500 ? theme.palette.one.main : theme.palette.one.green, border: "2px solid #107A66", textTransform: 'initial', paddingX: "30px", backgroundColor: selected === 500 ? theme.palette.one.green : 'transparent', "&:hover": { backgroundColor: theme.palette.one.green, color: theme.palette.one.main } }}
                                                        onClick={() => handleButtonClick(500, setFieldValue)}
                                                    >
                                                        500
                                                    </Controls.Button>
                                                </Controls.Grid>
                                                <Controls.Grid item>
                                                    <Controls.Button
                                                        variant={selected === 1000 ? 'contained' : 'outlined'}
                                                        sx={{ color: selected === 1000 ? theme.palette.one.main : theme.palette.one.green, border: "2px solid #107A66", textTransform: 'initial', paddingX: "30px", backgroundColor: selected === 1000 ? theme.palette.one.green : 'transparent', "&:hover": { backgroundColor: theme.palette.one.green, color: theme.palette.one.main } }}
                                                        onClick={() => handleButtonClick(1000, setFieldValue)}
                                                    >
                                                        1000
                                                    </Controls.Button>
                                                </Controls.Grid>
                                            </Controls.Grid>
                                            <Controls.Grid item xs={12} sm={6} mt={{ xs: 2, sm: 0 }}>
                                                <Field
                                                    name="customAmount"
                                                    as={Controls.TextField}
                                                    label="Custom Your Amount"
                                                    id="outlined-size-small"
                                                    placeholder="Custom Amount"
                                                    size="small"
                                                    onChange={(e) => handleChange(e, setFieldValue)}
                                                    value={customAmount}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: '#107A66',
                                                                borderWidth: '2px',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: '#0B5F4E',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#0B5F4E',
                                                            },
                                                        },
                                                        '& .MuiInputBase-input': {
                                                            backgroundColor: theme.palette.one.fields,
                                                        },
                                                    }}
                                                />
                                            </Controls.Grid>

                                        </Controls.Grid>
                                        {touched.donationAmount && errors.donationAmount && (
                                            <Controls.FormHelperText error>{errors.donationAmount}</Controls.FormHelperText>
                                        )}
                                    </Controls.Grid>

                                    <Controls.Grid item sx={{ display: { xs: "block", }, justifyContent: { xs: "center", md: 'space-between' } }} gap={2}>
                                        <Controls.Grid item xs={12} sx={{ mb: { xs: 2, sm: 3 }, mt: { xs: 3 } }}>
                                            <Field
                                                name="fname"
                                                as={Controls.TextField}
                                                label="First Name"
                                                id="outlined-size-small"
                                                Placeholder="Your"
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
                                        <Controls.Grid item xs={12} sx={{ mb: { xs: 2, sm: 3 } }}>
                                            <Field
                                                name="lname"
                                                as={Controls.TextField}
                                                label="Last Name"
                                                id="outlined-size-small"
                                                Placeholder="Name"
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

                                    <Controls.Grid item xs={12} sx={{ mb: { xs: 2, sm: 3 } }}>
                                        <Field
                                            name="email"
                                            as={Controls.TextField}
                                            label="Email"
                                            id="outlined-size-small"
                                            Placeholder="Your Email"
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


                                    <Controls.Grid item xs={12} sx={{ mb: { xs: 2, sm: 3 } }}>
                                        < Field
                                            name="phone"
                                            as={Controls.TextField}
                                            label="Phone"
                                            id="outlined-size-small"
                                            Placeholder="+91"
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


                                    <Controls.Grid item xs={12}>
                                        < Field
                                            name="message"
                                            as={Controls.TextField}
                                            label="Message"
                                            id="outlined-size-small"
                                            Placeholder="Type your Message Here.."
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
                                <Controls.Grid mt={3}
                                    item
                                    display="block"
                                    // margin='auto'
                                    alignItems='center'
                                    textAlign='center'
                                // sx={{
                                //     position: 'absolute',
                                //     bottom: { xs: -1550, sm: -1500, md: -1070, lg: -850 },
                                //     right: { xs: 50, sm: 250, md: 200, lg: 350 }
                                // }}
                                >
                                    <Controls.Button
                                        variant='contained'
                                        sx={{ backgroundColor: theme.palette.one.green }}
                                        disabled={isSubmitting}
                                        type='submit'

                                    >
                                        Continue to payment
                                    </Controls.Button>
                                </Controls.Grid>
                            </Form>
                        )}
                    </Formik>
                </Controls.Grid>


            </Controls.Grid>
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(FormicFormComponent);

