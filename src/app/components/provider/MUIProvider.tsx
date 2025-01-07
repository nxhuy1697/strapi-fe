// Tạo một component Client riêng cho ThemeProvider
'use client';

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../../../public/assets/styles/theme";

export default function MUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
