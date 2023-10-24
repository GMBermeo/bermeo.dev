import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = createTheme({
    palette: {
      primary: { main: "#FF6358" },
      secondary: { main: "#3399FF" },
      background: { default: "#0E1012", paper: "#282A36" },
      text: { primary: "#FFFFFF", secondary: "#44475A" },
    },
    typography: {
      fontFamily: "Poppins, Inter, sans-serif",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
