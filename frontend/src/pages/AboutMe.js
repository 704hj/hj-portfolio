import React from "react";
import Title from "../components/Title";
import "./AboutMe.css";
import Hobbies from "../components/Hobbies";

const AboutMe = () => {
    return (
        <div>
        <Title title="About Me" />
        <Hobbies />
      </div>
    );
  };

  export default AboutMe;