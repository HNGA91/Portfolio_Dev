import styles from "./Header.module.css";
import { useTheme } from "../../context/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { SECTION_IDS } from "../../data/sectionIds";
import { Home, UserRound, ListChecks, FolderGit2, Mail, Sun, Moon } from "lucide-react";

export const Header = () => {
    const activeSection = useActiveSection(SECTION_IDS);
    const scrollProgress = useScrollProgress();
    const { theme, toggleTheme } = useTheme();

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
					<button className={styles.themeToggle} onClick={toggleTheme} aria-label="Changer de thème" aria-pressed={theme === "dark"}>
						<Sun size={16} />
						<span className={styles.toggleTrack}>
							<span className={styles.toggleThumb} />
						</span>
						<Moon size={16} />
					</button>
				</div>
				<div className={styles.progressTrack}>
					<div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
				</div>
			</div>
		</header>
	);
}
