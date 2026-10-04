import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/useLanguage";
import type { Language } from "../../types/language";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGE_CODES = {
	en: "GB",
	fr: "FR",
	pt: "PT",
} as const;

export const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguage();
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (lang: Language) => {
		setLanguage(lang);
		setIsOpen(false);
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.trigger} onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen} aria-label="Changer de langue">
				<ReactCountryFlag countryCode={LANGUAGE_CODES[language]} svg />
				<span>{language.toUpperCase()}</span>
				<ChevronDown size={18} />
			</button>

			{isOpen && (
				<ul className={styles.menu}>
					{(Object.entries(LANGUAGE_CODES) as [Language, string][]).map(([code, flagCode]) => (
						<li key={code}>
							<button onClick={() => handleSelect(code)}>
								<ReactCountryFlag countryCode={flagCode} svg />
								{t(`languages.${code}`)}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
