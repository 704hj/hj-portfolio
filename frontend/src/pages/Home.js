import React from "react";
import "./Home.css";
// import HitCounter from "../components/HitCounter/HitCounter";

const Home = () => {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/me.jpg`;


  return (
    <div className="home-container">
      
      {/* 왼쪽 텍스트 */}
      <div className="text-box">
        <h1>Park Hyo joo</h1>
        <h4>"변화하는 기술을 탐구하고 작은 것 도 놓치지 않는 <br />꼼꼼함을 겸비한 신입 개발자 박효주입니다"</h4>
        <p>빠르게 변화하는 기술들을 공부하는 것을 좋아해요.</p>
        <p>매일 프로젝트 진행 과정과 에러를 기록하며</p>
        <p>반복되는 오류를 줄이고, 더 나은 개발을 위해 도전합니다.</p>
      </div>
 
      {/* 배경 이미지 & 뿌연 효과 */}
      <div className="image-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      {/* <HitCounter /> */}
      </div>
    </div>
  );
};

export default Home;
