import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'
import { useNavigate } from 'react-router-dom'

const VolunteerComponent = ({textColor}) => {
    const navigate = useNavigate()

    const handleNaviagte = () => {
        navigate('/donate')

    }
    return (
        <>
            <Controls.Grid conatiner justifyContent="center" mb={4} mt={1} pt={4}>
                <Controls.Grid item xs={12} sx={{ justifyContent: "center", textAlign: "center" }}>
                    <Controls.Typography variant='caption1' sx={{
                         fontSize: {xs:"16px",sm:'32px'},
                        fontWeight: 500,
                        lineHeight: {xs:"20px",sm:'48px'},
                        textAlign: 'left', 
                        color:textColor
                    }}>Change their World. Change Yours. Changes Everything.
                    </Controls.Typography>
                    <Controls.Grid container sx={{ textAlign: "center", justifyContent: "center" }} my={5}>
                        <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} >
                            <Controls.Button variant='contained' sx={{ color: theme.palette.one.main, backgroundColor: theme.palette.one.green, borderRadius: "10px", textTransform: "inherit", paddingX: {xs:"5px",sm:"25px"},paddingY:"10px",fontSize:{xs:"10px",sm:"15px"}  }}>Become Volunteer</Controls.Button>
                            <Controls.Divider sx={{ backgroundColor:"#107A66", height: '1px', width: {xs:"50px",sm:"150px"},  }} />
                            <Controls.Typography variant='caption1'sx={{ border: "2px solid #107A66", borderRadius: "50px", padding: "5px", dispaly: "flex" }}>OR</Controls.Typography>
                            <Controls.Divider sx={{ backgroundColor:"#107A66",  height: '1px', width: {xs:"50px",sm:"150px"},  }} />
                            <Controls.Button variant='contained' sx={{ backgroundColor: theme.palette.one.green, borderRadius: "10px", textTransform: "inherit",   paddingX: {xs:"5px",sm:"35px"},paddingY:"10px",fontSize:{xs:"10px",sm:"15px"} }} onClick={handleNaviagte}>Donate Funds</Controls.Button>
                        </Controls.Box>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>

        </>
    )
}

export default VolunteerComponent