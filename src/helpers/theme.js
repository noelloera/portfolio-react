import { createMuiTheme } from "@material-ui/core";
//import desired fonts
import "typeface-montserrat";
import "typeface-work-sans";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff3697", contrastText: "#fff" },
    secondary: { main: "#ffffff", contrastText: "#fff" },
  },
  overrides: {
    MuiAppBar: {
      regular: {
        borderBottom: "none",
      },
    },
    MuiToolbar: {
      regular: {
        borderBottom: "none",
        minHeight: "3px",
        "@media (min-width: 600px)": {
          minHeight: "0px",
        },
      },
    },
  },
  typography: {
    h2: {
      fontSize: "1.8em",
      fontFamily: "Montserrat",
      fontWeight: "600",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.3em",
      },
      [defaultTheme.breakpoints.down(380)]: {
        fontSize: "1.4em",
      },
    },
    h4: {
      fontSize: "2.5em",
      fontWeight: "600",

      fontFamily: "Montserrat",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.7em",
      },
      [defaultTheme.breakpoints.down(380)]: {
        fontSize: "1.4em",
      },
    },
    //Try refactoring subtitle to use h4 attributes
    subtitle1: {
      fontSize: "2em",
      fontWeight: "700",
      fontFamily: "Montserrat",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.7em",
      },
      [defaultTheme.breakpoints.down(380)]: {
        fontSize: "1.4em",
      },
    },
  },
});

export default theme;
