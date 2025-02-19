import React from "react";
import "./DarkMode.css";

const DarkMode = ({ darkMode, setDarkMode }) => {
  const imageSrc = darkMode
    ? `${process.env.PUBLIC_URL}/images/dark.png`
    : `${process.env.PUBLIC_URL}/images/light.png`;

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      <img src={imageSrc} alt={darkMode ? "다크 모드" : "라이트 모드"} />
    </button>
  );
};

export default DarkMode;
 