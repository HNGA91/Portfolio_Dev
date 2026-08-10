import styles from "./Header.module.css";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { SECTION_IDS } from "../../data/sectionIds";
import { Home, UserRound, ListChecks, FolderGit2, Mail } from "lucide-react";

export const Header = () => {
    const activeSection = useActiveSection(SECTION_IDS);
    const scrollProgress = useScrollProgress();

	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<span className={styles.name}>
					<span>&gt;_N'Goma</span>
					<span>&gt;_Louis-Hervé</span>
				</span>
			</div>

			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li>
						<a href="#home" className={activeSection === "home" ? styles.active : undefined}>
							<Home size={18} />
							./Accueil
						</a>
					</li>
					<li>
						<a href="#about" className={activeSection === "about" ? styles.active : undefined}>
							<UserRound size={18} />
							./À propos de moi
						</a>
					</li>
					<li>
						<a href="#skills" className={activeSection === "skills" ? styles.active : undefined}>
							<ListChecks size={18} />
							./Compétences
						</a>
					</li>
					<li>
						<a href="#projects" className={activeSection === "projects" ? styles.active : undefined}>
							<FolderGit2 size={18} />
							./Projets
						</a>
					</li>
					<li>
						<a href="#contact" className={activeSection === "contact" ? styles.active : undefined}>
							<Mail size={18} />
							./Contact
						</a>
					</li>
				</ul>
			</nav>

			<div className={styles.right}>
				<div className={styles.actions}>
                    {/* Bouton langue et bouton thème arriveront ici */}
                </div>
				<div className={styles.progressTrack}>
					<div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
				</div>
			</div>
		</header>
	);
}
