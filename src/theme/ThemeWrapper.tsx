"use client";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = () => {
  return createTheme({
    spacing: (factor: number) => `${0.75 * factor}rem`,
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              borderRadius: "1rem",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            width: "fit-content",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: {
            width: "fit-content",
          },
        },
      },
    },
  });
};

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
