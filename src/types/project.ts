import type { Skill } from "./skill";

export interface Project {
	id: string;
	images: string[]; 
	technologies: Skill[]; 
	websiteUrl?: string; 
	codeUrl: string;
}
