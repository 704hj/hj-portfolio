import React from "react";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import "./AboutMe.css";
import Hobbies from "../components/Hobbies";
import Profile from "../components/Profile";

const AboutMe = () => {
    return (
        <div>
        <Title title="About Me" />
        <SubTitle text="초보개발자로써 너무 설레이는데요. 저를 소개하겠습니다." />
        <Profile />
        <Hobbies />
      </div>
    );
  };
 
  export default AboutMe;