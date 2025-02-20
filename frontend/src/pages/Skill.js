import React from "react";
import SkillIcon from "../components/SkillIcon";
import "./Skill.css";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

const techStack = [
  {
    name: "JavaScript",
    image: `${process.env.PUBLIC_URL}/images/skills/javascript.svg`,
    description: (
      <ul>
        <li>Ajax 비동기 통신과 jQuery를 활용하여 좋아요 및 댓글 등록/수정/삭제를 페이지 새로고침 없이 구현</li>
        <li>DOM 조작을 이용하여 상품 등록 페이지에서 상품 사진 미리보기 기능 구현</li>
        <li>Form Validation을 이해하여 상품 등록 폼 유효성 검사 구현</li>
      </ul>
    )
  },
  {
    name: "Java",
    image: `${process.env.PUBLIC_URL}/images/skills/java.svg`,
    description: (
      <ul>
        <li>객체 지향 프로그래밍(OOP) 원리를 이해하여 Spring MVC 기반 SHOP에서 회원, 상품, 주문 기능 구조 구현</li>
        <li>JDBC 연동 구조를 습득하여 Oracle DB와 연동, DAO로 상품 정보 CRUD 로직 처리</li>
      </ul>
    )
  },
  {
    name: "Oracle",
    image: `${process.env.PUBLIC_URL}/images/skills/oracle.png`,
    description: (
      <ul>
        <li>DML·DDL·DCL 개념을 익혀 MyBatis와 함께 상품 테이블 생성·관리, 프로시저(Procedure) 활용</li>
        <li>Subquery와 JOIN 구조를 이해하여 그룹별 최신 상품 조회 등 복합 쿼리 작성</li>
      </ul>
    )
  },
  {
    name: "Python",
    image: `${process.env.PUBLIC_URL}/images/skills/python.svg`,
    description: (
      <ul>
        <li>기본 문법(List, Dict, Set)과 제어문 구조를 이해하여 간단한 데이터 처리 자동화 스크립트 작성</li>
        <li>ChatGPT API 동작 원리를 익혀 텍스트·음성 변환(Whisper, gTTs) 및 챗봇 프로토타입 구현</li>
      </ul>
    )
  },
  {
    name: "React",
    image: `${process.env.PUBLIC_URL}/images/skills/react.svg`,
    description: (
      <ul>
        <li>컴포넌트 기반 설계를 이해하여 SPA 구조의 페이지를 직관적으로 구성</li>
        <li>useState, useEffect를 활용한 실시간 UI 업데이트 구현</li>
      </ul>
    )
  },
  {
    name: "Spring",
    image: `${process.env.PUBLIC_URL}/images/skills/spring.svg`,
    description: (
      <ul>
        <li>Spring MVC & DI(의존성 주입)로 Controller-Service-DAO 계층 분리, AOP로 로깅 & 트랜잭션 관리</li>
        <li>MyBatis 연동해 동적 쿼리 작성, ResultMap으로 복합 데이터 매핑</li>
      </ul>
    )
  },
  {
    name: "CSS",
    image: `${process.env.PUBLIC_URL}/images/skills/css.svg`,
    description: (
      <ul>
        <li>CSS3 선택자와 Flex/Grid 원리를 이해하여 반응형 레이아웃 설계</li>
        <li>Bootstrap과 Custom CSS를 결합해 고유한 디자인 스타일 적용</li>
      </ul>
    )
  },
  {
    name: "HTML",
    image: `${process.env.PUBLIC_URL}/images/skills/html.svg`,
    description: (
      <ul>
        <li>HTML5 Semantic 태그(header, section, nav 등)를 활용한 구조적·의미있는 마크업 구현</li>
      </ul>
    )
  },
  {
    name: "Bootstrap",
    image: `${process.env.PUBLIC_URL}/images/skills/bootstrap.svg`,
    description: (
      <ul>
        <li>Grid 시스템 원리를 활용해 모바일~PC까지 일관성 있게 디자인</li>
        <li>Carousel 등을 사용해 상품 슬라이드 쇼 UI 구현</li>
      </ul>
    )
  },
  {
    name: "jQuery",
    image: `${process.env.PUBLIC_URL}/images/skills/jquery.svg`,
    description: (
      <ul>
        <li>jQuery DOM 메서드(.append(), .remove())로 상품 목록/댓글 목록 동적 추가·삭제</li>
        <li>Ajax로 서버와 비동기 통신 처리, 장바구니 기능 실시간 갱신</li>
      </ul>
    )
  }
];

//개발 & 협업 도구
const devTools = [
  {
    name: "VSCode",
    image: `${process.env.PUBLIC_URL}/images/skills/vscode.svg`,
    description: (
      <ul>
        <li>React 기반의 포트폴리오를 VS Code에서 개발</li>
        <li>Netlify를 활용해 정적 사이트로 배포</li>
        <li>GitHub를 이용해 버전 관리를 수행</li>
        <li>CI/CD를 통해 코드 변경 사항이 자동으로 반영되도록 설정</li>
        <li>CSS를 활용한 반응형 디자인 적용</li>
      </ul>
    )
  },
  {
    name: "Eclipse",
    image: `${process.env.PUBLIC_URL}/images/skills/eclipse.svg`,
    description: (
      <ul>
        <li>Spring MVC·MyBatis 연동 개발 환경으로 사용, 톰캣 서버 테스트 진행</li>
        <li>Java 기반 프로젝트(DAO, Service) 작업 시 편리한 디버깅 환경 제공</li>
      </ul>
    )
  },
  {
    name: "Figma",
    image: `${process.env.PUBLIC_URL}/images/skills/figma.svg`,
    description: (
      <ul>
        <li>웹·모바일 UI 프로토타입 설계, 팀원과 디자인 협업 시 활용</li>
        <li>디자인 시안을 공유하고, 실시간 코멘트로 피드백 반영</li>
      </ul>
    )
  },
  {
    name: "Netlify",
    image: `${process.env.PUBLIC_URL}/images/skills/netlify.svg`,
    description: (
      <ul>
        <li>정적 사이트(포트폴리오) 배포, 빌드 후 CI/CD 자동화 설정</li>
      </ul>
    )
  },
  {
    name: "GitHub",
    image: `${process.env.PUBLIC_URL}/images/skills/github.svg`,
    description: (
      <ul>
        <li>Git 버전 관리를 통한 협업 활용</li>
      </ul>
    )
  }
];

const Skills = () => {
  return (
    <div id="skills">
      <Title title="My Development Toolkit" />
      <SubTitle
        text={
          <>
            <p>제가 공부하고 프로젝트에 적용한 기술들을 소개합니다.</p>
            <p>단순한 아이콘이 아닙니다. 마우스를 올려보세요!</p>
          </>
        }
      />
      <div className="skills-container">
        {/* 기술 스택 */}
        <div className="skill-category">
          <h4>기술 스택</h4>
          <div className="skill-list">
            {techStack.map((skill, index) => (
              <SkillIcon key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* 개발 & 협업 도구 */}
        <div className="skill-category">
          <h4>개발 & 협업 도구</h4>
          <div className="skill-list">
            {devTools.map((skill, index) => (
              <SkillIcon key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
