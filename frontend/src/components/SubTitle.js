import React from "react";
import Wave from "./Wave";

const SubTitle = ({ text }) => {
  return (
    <div className="subtitle">
      <h2>{text}</h2>
      <Wave />
    </div>
  );
};

export default SubTitle;
