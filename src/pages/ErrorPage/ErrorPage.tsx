import { useRef } from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import { useTranslation } from "react-i18next";
import { useEyeTracking } from "../../hooks/useEyeTracking";
import styles from "./ErrorPage.module.css";

const getStatus = (error: unknown): number => {
	if (isRouteErrorResponse(error)) return error.status;
	return error ? 500 : 404;
};

export const ErrorPage = () => {
	const { t } = useTranslation();
	const error = useRouteError();
	const eyeRef = useRef<HTMLDivElement>(null);
	useEyeTracking(eyeRef);

	const status = getStatus(error);
	const [first, middle, last] = String(status).split("");
	const message = t(`errorPage.messages.${status}`, { defaultValue: t("errorPage.messages.default") });

	return (
		<main className={styles.page}>
			<div className={styles.code} role="img" aria-label={String(status)}>
				<span aria-hidden="true">{first}</span>
				{middle === "0" ? (
					<div className={styles.eye} ref={eyeRef} aria-hidden="true">
						<div className={styles.pupil} />
					</div>
				) : (
					<span aria-hidden="true">{middle}</span>
				)}
				<span aria-hidden="true">{last}</span>
			</div>

			<h1 className={styles.message}>{message}</h1>
			<Link to="/" className={styles.home}>
				{t("errorPage.home")}
			</Link>
		</main>
	);
};
