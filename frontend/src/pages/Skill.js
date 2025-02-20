import React from "react";
import SkillIcon from "../components/SkillIcon";
import "./Skill.css";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

const techStack = [
  {//기술스택
    name: "JavaScript",
    image: `${process.env.PUBLIC_URL}/images/skills/javascript.svg`,
    description: (
      <>
        <p>
          ▫️ Ajax 비동기 통신과 jQuery를 활용하여 좋아요 및 댓글 등록/수정/삭제 등을
          페이지 새로고침 없이 구현<br/><br/>
          ▫️ DOM 조작을 이용하여 상품 등록 페이지에서 <br/>
          &nbsp;&nbsp;&nbsp;상품 사진 미리보기 기능 구현<br/><br/>
          ▫️ Form Validation을 이해하여 <br/>
          &nbsp;&nbsp;&nbsp;상품 등록 폼 유효성 검사 구현
        </p>
      </>
    )
  },
  {
    name: "Java",
    image: `${process.env.PUBLIC_URL}/images/skills/java.svg`,
    description: (
      <>
        <p>
          ▫️ 객체 지향 프로그래밍(OOP)의 원리를 이해하여 <br/>
          &nbsp;&nbsp;&nbsp;Spring MVC 기반 SHOP에서 회원, 상품, 주문 기능을 구조적으로 구현<br/><br/>
          ▫️ JDBC 연동 구조를 습득하여 Oracle DB와 연동하고,<br/>
          &nbsp;&nbsp;&nbsp;DAO를 통해 상품 정보 CRUD 로직을 안정적으로 처리
        </p>
      </>
    )
  },
  {
    name: "Oracle",
    image: `${process.env.PUBLIC_URL}/images/skills/oracle.png`,
    description: (
      <>
        <p>
          ▫️ DML·DDL·DCL의 개념을 익혀,<br/>
          &nbsp;&nbsp;&nbsp;MyBatis와 함께 상품 테이블 생성·관리 및 프로시저(Procedure) 활용<br/><br/>
          ▫️ Subquery와 JOIN 구조를 이해하여,<br/>
          &nbsp;&nbsp;&nbsp;그룹별 최신 상품 조회 기능 등 복합 쿼리를 효율적으로 작성
        </p>
      </>
    )
  },
  {
    name: "Python",
    image: `${process.env.PUBLIC_URL}/images/skills/python.svg`,
    description: (
      <>
        <p>
          ▫️ 기본 문법(List, Dict, Set)과 제어문 구조를 이해하여,<br/>
          &nbsp;&nbsp;&nbsp;간단한 데이터 처리 자동화 스크립트 작성<br/><br/>
          ▫️ ChatGPT API 동작 원리를 익혀,<br/>
          &nbsp;&nbsp;&nbsp;텍스트·음성 변환(Whisper, gTTs)과 챗봇 프로토타입 구현
        </p>
      </>
    )
  },
  {
    name: "React",
    image: `${process.env.PUBLIC_URL}/images/skills/react.svg`,
    description: (
      <>
        <p>
          ▫️ 컴포넌트 기반 설계를 이해해,<br/>
          &nbsp;&nbsp;&nbsp;SPA 구조의 페이지를 직관적으로 구성<br/><br/>
          ▫️ 상태 관리(useState, useEffect)로<br/>
          &nbsp;&nbsp;&nbsp;실시간 UI 업데이트 구현
        </p>
      </>
    )
  },
  {
    name: "Spring",
    image: `${process.env.PUBLIC_URL}/images/skills/spring.svg`,
    description: (
      <>
        <p>
          ▫️ Spring MVC & DI(의존성 주입) 구조를 익혀,<br/>
          &nbsp;&nbsp;&nbsp;Controller-Service-DAO 계층을 분리하고 AOP로 로깅 & 트랜잭션 관리<br/><br/>
          ▫️ MyBatis와 연동해 동적 쿼리를 작성하고,<br/>
          &nbsp;&nbsp;&nbsp;ResultMap을 이용해 복합 데이터를 쉽게 매핑
        </p>
      </>
    )
  },
  {
    name: "CSS",
    image: `${process.env.PUBLIC_URL}/images/skills/css.svg`,
    description: (
      <>
        <p>
          ▫️ CSS3 선택자와 Flex/Grid 원리를 이해하여,<br/>
          &nbsp;&nbsp;&nbsp;웹 페이지를 반응형 레이아웃으로 설계<br/><br/>
          ▫️ Bootstrap과 Custom CSS를 결합해,<br/>
          &nbsp;&nbsp;&nbsp;고유한 디자인 스타일로 UI를 일관성 있게 적용
        </p>
      </>
    )
  },
  {
    name: "HTML",
    image: `${process.env.PUBLIC_URL}/images/skills/html.svg`,
    description: (
      <>
        <p>
          ▫️ HTML5 Semantic 태그(header, section, nav 등)를 활용해<br/>
          &nbsp;&nbsp;&nbsp;구조적·의미있는 마크업 구현
        </p>
      </>
    )
  },
  {
    name: "Bootstrap",
    image: `${process.env.PUBLIC_URL}/images/skills/bootstrap.svg`,
    description: (
      <>
        <p>
          ▫️ Grid 시스템 원리를 활용해,<br/>
          &nbsp;&nbsp;&nbsp;페이지를 모바일~PC까지 일관성 있게 디자인<br/><br/>
          ▫️ Carousel을 사용해,<br/>
          &nbsp;&nbsp;&nbsp;상품 슬라이드 쇼 UI 구현
        </p>
      </>
    )
  },
  {
    name: "jQuery",
    image: `${process.env.PUBLIC_URL}/images/skills/jquery.svg`,
    description: (
      <>
        <p>
          ▫️ jQuery DOM 메서드(.append(), .remove())로,<br/>
          &nbsp;&nbsp;&nbsp;상품 목록/댓글 목록을 동적으로 추가/삭제<br/><br/>
          ▫️ Ajax로 서버와 비동기 통신을 처리하며,<br/>
          &nbsp;&nbsp;&nbsp;장바구니 기능을 실시간 갱신
        </p>
      </>
    )
  }
];

