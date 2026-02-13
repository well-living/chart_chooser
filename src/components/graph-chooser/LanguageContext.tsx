"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Lang, UI_TEXT, NODE_TEXT } from "./translations";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  nodeTitle: (id: string) => string;
  nodeDesc: (id: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ja");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ja" ? "en" : "ja"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = UI_TEXT[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang]
  );

  const nodeTitle = useCallback(
    (id: string): string => {
      const entry = NODE_TEXT[id];
      if (!entry) return id;
      return entry.title[lang];
    },
    [lang]
  );

  const nodeDesc = useCallback(
    (id: string): string => {
      const entry = NODE_TEXT[id];
      if (!entry?.description) return "";
      return entry.description[lang];
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, nodeTitle, nodeDesc }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
