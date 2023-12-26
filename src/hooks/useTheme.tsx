"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = createTheme({
    palette: {
      primary: { main: "#FF6257" },
      secondary: { main: "#3399FF" },
      background: { default: "#0E1012", paper: "#282A36" },
      text: { primary: "#E8E6E3", secondary: "#44475A", disabled: "#718CAD" },
    },
    typography: {
      fontFamily: poppins.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