//개발 & 협업 도구 
const devTools = [
  {
    name: "VSCode",
    image: `${process.env.PUBLIC_URL}/images/skills/vscode.svg`,
    description: (
      <>
        <p>
          ▫️ 프론트엔드(React, JS) 프로젝트에서 ESLint·Prettier로<br/>
          &nbsp;&nbsp;&nbsp;코드 품질 유지 및 편리한 개발 환경 구축<br/><br/>
          ▫️ 실시간 미리보기(Extension) 등<br/>
          &nbsp;&nbsp;&nbsp;다양한 플러그인 활용
        </p>
      </>
    )
  },
  {
    name: "Eclipse",
    image: `${process.env.PUBLIC_URL}/images/skills/eclipse.svg`,
    description: (
      <>
        <p>
          ▫️ Spring MVC·MyBatis 연동 개발 환경으로 사용,<br/>
          &nbsp;&nbsp;&nbsp;톰캣 서버 테스트 진행<br/><br/>
          ▫️ Java 기반 프로젝트(DAO, Service) 작업 시<br/>
          &nbsp;&nbsp;&nbsp;편리한 디버깅 환경 제공
        </p>
      </>
    )
  },
  {
    name: "Figma",
    image: `${process.env.PUBLIC_URL}/images/skills/figma.svg`,
    description: (
      <>
        <p>
          ▫️ 웹·모바일 UI 프로토타입 설계,<br/>
          &nbsp;&nbsp;&nbsp;팀원과 디자인 협업 시 활용<br/><br/>
          ▫️ 디자인 시안을 공유하고,<br/>
          &nbsp;&nbsp;&nbsp;실시간 코멘트로 피드백 반영
        </p>
      </>
    )
  },
  {
    name: "Netlify",
    image: `${process.env.PUBLIC_URL}/images/skills/netlify.svg`,
    description: (
      <>
        <p>
          ▫️ 정적 사이트(포트폴리오) 배포,<br/>
          &nbsp;&nbsp;&nbsp;빌드 후 CI/CD 자동화 설정<br/><br/>
          ▫️ 간단한 URL 관리와,<br/>
          &nbsp;&nbsp;&nbsp;Forms 기능을 이용해 기본 데이터 수집
        </p>
      </>
    )
  },
  {
    name: "GitHub",
    image: `${process.env.PUBLIC_URL}/images/skills/github.svg`,
    description: (
      <>
        <p>
          ▫️ Git 버전 관리를 통한<br/>
          &nbsp;&nbsp;&nbsp;협업 및 브랜치 전략(feature/develop/main) 활용<br/><br/>
          ▫️ Issues·Projects로 작업 분담·이슈 추적,<br/>
          &nbsp;&nbsp;&nbsp;Pull Request로 코드 리뷰 진행
        </p>
      </>
    )
  }
];

const Skills = () => {
  return (
    <div>
      <Title title="My Toolkit" />
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
