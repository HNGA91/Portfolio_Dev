import { useEffect, useState } from "react";

export const useScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;
			const clientHeight = window.innerHeight;

			const scrollable = scrollHeight - clientHeight;
			const currentProgress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

			setProgress(currentProgress);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return progress;
};
