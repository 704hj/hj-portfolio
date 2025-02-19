import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="프로필" className="profile-image" />

      <div className="profile-text">
        <h2>"함께 성장하는 개발자"</h2>
        <p>
          원활한 커뮤니케이션을 기반으로 협업을 중요하게 생각하며, <br />
          새로운 기술을 배우고 도전하는 것을 즐깁니다. <br />
          문제 해결을 위한 끈기와 실행력을 강점으로 삼아 개발에 임합니다.
        </p>
      </div>
    </div>
  );
};

export default Profile;
