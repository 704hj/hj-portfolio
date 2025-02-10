import React from "react";
import "./HobbyIcon.css";

const HobbyIcon = ({ image, title, description }) => {
    return (
      <div className="hobby-item">
        <img src={image} alt={title} className="hobby-image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default HobbyIcon;

