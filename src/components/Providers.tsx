"use client";
import { CustomThemeProvider } from "@/hooks";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CustomThemeProvider>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </CustomThemeProvider>
    </>
  );
};
