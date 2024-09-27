import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const VolunteerComponent = () => {
    return (
        <>
            <Controls.Grid conatiner justifyContent="center" mb={4}>
                <Controls.Grid item xs={12} sx={{ justifyContent: "center", textAlign: "center" }}>
                    <Controls.Typography variant='caption2' sx={{
                        fontFamily: 'Poppins', fontSize: '32px',
                        fontWeight: 500,
                        lineHeight: '48px',
                        textAlign: 'left',
                    }}>Change their World. Change Yours. Changes Everything.
                    </Controls.Typography>
                    <Controls.Grid container sx={{ textAlign: "center", justifyContent: "center" }} my={5}>
                        <Controls.Box sx={{ display: 'flex', alignItems: 'center' }} >
                            <Controls.Button variant='contained' sx={{ color: theme.palette.one.main, backgroundColor: theme.palette.one.green, borderRadius: "10px", textTransform: "inherit", paddingX: "25px",paddingY:"10px"  }}>Become Volunteer</Controls.Button>
                            <Controls.Divider sx={{ backgroundColor:"#107A66", height: '1px', width: "150px",  }} />
                            <Controls.Typography sx={{ border: "2px solid #107A66", borderRadius: "50px", padding: "5px", dispaly: "flex" }}>OR</Controls.Typography>
                            <Controls.Divider sx={{ backgroundColor:"#107A66",  height: '1px', width: "150px",  }} />
                            <Controls.Button variant='contained' sx={{ backgroundColor: theme.palette.one.green, borderRadius: "10px", textTransform: "inherit", paddingX: "20px",  paddingX: "35px",paddingY:"10px" }}>Donate Funds</Controls.Button>
                        </Controls.Box>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>

        </>
    )
}

export default VolunteerComponent