import { ITheme } from "../interfaces/AppInterfaces";
import { createTheme } from "@mui/material";

export const theme: ITheme = createTheme({
  palette: {
    primary: {
      main: '#3EB489', // Mint Green
    },
    secondary: {
      main: '#3EA4B4', // Pacific Blue
    },
  },
});