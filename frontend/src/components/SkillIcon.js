import React, { useState } from "react";
import "./SkillIcon.css";

const SkillIcon = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="skill-icon-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={skill.image} alt={skill.name} className="skill-icon" />
      {hovered && (
        <div className="skill-description">
          <strong>{skill.name}</strong>
          <p>{skill.description}</p>
        </div>
      )}
    </div>
  );
};

export default SkillIcon;
