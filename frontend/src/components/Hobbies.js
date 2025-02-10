import React from "react";
import HobbyIcon from "./HobbyIcon";
import "./Hobbies.css"; // 스타일 파일

const Hobbies = () => {
  const hobbies = [
    { image: `${process.env.PUBLIC_URL}/images/hobbies/book.png`, title: "Book", description: "다양한 장르를 읽고, 각기 다른 시각으로 의견을 나누는 것을 좋아해요." },
    
  ];

  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title">이런 것들을 좋아합니다</h2>
      <p className="hobbies-subtitle">무엇을 좋아하고, 무엇에 열정을 가지는지,<br/>제가 좋아하는 것들을 소개합니다.</p>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <HobbyIcon key={index} {...hobby} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;


