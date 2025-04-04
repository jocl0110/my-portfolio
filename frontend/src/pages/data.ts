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
export interface Skill {
  skill: string;
  id: number;
  icon: string;
}

export interface Education {
  when: string;
  name: string;
  location: string;
  description?: string;
  school: React.ReactNode | string;
  id: number;
  achievements?: string[];
}

export interface Project {
  images: string[];
  description: string;
  name: string;
  skills: Skill[];
  id: number;
  github: string;
}

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

const learning: Skill[] = [
  { skill: "MySQL", id: 1, icon: mySQLIcon },
  { skill: "Tailwind", id: 2, icon: tailwindIcon },
  { skill: "Python", id: 3, icon: pythonIcon },
  { skill: "Angular", id: 4, icon: angularIcon },
  { skill: "C#", id: 5, icon: cSharpIcon },
  { skill: "Java", id: 6, icon: javaIcon },
  { skill: "Vue", id: 7, icon: vueIcon },
];

const tabs = [
  { name: "Knowledge", content: { skills } },
  { name: "Learning", content: { learning } },
];

const projects: Project[] = [
  {
    github: "https://github.com/jocl0110/react-todo",
    id: 1,
    images: ["/todo-laptop.webp", "/todo-tablet.webp", "/todo-phone.webp"],
    name: "Todo List App",
    description:
      "This is one of my first projects built while learning React. It's a simple yet functional application that allows users to manage a list of tasks easily. The app connects to Airtable API to fetch and update todos.",
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
      "/recipe-laptop.webp",
      "/recipe-tablet.webp",
      "/recipe-phone.webp",
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
      "/weather-laptop.webp",
      "/weather-tablet.webp",
      "/weather-phone.webp",
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
    name: "Bachelor' Degree in Computer Programming",
    location: "Havana, Cuba",
    school: "University of Informatics Sciences",
    description:
      "Wrote my first lines of code in C++ during my first year at the University of Informatics Sciences. I learned the basics of programming, algorithms, and data structures.",
    id: 2,
    achievements: ["C++", "OOP", "Data Structures", "Algorithms"],
  },
  {
    when: "Finished 05/2023",
    name: "Responsive Web Design Certification",
    location: "Online",
    description:
      "With this certification I learned the basics of web development and design, including HTML and CSS. It focuses on building responsive websites that work on various devices and screen sizes.",
    school: "freeCodeCamp",
    id: 3,
    achievements: ["HTML", "CSS", "Responsive Web Design"],
  },
  {
    when: "Finished 01/2024",
    name: "Intro to Programming",
    location: "Online",
    description:
      "This course allowed me to deepen my understanding of programming concepts and best practices. It covered fundamental programming concepts using JavaScript, including variables, functions, loops, and conditionals.",
    school: "Code The Dream",
    id: 4,
    achievements: [
      "JavaScript",
      "HTML",
      "CSS",
      "Git and Github",
      "API Integration",
    ],
  },
  {
    when: "Finished 06/2024",
    name: "React.JS",
    location: "Online",
    description:
      "I learned how to build dynamic and interactive web applications using React.js. The course covered the fundamentals of React, including components, state management, and routing.",
    school: "Code The Dream",
    id: 5,
    achievements: ["React", "TypeScript", "API Integration", "React Router"],
  },
];

// Export all data
export { skills, education, learning, tabs, projects, myAge };
