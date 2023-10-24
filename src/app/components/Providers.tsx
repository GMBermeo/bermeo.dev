"use client";
import { theme } from "@contexts";
import { CustomThemeProvider, LocaleProvider } from "@contexts";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LocaleProvider>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </LocaleProvider>
    </>
  );
};
