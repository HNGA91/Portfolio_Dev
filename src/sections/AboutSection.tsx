import { Mail, Download } from "lucide-react";
import linkedinIcon from "../assets/icons/social/linkedin.svg";
import githubIcon from "../assets/icons/techno/github.svg";
import { TerminalCard } from "../components/TerminalCard/TerminalCard";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
	return (
		<section id="about" className={styles.section}>
			<TerminalCard title="À propos de moi">
				<p className={styles.text}>
					Développeur Full Stack certifié (Titre RNCP Niveau 6 – INSTA Paris), j'aime penser un projet comme un système : de l'architecture
					des données à l'expérience utilisateur, en passant par la logique métier. Je conçois des applications web de bout en bout, avec le
					souci de structurer et d'industrialiser mes développements — tests, CI/CD, bonnes pratiques. Curieux et rigoureux, je consacre une
					bonne partie de mon temps libre à explorer de nouveaux outils et à approfondir mes projets personnels, toujours dans l'idée de
					mettre cette exigence au service d'une équipe et de projets concrets.
				</p>

				<div className={styles.socials}>
					<a href="https://fr.linkedin.com/in/hervé-n-goma-b84965213" target="_blank" rel="noopener noreferrer">
						<img src={linkedinIcon} alt="LinkedIn" width={22} height={22} />
					</a>
					<a href="https://github.com/HNGA91" target="_blank" rel="noopener noreferrer">
						<img src={githubIcon} alt="GitHub" width={22} height={22} />
					</a>
					<a href="mailto:herve.ngoma@proton.me">
						<Mail size={25} /> contact@herve-ngoma.dev
					</a>
				</div>

				<a href="/cv/CV_NGoma_Louis-Herve.pdf" download className={styles.cvButton}>
					<Download size={18} />
					Télécharger mon CV
				</a>
			</TerminalCard>
		</section>
	);
};
