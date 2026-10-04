import { useTranslation } from "react-i18next";
import { useWordCycle } from "../hooks/useWordCycle";
import styles from "./HomeSection.module.css";

const ROLES = [
	{ word: "Front-End", duration: 2500 },
	{ word: "Back-End", duration: 2500 },
	{ word: "Full-Stack", duration: 5000 },
];

export const HomeSection = () => {
	const { t } = useTranslation();
	const currentRole = useWordCycle(ROLES);

	return (
		<section id="home" className={styles.section}>
			<h1 className={styles.title}>
				<span className={styles.bracket} aria-hidden="true">
					[
				</span>
				{t("home.role")}
				<span className={styles.word}>{currentRole}</span>
				<span className={styles.exclamation}>!</span>
				<span className={styles.bracket} aria-hidden="true">
					]
				</span>
			</h1>
		</section>
	);
};
