import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Language } from "../types/language";
import { LanguageContext } from "./LanguageContext";
import i18next from "../i18n/config";

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [language, setLanguageState] = useState<Language>("fr");

	const setLanguage = (newLanguage: Language) => {
		setLanguageState(newLanguage);
	};

    useEffect(() => {
		i18next.changeLanguage(language);
	}, [language]);

	return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};