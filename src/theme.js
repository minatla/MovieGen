import { createMuiTheme } from "@material-ui/core/styles";
import { purple, lightblue } from "@material-ui/core/colors";

const theme = createMuiTheme({
    
    palette: {
        background: {
            default: "#1b163f",
            paper: "#120329"},
        primary: {
            main: '#80d1f9'
        },
        secondary: {
            main: '#e3e4ea'
        }
    },
    typography: {
        fontFamily: "BlinkMacSystemFont"
    },
})

export default theme;