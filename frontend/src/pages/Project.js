import React, { useRef, useState } from "react";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import "./Project.css";

const Project = () => {
    const videoRefs = [useRef(null), useRef(null), useRef(null)];
    const [isPlaying, setIsPlaying] = useState([false, false, false]);

    const handleVideoClick = (index) => {
        const newIsPlaying = [...isPlaying]; // 현재 상태 복사
        if (videoRefs[index].current) {
            if (newIsPlaying[index]) {
                videoRefs[index].current.pause();
            } else {
                videoRefs[index].current.play();
            }
            newIsPlaying[index] = !newIsPlaying[index];
            setIsPlaying(newIsPlaying);
        }
    };

    return (
        <div className="project-container">
            <Title title="Projects" />
            <SubTitle text={<>
                            <p>직접 기획하고 개발한 프로젝트입니다.</p>
                             <p>새로운 기술을 적용하며 기능을 구현하고, 고민하며 완성했습니다.</p>
                            </>} />


            <div className="project-list">
                <ul>
                    {/* 첫 번째 프로젝트 */}
                    <li className="project-item">
                    <div className="project-image" onClick={() => handleVideoClick(0)}>
                            <video ref={videoRefs[0]} controls={false}>
                                <source src={`${process.env.PUBLIC_URL}/videos/pj1.mp4`} type="video/mp4" />
                                브라우저가 비디오를 지원하지 않습니다.
                            </video> 
                            {!isPlaying[0] && <div className="play-overlay">▶</div>}
                        </div>
                        <div className="project-content">
                            <span role="img" aria-label="lightbulb">💡</span> 
                            <strong>React 기반의 웹 포트폴리오</strong>
                            <p className="pj-desc">
                                React의 컴포넌트 구조를 이해하여 웹 포트폴리오를 제작했습니다.
                            </p>
                            <p>
                                <a href="https://www.notion.so/Portfolio-1a08913a4d2780039ee8d6dc8cf1482b" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <span className="notion-link" role="img" aria-label="arrow">➡️ 노션으로 이동하기</span> 
                                </a>
                            </p>
                            <ul>
                                <li>useState & useEffect를 활용한 다크 모드 상태 관리</li>
                                <li>localStorage를 사용하여 다크 모드 설정 저장 및 유지</li>
                                <li>미디어 쿼리를 활용한 반응형 웹 디자인 적용</li>
                            </ul>
                        </div>
                    </li>

                    {/*두 번째 프로젝트 */}
                    <li className="project-item">
                        <div className="project-image" onClick={() => handleVideoClick(1)}>
                            <video ref={videoRefs[1]} controls={false}>
                                <source src={`${process.env.PUBLIC_URL}/videos/pj2.mp4`} type="video/mp4" />
                                브라우저가 비디오를 지원하지 않습니다.
                            </video> 
                            {!isPlaying[1] && <div className="play-overlay">▶</div>}
                        </div>
                        <div className="project-content">
                            <span role="img" aria-label="lightbulb">💡</span> <strong>Deeply</strong>
                            <p className="pj-desc">아티스트와 팬이 소통하며 유대감을 형성하는 커뮤니티 플랫폼 개발</p>
                            <p>
                                <a href="https://www.notion.so/Deeply-1848913a4d27805eb433df632ba7a05b" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <span className="notion-link" role="img" aria-label="arrow">➡️ 노션으로 이동하기</span> 
                                </a>
                            </p>
                            <ul>
                                <li>그룹별 콘텐츠 및 상품 관리 기능 제공</li>
                                <li>팬덤 맞춤형 서비스 제공</li>
                                <li>팬 커뮤니티 활성화를 통한 지속적인 팬 활동 지원</li>
                            </ul>
                        </div>
                    </li>

                    {/* 세 번째 프로젝트*/}
                    <li className="project-item">
                        <div className="project-image" onClick={() => handleVideoClick(2)}>
                            <video ref={videoRefs[2]} controls={false}>
                                <source src={`${process.env.PUBLIC_URL}/videos/pj3.mp4`} type="video/mp4" />
                                브라우저가 비디오를 지원하지 않습니다.
                            </video>
                            {!isPlaying[2] && <div className="play-overlay">▶</div>}
                        </div>
                        <div className="project-content">
                            <span role="img" aria-label="lightbulb">💡</span> <strong>꼬박꼬박</strong>
                            <p className="pj-desc">시간 관리와 작은 도전을 통해 건강한 습관 형성을 지원하는 플랫폼 개발</p>
                            <p>
                                <a href="https://www.notion.so/Portfolio-1a08913a4d2780039ee8d6dc8cf1482b" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <span className="notion-link" role="img" aria-label="arrow">➡️ 노션으로 이동하기</span> 
                                </a>
                            </p>
                            <ul>
                                <li>도전 기록 및 목표 공유로 상호 동기부여 유도</li>
                                <li>지속적인 습관 형성을 위한 리워드 시스템 제공</li>
                                <li>커뮤니티 기반으로 긍정적인 변화를 함께 만들어가는 환경 조성</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Project;
