import React, { useState, useEffect } from "react";
import "./App.css";
import DarkMode from "./components/DarkMode";
import Home from "./pages/Home"; 
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skill";
import Project from "./pages/Project";
import SideNav from "./components/Navbar/SideNav"; //SideNav에도 다크 모드 전달
import Footer from "./components/Footer/Footer";
import ReactGA from "react-ga4"; 

const TRACKING_ID = "G-XXXXXXXXXX"; 

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  // 로컬 스토리지에서 다크 모드 상태 불러오기
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // 다크 모드 변경 시 로컬 스토리지에 상태 저장
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
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
