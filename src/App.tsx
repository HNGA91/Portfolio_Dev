import { Header } from "./components/Header/Header";
import { HomeSection } from "./sections/HomeSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";
import { useRef } from "react";
import { useFlipOnThemeChange } from "./hooks/useFlipOnThemeChange";

export const App = () => {
    const mainRef = useRef<HTMLElement>(null);
	useFlipOnThemeChange(mainRef);

	return (
		<>
			<Header />
			<main ref={mainRef}>
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
};
