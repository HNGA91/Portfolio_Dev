import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../../context/useLanguage";
import type { Language } from "../../types/language";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGES = {
	fr: { code: "FR", label: "Français" },
	en: { code: "GB", label: "English" },
	pt: { code: "PT", label: "Portugais" },
} as const;

export const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (lang: Language) => {
		setLanguage(lang);
		setIsOpen(false);
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.trigger} onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen} aria-label="Changer de langue">
				<ReactCountryFlag countryCode={LANGUAGES[language].code} svg />
				<span>{language.toUpperCase()}</span>
				<ChevronDown size={18} />
			</button>

			{isOpen && (
				<ul className={styles.menu}>
					{(Object.entries(LANGUAGES) as [Language, (typeof LANGUAGES)[Language]][]).map(([code, { code: flagCode, label }]) => (
						<li key={code}>
							<button onClick={() => handleSelect(code)}>
								<ReactCountryFlag countryCode={flagCode} svg />
								{label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
