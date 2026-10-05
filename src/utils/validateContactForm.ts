import type { ContactFormData, ContactFormErrors } from "../types/contact";

export const CONTACT_LIMITS = {
	subjectMax: 150,
	messageMin: 10,
	messageMax: 5000,
	maxFiles: 3,
	maxTotalMb: 3,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const ALLOWED_ATTACHMENT_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp", "text/plain"] as const;

export const validateContactForm = ({ email, subject, message }: ContactFormData, attachments: File[] = []): ContactFormErrors => {
	const errors: ContactFormErrors = {};

	const cleanEmail = email.trim();
	const cleanSubject = subject.trim();
	const cleanMessage = message.trim();

	if (!cleanEmail) {
		errors.email = "contact.errors.emailRequired";
	} else if (!EMAIL_REGEX.test(cleanEmail)) {
		errors.email = "contact.errors.emailInvalid";
	}

	if (!cleanSubject) {
		errors.subject = "contact.errors.subjectRequired";
	} else if (cleanSubject.length > CONTACT_LIMITS.subjectMax) {
		errors.subject = "contact.errors.subjectTooLong";
	}

	if (!cleanMessage) {
		errors.message = "contact.errors.messageRequired";
	} else if (cleanMessage.length < CONTACT_LIMITS.messageMin) {
		errors.message = "contact.errors.messageTooShort";
	} else if (cleanMessage.length > CONTACT_LIMITS.messageMax) {
		errors.message = "contact.errors.messageTooLong";
	}

	const totalBytes = attachments.reduce((sum, file) => sum + file.size, 0);

	if (attachments.length > CONTACT_LIMITS.maxFiles) {
		errors.attachments = "contact.errors.attachmentsTooMany";
	} else if (attachments.some((file) => !(ALLOWED_ATTACHMENT_TYPES as readonly string[]).includes(file.type))) {
		errors.attachments = "contact.errors.attachmentsBadType";
	} else if (totalBytes > CONTACT_LIMITS.maxTotalMb * 1024 * 1024) {
		errors.attachments = "contact.errors.attachmentsTooLarge";
	}

	return errors;
};
