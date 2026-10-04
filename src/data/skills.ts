import agile from "../assets/icons/techno/agile.svg";
import aspnetcore from "../assets/icons/techno/aspnetcore.svg";
import bootstrap from "../assets/icons/techno/bootstrap.svg";
import csharp from "../assets/icons/techno/csharp.svg";
import css3 from "../assets/icons/techno/css3.svg";
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
import wamp from "../assets/icons/techno/wamp.svg";
import type { Skill } from "../types/skill";

export const FRONTEND_SKILLS: Skill[] = [
	{ name: "Bootstrap", icon: bootstrap },
	{ name: "CSS3", icon: css3 },
	{ name: "HTML5", icon: html5 },
	{ name: "Javascript", icon: javascript },
	{ name: "React", icon: react },
	{ name: "Typescript", icon: typescript }
];

export const BACKEND_SKILLS: Skill[] = [
	{ name: "ASP.NET Core", icon: aspnetcore },
	{ name: "C#", icon: csharp },
	{ name: "Express", icon: express },
	{ name: "Node.js", icon: nodejs },
	{ name: "PHP", icon: php },
	{ name: "Symfony", icon: symfony },
	{ name: "Twig", icon: twig }
];

export const DATABASE_SKILLS: Skill[] = [
    { name: "MongoDB", icon: mongodb },
    { name: "MySQL", icon: mysql },
    { name: "SQL", icon: sql }
];
export const TOOLS_SKILLS: Skill[] = [
	{ name: "Agile", icon: agile },
	{ name: "Figma", icon: figma },
	{ name: "Git", icon: git },
	{ name: "GitHub", icon: github },
	{ name: "GitLab", icon: gitlab },
	{ name: "MySQL Workbench", icon: mysqlWorkbench },
	{ name: "phpMyAdmin", icon: phpmyadmin },
	{ name: "Postman", icon: postman },
	{ name: "Trello", icon: trello },
	{ name: "UML", icon: uml },
	{ name: "WAMP", icon: wamp },
];
