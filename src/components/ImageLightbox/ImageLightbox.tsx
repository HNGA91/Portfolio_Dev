import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { TerminalCard } from "../TerminalCard/TerminalCard";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import styles from "./ImageLightbox.module.css";

type ImageLightboxProps = {
	title: string;
	images: string[];
	initialIndex: number;
	onClose: () => void;
};

export const ImageLightbox = ({ title, images, initialIndex, onClose }: ImageLightboxProps) => {
	const { t } = useTranslation();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	return createPortal(
		<div
			className={styles.backdrop}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
		>
			<div className={styles.dialog} role="dialog" aria-modal="true" aria-label={title}>
				<TerminalCard title={title} flush>
					<div className={styles.media}>
						<ImageCarousel images={images} alt={title} initialIndex={initialIndex} keyboard />
					</div>
				</TerminalCard>

				<button className={styles.close} onClick={onClose} aria-label={t("projects.carousel.close")}>
					<X size={22} />
				</button>
			</div>
		</div>,
		document.body,
	);
};
