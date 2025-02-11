import React from "react";
import HobbyIcon from "./HobbyIcon";
import "./Hobbies.css"; // 스타일 파일

const Hobbies = () => {
  const hobbies = [
    { image: `${process.env.PUBLIC_URL}/images/hobbies/book.png`, title: "Book", description: "다양한 장르를 읽고, 각기 다른 시각으로 의견을 나누는 것을 좋아해요." },
    { image: `${process.env.PUBLIC_URL}/images/hobbies/wine.png`, title: "Wine", description: "좋아하는 사람들과 맛있는 음식을 곁들여 와인 페어링을 즐겨요." },
    { image: `${process.env.PUBLIC_URL}/images/hobbies/lol.png`, title: "Lol", description: "20살 때부터 꾸준히 해온 게임으로, 대학 시절 교내 대회에도 참가할 만큼 관심이 많은데요." },
    { image: `${process.env.PUBLIC_URL}/images/hobbies/bike.png`, title: "Bike", description: "신나는 음악과 함께 자전거를 타며 하루의 스트레스를 해소하는 시간이 너무 좋아요." },
    { image: `${process.env.PUBLIC_URL}/images/hobbies/search.png`, title: "Search", description: "새로운 장소를 방문하는 것은 언제나 설레이고, 다양한 경험을 쌓는 기회라고 생각해요." },
    { image: `${process.env.PUBLIC_URL}/images/hobbies/v-log.png`, title: "V-log", description: "일상의 소중한 순간을 영상으로 기록하고, 어울리는 음악을 고민하고 영상을 편집하는 것이 좋아요!" }
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


