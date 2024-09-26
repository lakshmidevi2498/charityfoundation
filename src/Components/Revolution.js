import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const Revolution = () => {
    return (
        <>
            <Controls.Grid container xs={12} sx={{ justifyContent: "center" ,border:"2px solid red"}}>
                <Controls.Grid item xs={12}>
                    <Controls.Typography variant='h5' sx={{
                        color: theme.palette.one.green, fontFamily: 'Poppins',
                        fontSize: '40px',
                        fontWeight: 400,
                        lineHeight: '60px',
                        textAlign: 'center',
                    }}>Join the Revolution</Controls.Typography>

                    <Controls.Grid item sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",paddingX:"50px"}} xs={8}gap={3}>
                        <Controls.TextField label="Enter Message" size='small' sx={{ width: '40%' }}></Controls.TextField>
                        <Controls.Button variant='contained' sx={{color:theme.palette.one.main,backgroundColor:theme.palette.one.green,textTransform:"inherit" }}>Submit  Message</Controls.Button>
                    </Controls.Grid>
                </Controls.Grid>

            </Controls.Grid>

        </>
    )
}

export default Revolution