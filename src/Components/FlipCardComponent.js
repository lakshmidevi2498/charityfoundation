import React, { useState } from 'react';
import CardFlip from 'react-card-flip'; 
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const FlipCardComponent = () => {
    const [flippedCards, setFlippedCards] = useState(Array(4).fill(false));
    const frontCard = [{text:"Who we are",img:"./assests/images/reports.gif"}, {text:"Our focus",img:"./assests/images/Cube 3d.gif"}, {text:"Why Excellence",img:"./assests/images/Trophy (1).gif"},{text: "Our Values",img:"./assests/images/Review (1).gif"}];
    const backCard = [
    "Charity refers to the voluntary act of giving help, support, or resources (such as money, food, time, or services) to those in need, typically through non-profit organizations, religious groups, or individuals.",
    "The focus of charity is primarily on improving the well-being of individuals, communities, and the environment by addressing specific needs, alleviating suffering, and fostering positive change.",
    "Charity is considered a form of excellence because it embodies values like generosity, compassion, and empathy, and it leads to positive, meaningful change in society.",
    "Charity values are the core principles guiding organizations and individuals in helping others, focusing on compassion, generosity, and social responsibility."   
    ];

    const handleCardClick = (index) => {
        const newFlippedCards = [...flippedCards];
        newFlippedCards[index] = !newFlippedCards[index];  
        setFlippedCards(newFlippedCards);
    };

    return (
        <Controls.Grid container direction="row" spacing={2} justifyContent="center" my={5}>
            <Controls.Grid item xs={10}  lg={9} xl={10} >
                <Controls.Grid item>
                    <Controls.Typography variant='caption2' sx={{ 
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        lineHeight: '28px',
                        textAlign: 'left',
                    }}>Our Targets</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item>
                    <Controls.Typography variant='caption1' sx={{ 
                        color: theme.palette.one.green,
                        fontSize: {xs:"1.2rem",sm:'1.6rem'},
                        fontWeight: 700,
                        lineHeight: {xs:"30px",sm:'40px',md:"50px"},
                        textAlign: 'left',
                    }}>It reflects our Core Values of TRANSFORMATION, INTEGRITY, DIVERSITY, EXCELLENCE, and EQUALITY.</Controls.Typography>
                </Controls.Grid>
            </Controls.Grid>

            <Controls.Grid item xs={10}  lg={9} xl={10}>
                <Controls.Grid container spacing={2} justifyContent="center">
                    {frontCard.map((item, index) => (
                        <Controls.Grid item key={index} xs={12} sm={6} md={3} >
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
                                        <Controls.Box component='img' src={item.img} sx={{ width:"80px",height:"80px"}}/>
                                        <Controls.Grid item>
                                        <Controls.Typography variant="caption1" sx={{ color: theme.palette.one.green, fontWeight: "bold",alignItems:"center",fontSize:{xs:'1.2rem',sm:"1.8rem",md:"1rem",lg:"1.4rem",xl:"1.8rem"} }}>
                                            {item.text}
                                        </Controls.Typography>
                                        </Controls.Grid>
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
                                        <Controls.Typography variant="caption1" component="div" sx={{ color: theme.palette.one.main ,fontSize:{xs:'1rem',sm:"1.1rem",md:'0.8rem',lg:"1rem",xl:"1.4rem"}}}>
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
