import { useId } from "react";
import styles from "./FloatingField.module.css";

type FloatingFieldProps = {
	label: string;
	value: string;
	onChange: (value: string) => void;
	type?: "text" | "email";
	multiline?: boolean;
	autoComplete?: string;
	error?: string;
};

export const FloatingField = ({ label, value, onChange, type = "text", multiline = false, autoComplete, error }: FloatingFieldProps) => {
	const id = useId();
	const errorId = `${id}-error`;

	const sharedProps = {
		id,
		value,
		placeholder: " ",
		autoComplete,
		className: styles.input,
		"aria-invalid": Boolean(error),
		"aria-describedby": error ? errorId : undefined,
	};

	return (
		<div className={styles.field}>
			{multiline ? (
				<textarea {...sharedProps} rows={6} onChange={(event) => onChange(event.target.value)} />
			) : (
				<input {...sharedProps} type={type} onChange={(event) => onChange(event.target.value)} />
			)}
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			{error && (
				<p id={errorId} className={styles.error} role="alert">
					{error}
				</p>
			)}
		</div>
	);
};
