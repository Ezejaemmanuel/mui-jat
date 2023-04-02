//theme.js
import { createTheme } from "@mui/material/styles";
//import { red } from "@mui/material/colors";
import { Roboto } from "@fontsource/roboto";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
    h1: {
      fontSize: "3rem",
      fontWeight: "bold"
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "bold"
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold"
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold"
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "bold"
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold"
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "bold"
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: "bold"
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "bold"
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: "bold"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto';
          src: url(${Roboto}) format('woff2');
          font-weight: normal;
          font-style: normal;
        }
      `
    }
  }
});

export default theme;
