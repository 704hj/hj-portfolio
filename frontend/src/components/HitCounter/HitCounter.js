import React from "react";
import "./HitCounter.css"; 

const HitCounter = () => {
  return (
    <div className="hit-counter"> 
      <a href="https://hits.seeyoufarm.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhj-portfoli0.netlify.app&count_bg=%234BD1FF&title_bg=%23000000&icon=react.svg&icon_color=%234BD1FF&title=hits&edge_flat=true"
          alt="Website Hit Counter"
        />
      </a>
    </div>
  );
};

export default HitCounter;
