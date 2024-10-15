import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette:{
        primary:{
            main:"#007693"
        },
        secondary:{
            main:"#B5D4DC"
        }
    },
    typography: {
      fontFamily: 'Avenir-Heavy',
      h1: {
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      body1: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.5,
      },
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              variants: [
                {
                  props: { variant: 'dashed', color: 'primary' },
                  
                },
              ],
            },
          },
        },
        
      },
})