import { IThemeLight, IThemeDark, IThemeParty } from "../Interfaces";
import { createTheme } from "@mui/material";

export const lightTheme: IThemeLight = createTheme({
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

export const darkTheme: IThemeDark = createTheme({
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

export const partyTheme: IThemeParty = createTheme({
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
