import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (context === undefined) {
		throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider");
	}

	return context;
};
