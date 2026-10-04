import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ImageCarousel.module.css";

type ImageCarouselProps = {
	images: string[];
	alt: string;
	initialIndex?: number;
	keyboard?: boolean;
	onImageClick?: (index: number) => void;
};

export const ImageCarousel = ({ images, alt, initialIndex = 0, keyboard = false, onImageClick }: ImageCarouselProps) => {
	const { t } = useTranslation();
	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	const goToPrevious = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	}, [images.length]);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	}, [images.length]);

	useEffect(() => {
		if (!keyboard) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") goToPrevious();
			if (event.key === "ArrowRight") goToNext();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [keyboard, goToPrevious, goToNext]);

	const hasMultipleImages = images.length > 1;
	const image = <img src={images[currentIndex]} alt={alt} className={styles.image} />;

	return (
		<div className={styles.carousel}>
			{onImageClick ? (
				<button className={styles.imageButton} onClick={() => onImageClick(currentIndex)} aria-label={t("projects.carousel.enlarge")}>
					{image}
				</button>
			) : (
				image
			)}

			{hasMultipleImages && (
				<>
					<button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={goToPrevious} aria-label={t("projects.carousel.previous")}>
						<ChevronLeft size={24} />
					</button>
					<button className={`${styles.arrow} ${styles.arrowRight}`} onClick={goToNext} aria-label={t("projects.carousel.next")}>
						<ChevronRight size={24} />
					</button>

					<div className={styles.dots}>
						{images.map((_, index) => (
							<button
								key={index}
								className={styles.dot}
								aria-current={index === currentIndex}
								aria-label={t("projects.carousel.goTo", { number: index + 1 })}
								onClick={() => setCurrentIndex(index)}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};
