// src/components/Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaGithub, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Header with Hamburger Menu */}
      <div className="md:hidden flex justify-between items-center bg-gray-800 text-white p-4">
        <div className="text-2xl font-bold">DS</div>
        <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
          <FaBars />
        </button>
      </div>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-lime-400 text-black font-semibold transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-52 md:w-64 flex flex-col min-h-screen z-50 overflow-hidden`}>
        <div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
          Menu
        </div>
        <nav className="flex-grow p-4 md:pr-0">
          <ul className="space-y-4">
            <li>
              <NavLink to="/" exact className={({ isActive }) => isActive ? 'flex items-center space-x-2 text-lime-400 pl-4 h-8 bg-black rounded-s-2xl rounded-e-2xl md:rounded-e-none' : 'flex items-center space-x-2 pl-4 h-8'} onClick={handleLinkClick}>
                <FaHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'flex items-center space-x-2 text-lime-400 pl-4 h-8 bg-black rounded-s-2xl rounded-e-2xl md:rounded-e-none' : 'flex items-center space-x-2 pl-4 h-8'} onClick={handleLinkClick}>
                <FaProjectDiagram />
                <span>My Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'flex items-center space-x-2 text-lime-400 pl-4 h-8 bg-black rounded-s-2xl rounded-e-2xl md:rounded-e-none' : 'flex items-center space-x-2 pl-4 h-8'} onClick={handleLinkClick}>
                <FaUser />
                <span>About me</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'flex items-center space-x-2 text-lime-400 pl-4 h-8 bg-black rounded-s-2xl rounded-e-2xl md:rounded-e-none' : 'flex items-center space-x-2 pl-4 h-8'} onClick={handleLinkClick}>
                <FaEnvelope />
                <span>Contact me</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://github.com/Shubhamtanwar78" className={({ isActive }) => isActive ? 'flex items-center space-x-2 text-lime-400 pl-4 h-8 bg-black rounded-s-2xl rounded-e-2xl md:rounded-e-none' : 'flex items-center space-x-2 pl-4 h-8'} onClick={handleLinkClick}>
                <FaGithub />
                <span>My Github</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Overlay */}
      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 md:hidden z-40"></div>}
    </>
  );
};

export default Sidebar;
