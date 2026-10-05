import { useEffect, type RefObject } from "react";

export const useEyeTracking = <T extends HTMLElement>(eyeRef: RefObject<T | null>) => {
	useEffect(() => {
		const eye = eyeRef.current;
		if (!eye) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const handlePointerMove = (event: PointerEvent) => {
			const rect = eye.getBoundingClientRect();
			const dx = event.clientX - (rect.left + rect.width / 2);
			const dy = event.clientY - (rect.top + rect.height / 2);
			const distance = Math.hypot(dx, dy);
			if (distance === 0) return;

			const offset = Math.min(rect.width * 0.18, distance * 0.15);
			eye.style.setProperty("--pupil-x", `${(dx / distance) * offset}px`);
			eye.style.setProperty("--pupil-y", `${(dy / distance) * offset}px`);
		};

		window.addEventListener("pointermove", handlePointerMove);
		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, [eyeRef]);
};
