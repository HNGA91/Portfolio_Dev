import { createContext } from "react";
import type { Language } from "../types/language";

export interface LanguageContextType {
	language: Language;
	setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);