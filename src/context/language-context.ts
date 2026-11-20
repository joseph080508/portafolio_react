import { createContext } from "react";
import type { Language } from "../i18n/translations";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
