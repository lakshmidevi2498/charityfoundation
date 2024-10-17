import React, { useState } from 'react';
import CardFlip from 'react-card-flip';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const ReadMoreCardsComponent = () => {
    const [flippedCards, setFlippedCards] = useState(Array(8).fill(false));

    const frontCard = [
        "./assests/images/unsplash_41fytYZ_-mM.png", "./assests/images/unsplash_f8ld5zt3a3k.png ", "./assests/images/unsplash_NLTbKZvl0us.png ",
        "./assests/images/unsplash_6Q21PMaVkdi.png ", "./assests/images/unsplash_vC_xRhBoxGU.png ", "./assests/images/unsplash_Mn7Wv6-FfCM.png",
        "./assests/images/unsplash_yGxnyGqPnOo.png ", "./assests/images/unsplash_i02U7tjG0SI.png ",
    ];

    const backCard = [
        "Charity focuses on reducing stunting because this reflects success on many fronts: food systems, health systems, education, WASH infrastructure, and safety nets, to name a few.",
        "Our programs offer tailored support to help students overcome barriers, gain skills, and transition to secondary school or dignified livelihoods. We focus on improving marginalized girls' learning, retention, and well-being through a research-based, integrated approach",
     "Charity drives value chain changes to create lasting impacts for marginalized households, improving income, employment, power dynamics, and access to services that empower them to improve their lives.",
     "Charity is committed to supporting equality across all of its work. More than that, Charity acknowledges that this work is inextricably connected with race, class, ability, and gender identity, and other identities.",
     "Children are the foundation of our future. Let’s invest in their potential today so they can become tomorrow’s leaders. Every child deserves an education, free from discrimination by gender, caste, or socio-economic status.",
      "Charity, a leading children’s NGO in India, is dedicated to combating child trafficking. Our goal is to protect every child and help them reach their full potential, regardless of social or economic background",
      "As a leading child health and nutrition NGO in India, Charity upholds every child's right to survival. We focus on providing proper nutrition and quality healthcare, ensuring no child suffers from malnutrition or poor health, regardless of their socio-economic background.",
      "Charity’s Women’s Economic Justice initiative collaborates with the private sector, employs market-based approaches, and centers women to help them earn, save, and invest. Leveraging local expertise, this work reduces poverty and promotes equity.",

    ];

    const handleCardClick = (index) => {
        const newFlippedCards = [...flippedCards];
        newFlippedCards[index] = !newFlippedCards[index];
        setFlippedCards(newFlippedCards);
    };
    return (
        <>
            <Controls.Grid container justifyContent="center">
                <Controls.Grid item xs={12} my={3}>
                    <Controls.Grid container spacing={2} justifyContent="center">
                        {frontCard.map((item, index) => (
                            <Controls.Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <CardFlip flipDirection="horizontal" isFlipped={flippedCards[index]}>

                                    <Controls.Card
                                        sx={{
                                            backgroundColor: '#f5f5f5',
                                            border: '1px solid #ddd',
                                            textAlign: 'justify',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                            borderRadius: "10px",
                                            position: 'relative',
                                            height: "300px",
                                            padding: 0,
                                            overflow: 'hidden',
                                        }}

                                    >
                                        <Controls.Box
                                            component='img'
                                            src={item}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                position: "relative",
                                            }}
                                        />
                                        <Controls.StarBorderIcon
                                            sx={{ position: "absolute", top: 20, right: "30px", color: theme.palette.one.main, }}
                                        />
                                        <Controls.Grid
                                            item
                                            sx={{
                                                position: "absolute",
                                                top: "85%",  
                                                left: "50%",  
                                                transform: "translate(-50%, -50%)",  
                                                zIndex: 10,  
                                            }}
                                        >
                                            <Controls.Button
                                                variant='outlined'
                                                sx={{
                                                    color: theme.palette.one.main,
                                                    border: "2px solid #ffffff",
                                                    borderRadius: "30px",
                                                    textTransform: "initial",
                                                    paddingY: "7px",
                                                    paddingX: {xs:"7px",sm:"10px",lg:"5px"},
                                                    fontWeight: "bold",
                                                    fontSize: {xs:"18px",sm:"20px",lg:"18px"},
                                                }}
                                                onClick={() => handleCardClick(index)}
                                            >
                                                Read more
                                            </Controls.Button>
                                        </Controls.Grid>
                                    </Controls.Card>


                                    <Controls.Card
                                        sx={{
                                            backgroundColor: theme.palette.one.green,
                                            border: '1px solid #ddd',
                                            textAlign: 'center',
                                            padding: '20px',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                            borderRadius: "10px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: 'relative',
                                            height: "300px",
                                        }}
                                        onClick={() => handleCardClick(index)}
                                    >
                                        <Controls.CardContent >
                                            <Controls.Box component='img' src='./assests/images/Star 1.png'
                                                sx={{ position: "absolute", top: 15, right: "20px", color: theme.palette.one.main ,width:"15px",height:"15px"}}
                                            />
                                            <Controls.Typography
                                                variant="caption1"
                                                component="div"
                                                sx={{ color: theme.palette.one.main, fontSize: {xs:"16px",lg:"16px",xl:"22px"} }}
                                            >
                                                {backCard[index]}
                                            </Controls.Typography>
                                        </Controls.CardContent>
                                    </Controls.Card>
                                </CardFlip>
                            </Controls.Grid>
                        ))}
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default ReadMoreCardsComponent