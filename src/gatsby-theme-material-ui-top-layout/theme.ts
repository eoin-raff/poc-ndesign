import { createTheme, responsiveFontSizes } from "@mui/material"
import ItalianPlateNo1ExpandedBold from "../../static/fonts/ItalianPlateNo1Expanded-Demibold.woff2"
import ItalianPlateNo1ExpandedLight from "../../static/fonts/ItalianPlateNo1Expanded-Light.woff2"
import ItalianPlateNo1ExpandedLightItalic from "../../static/fonts/ItalianPlateNo1Expanded-LightItalic.woff2"

let theme = createTheme({
  typography: {
    fontFamily: ["Italian Plate No1 Expanded", "Montserrat", "sans-serif"].join(
      ","
    ),
    h1: {
      fontSize: 70,
      lineHeight: 1.3,
      fontStyle: "normal",
      fontWeight: 700,
    },
    h2: {
      fontSize: 42,
      lineHeight: 1.2,
      fontStyle: "normal",
      marginBottom: "1rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: 30,
      lineHeight: 1.2,
      fontStyle: "normal",
      marginTop: "0.5rem",
      marginBottom: "1.1rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.2,
      fontStyle: "normal",
      marginBottom: "1rem",
    },
    button: {
      fontWeight: 700,
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: "#1414FF",
      dark: "#1414A0",
    },
    common: {
      black: "#1A1A1A",
      white: "#FFFFFF",
    },
    secondary: {
      main: "#E65050",
    },
    warning: {
      main: "#FF965F",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1140,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Italian Plate No1 Expanded';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url(${ItalianPlateNo1ExpandedBold}) format('woff2');
        }
        @font-face {
          font-family: 'Italian Plate No1 Expanded';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${ItalianPlateNo1ExpandedLight}) format('woff2');
        }
        @font-face {
          font-family: 'Italian Plate No1 Expanded';
          font-style: italic;
          font-display: swap;
          font-weight: 400;
          src: url(${ItalianPlateNo1ExpandedLightItalic}) format('woff2');
        }
      `,
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: `13px 10px 10px`,
          minWidth: 170,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          padding: `13px 10px 10px`,
          minWidth: 170,
          borderRadius: 0,
          marginTop: 10,
        },
        outlined: {
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        },
      },
    },
  },
})
theme = createTheme(theme, {
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.palette.warning.main,
        },
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: "white",
        color: "black",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          color: "white",
        },
      },
      containedPrimary: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  },
})
theme = responsiveFontSizes(theme)
export default theme
