import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'

const FooterComponent = () => {

    const content1 = [
        "About Us","Get" ,"Involved","Our Work","Blog","Contact Us","Donate Now"
    ]

    const content2 = [
"Child Education Services","Child Health & Nutrition Assistance","Food & Shelter Programs",
"Environmental Conservations","Stop Child Marriage","Emergency Relief & Disasters"
    ]

    const content3 = [      
"Volunteering & Internships","Corporate Partners","Careers"
    ]
    const content4 = [
        
"Email: infocharity@actimize.in" ,"Contact No: +91 7396455771"
    ]
  return (
    <>
    <Controls.Grid  container justifyContent='center' >
        <Controls.Grid item xs={12} sx={{backgroundColor:theme.palette.one.green,color:theme.palette.one.main}} gap={2} padding='20px'>
            <Controls.Grid container sx={{display:"flex",justifyContent:"space-between",}} mb={3}>
            <Controls.Grid item xs={2} sx={{}}>
                <Controls.Typography variant='h5' sx={{fontWeight:"bold"}}>Who We Are?</Controls.Typography>
                {content1.map((item,index)=>(
                    <Controls.ListItem key={index} sx={{fontWeight:"medium"}}>{item}</Controls.ListItem>
                ))}      
            </Controls.Grid>
            <Controls.Grid item xs={4} sx={{}}>
            <Controls.Typography variant='h5' sx={{fontWeight:"bold"}}>What We Do?</Controls.Typography>
                {content2.map((item,index)=>(
                    <Controls.ListItem key={index} sx={{fontWeight:"medium"}}>{item}</Controls.ListItem>
                ))}
            </Controls.Grid>
            <Controls.Grid item xs={4} sx={{}}>
                <Controls.Grid item>
                <Controls.Typography variant='h5' sx={{fontWeight:"bold"}}>Get Involved</Controls.Typography>
                {content3.map((item,index)=>(
                    <Controls.ListItem key={index} sx={{fontWeight:"medium"}}>{item}</Controls.ListItem>
                ))}
                </Controls.Grid>
                <Controls.Grid item>
                <Controls.Typography variant='h5' sx={{fontWeight:"bold"}}>For any queries</Controls.Typography>
                {content4.map((item,index)=>(
                    <Controls.ListItem key={index} sx={{fontWeight:"medium"}}>{item}</Controls.ListItem>
                ))}
                </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item xs={1} sx={{}}></Controls.Grid>
            </Controls.Grid>
            <Controls.Divider sx={{ width: '90%',  height: '2px',   backgroundColor: theme.palette.one.main,justifyContent:"center",textAlign:"center",margin:"auto" }} />
        <Controls.Grid sx={{justifyContent:"center",textAlign:"center",display:"flex"}} mt={3} gap={1}>
            <Controls.Box component='img' src='./assests/images/Vector (1).png' width='35px'  />
            <Controls.Typography sx={{fontWeight:"bold"}}>All copyrights Reserved 2024 |  Terms and Conditions |  Privacy Policy |   Charity No :ACT1002</Controls.Typography>
        </Controls.Grid>
        </Controls.Grid>
       

    </Controls.Grid>
    
    </>
  )
}

export default FooterComponent