import React from "react";
import Wave from "./Wave";
import "./SubTitle.css";

const SubTitle = ({ text }) => {
  return (
    <div className="subtitle">
      <p className="subtext">{text}</p>
      <Wave />
    </div>
  );
};

export default SubTitle;
