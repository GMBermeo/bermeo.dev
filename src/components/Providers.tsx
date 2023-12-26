"use server";

import { CustomThemeProvider } from "@hooks";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CustomThemeProvider>{children};</CustomThemeProvider>;
};
