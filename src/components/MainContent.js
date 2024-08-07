// src/components/MainContent.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Sidebar from './Sidebar';

const MainContent = () => {
  return (
      <div className="flex h-screen overflow-hidden text-white bg-gray-900 flex-col md:flex-row">
          <Sidebar />
      <div className="flex-1 overflow-auto p-6 w-screen">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;


  /* <div className="flex-grow p-6 bg-gray-900 text-white w-full">
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<Github />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div> */

