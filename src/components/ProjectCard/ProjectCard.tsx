import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Code } from "lucide-react";
import type { Project } from "../../types/project";
import { TerminalCard } from "../TerminalCard/TerminalCard";
import { SkillCard } from "../SkillCard/SkillCard";
import styles from "./ProjectCard.module.css";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { ImageLightbox } from "../ImageLightbox/ImageLightbox";

type ProjectTab = "description" | "technologies" | "links";

const TABS: ProjectTab[] = ["description", "technologies", "links"];

export const ProjectCard = ({ id, images, technologies, websiteUrl, codeUrl }: Project) => {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState<ProjectTab>("description");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const title = t(`projects.items.${id}.title`);

	const panelClass = (tab: ProjectTab) => `${styles.panel} ${activeTab === tab ? "" : styles.panelHidden}`;

	return (
		<>
			<TerminalCard title={t(`projects.items.${id}.title`)} flush>
				<div className={styles.media}>
					<ImageCarousel images={images} alt={title} onImageClick={setLightboxIndex} />
				</div>

				<div className={styles.panels}>
					<div role="tabpanel" className={panelClass("description")}>
						<p>{t(`projects.items.${id}.description`)}</p>
					</div>

					<div role="tabpanel" className={panelClass("technologies")}>
						<div className={styles.techGrid}>
							{technologies.map((skill) => (
								<SkillCard key={skill.name} {...skill} />
							))}
						</div>
					</div>

					<div role="tabpanel" className={panelClass("links")}>
						<div className={styles.links}>
							{websiteUrl && (
								<a href={websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
									<Globe size={18} />
									{t("projects.website")}
								</a>
							)}
							<a href={codeUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
								<Code size={18} />
								{t("projects.code")}
							</a>
						</div>
					</div>
				</div>

				<div className={styles.tabs} role="tablist">
					{TABS.map((tab) => (
						<button key={tab} role="tab" aria-selected={activeTab === tab} className={styles.tab} onClick={() => setActiveTab(tab)}>
							{t(`projects.tabs.${tab}`)}
						</button>
					))}
				</div>
			</TerminalCard>
			{lightboxIndex !== null && (
				<ImageLightbox title={title} images={images} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
			)}
		</>
	);
};
