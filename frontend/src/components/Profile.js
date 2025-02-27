import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="프로필" className="profile-image" />

      <div className="profile-text">
        <h4>"도전과 커뮤니케이션을 바탕으로,<br />   함께 성장하는 개발자가 되고싶습니다."</h4>
        <p>
        협업을 중요하게 생각하며,<br />
        새로운 기술을 배우고 도전하는 것을 즐깁니다.<br />
        문제 해결을 위한 끈기와 실행력을 강점으로 삼아 개발에 임합니다.<br />
        원활한 커뮤니케이션을 통해 팀원들과 함께 성장하는 개발자가 되고자 합니다.<br />
        <h4>ph. 010-2368-5240 <br />  email. 0430hj@gmail.com</h4>
          <div className="links">
            <a href="https://www.notion.so/HJ-1718913a4d278060a0bfc5088fef2bf0" target="_blank" rel="noopener noreferrer">
              <img src="../images/notion.svg" alt="Notion 로고" />
            </a>
            <a href="https://github.com/704hj" target="_blank" rel="noopener noreferrer">
              <img src="../images/git.png" alt="git 로고" />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Profile;
 