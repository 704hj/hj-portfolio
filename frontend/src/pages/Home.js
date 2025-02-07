import React from "react";
import "./Home.css"; // CSS 파일 불러오기

function Home() {
  return (
    <div className="home-container">
      <div className="text-box">
        <h1>Park Hyo joo</h1>
        <p>안녕하세요</p>
        <p>이제 막 개발자로의 한 발자국을 내딛었습니다.</p>
        <p>저를 소개해드릴게요.</p>
      </div>

      {/* 배경 이미지 & 뿌연 효과 */}
      <div className="image-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/me.jpg)` }}
      ></div>
      <div className="overlay"></div>
    </div>
  );
}

export default Home;
