import { createTheme } from "@mui/material"; 


const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,       
          sm: 600,     
          md: 960,    
          lg: 1366,    
          xl: 1600,   
        },
      },
    palette: {
        one: {
            main: '#ffffff',
            green:"#107A66",
            yellow:"#ffc700",
            lightGreen:'#C7E7DF',
            gray:'#999999',
            lightgray:'#555555',
            button:"#575F6F",
            cardbg:"#EAF4F2",
            fields:'#EDF7F5'
        }

    },
   
    typography: {
      
        caption1:{
            fontFamily: "poppins",
            // fontSize:"30px"
        },
        caption2:{
            // fontSize: '14px',
            fontFamily: "Montserrat",
        },
        caption3:{
            faontFamily:"lato"
        },
        caption4:{
            faontFamily:"outfit"
        }
        
    }
})
export default theme;