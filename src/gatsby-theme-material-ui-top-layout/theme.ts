import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Italian Plate No1 Expanded Bold",
      "Montserrat",
      "sans-serif",
    ].join(","),
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
  },
});

export default theme;
