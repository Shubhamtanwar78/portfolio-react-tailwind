import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Donation WebPage Design in Figma",
    description:
      "Introducing the ultimate Figma template for Nike sneaker enthusiasts - a sleek and user-friendly mobile e-commerce app design that will take your online shopping experience to the next level!",
    image: './Images/nikedef.png',
    link: "https://www.figma.com/proto/ytZ4J9Z6Jbc1QZmzAHK3Ll/Untitled?page-id=0%3A1&node-id=133-23&viewport=-74675%2C37582%2C0.74&t=AusR8izfzkBrCJsY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=133%3A23&show-proto-sidebar=1",
    tags: ["Figma"],
  },
  {
    title: "Donation WebPage Design in Figma",
    description:
      "It is designed in Figma, focusing on components and responsiveness.",
    image: './Images/DonationFigma.png',
    link: "https://www.figma.com/proto/ytZ4J9Z6Jbc1QZmzAHK3Ll/Untitled?page-id=0%3A1&node-id=84-442&viewport=-19886%2C10771%2C0.21&t=jhRY34GysECMyBhq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=84%3A442&show-proto-sidebar=1",
    tags: ["Figma"],
  },
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
