import { useEffect, useState } from "react";
import { Home, UserRound, ListChecks, FolderGit2, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { SECTION_IDS } from "../../data/sectionIds";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./Header.module.css";

const NAV_ITEMS = [
	{ id: "home", icon: Home },
	{ id: "about", icon: UserRound },
	{ id: "skills", icon: ListChecks },
	{ id: "projects", icon: FolderGit2 },
	{ id: "contact", icon: Mail },
] as const;

export const Header = () => {
	const activeSection = useActiveSection(SECTION_IDS);
	const scrollProgress = useScrollProgress();
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		if (!isMenuOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsMenuOpen(false);
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isMenuOpen]);

	const progressBar = (extraClass = "") => (
		<div className={`${styles.progressTrack} ${extraClass}`} aria-hidden="true">
			<div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
		</div>
	);

	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<span className={styles.name}>
					<span className={styles.spanTittle}>
						<span aria-hidden="true">&gt;_</span>N'Goma
					</span>
					<span className={styles.spanTittle}>
						<span aria-hidden="true">&gt;_</span>Louis-Hervé
					</span>
				</span>
			</div>

			<button
				className={styles.menuButton}
				onClick={() => setIsMenuOpen((prev) => !prev)}
				aria-expanded={isMenuOpen}
				aria-controls="site-menu"
				aria-label={isMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
			>
				{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			<div id="site-menu" className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						{NAV_ITEMS.map(({ id, icon: Icon }) => (
							<li key={id}>
								<a href={`#${id}`} className={activeSection === id ? styles.active : undefined} onClick={closeMenu}>
									<Icon size={18} />
									./{t(`nav.${id}`)}
								</a>
							</li>
						))}
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
					{progressBar()}
				</div>
			</div>

			{progressBar(styles.progressMobile)}
		</header>
	);
};
