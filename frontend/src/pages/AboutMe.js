import React from "react";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import "./AboutMe.css";
/*import Hobbies from "../components/Hobbies";*/
import Profile from "../components/Profile";

const AboutMe = () => {
    return (
        <div>
        <Title title="About Me" />
        <SubTitle text="기술과 함께 성장하는 개발자, 저의 이야기를 시작합니다!" />
        <Profile />
        {/*<Hobbies />*/}
      </div>
    );
  };
 
  export default AboutMe;