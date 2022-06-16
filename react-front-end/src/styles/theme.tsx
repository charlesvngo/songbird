import { ITheme } from "../Interfaces";
import { createTheme } from "@mui/material";

export const lightTheme: ITheme = createTheme({
  palette: {
    primary: {
      main: "#11AD94", // Blue Green
    },
    secondary: {
      main: "#3EA4B4", // Pacific Blue
    },
    background: {
      default: "#F4F4FF",
    },
  },
});

export const darkTheme: ITheme = createTheme({
  palette: {
    primary: {
      main: "#11AD94", // Blue Green
    },
    secondary: {
      main: "#3EA4B4", // Pacific Blue
    },
    background: {
      default: "#121212",
    },
  },
});

export const partyTheme: ITheme = createTheme({
  palette: {
    primary: {
      main: "#11AD94", // Blue Green
    },
    secondary: {
      main: "#3EA4B4", // Pacific Blue
    },
    background: {
      default: "#F4F4FF",
    },
  },
});
