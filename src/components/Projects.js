import React,{ useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Simon Game",
    description:
      "The Simon game is the exciting game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order.",
    image: './Images/simon-game.png',
    link: "https://shubhamtanwar78.github.io/simon-game/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "PlayStation 4 Controller Landing Page",
    description: "Wireless Controller for PlayStation 4",
    image: './Images/landing-page.png',
    link: "https://shubhamtanwar78.github.io/prj-2.github.io/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dice Game",
    description: "Two players, A and B, keep rolling a fair dice. The person to get a higher number wins the game.",
    image: './Images/dice-game.png',
    link: "https://shubhamtanwar78.github.io/dice-game/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "A Calculator",
    description: "This project aims to build a simple yet functional calculator application.",
    image: './Images/calculator.png',
    link: "https://shubhamtanwar78.github.io/calculator/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Project 5",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300",
    link: "",
    tags: ["React", "TailwindCSS", "JavaScript"],
  },
];

const Project = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
