import type { Skill } from "../../types/skill";
import styles from "./SkillCard.module.css";

export const SkillCard = ({ name, icon }: Skill) => {
	return (
		<div className={styles.card}>
			<div className={styles.iconWrapper}>
				<img src={icon} alt={name} width={45} height={45} />
			</div>
			<span className={styles.name}>{name}</span>
		</div>
	);
};
