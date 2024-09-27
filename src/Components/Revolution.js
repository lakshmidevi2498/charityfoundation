import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const Revolution = () => {
    return (
        <>
            <Controls.Grid container xs={12} sx={{ justifyContent: "center" ,}} my={7}>
                <Controls.Grid item xs={12}>
                    <Controls.Typography variant='h5' sx={{
                        color: theme.palette.one.green, fontFamily: 'Poppins',
                        fontSize: '40px',
                        fontWeight: 400,
                        lineHeight: '60px',
                        textAlign: 'center',
                    }}>Join the Revolution</Controls.Typography>

                    <Controls.Grid item sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",}} xs={8}gap={3}>
                        <Controls.TextField label="Enter Message" size='small' sx={{ width: '25%', }} xs={6}></Controls.TextField>
                        <Controls.Button variant='contained' sx={{color:theme.palette.one.main,backgroundColor:theme.palette.one.green,textTransform:"inherit",paddingX:"60px",paddingY:"8px" }} xs={6}>Submit  Message</Controls.Button>
                    </Controls.Grid>
                </Controls.Grid>

            </Controls.Grid>

        </>
    )
}

export default Revolution