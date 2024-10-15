import React from 'react'
import Controls from '../commons/controls'

const QuoteComponent = () => {
  return (
    <>
    <Controls.Grid container justifyContent='center'>
        <Controls.Grid item xs={11} lg={10} sx={{justifyContent:"center",textAlign:"center",padding:"20px"}}>
            <Controls.Box component='img' src='./assests/images/“.png' sx={{ marginRight:{xs:"100px"},height:{xs:"30px",sm:"40px", }}}/>
            <Controls.Grid item xs={12} lg={10} sx={{textAlign:"center",justifyContent:"center",margin:"auto",padding:"5px"}}>
            <Controls.Typography variant='caption1' sx={{fontSize:{xs:"14px",sm:"18px",md:"20px",xl:'32px'},fontWeight:"medium"}}>The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.</Controls.Typography>
            </Controls.Grid>
            <Controls.Box component='img' src='./assests/images/“ (1).png' sx={{ marginLeft:{xs:"100px"},height:{xs:"30px",sm:"40px", }}}/>
        </Controls.Grid>

    </Controls.Grid>
    </>
  )
}

export default QuoteComponent