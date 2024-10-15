import React, { useState } from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'
import useMediaQuery from '@mui/material/useMediaQuery';
import emailjs from 'emailjs-com'

const Revolution = () => {
    const [message , setMessage] = useState('')

    const handleMail = () => {
        setMessage('')
        const  service_id = 'service_okycvj8'
        const template_id= 'template_p2n7w53'
        const user_id = 'H9mKbRUHuFIU-z7Bh'
        const template_params = {
             message:message,
             to_name:"Charity Foundation"
         }
    


     
    emailjs.send(service_id , template_id , template_params , user_id)
    .then((response)=>{
     console.log("Email sent successfully",response)
    })
    .catch((error)=>{
     console.log("error sending Email",error)
    })
     

    }
    const isMobile = useMediaQuery('(max-width: 600px)'); 
    return (
        <>
            <Controls.Grid container   sx={{ justifyContent: "center" ,}} my={5}>
                <Controls.Grid item xs={10} >
                <Controls.Grid item sx={{justifyContent:'center',textAlign:"center"}} mb={4}>
                    <Controls.Typography variant='caption1' sx={{
                        color: theme.palette.one.green, fontFamily: 'Poppins',
                        fontSize: {xs:"30px",sm:'40px'},
                        fontWeight: 400,
                        lineHeight: '60px',
                        textAlign: 'center',
                        marginY:"20px"
                    }}>Join the Revolution</Controls.Typography>
                    </Controls.Grid>

                    <Controls.Grid item sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",}} xs={12} sm={10}gap={3} >
                        <Controls.TextField label="Enter Message" size='small'value={message} sx={{ width: {xs:"85%",sm:'40%',md:"35%",lg:"25%"}, }} xs={8} sm={6} onChange={(e) => {setMessage(e.target.value)}}></Controls.TextField>
                        <Controls.Button variant='contained' sx={{color:theme.palette.one.main,backgroundColor:theme.palette.one.green,textTransform:"inherit",paddingX:{xs:"10px",sm:"35px",md:"60px"},paddingY:{xs:"6px",sm:"8px"} }} xs={4} sm={6} onClick={handleMail}> {isMobile ? "submit" : "Submit  Message"}</Controls.Button>
                    </Controls.Grid>
                </Controls.Grid>

            </Controls.Grid>

        </>
    )
}

export default Revolution