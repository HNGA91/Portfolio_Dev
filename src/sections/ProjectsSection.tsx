import { useTranslation } from "react-i18next";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { PROJECTS } from "../data/projects";
import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
	const { t } = useTranslation();

	return (
		<section id="projects" className={styles.section}>
			<SectionTitle>{t("sections.projects")}</SectionTitle>
			<div className={styles.grid}>
				{PROJECTS.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</section>
	);
};
