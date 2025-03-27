import htmlIcon from "../assets/svg/html5.svg";
import javascriptIcon from "../assets/svg/javascript.svg";
import cssIcon from "../assets/svg/css.svg";
import reactIcon from "../assets/svg/react.svg";
import reactRouterIcon from "../assets/svg/reactrouter.svg";
import githubIcon from "../assets/svg/github.svg";
import typeIcon from "../assets/svg/typescript.svg";
import gitIcon from "../assets/svg/git.svg";
import cPlusIcon from "../assets/svg/c++.svg";
import nodeIcon from "../assets/svg/nodejs.svg";
import expressIcon from "../assets/svg/expressjs.svg";
import mongoIcon from "../assets/svg/mongodb.svg";
import mySQLIcon from "../assets/svg/mysql.svg";
import tailwindIcon from "../assets/svg/tailwindcss.svg";
import pythonIcon from "../assets/svg/python.svg";
import angularIcon from "../assets/svg/angular.svg";
import cSharpIcon from "../assets/svg/csharp.svg";
import javaIcon from "../assets/svg/java.svg";
import vueIcon from "../assets/svg/vue.svg";

const myAge = new Date().getFullYear() - 2001;
// Types
interface Skill {
  skill: string;
  id: number;
  icon: string;
}
interface Education {
  when: string;
  name: string;
  location: string;
  school: React.ReactNode | string;
  id: number;
}
interface Projects {
  images: string[];
  description: string;
  name: string;
  skills: Skill[];
  id: number;
  github: string;
}

// Data
const skills: Skill[] = [
  { skill: "HTML", id: 1, icon: htmlIcon },
  { skill: "JavaScript", id: 2, icon: javascriptIcon },
  { skill: "React", id: 3, icon: reactIcon },
  { skill: "React Router", id: 4, icon: reactRouterIcon },
  { skill: "GitHub", id: 5, icon: githubIcon },
  { skill: "TypeScript", id: 6, icon: typeIcon },
  { skill: "Git", id: 7, icon: gitIcon },
  { skill: "C++", id: 8, icon: cPlusIcon },
  { skill: "Node.js", id: 10, icon: nodeIcon },
  { skill: "Express.js", id: 11, icon: expressIcon },
  { skill: "MongoDB", id: 12, icon: mongoIcon },
  { skill: "CSS", id: 13, icon: cssIcon },
];
const learning = [
  { skill: "MySQL", id: 1, icon: mySQLIcon },
  { skill: "Tailwind", id: 2, icon: tailwindIcon },
  { skill: "Python", id: 3, icon: pythonIcon },
  { skill: "Angular", id: 4, icon: angularIcon },
  { skill: "C#", id: 5, icon: cSharpIcon },
  { skill: "Java", id: 6, icon: javaIcon },
  { skill: "Vue", id: 7, icon: vueIcon },
];

const education: Education[] = [
  {
    when: "Graduated 05/2019",
    name: "High School",
    location: "Pinar del Rio, Cuba",
    school: "Friedrich Engels",
    id: 1,
  },
  {
    when: "Finished 03/2022(Not Graduated)",
    name: "Bachelor' Degree",
    location: "Havana, Cuba",
    school: "University of Informatics Sciences",
    id: 2,
  },
  {
    when: "Finished 05/2023",
    name: "Responsive Web Design Certification",
    location: "Online",
    school: "freeCodeCamp",
    id: 3,
  },
  {
    when: "Finished 01/2024",
    name: "Intro to Programming",
    location: "Online",
    school: "Code The Dream",
    id: 4,
  },
  {
    when: "Finished 06/2024",
    name: "React.JS",
    location: "Online",
    school: "Code The Dream",
    id: 5,
  },
];

const tabs = [
  { name: "Knowledge", content: { skills } },
  { name: "Learning", content: { learning } },
];

const projects: Projects[] = [
  {
    github: "https://github.com/jocl0110/react-todo",
    id: 1,
    images: [
      "../../images/todo-laptop.png",
      "../../images/todo-tablet.png",
      "../../images/todo-phone.png",
    ],
    name: "Todo List App",
    description:
      "This is one of my first projects built while learning React. It’s a simple yet functional application that allows users to manage a list of tasks easily. The app connects to Airtable API to fetch and update todos.",
    skills: [
      { skill: " React", id: 1, icon: reactIcon },
      { skill: "TypeScript", id: 2, icon: typeIcon },
      { skill: "CSS", id: 3, icon: cssIcon },
    ],
  },
  {
    github: "https://github.com/jocl0110/RecipesApp",
    id: 2,
    images: [
      "../../images/recipe-laptop.png",
      "../../images/recipe-tablet.png",
      "../../images/recipe-phone.png",
    ],
    name: "Recipes App",
    description:
      "The Recipes App is a web application built with React that allows users to search for recipes by ingredients, view recipe details, and save their favorite recipes. The app fetches recipes from the Forkify API.",

    skills: [
      { skill: " React", id: 4, icon: reactIcon },
      { skill: "TypeScript", id: 5, icon: typeIcon },
      { skill: "CSS", id: 6, icon: cssIcon },
    ],
  },
  {
    github: "https://github.com/jocl0110/plan-my-day",
    id: 3,
    images: [
      "../../images/weather-laptop.png",
      "../../images/weather-tablet.png",
      "../../images/weather-phone.png",
    ],
    name: "Weather App",
    description:
      "A simple weather application that allow users to check weather conditions for the city provided, with a 7 day forecast, air quality conditions and wind speeds included. Built using Vanilla JavaScript",
    skills: [
      { skill: "HTML", id: 7, icon: htmlIcon },
      { skill: "JavaScript", id: 8, icon: javascriptIcon },
      { skill: "CSS", id: 9, icon: cssIcon },
    ],
  },
];

export { skills, education, learning, tabs, projects, myAge };
