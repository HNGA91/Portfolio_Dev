import { useRef, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Paperclip, X } from "lucide-react";
import { CONTACT_LIMITS } from "../../utils/validateContactForm";
import styles from "./AttachmentPicker.module.css";

type AttachmentPickerProps = {
	files: File[];
	onChange: (files: File[]) => void;
	accept: string;
	error?: string;
};

export const AttachmentPicker = ({ files, onChange, accept, error }: AttachmentPickerProps) => {
	const { t } = useTranslation();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
		onChange([...files, ...Array.from(event.target.files ?? [])]);
		event.target.value = "";
	};

	const removeFile = (index: number) => {
		onChange(files.filter((_, i) => i !== index));
	};

	return (
		<div className={styles.picker}>
			<input ref={inputRef} type="file" multiple accept={accept} onChange={handleSelect} className={styles.hiddenInput} tabIndex={-1} />

			<button type="button" className={styles.addButton} onClick={() => inputRef.current?.click()}>
				<Paperclip size={18} />
				{t("contact.attachments.add")}
			</button>
			<p className={styles.hint}>{t("contact.attachments.hint", CONTACT_LIMITS)}</p>

			{files.length > 0 && (
				<ul className={styles.list}>
					{files.map((file, index) => (
						<li key={`${file.name}-${index}`} className={styles.item}>
							<span className={styles.name}>{file.name}</span>
							<span className={styles.size}>{Math.max(1, Math.round(file.size / 1024))} Ko</span>
							<button type="button" onClick={() => removeFile(index)} aria-label={t("contact.attachments.remove", { name: file.name })}>
								<X size={16} />
							</button>
						</li>
					))}
				</ul>
			)}

			{error && (
				<p className={styles.error} role="alert">
					{error}
				</p>
			)}
		</div>
	);
};
