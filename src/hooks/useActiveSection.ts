import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: readonly string[]) => {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-50% 0px -50% 0px",
			},
		);

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, [sectionIds]);

	return activeSection;
};
