import { ITheme } from "../Interfaces";
import { createTheme } from "@mui/material";

// doesn't change
export const navTheme: ITheme = createTheme({
  palette: {
    primary: {
      main: "#11AD94", // Blue Green
    },
  },
});

export const lightTheme: ITheme = createTheme({
  palette: {
    primary: {
      main: "#11AD94",
    },
    secondary: {
      main: "#3EA4B4",
    },
  },
});

export const gameBoardLight: ITheme = createTheme({
  palette: {
    primary: {
      main: "#11AD94",
    },
    secondary: {
      main: "#3EA4B4",
    },
    background: {
      default: "#F4F4FF",
    },
  },
});

export const darkTheme: ITheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#11AD94",
    },
    secondary: {
      main: "#3EA4B4",
    },
  },
});

export const gameBoardDark: ITheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#11AD94",
    },
    secondary: {
      main: "#3EA4B4",
    },
    background: {
      default: "#3F3F3F",
    },
  },
});

export const gameModeDark: ITheme = createTheme({
  palette: {
    background: {
      default: "#121212",
    },
  },
});
