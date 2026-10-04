import { TerminalCard } from "../components/TerminalCard/TerminalCard";
import { SkillCard } from "../components/SkillCard/SkillCard";
import { FRONTEND_SKILLS, BACKEND_SKILLS, DATABASE_SKILLS, TOOLS_SKILLS } from "../data/skills";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import styles from "./SkillsSection.module.css";

export const SkillsSection = () => {
    const { t } = useTranslation();

	return (
		<section id="skills" className={styles.section}>
			<SectionTitle>{t("sections.skills")}</SectionTitle>
			<div className={styles.row}>
				<TerminalCard title="Front-End">
					<div className={styles.grid}>
						{FRONTEND_SKILLS.map((skill) => (
							<SkillCard key={skill.name} {...skill} />
						))}
					</div>
				</TerminalCard>

				<TerminalCard title="Back-End">
					<div className={styles.grid}>
						{BACKEND_SKILLS.map((skill) => (
							<SkillCard key={skill.name} {...skill} />
						))}
					</div>
				</TerminalCard>
			</div>

			<div className={styles.row}>
				<TerminalCard title={t("skillsCards.database")}>
					<div className={styles.grid}>
						{DATABASE_SKILLS.map((skill) => (
							<SkillCard key={skill.name} {...skill} />
						))}
					</div>
				</TerminalCard>

				<TerminalCard title={t("skillsCards.tools")}>
					<div className={styles.grid}>
						{TOOLS_SKILLS.map((skill) => (
							<SkillCard key={skill.name} {...skill} />
						))}
					</div>
				</TerminalCard>
			</div>
		</section>
	);
};
