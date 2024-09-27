import { createTheme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        one: {
            main: 'white',
            green:"#107A66",
            yellow:"#ffc700",
            lightGreen:'#C7E7DF'
        }

    },
   
    typography: {
      
        caption1:{
            fontFamily: "poppins",
        },
        caption2:{
            fontSize: '14px',
            fontFamily: "Montserrat",
        },
        
    }
})
export default theme;