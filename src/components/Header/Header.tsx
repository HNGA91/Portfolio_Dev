import styles from "./Header.module.css";
import { useTheme } from "../../context/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { SECTION_IDS } from "../../data/sectionIds";
import { Home, UserRound, ListChecks, FolderGit2, Mail, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
    const activeSection = useActiveSection(SECTION_IDS);
    const scrollProgress = useScrollProgress();
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<span className={styles.name}>
					<span className={styles.spanTittle}>&gt;_N'Goma</span>
					<span className={styles.spanTittle}>&gt;_Louis-Hervé</span>
				</span>
			</div>

			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li>
						<a href="#home" className={activeSection === "home" ? styles.active : undefined}>
							<Home size={18} />
							./{t("nav.home")}
						</a>
					</li>
					<li>
						<a href="#about" className={activeSection === "about" ? styles.active : undefined}>
							<UserRound size={18} />
							./{t("nav.about")}
						</a>
					</li>
					<li>
						<a href="#skills" className={activeSection === "skills" ? styles.active : undefined}>
							<ListChecks size={18} />
							./{t("nav.skills")}
						</a>
					</li>
					<li>
						<a href="#projects" className={activeSection === "projects" ? styles.active : undefined}>
							<FolderGit2 size={18} />
							./{t("nav.projects")}
						</a>
					</li>
					<li>
						<a href="#contact" className={activeSection === "contact" ? styles.active : undefined}>
							<Mail size={18} />
							./{t("nav.contact")}
						</a>
					</li>
				</ul>
			</nav>

			<div className={styles.right}>
				<div className={styles.actions}>
					<button className={styles.themeToggle} onClick={toggleTheme} aria-label="Changer de thème" aria-pressed={theme === "dark"}>
						<Sun size={18} />
						<span className={styles.toggleTrack}>
							<span className={styles.toggleThumb} />
						</span>
						<Moon size={18} />
					</button>
					<LanguageSwitcher />
				</div>
				<div className={styles.progressTrack}>
					<div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
				</div>
			</div>
		</header>
	);
}
