import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
	children: string;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
	return (
		<h2 className={styles.title}>
			{children}
			<span className={styles.cursor} aria-hidden="true">
				|
			</span>
		</h2>
	);
};
