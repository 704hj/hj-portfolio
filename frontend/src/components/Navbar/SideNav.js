import React from "react";
import "./SideNav.css";

const SideNav = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // 기본 이벤트 방지
    const targetElement = document.getElementById(targetId); // 해당 id 찾기

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // 스크롤 부드럽게
    }
  };

  return (
    <nav className="side-nav">
      <ul>
        <li><a href="#home" onClick={(e) => handleScroll(e, "home")}><img src="/images/home.png" alt="Home" /></a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}><img src="/images/aboutme.png" alt="About" /></a></li>
        <li><a href="#project" onClick={(e) => handleScroll(e, "project")}><img src="/images/project.png" alt="Project" /></a></li>
      </ul>
    </nav>
  );
};

export default SideNav;
