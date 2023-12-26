"use client";
import React, { useCallback, useMemo } from "react";

export const LocaleContext = React.createContext(null as any);

const locales = ["en", "br"];

export const LocaleStorage = ({ children }: any) => {
  const defaultLocale = "en";
  const locale = "en";

  const isEng = useCallback(() => {
    return locale === "en";
  }, [locale]);

  const contextValue = useMemo(() => {
    return { locale, locales, defaultLocale, isEng };
  }, [isEng]);

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};
