// src/components/MainContent.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Sidebar from './Sidebar';
import ScrollToTop from "./ScrollToTop";

const MainContent = () => {
  return (
      <div className="flex h-screen overflow-hidden text-white bg-gray-900 flex-col md:flex-row">
        <Sidebar />
        <div id="right-div" className="flex-1 overflow-auto p-6 w-screen">
          <ScrollToTop>
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </ScrollToTop>
        </div>
    </div>
  );
};

export default MainContent;