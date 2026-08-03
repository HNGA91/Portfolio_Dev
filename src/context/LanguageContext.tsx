import type { Language } from "../types/language";

export interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
}
