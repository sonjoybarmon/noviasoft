import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#2f3c7f",
      main: "#2f3c7f",
      dark: "#2f3c7f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#65cdfd",
      main: "#00B0FF",
      dark: "#0280bb",
      contrastText: "#fff",
    },
    common: {
      black: "#121212",
      white: "#efefef",
    },
    type: "light",
  },
  background: {
    paper: "#424242",
    default: "#303030",
  },
  text: {
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
    divider: "rgba(255, 255, 255, 0.12)",
  },
  typography: {
    htmlFontSize: 15,
    fontSize: 13,
    fontWeightMedium: "400",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: "none",
    },
  },
};

export default theme;
