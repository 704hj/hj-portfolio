import React from "react";
import "./Home.css";

const Home = () => {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/me.jpg`;

  return (
    <div className="home-container">
      {/* 왼쪽 텍스트 */}
      <div className="text-box">
        <h1>Park Hyo joo</h1>
        <h4>"성실함을 기록으로 쌓아가며, 꾸준히 성장하는 개발자"</h4>
        <p>프로젝트마다 배운 점을 정리하고 기록하여</p>
        <p>같은 문제를 더 빠르고 효율적으로 해결합니다.</p>
        <p>배움의 과정을 즐기며, 더 나은 개발을 위해 도전합니다.</p>
      </div>
 
      {/* 배경 이미지 & 뿌연 효과 */}
      <div className="image-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      </div>
    </div>
  );
};

export default Home;
