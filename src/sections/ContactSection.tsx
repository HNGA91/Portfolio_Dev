import { useRef, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { TerminalCard } from "../components/TerminalCard/TerminalCard";
import { FloatingField } from "../components/FloatingField/FloatingField";
import { AttachmentPicker } from "../components/AttachmentPicker/AttachmentPicker";
import { ALLOWED_ATTACHMENT_TYPES, CONTACT_LIMITS, validateContactForm } from "../utils/validateContactForm";
import type { ContactFormData, ContactFormErrors } from "../types/contact";
import styles from "./ContactSection.module.css";

type SendStatus = "idle" | "sending" | "success" | "error" | "tooFast";

const ACCEPTED_TYPES = ALLOWED_ATTACHMENT_TYPES.join(",");
const EMPTY_FORM: ContactFormData = { email: "", subject: "", message: "" };

export const ContactSection = () => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
	const [attachments, setAttachments] = useState<File[]>([]);
	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [status, setStatus] = useState<SendStatus>("idle");
	const [honeypot, setHoneypot] = useState("");
	const startedAt = useRef<number | null>(null);

	const translateError = (key?: string) => (key ? t(key, CONTACT_LIMITS) : undefined);

	const clearStatus = () => {
		setStatus((prev) => (prev === "sending" ? prev : "idle"));
	};

	const handleFormInput = () => {
		if (startedAt.current === null) startedAt.current = Date.now();
	};

	const updateField = (field: keyof ContactFormData) => (value: string) => {
		clearStatus();
		setFormData((prev) => ({ ...prev, [field]: value }));
		setErrors((prev) => ({ ...prev, [field]: undefined }));
	};

	const updateAttachments = (files: File[]) => {
		clearStatus();
		setAttachments(files);
		setErrors((prev) => ({ ...prev, attachments: undefined }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (status === "sending") return;

		const validationErrors = validateContactForm(formData, attachments);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length > 0) return;

		setStatus("sending");

		const body = new FormData();
		body.append("email", formData.email.trim());
		body.append("subject", formData.subject.trim());
		body.append("message", formData.message.trim());
		body.append("website", honeypot);
		body.append("elapsedMs", String(startedAt.current ? Date.now() - startedAt.current : 0));
		attachments.forEach((file) => body.append("attachments", file));

		try {
			const response = await fetch("/api/contact", { method: "POST", body });

			if (response.ok) {
				setFormData(EMPTY_FORM);
				setAttachments([]);
				setHoneypot("");
				startedAt.current = null;
				setStatus("success");
				return;
			}

			const data: { error?: string } = await response.json().catch(() => ({}));

			if (data.error === "invalid_email") {
				setErrors({ email: "contact.errors.emailRejected" });
				setStatus("idle");
			} else if (data.error === "invalid_attachments") {
				setErrors({ attachments: "contact.errors.attachmentsRejected" });
				setStatus("idle");
			} else {
				setStatus(data.error === "too_fast" ? "tooFast" : "error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<section id="contact" className={styles.section}>
			<SectionTitle>{t("sections.contact")}</SectionTitle>
			<TerminalCard title={t("contact.cardTitle")}>
				<form className={styles.form} onSubmit={handleSubmit} onInput={handleFormInput} noValidate>
					<div className={styles.honeypot} aria-hidden="true">
						<label>
							Website
							<input
								type="text"
								name="website"
								tabIndex={-1}
								autoComplete="off"
								value={honeypot}
								onChange={(event) => setHoneypot(event.target.value)}
							/>
						</label>
					</div>

					<FloatingField
						label={t("contact.fields.email")}
						type="email"
						autoComplete="email"
						value={formData.email}
						onChange={updateField("email")}
						error={translateError(errors.email)}
					/>
					<FloatingField
						label={t("contact.fields.subject")}
						value={formData.subject}
						onChange={updateField("subject")}
						error={translateError(errors.subject)}
					/>
					<FloatingField
						label={t("contact.fields.message")}
						multiline
						value={formData.message}
						onChange={updateField("message")}
						error={translateError(errors.message)}
					/>

					<AttachmentPicker
						files={attachments}
						onChange={updateAttachments}
						accept={ACCEPTED_TYPES}
						error={translateError(errors.attachments)}
					/>

					<button type="submit" className={styles.submit} disabled={status === "sending"}>
						<Send size={18} />
						{status === "sending" ? t("contact.sending") : t("contact.submit")}
					</button>

					{(status === "success" || status === "error" || status === "tooFast") && (
						<p
							className={`${styles.feedback} ${status === "success" ? "" : styles.feedbackError}`}
							role={status === "success" ? "status" : "alert"}
						>
							{t(`contact.status.${status}`)}
						</p>
					)}
				</form>
			</TerminalCard>
		</section>
	);
};
