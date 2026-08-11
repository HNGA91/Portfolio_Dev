import { useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "../types/language";
import { LanguageContext } from "./LanguageContext";

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [language, setLanguageState] = useState<Language>("fr");

	const setLanguage = (newLanguage: Language) => {
		setLanguageState(newLanguage);
	};

	return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};