import React, { useState } from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import { useNavigate } from 'react-router-dom';

const HelpingComponent = () => {
    const navigate = useNavigate()
    const content = [
        { img: "./assests/images/Ellipse 381.png", title: "Kindness is the language which the deaf can hear and the blind can see.  ", text: "At Charity, we are passionately dedicated to making a lasting difference in the lives of those who need it most. Our work focuses on empowering individuals and uplifting communities, ensuring that everyone has access to the support they deserve." ,moreText:"However, we cannot do this alone. Your involvement is vital to our mission. Whether through donations, volunteering, or spreading the word, your help enables us to provide essential support to individuals and communities in need. Together, we can create a brighter future for all."},
        { img: "./assests/images/Ellipse 382.png", title: "Even the smallest act of caring for another person is like a drop of water - it will make ripples throughout the entire pond.", text: "At Charity, our mission is to create a meaningful and lasting impact on the lives of those facing hardship. However, we cannot achieve this without the support of compassionate individuals like you." ,moreText:"Your assistance is crucial in helping us continue to provide vital support to individuals and communities in need. Together, we can transform lives and foster hope where it’s needed most."},
        { img: "./assests/images/Ellipse 385.png", title: "The best way to find yourself is to lose yourself in the service of others.", text: "At Charity, we are dedicated to creating lasting change for the most vulnerable members of our society. However, we cannot do this alone. We depend on the generosity of compassionate individuals like you to sustain our mission." ,moreText:"Your support enables us to provide critical assistance to individuals and communities in need, ensuring that we can continue making a meaningful impact."},
        { img: "./assests/images/Ellipse 381 (1).png", title: "To the world, you may be one person, but to one person, you may be the world.", text: "At Charity, we are dedicated to making a lasting impact on the lives of the most vulnerable. But to truly make a difference, we need the support of generous individuals like you.",moreText:"Your contributions enable us to provide essential resources and assistance to those in need, helping us sustain and expand our vital work in communities." },
    ];


    const [readMoreStates, setReadMoreStates] = useState({});

    const handleNavigate = () => {
        navigate('/donate')
    }
    const handleToggle = (index) => {
        setReadMoreStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <Controls.Grid container justifyContent="center" >
            <Controls.Grid item xs={12} sm={10} lg={9} xl={10} mt={4}>
                <Controls.Box sx={{ display: 'flex', alignItems: 'center', paddingX: { xs: "10px", sm: "0px" } }}>
                    <Controls.Typography
                        variant="caption1"
                        sx={{ fontFamily: 'Montserrat', fontSize: { xs: '18px', xl: '26px' } }}
                    >
                        Helping Story
                    </Controls.Typography>
                    <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: '50px' }} />
                </Controls.Box>

                <Controls.Grid item sx={{ paddingX: { xs: "10px", sm: "0px" } }}>
                    <Controls.Typography
                        variant="caption1"
                        sx={{
                            color: theme.palette.one.yellow,
                            fontSize: { xs: '16px', sm: '22px', xl: '30px' },
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                        }}
                    >
                        Helping one person might not change the whole world, but it could change the world for one person.
                    </Controls.Typography>
                </Controls.Grid>

                <Controls.Grid container >
                    {content.map((item, index) => (
                        <Controls.Grid item mt={2} key={index}  >
                            <Controls.Card
                                sx={{
                                    display: { xs: "block", sm: 'flex' },
                                    justifyContent: 'center',
                                    backgroundColor: theme.palette.one.cardbg,
                                    height: "auto",
                                }}
                            >
                                <Controls.Grid item sx={{ display: { xs: "block", sm: 'flex' }, alignItems: 'center' }}  >
                                    <Controls.Grid
                                        item
                                        xs={12}
                                        sm={5}
                                        lg={4}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: { xs: "30px", sm: "90px", lg: "80px", xl: "110px" },
                                            margin: "auto",
                                        }}
                                    >
                                        <Controls.CardMedia
                                            component="img"
                                            src={item.img}
                                            sx={{
                                                width: '250px',
                                                height: '250px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
                                                margin: 'auto',
                                            }}
                                        />
                                    </Controls.Grid>

                                    <Controls.Grid item xs={12} sm={7} lg={8} sx={{ paddingRight: { lg: '20px' } }}>
                                        <Controls.CardContent>
                                            <Controls.Grid item sx={{ textAlign: 'justify' }}>
                                                <Controls.Typography
                                                    variant="caption1"
                                                    sx={{
                                                        color: theme.palette.one.green,
                                                        fontWeight: 'bold',
                                                        fontSize: { xs: '19px', sm: '22px', md: "20px", xl: '40px' },
                                                    }}
                                                >
                                                    {item.title}
                                                </Controls.Typography>
                                            </Controls.Grid>

                                            <Controls.Typography
                                                variant="caption1"
                                                sx={{ fontSize: { xs: '14px', sm: '19px', md: "16px", lg: "18px", xl: '30px' } }}
                                            >
                                                {item.text}
                                            </Controls.Typography>

                                            {readMoreStates[index] ? (
                                                <>
                                                    <Controls.Grid item mt={1}>
                                                        <Controls.Typography
                                                            variant="caption1"
                                                            sx={{fontSize: { xs: '14px', sm: '19px', md: "16px", lg: "18px", xl: '30px' }  }}
                                                        >
                                                            {item.moreText}
                                                        </Controls.Typography>
                                                        <Controls.Grid item my={2}>
                                                            <Controls.Button
                                                                variant="contained"
                                                                sx={{ backgroundColor: theme.palette.one.green, fontSize: { xs: "14px", xl: "18px" }, textTransform: "initial" }}
                                                                onClick={handleNavigate}
                                                            >
                                                                Donate Now
                                                            </Controls.Button>
                                                        </Controls.Grid>
                                                    </Controls.Grid>

                                                    <Controls.Grid
                                                        item
                                                        sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                                                        onClick={() => handleToggle(index)}
                                                        my={2}
                                                    >
                                                        <Controls.Button
                                                            variant="outlined"
                                                            sx={{
                                                                color: theme.palette.one.green,
                                                                border: '2px solid #107A66',
                                                                textTransform: 'capitalize',
                                                                paddingX: { xs: '10px', sm: '20px', xl: '25px' },
                                                                fontSize: { xs: '10px', sm: '15px', xl: '20px' },
                                                                borderRadius: '20px',
                                                            }}
                                                        >
                                                            Read Less about this Story
                                                        </Controls.Button>
                                                    </Controls.Grid>
                                                </>
                                            ) : (
                                                <Controls.Grid
                                                    item
                                                    sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                                                    onClick={() => handleToggle(index)}
                                                    my={2}
                                                >
                                                    <Controls.Button
                                                        variant="outlined"
                                                        sx={{
                                                            color: theme.palette.one.green,
                                                            border: '2px solid #107A66',
                                                            textTransform: 'capitalize',
                                                            paddingX: { xs: '10px', sm: '20px', xl: '25px' },
                                                            fontSize: { xs: '10px', sm: '15px', xl: '20px' },
                                                            borderRadius: '20px',
                                                        }}
                                                    >
                                                        Read More About this Story
                                                    </Controls.Button>
                                                </Controls.Grid>
                                            )}
                                        </Controls.CardContent>
                                    </Controls.Grid>
                                </Controls.Grid>
                            </Controls.Card>
                        </Controls.Grid>
                    ))}
                </Controls.Grid>

            </Controls.Grid>
        </Controls.Grid>
    );
};

export default HelpingComponent;
