import type { ReactNode } from "react";
import styles from "./TerminalCard.module.css";

type TerminalCardProps = {
	title: string;
	children: ReactNode;
	flush?: boolean;
};

export const TerminalCard = ({ title, children, flush =false }: TerminalCardProps) => {
	return (
		<div className={`${styles.card} ${flush ? styles.flush : ""}`}>
			<div className={styles.wrapper}>
				<div className={styles.window}>
					<i className={`${styles.dot} ${styles.close}`} aria-hidden="true"></i>
					<i className={`${styles.dot} ${styles.minimize}`} aria-hidden="true"></i>
					<i className={`${styles.dot} ${styles.resize}`} aria-hidden="true"></i>
					<h2 className={styles.title}>{title}</h2>
				</div>

				<div className={styles.body}>{children}</div>
			</div>
		</div>
	);
};
