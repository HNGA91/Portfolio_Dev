import { Header } from "./components/Header/Header";
import { HomeSection } from "./sections/HomeSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";

export const App = () => {

	return (
		<>
			<Header />
			<main>
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
};
