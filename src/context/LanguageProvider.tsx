import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Language } from "../types/language";
import { LanguageContext } from "./LanguageContext";
import i18next from "../i18n/config";

const HTML_LANG: Record<Language, string> = {
	fr: "fr",
	en: "en",
	pt: "pt-PT",
};

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [language, setLanguageState] = useState<Language>("fr");

	const setLanguage = (newLanguage: Language) => {
		setLanguageState(newLanguage);
	};

    useEffect(() => {
		document.documentElement.lang = HTML_LANG[language];

		i18next.changeLanguage(language).then(() => {
			document.title = i18next.t("meta.title");
		});
	}, [language]);

	return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};