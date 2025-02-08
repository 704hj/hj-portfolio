import React from "react";
import "./Home.css";

const Home = () => {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/me.jpg`;

  return (
    <div className="home-container">
      {/* 왼쪽 텍스트 */}
      <div className="text-box">
        <h1>Park Hyo joo</h1>
        <p>안녕하세요</p>
        <p>이제 막 개발자로의 한 발자국을 내딛었습니다.</p>
        <p>저를 소개해드릴게요.</p>
      </div>

      {/* 배경 이미지 & 뿌연 효과 */}
      <div className="image-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}></div>
      <div className="overlay"></div>
    </div>
  );
};

export default Home;
