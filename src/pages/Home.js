// src/pages/Home.js
import React from "react";
import { FaDownload } from "react-icons/fa";
import resumefile from "../resume/resume.pdf";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center md:items-end md:flex-row md:space-x-6">
          <img src='./Images/profile-picture.png' alt="Profile" className="rounded-full w-32 h-32 mb-4 md:mb-0 invert" />
          <div className=" text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">Shubham Tanwar</h1>
            <TypeAnimation
            sequence={['Frontend Developer', 2000, 'UX/UI Designer', 2000, '', 500, ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
          </div>
        </div>
        <div className="flex items-center md:items-end space-x-4 self-center">
          <a href={resumefile} download className=" bg-lime-400 hover:bg-lime-600 text-black font-bold px-4 rounded inline-flex items-center py-4" >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
      <div className="md:flex w-full">
        <div className="mt-8 md:w-3/5 mb-4">
          <h2 className="text-2xl font-bold mb-2">About me</h2>
          <p className="text-gray-400 mb-4">
            Hello! I'm Shubham Tanwar, a passionate and detail-oriented
            Frontend Developer with 4 years of experience in crafting
            beautiful and responsive web interfaces. I thrive on creating
            intuitive and engaging user experiences. I love to work where I
            can learn new things and enhance my skills. I deeply believe in
            that nothing is Impossible. I am a quick learner, optimistic,
            adaptive, Innovative and creative.
          </p>
          <p className="text-gray-400">
            I specialize in building and maintaining interactive and dynamic
            websites using modern web technologies such as HTML, CSS,
            JavaScript, and frameworks like React. Over the years,
            I've collaborated with cross-functional teams to deliver
            high-quality web applications that meet client requirements and
            exceed user expectations.
          </p>
          <a href="/about" className="text-lime-400 hover:underline ">Read more...</a> 
        </div>
        <div className="md:w-2/5 md:px-5 md:mt-8">
          <h2 className="text-2xl font-semibold mb-2">I write</h2>
          <div className="flex flex-wrap">
            {[
              "HTML, CSS & CSS modules",
              "Javascript",
              "React & Next JS",
              "Styled components",
              "Tailwind CSS",
              "Figma" , "Blender", "Sketch"
            ].map((tag) => (
              <span
                key={tag}
                className="bg-lime-400 hover:bg-gray-700 text-black font-semibold py-1 px-3 rounded-full m-1 md:my-4"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
        <div className="flex flex-col md:flex-row space-y-4">
          <div className="flex items-center mr-5">
            <img src='./Images/work.svg' alt="Company Logo" className="w-12 h-12 mr-4 invert" />
            <div>
              <h3 className="font-bold">Web Developer</h3>
              <p className="text-gray-400">Devgiri (Compuway Infotech Pvt. Ltd.)</p>
              <p className="text-gray-400">Mar 2023</p>
            </div>
          </div>
          <div className="flex items-center mr-5">
            <img src='./Images/work.svg' alt="Company Logo" className="w-12 h-12 mr-4 invert" />
            <div>
              <h3 className="font-bold">Web Developer</h3>
              <p className="text-gray-400">Fena Private Limited</p>
              <p className="text-gray-400">July 2020 - Feb 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
