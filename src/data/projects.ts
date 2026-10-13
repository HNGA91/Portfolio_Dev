import type { Project } from "../types/project";
import { getProjectImages } from "./projectImages";
import {
	REACT,
	TYPESCRIPT,
	JAVASCRIPT,
	CSS3,
	BOOTSTRAP,
	NODEJS,
	EXPRESS,
	PHP,
	SYMFONY,
	TWIG,
	MYSQL,
	MONGODB,
	MONGOOSE_RED, SEQUELIZE,
	WAMP,
} from "./skills";

export const PROJECTS: Project[] = [
	{
		id: "cloud-quizz",
		images: getProjectImages("cloudQuizz"),
		technologies: [SYMFONY, PHP, TWIG, MYSQL, JAVASCRIPT, CSS3, BOOTSTRAP, WAMP],
		websiteUrl: "https://cloud-quizz.herve-ngoma.dev",
		codeUrl: "https://github.com/HNGA91/Cloud_Quizz",
	},
	{
		id: "tech-city-front",
		images: getProjectImages("techCity/front"),
		technologies: [REACT, JAVASCRIPT, CSS3],
		websiteUrl: "https://tech-city.herve-ngoma.dev",
		codeUrl: "https://github.com/HNGA91/Tech_City_Front_Web",
	},
	{
		id: "tech-city-back",
		images: getProjectImages("techCity/back"),
		technologies: [JAVASCRIPT, NODEJS, EXPRESS, MYSQL, SEQUELIZE, MONGODB, MONGOOSE_RED],
		websiteUrl: undefined,
		codeUrl: "https://github.com/HNGA91/Tech_City_Back",
	},
	{
		id: "portfolio-dev",
		images: getProjectImages("portfolioDev"),
		technologies: [REACT, TYPESCRIPT, CSS3],
		websiteUrl: undefined,
		codeUrl: "https://github.com/HNGA91/Portfolio_Dev",
	},
	{
		id: "api-meteo",
		images: getProjectImages("apiMeteo"),
		technologies: [REACT, JAVASCRIPT],
		websiteUrl: "https://api-meteo.herve-ngoma.dev",
		codeUrl: "https://github.com/HNGA91/Api_Meteo",
	},
	{
		id: "redux-bookshelf",
		images: getProjectImages("Bookshelf"),
		technologies: [REACT, JAVASCRIPT, BOOTSTRAP],
		websiteUrl: "https://bookshelf.herve-ngoma.dev",
		codeUrl: "https://github.com/HNGA91/Redux_Bookshelf",
	},
];