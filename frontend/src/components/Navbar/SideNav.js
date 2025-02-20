import React from "react";
import "./SideNav.css";

const SideNav = ({ darkMode }) => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="side-nav">
      <ul>
        <li>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <img
              src={darkMode ? "/images/home-dark.png" : "/images/home.png"}
              alt="Home"
            />
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            <img
              src={darkMode ? "/images/aboutme-dark.png" : "/images/aboutme.png"}
              alt="About"
            />
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            <img
              src={darkMode ? "/images/tool-dark.png" : "/images/tool.png"}
              alt="Skills"
            />
          </a>
        </li>
        <li>
          <a href="#project" onClick={(e) => handleScroll(e, "project")}>
            <img
              src={darkMode ? "/images/project-dark.png" : "/images/project.png"}
              alt="Project"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}; 

export default SideNav;
