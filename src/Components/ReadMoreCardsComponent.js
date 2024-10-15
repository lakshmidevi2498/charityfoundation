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
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people.",
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people.",
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people.",
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people.",
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people.",
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people.",
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people.",
        "Charity is a global leader within the worldwide movement dedicated to end. We are known everywhere for our unshakeable commitment to the dignity of the people."

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
                                                sx={{ color: theme.palette.one.main, fontSize: {xs:"18px",xl:"22px"} }}
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