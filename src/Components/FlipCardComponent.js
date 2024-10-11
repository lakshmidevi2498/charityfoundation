import React, { useState } from 'react';
import CardFlip from 'react-card-flip'; 
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const FlipCardComponent = () => {
    const [flippedCards, setFlippedCards] = useState(Array(4).fill(false));
    const frontCard = ["Who we are", "Our focus", "Why Excellence", "Our Values"];
    const backCard = [
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
        <Controls.Grid container direction="row" spacing={2} justifyContent="center" my={5}>
            <Controls.Grid item xs={10} sm={10} md={11} lg={10}>
                <Controls.Grid item>
                    <Controls.Typography variant='caption2' sx={{ 
                        fontSize: '20px',
                        fontWeight: 600,
                        lineHeight: '28px',
                        textAlign: 'left',
                    }}>Our Targets</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item>
                    <Controls.Typography variant='caption1' sx={{ 
                        color: theme.palette.one.green,
                        fontSize: {xs:"18px",sm:'24px'},
                        fontWeight: 700,
                        lineHeight: {xs:"30px",sm:'40px',md:"50px"},
                        textAlign: 'left',
                    }}>It reflects our Core Values of TRANSFORMATION, INTEGRITY, DIVERSITY, EXCELLENCE, and EQUALITY.</Controls.Typography>
                </Controls.Grid>
            </Controls.Grid>

            <Controls.Grid item xs={10} sm={10} md={11} lg={10}>
                <Controls.Grid container spacing={2} justifyContent="center">
                    {frontCard.map((item, index) => (
                        <Controls.Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <CardFlip flipDirection="horizontal" isFlipped={flippedCards[index]}>
                                <Controls.Card
                                    sx={{
                                        backgroundColor: '#f5f5f5',
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
                                    <Controls.CardContent sx={{ textAlign: "center",  }}>
                                        <Controls.StarBorderIcon sx={{ position: "absolute", top: 20, right: "50px" }} />
                                        <Controls.Typography variant="caption1" sx={{ color: theme.palette.one.green, fontWeight: "bold",alignItems:"center",fontSize:{xs:'18px',sm:"24px"} }}>
                                            {item}
                                        </Controls.Typography>
                                    </Controls.CardContent>
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
                                    <Controls.CardContent sx={{ textAlign: "center",   }}>
                                        <Controls.StarBorderIcon sx={{ position: "absolute", top: 20, right: "50px", color: theme.palette.one.main }} />
                                        <Controls.Typography variant="caption1" component="div" sx={{ color: theme.palette.one.main ,fontSize:"18px"}}>
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
    );
};

export default FlipCardComponent;
