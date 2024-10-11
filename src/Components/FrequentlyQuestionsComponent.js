import React, { useState } from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const FrequentlyQuestionsComponent = () => {
    const content = [
        { title: "Make a difference in the life of a child", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." },
        { title: "Let's do the right thing now", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." },
        { title: "Can I donate anonymously?", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." },
        { title: "Join your hand with us for a better life", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." },
        { title: "How do I cancel my recurring donation?", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." },
        { title: "How can I join in this Foundation ?", descp: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." },
    ]
    const [expanded, setExpanded] = useState(0);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Controls.Grid container justifyContent='center' >
                <Controls.Grid item sx={{ backgroundColor: "rgba(242, 194, 26, 0.10)", justifyContent: "center", alignItems: "center", display: 'flex' }} xs={12}>
                    <Controls.Grid item xs={10} sm={11} md={11} lg={10} sx={{ display: {xs:"block",sm:"flex"}, justifyContent: {xs:"none",sm:"space-between"}, paddingY: "20px", alignItems: "center" }}gap={1}>
                        <Controls.Grid item xs={12} md={6}>
                            <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
                                <Controls.Typography variant='caption2' sx={{  fontSize: "18px", }} >
                                    Have Any Question ?
                                </Controls.Typography>
                                <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                            </Controls.Box>
                            <Controls.Typography variant='caption1' sx={{ fontSize: "24px", color: theme.palette.one.green, }}>Frequently Asked Questions</Controls.Typography>

                            <Controls.Box

                                component="img"
                                src="./assests/images/unsplash_41fytYZ_-mM.png"
                                sx={{
                                    zIndex: 1,
                                    border: "10px solid rgba(242, 194, 26, 0.18)",
                                    width: { xs: "100%", sm: "330px", md: "340px", lg: "450px" },
                                    height: { xs: "100%", sm: "280px", md: "350px", lg: "400px" },
                                    objectFit: "cover",
                                    margin: { xs: "10px auto", md: "10px 40px" },
                                    display: "block",
                                    marginLeft: { xs: 0, sm: "0px", md: 0 },
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    '&:hover': {
                                        transform: "scale(1.07)",
                                        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                                    },
                                }}
                            />
                        </Controls.Grid>
                        <Controls.Grid item xs={12} md={6} sx={{ justifyContent: "center", alignItems: "center", }}>
                            {content.map((item, index) => (
                                <Controls.Grid item key={index}>
                                    <Controls.Accordion
                                        defaultExpanded={index === 0}
                                        expanded={expanded === index}
                                        onChange={handleAccordionChange(index)}
                                        sx={{ backgroundColor: expanded === index ? "#D0E7E2" : "white" }} // Correct syntax
                                    >
                                        <Controls.AccordionSummary
                                            expandIcon={expanded === index ? <Controls.RemoveIcon /> : <Controls.AddIcon />}
                                            aria-controls={`panel${index}-content`}
                                            id={`panel${index}-header`}
                                        >
                                            <Controls.Typography variant='caption1' sx={{ fontSize: "18px", fontWeight: "bold" }}>{item.title}</Controls.Typography>
                                        </Controls.AccordionSummary>
                                        <Controls.AccordionDetails>
                                            <Controls.Typography variant='caption1' sx={{ fontSize: "16px", }}>
                                                {item.descp}
                                            </Controls.Typography>
                                        </Controls.AccordionDetails>
                                    </Controls.Accordion>
                                </Controls.Grid>
                            ))}

                        </Controls.Grid>
                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default FrequentlyQuestionsComponent