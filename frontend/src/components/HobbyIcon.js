import React from "react";
import "./HobbyIcon.css";

const HobbyIcon = ({ image, title, description }) => {
    return (
      <div className="hobby-item">
        <img src={image} alt={title} className="hobby-image" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default HobbyIcon;

 