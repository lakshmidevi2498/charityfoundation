import React, { useState } from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const HelpingComponent = () => {
    const content = [
        "./assests/images/Ellipse 381.png",
        "./assests/images/Ellipse 382.png",
        "./assests/images/Ellipse 385.png",
        "./assests/images/Ellipse 381 (1).png",
    ];

    // Manage `readMore` state for each card separately using an object
    const [readMoreStates, setReadMoreStates] = useState({});

    // Toggle the `readMore` state of a specific card based on its index
    const handleToggle = (index) => {
        setReadMoreStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the specific card's state
        }));
    };

    return (
        <Controls.Grid container justifyContent="center">
            <Controls.Grid item xs={12} sm={10} lg={9} xl={10} >
                <Controls.Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Controls.Typography
                        variant="caption1"
                        sx={{ fontFamily: 'Montserrat', fontSize: { xs: '18px', xl: '26px' } }}
                    >
                        Helping Story
                    </Controls.Typography>
                    <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: '50px' }} />
                </Controls.Box>

                <Controls.Grid item>
                    <Controls.Typography
                        variant="caption1"
                        sx={{
                            color: theme.palette.one.yellow,
                            fontSize: { xs: '18px', sm: '22px', xl: '30px' },
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                        }}
                    >
                        Helping one person might not change the whole world, but it could change the world for one person.
                    </Controls.Typography>
                </Controls.Grid>

                <Controls.Grid container spacing={10}>
                    {content.map((item, index) => (
                        <Controls.Grid item mt={2} key={index}>
                            <Controls.Card
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    backgroundColor: theme.palette.one.cardbg,
                                    padding: { xs: '5px', sm: '25px' },
                                    marginBottom: '10px',
                                }}
                            >
                                <Controls.Grid container spacing={2}>
                                    <Controls.Grid
                                        item
                                        xs={12}
                                        sm={5}
                                        lg={4}
                                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Controls.CardMedia
                                            component="img"
                                            src={item}
                                            sx={{
                                                width: '250px',
                                                height: '250px',
                                                objectFit: 'cover',
                                                borderRadius: '8px',
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
                                                        fontSize: { xs: '14px', sm: '22px',md:"20px", xl: '40px' },
                                                    }}
                                                >
                                                    Helping one person might not change the whole world, but it could
                                                    change the world for one person.
                                                </Controls.Typography>
                                            </Controls.Grid>

                                            <Controls.Typography
                                                variant="caption1"
                                                sx={{ fontSize: { xs: '12px', sm: '18px',md:"16px",lg:"18px", xl: '30px' } }}
                                            >
                                                With your support, we address children’s critical needs by working with
                                                parents, teachers, Anganwadi workers, communities, district and state
                                                level governments as well as the children themselves.
                                            </Controls.Typography>

                                            {readMoreStates[index] ? (
                                                <>
                                                    <Controls.Grid item>
                                                        <Controls.Typography
                                                            variant="caption1"
                                                            sx={{ fontSize: { xs: '12px', sm: '18px',md:"16px",lg:"18px", xl: '30px' } }}
                                                        >
                                                            With your support, we address children’s critical needs by
                                                            working with parents, teachers, Anganwadi workers, and more.
                                                        </Controls.Typography>
                                                        <Controls.Grid item my={2}>
                                                            <Controls.Button
                                                                variant="contained"
                                                                sx={{ backgroundColor: theme.palette.one.green ,fontSize:{xs:"14px",xl:"18px"},textTransform:"initial"}}
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
                                                            Read Less Stories
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
                                                        Read More Stories Here
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
