import React from "react";
import styled from "styled-components";

export default function AboutSection() {
  const items = [
    {
      title: "Development Direction",
      desc: "화면과 기능을 분리해서 보기보다, 사용자 경험과 데이터 흐름이 자연스럽게 이어지는 구조를 지향",
    },
    {
      title: "Problem Solving",
      desc: "기능 구현 전 흐름과 상태를 먼저 정리하고, 이후 컴포넌트 구조와 데이터 구조를 맞추는 방식으로 접근",
    },
    {
      title: "Domain Interest",
      desc: "MES, 실시간 서비스, 데이터 추적처럼 흐름과 구조가 중요한 프로젝트",
    },
    {
      title: "What I Value",
      desc: "완성도 있는 UI뿐 아니라 유지보수성, 명확한 구조, 실제 사용성을 함께 고려하는 개발",
    },
  ];

  return (
    <Section id="about">
      <MainCard>
        <SectionLabel>About</SectionLabel>
        <Title>개발 경험을 화면에서 바로</Title>
      </MainCard>

      <Grid>
        {items.map((item) => (
          <SubCard key={item.title}>
            <SubTitle>{item.title}</SubTitle>
            <SubDesc>{item.desc}</SubDesc>
          </SubCard>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 24px;
  margin-top: 80px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const CardBase = styled.div`
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
`;

const MainCard = styled(CardBase)`
  padding: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubCard = styled(CardBase)`
  padding: 24px;
`;

const SectionLabel = styled.p`
  margin: 0 0 12px;
  font-size: 13px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #94a3b8;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 32px;
`;

const Description = styled.p`
  margin: 16px 0 0;
  line-height: 1.8;
  color: var(--text-soft);
`;

const SubTitle = styled.h4`
  margin: 0;
  font-size: 20px;
`;

const SubDesc = styled.p`
  margin: 12px 0 0;
  line-height: 1.7;
  color: var(--text-soft);
`;
