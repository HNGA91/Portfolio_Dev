export interface ContactFormData {
	email: string;
	subject: string;
	message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData | "attachments", string>>;
