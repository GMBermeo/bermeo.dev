import { useRouter } from "next/router";
import React from "react";

export const LocaleContext = React.createContext(null as any);

export const LocaleStorage = ({ children }: any) => {
  const { locale, locales, defaultLocale, basePath, asPath } = useRouter();

  function isEng(): boolean {
    return locale === defaultLocale;
  }

  return (
    <LocaleContext.Provider
      value={{ locale, locales, defaultLocale, basePath, asPath, isEng }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
