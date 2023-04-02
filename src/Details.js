// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/capstone1.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Waca",
  tagline: "I build things for web",
  img: profile,
  about: `I'm a Computer Science Undergraduate at Udayana University, Bali. You can call me Adwitya. I'm currently been studying Front End Web Developing use React JS and Cloud Computing.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/prawangsa/",
  github: "https://github.com/Hanabihyug",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Development (Kampus Merdeka Pogram)",
    Company: "Dicoding Indonesia",
    Location: "Bandung",
    Type: "Full Time",
    Duration: "Aug 2022 - Dec 2022",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Computer Science",
    Company: `Udayana University`,
    Location: "Jimbaran",
    Type: "Hybrid",
    Duration: "Aug 2020 - Present",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "SmartCare",
    image: projectImage1,
    description: `Has successfully developed a comprehensive parenting website that allows parents to monitor and track their children's development from an early age. Leveraging APIs and utilizing the World Health Organization's Child Growth Standards dataset, It provides a wealth of resources for parents to ensure their children are meeting important developmental milestones. The projects has Accosiated with Independent Study at Diocoding in React Web Development program.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://smartcare-three.vercel.app/",
    githubLink: "https://github.com/Hanabihyug/smartcare",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "wawaca.waca@gmail.com",
  phone: "+62 812 360 755 89",
};
