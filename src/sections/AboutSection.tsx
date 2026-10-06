import { Mail, Download } from "lucide-react";
import linkedinIcon from "../assets/icons/social/linkedin.svg";
import githubIcon from "../assets/icons/techno/github.svg";
import { TerminalCard } from "../components/TerminalCard/TerminalCard";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import styles from "./AboutSection.module.css";
import { useLanguage } from "../context/useLanguage";
import type { Language } from "../types/language";

const CV_FILES: Record<Language, string> = {
	fr: "/cv/CV-Portfolio-Developpeur-Web-fr.pdf",
	en: "/cv/CV-Portfolio-Developpeur-Web-en.pdf",
	pt: "/cv/CV-Portfolio-Developpeur-Web-pt.pdf",
};

export const AboutSection = () => {
    const { t } = useTranslation();
    const { language } = useLanguage();

	return (
		<section id="about" className={styles.section}>
			<SectionTitle>{t("sections.about")}</SectionTitle>
			<TerminalCard title={t("about.title")}>
				<p className={styles.text}>{t("about.text")}</p>

				<div className={styles.socials}>
					<a href="https://fr.linkedin.com/in/hervé-n-goma-b84965213" target="_blank" rel="noopener noreferrer">
						<img src={linkedinIcon} alt="LinkedIn" width={22} height={22} />
					</a>
					<a href="https://github.com/HNGA91" target="_blank" rel="noopener noreferrer">
						<img src={githubIcon} alt="GitHub" width={22} height={22} />
					</a>
					<a href="mailto:contact@herve-ngoma.dev">
						<Mail size={25} /> contact@herve-ngoma.dev
					</a>
				</div>

				<a href={CV_FILES[language]} download className={styles.cvButton}>
					<Download size={18} />
					{t("about.button")}
				</a>
			</TerminalCard>
		</section>
	);
};
