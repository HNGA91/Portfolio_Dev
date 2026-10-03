import { useEffect, useRef, type RefObject } from "react";
import { useTheme } from "../context/useTheme";

export const useFlipOnThemeChange = <T extends HTMLElement>(ref: RefObject<T | null>) => {
	const { theme } = useTheme();
	const previousTheme = useRef(theme);

	useEffect(() => {
		if (previousTheme.current === theme) return;
		previousTheme.current = theme;

		const element = ref.current;
		if (!element) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const animation = element.animate(
			[
				{ opacity: 0, transform: "rotateY(90deg)" },
				{ opacity: 1, transform: "rotateY(0deg)" },
			],
			{
				duration: 1000,
				easing: "cubic-bezier(0.23, 1, 0.32, 1)",
			},
		);

		return () => animation.cancel();
	}, [theme, ref]);
};
