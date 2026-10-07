import agile from "../assets/icons/techno/agile.svg";
import androidStudio from "../assets/icons/techno/android-studio.svg";
import aspnetcore from "../assets/icons/techno/aspnetcore.svg";
import bootstrap from "../assets/icons/techno/bootstrap.svg";
import csharp from "../assets/icons/techno/csharp.svg";
import css3 from "../assets/icons/techno/css3.svg";
import django from "../assets/icons/techno/django.svg";
import eclipse from "../assets/icons/techno/eclipse.svg";
import express from "../assets/icons/techno/express.svg";
import figma from "../assets/icons/techno/figma.svg";
import git from "../assets/icons/techno/git.svg";
import github from "../assets/icons/techno/github.svg";
import gitlab from "../assets/icons/techno/gitlab.svg";
import html5 from "../assets/icons/techno/html5.svg";
import javascript from "../assets/icons/techno/javascript.svg";
import mongodb from "../assets/icons/techno/mongodb.svg";
import mysql from "../assets/icons/techno/mysql.svg";
import mysqlWorkbench from "../assets/icons/techno/mysqlWorkbench.svg";
import nodejs from "../assets/icons/techno/nodejs.svg";
import php from "../assets/icons/techno/php.svg";
import phpmyadmin from "../assets/icons/techno/phpmyadmin.svg";
import postman from "../assets/icons/techno/postman.svg";
import react from "../assets/icons/techno/react.svg";
import sql from "../assets/icons/techno/sql.svg";
import symfony from "../assets/icons/techno/symfony.svg";
import trello from "../assets/icons/techno/trello.svg";
import twig from "../assets/icons/techno/twig.svg";
import typescript from "../assets/icons/techno/typescript.svg";
import uml from "../assets/icons/techno/uml.svg";
import visualStudio from "../assets/icons/techno/visual-studio.svg";
import vscode from "../assets/icons/techno/vscode.svg";
import wamp from "../assets/icons/techno/wamp.svg";
import type { Skill } from "../types/skill";

export const AGILE: Skill = { name: "Agile", icon: agile };
export const ANSROID_STUDIO: Skill = { name: "Android Studio", icon: androidStudio };
export const ASPNETCORE: Skill = { name: "ASP.NET Core", icon: aspnetcore };
export const BOOTSTRAP: Skill = { name: "Bootstrap", icon: bootstrap };
export const CSHARP: Skill = { name: "C#", icon: csharp };
export const CSS3: Skill = { name: "CSS3", icon: css3 };
export const DJANGO: Skill = { name: "Django", icon: django };
export const ECLIPSE: Skill = { name: "Eclipse", icon: eclipse };
export const EXPRESS: Skill = { name: "Express", icon: express };
export const FIGMA: Skill = { name: "Figma", icon: figma };
export const GIT: Skill = { name: "Git", icon: git };
export const GITHUB: Skill = { name: "GitHub", icon: github };
export const GITLAB: Skill = { name: "GitLab", icon: gitlab };
export const HTML5: Skill = { name: "HTML5", icon: html5 };
export const JAVASCRIPT: Skill = { name: "Javascript", icon: javascript };
export const MONGODB: Skill = { name: "MongoDB", icon: mongodb };
export const MYSQL: Skill = { name: "MySQL", icon: mysql };
export const MYSQL_WORKBENCH: Skill = { name: "MySQL Workbench", icon: mysqlWorkbench };
export const NODEJS: Skill = { name: "Node.js", icon: nodejs };
export const PHP: Skill = { name: "PHP", icon: php };
export const PHPMYADMIN: Skill = { name: "phpMyAdmin", icon: phpmyadmin };
export const POSTMAN: Skill = { name: "Postman", icon: postman };
export const REACT: Skill = { name: "React", icon: react };
export const SQL: Skill = { name: "SQL", icon: sql };
export const SYMFONY: Skill = { name: "Symfony", icon: symfony };
export const TRELLO: Skill = { name: "Trello", icon: trello };
export const TWIG: Skill = { name: "Twig", icon: twig };
export const TYPESCRIPT: Skill = { name: "Typescript", icon: typescript };
export const UML: Skill = { name: "UML", icon: uml };
export const VISUAL_STUDIO: Skill = { name: "Visual Studio", icon: visualStudio };
export const VS_CODE: Skill = { name: "VS Code", icon: vscode };
export const WAMP: Skill = { name: "WAMP", icon: wamp };

export const FRONTEND_SKILLS: Skill[] = [BOOTSTRAP, CSS3, HTML5, JAVASCRIPT, REACT, TYPESCRIPT];
export const BACKEND_SKILLS: Skill[] = [ASPNETCORE, CSHARP, DJANGO, EXPRESS, NODEJS, PHP, SYMFONY, TWIG];
export const DATABASE_SKILLS: Skill[] = [MONGODB, MYSQL, SQL];
export const TOOLS_SKILLS: Skill[] = [
	AGILE,
	ANSROID_STUDIO,
	FIGMA,
	GIT,
	GITHUB,
	GITLAB,
	MYSQL_WORKBENCH,
	PHPMYADMIN,
	POSTMAN,
	TRELLO,
	UML, WAMP
];
