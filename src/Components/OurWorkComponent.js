import React, { useState } from 'react'; 
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import ReadMoreCardsComponent from './ReadMoreCardsComponent';

const OurWorkComponent = () => {
const [more ,setMore] = useState(false)

    const handleReadMore = () => {
        setMore(true)
    }
    const handleLess = () => {
        setMore(false)
    }


    return (
        <>
            <Controls.Grid container justifyContent='center' mt={5}>
                <Controls.Grid item xs={10} lg={9} xl={10}sx={{ justifyContent: "center" }}>
                    <Controls.Grid item mb={2}>
                        <Controls.Button
                            variant='outlined'
                            sx={{
                                color: theme.palette.one.yellow,
                                border: "2px solid #ffc700",
                                borderRadius: "20px",
                                textTransform: "initial",
                                paddingX: "25px",
                                fontSize:{xs:"16px",xl:"18px"}
                            }}
                        >
                            Our work
                        </Controls.Button>
                    </Controls.Grid>

                    <Controls.Grid item xs={12} md={10}>
                        <Controls.Typography
                            variant='caption1'
                            sx={{
                                fontSize: {xs:"20px",sm:"32px",xl:"40px"},
                                fontWeight: "bold",
                                color: theme.palette.one.green
                            }}
                        >
                            The smallest act of kindness is worth more than the grandest intention.
                            <Controls.Box component='span' sx={{ color: theme.palette.one.yellow }}>
                                Charity sees the need, not the cause.
                            </Controls.Box>
                        </Controls.Typography>
                    </Controls.Grid>

                   
                        <ReadMoreCardsComponent/>

                        
                        {more ? 
                        <>
                        <ReadMoreCardsComponent/>
                        <Controls.Grid item sx={{justifyContent:"center",alignItems:"center",display:"flex",}} onClick={handleLess}>
                            <Controls.Button variant='outlined' sx={{color:theme.palette.one.green,border:"2px solid #107A66",textTransform:"initial",paddingX:{xs:"20px",sm:"40px"},fontSize:{xs:"15px",sm:"20px"},borderRadius:"20px"}} >Read less Stories </Controls.Button>
                        </Controls.Grid>
                        </> : 
                        <>
                        <Controls.Grid item sx={{justifyContent:"center",alignItems:"center",display:"flex",}} onClick={handleReadMore}>
                            <Controls.Button variant='outlined' sx={{color:theme.palette.one.green,border:"2px solid #107A66",textTransform:"initial",paddingX:{xs:"20px",sm:"40px"},fontSize:{xs:"15px",sm:"20px"},borderRadius:"20px"}}>Read More Stories Here</Controls.Button>
                        </Controls.Grid>
                        </> }
                        
                    </Controls.Grid>
                </Controls.Grid> 
        </>
    );
};

export default OurWorkComponent;
