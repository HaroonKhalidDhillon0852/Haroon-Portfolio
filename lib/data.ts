import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FYPImg from "@/public/FYP.png";
import Food_Affairs from "@/public/Food_Affairs.jpg";
import Sentiment from "@/public/Sentiment.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Corvit Systems",
//     location: "Lahore, Pakistan",
//     description:
//       "Done 6 months of training in AI/ML & Django.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
  

  export const experiencesData = [ {
    title: "Corvit Systems",
    location: "Lahore, Pakistan",
    description:
      "I completed a 5-month training program in AI/ML and Django, gaining hands-on experience in both fields. This training equipped me with skills in data preprocessing, model training, and Django web development.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - August 2023",
  },
]



  
// ] as const;

export const projectsData = [
  {
    title: "Final Year Project",
    description:
      "Our revolutionary BTC Forecasteer app employs state-of-the-art GRU technology to unravel Bitcoin price mysteries, offering unparalleled accuracy in cryptocurrency predictions.",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    imageUrl: FYPImg,
  },
  {
    title: "Food Affairs",
    description:
      "Experience seamless event management with our website. Effortlessly create events and facilitate"+
      " participant registration through intuitive interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: Food_Affairs,
  },
  {
    title: "Sentimental Analysis",
    description:
      "Sentiment analysis project utilizes machine learning techniques to analyze and classify text data." +
      " Through natural language processing, we discern sentiments such as positive, negative.",
    tags: ["Python", "Django", "SQLite3"],
    imageUrl: Sentiment,
  },
] as const;

export const skillsData = [
  "ML",
  "AI",
  "SQL",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Python",
  "Django",
  "C",
  "C++",
  "Unity",
  "Github",
] as const;
