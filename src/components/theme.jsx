import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#E0FFFF",
      main: "#434454",
      dark: "#004165",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#D3D3D3",
      main: "#000000",
      dark: "#333333",
      contrastText: "#E5E4E2",
    },
  },
});
export default theme;
