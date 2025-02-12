import React from "react";
import Title from "../components/Title";
import "./Project.css";

const Project = () => {
    return (
        <div className="project-container">
            <Title title="Projects" />
            <div className="project-boxes">
                <div className="project-box"></div>
                <div className="project-box"></div>
                <div className="project-box"></div>
            </div>
        </div>
    );
};

export default Project;
