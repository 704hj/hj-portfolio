import React, { useState, useEffect } from "react";
import "./App.css";
import DarkMode from "./components/DarkMode";
import Home from "./pages/Home"; 
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skill";
import Project from "./pages/Project";
import SideNav from "./components/Navbar/SideNav"; //SideNav에도 다크 모드 전달
import Footer from "./components/Footer/Footer";
import initGA from "./utils/analytics";

function App() {
    useEffect(() => {
      initGA(); //한 줄로 GA 초기화 + 페이지뷰 로깅
    }, []);

  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);
  
 
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <SideNav darkMode={darkMode} /> {/* 다크 모드 상태를 SideNav로 전달 */}
      <div className="main-content">
        <section id="home"><Home /></section>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="project"><Project /></section>
        <section id="footer"><Footer /></section>
      </div>
    </div>
  );
}

export default App;
