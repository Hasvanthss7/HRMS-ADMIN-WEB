import React from "react";
import { createTheme, ThemeProvider, Button, styled } from "@mui/material";

// Create your MUI Theme
export const Theme = createTheme({
  palette: {
    primary: {
      main: "#007693",
    },
    secondary: {
      main: "#B5D4DC",
    },
  },
  typography: {
    h1: {
      fontFamily: "Avenir-Heavy",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "Avenir-Heavy",
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "Outfit-Medium",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "Outfit-Medium",
      fontSize: "22px",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: "Outfit-Medium",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: "Outfit-Medium",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: "Avenir-Medium",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "Outfit-Semibold",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#007693",
            color: "#FFFFFF",
            borderRadius: "8px",
            textTransform: "capitalize",
          fontSize: "18px",
          fontFamily: "Avenir-medium",
          opacity: 1,
          paddingRight: 16,
          boxShadow: "0px 3px 6px #00000029",
        },
      },
    },
  },
});
