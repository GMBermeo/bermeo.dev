"use client";
import React, { useCallback } from "react";

export const LocaleContext = React.createContext(null as any);

export const LocaleStorage = ({ children }: any) => {
  const locales = ["en", "br"];
  const defaultLocale = "en";
  const locale = "en";

  const isEng = useCallback(() => {
    return locale === "en";
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, locales, defaultLocale, isEng }}>
      {children}
    </LocaleContext.Provider>
  );
};
