import { Resend } from "resend";

const LIMITS = {
	subjectMax: 150,
	messageMin: 10,
	messageMax: 5000,
	maxFiles: 3,
	maxTotalBytes: 3 * 1024 * 1024,
	minFillMs: 3000,
};

const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp", "text/plain"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const DISPOSABLE_DOMAINS = new Set([
	"mailinator.com",
	"guerrillamail.com",
	"10minutemail.com",
	"yopmail.com",
	"temp-mail.org",
	"tempmail.com",
	"trashmail.com",
	"sharklasers.com",
	"getnada.com",
	"maildrop.cc",
	"dispostable.com",
	"fakeinbox.com",
	"mintemail.com",
	"throwawaymail.com",
]);

const reply = (status: number, body: Record<string, unknown>) =>
	new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const toBase64 = (buffer: ArrayBuffer) => {
	const bytes = new Uint8Array(buffer);
	let binary = "";
	for (let i = 0; i < bytes.length; i += 0x8000) {
		binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
	}
	return btoa(binary);
};

export async function POST(request: Request) {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return reply(400, { error: "invalid" });
	}

	// 1. Honeypot : un humain ne voit pas ce champ, un robot le remplit
	if (String(form.get("website") ?? "") !== "") return reply(200, { ok: true });

	// 2. Délai minimum entre la première saisie et l'envoi
	const elapsedMs = Number(form.get("elapsedMs"));
	if (!Number.isFinite(elapsedMs) || elapsedMs < LIMITS.minFillMs) return reply(400, { error: "too_fast" });

	// 3. Validation des champs
	const email = String(form.get("email") ?? "").trim();
	const subject = String(form.get("subject") ?? "").trim();
	const message = String(form.get("message") ?? "").trim();
	const domain = email.split("@")[1]?.toLowerCase() ?? "";

	if (!EMAIL_REGEX.test(email) || DISPOSABLE_DOMAINS.has(domain)) return reply(400, { error: "invalid_email" });
	if (!subject || subject.length > LIMITS.subjectMax) return reply(400, { error: "invalid" });
	if (message.length < LIMITS.messageMin || message.length > LIMITS.messageMax) return reply(400, { error: "invalid" });

	// 4. Validation des fichiers
	const files = form.getAll("attachments").filter((entry): entry is File => entry instanceof File && entry.size > 0);
	const totalBytes = files.reduce((sum, file) => sum + file.size, 0);

	if (files.length > LIMITS.maxFiles || totalBytes > LIMITS.maxTotalBytes || files.some((file) => !ALLOWED_TYPES.includes(file.type))) {
		return reply(400, { error: "invalid_attachments" });
	}

	// 5. Envoi
	const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
	if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
		console.error("Variables manquantes :", {
			RESEND_API_KEY: Boolean(RESEND_API_KEY),
			CONTACT_TO: Boolean(CONTACT_TO),
			CONTACT_FROM: Boolean(CONTACT_FROM),
		});
		return reply(500, { error: "server_config" });
	}

	const attachments = await Promise.all(files.map(async (file) => ({ filename: file.name, content: toBase64(await file.arrayBuffer()) })));

	const { error } = await new Resend(RESEND_API_KEY).emails.send({
		from: CONTACT_FROM,
		to: [CONTACT_TO],
		replyTo: email,
		subject: `[Portfolio] ${subject.replace(/[\r\n]+/g, " ")}`,
		text: `De : ${email}\n\n${message}`,
		attachments,
	});

	if (error) {
		console.error("Resend error:", error);
		return reply(502, { error: "send_failed" });
	}

	return reply(200, { ok: true });
}
