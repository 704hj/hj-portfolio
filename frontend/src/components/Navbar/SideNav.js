import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li><a href="#home"><img src="/images/home.png" alt="Home" /></a></li>
        <li><a href="#about"><img src="/images/aboutme.png" alt="About" /></a></li>
        <li><a href="#project"><img src="/images/project.png" alt="Project" /></a></li>
      </ul>
    </nav>
  );
};

export default SideNav;
