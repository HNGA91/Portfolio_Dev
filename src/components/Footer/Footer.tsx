import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<p>{t("footer.developedBy")} Hervé N'Goma</p>
			<p>
				© {new Date().getFullYear()} — {t("footer.rights")}
			</p>
			<a href="mailto:contact@herve-ngoma.dev">contact@herve-ngoma.dev</a>
		</footer>
	);
};
