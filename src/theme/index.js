import { purple } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles"
export const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
        purple:purple[500]
      },
      common:{
         white:"#e3f2fd"
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });