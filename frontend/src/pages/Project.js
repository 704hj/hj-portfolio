import React from "react";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import "./Project.css";

const Project = () => {
    return (
        <div className="project-container">
            <Title title="Projects" />
            <SubTitle text = "직접 기획하고 개발한 프로젝트들을 소개합니다. </t> 배운 것들과 필요한 것은 스스로 공부하여 구현하였습니다."/>
            <div className="project-boxes">
                <div className="project-box"></div>
                <div className="project-box"></div>
                <div className="project-box"></div>
            </div>
        </div>
    );
};

export default Project;
