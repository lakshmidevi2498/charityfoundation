import React, { useState } from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const FrequentlyQuestionsComponent = () => {
    const content = [
        { title: "Make a difference in the life of a child", descp: "we believe that every child deserves a bright future filled with opportunities and hope. Children are the heart of our communities, and by investing in their well-being and development, we are creating a better tomorrow for everyone." },
        { title: "Let's do the right thing now", descp: "Your generosity has the power to change lives and uplift communities. By making a donation to Charity, you are directly contributing to our mission of is to empower individuals and communities in need by providing essential resources, support, and opportunities for growth." },
        { title: "Can I donate anonymously?", descp: "Yes, charity allows individuals to donate anonymously. Keep in mind that if you donate anonymously, you may not be able to claim a tax deduction for your contribution since you won’t have a record of your donation." },
        { title: "Join your hand with us for a better life", descp: "Together, we can create a world where every individual has the opportunity to thrive. By joining hands with Charity , you can be part of a movement dedicated to uplifting lives and making a meaningful difference in our community" },
        { title: "How do I cancel my recurring donation?", descp: "You can also send an email or call the charity directly, providing them with your donation details (such as the amount and frequency) to assist in cancelling your recurring donation." },
        { title: "How can I join in this Foundation ?", descp: ["Volunteering: Help with events, outreach, or administrative tasks.","Fundraising: Participate in or organize fundraising campaigns.","Advocacy: Support the foundation’s cause by raising awareness in your community.","Partnerships: If you represent an organization, inquire about partnership opportunities."] },
    ]
    const [expanded, setExpanded] = useState(0);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Controls.Grid container justifyContent='center' >
                <Controls.Grid item sx={{ backgroundColor: "rgba(242, 194, 26, 0.10)", justifyContent: "center", alignItems: "center", display: 'flex' }} xs={12}>
                    <Controls.Grid item xs={10} lg={9} xl={10} sx={{ display: {xs:"block",sm:"flex"}, justifyContent: {xs:"none",sm:"space-between"}, paddingY: "20px", alignItems: "center" }}gap={1}>
                        <Controls.Grid item xs={12} md={6} xl={4}>
                            <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} gap={1}>
                                <Controls.Typography variant='caption2' sx={{  fontSize: {xs:"18px",xl:"24px"} }} >
                                    Have Any Question ?
                                </Controls.Typography>
                                <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                            </Controls.Box>
                            <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"18px",md:"24px",sm:"30px"}, color: theme.palette.one.green, }}>Frequently Asked Questions</Controls.Typography>

                            <Controls.Box

                                component="img"
                                src="./assests/images/unsplash_41fytYZ_-mM.png"
                                sx={{
                                    zIndex: 1,
                                    border: "10px solid rgba(242, 194, 26, 0.18)",
                                    width: { xs: "100%", sm: "330px", md: "340px", lg: "450px",xl:"600px" },
                                    height: { xs: "100%", sm: "280px", md: "350px", lg: "400px" ,xl:"450px"},
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
                        <Controls.Grid item xs={12} md={6} xl={8}sx={{ justifyContent: "center", alignItems: "center", }}>
                            {content.map((item, index) => (
                                <Controls.Grid item key={index} >
                                    <Controls.Accordion
                                        defaultExpanded={index === 0}
                                        expanded={expanded === index}
                                        onChange={handleAccordionChange(index)}
                                        sx={{ backgroundColor: expanded === index ? "#D0E7E2" : "white" ,marginBottom: 0.5}} 
                                    >
                                        <Controls.AccordionSummary
                                            expandIcon={expanded === index ? <Controls.RemoveIcon /> : <Controls.AddIcon />}
                                            aria-controls={`panel${index}-content`}
                                            id={`panel${index}-header`}
                                        >
                                            <Controls.Typography variant='caption1' sx={{ fontSize: "18px", fontWeight: "bold" }}>{item.title}</Controls.Typography>
                                        </Controls.AccordionSummary>
                                        <Controls.AccordionDetails>
                                            {index === 5 ? ( <>
                                            {item.descp.map((point,index)=>(
                                                <Controls.ListItem key={index}>{point}</Controls.ListItem>
                                            ))}
                                            </>):(<>
                                                <Controls.Typography variant='caption1' sx={{ fontSize: "16px", }}>
                                                {item.descp}
                                            </Controls.Typography>
                                            
                                            </>)}
                                            
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