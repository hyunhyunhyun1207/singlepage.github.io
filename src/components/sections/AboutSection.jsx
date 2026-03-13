import React from "react";
import styled from "styled-components";

export default function AboutSection() {
  const items = [
    {
      title: "Visual Direction",
      desc: "Meta 계열의 라이트 블루, 반투명 글래스 카드, 넓은 여백, 큰 타이포 중심 구성",
    },
    {
      title: "Portfolio Strategy",
      desc: "MES를 대표작으로 상단에 배치하고, 나머지 프로젝트는 짧고 선명하게 정리",
    },
    {
      title: "Interaction",
      desc: "스크롤 시 부드러운 등장 애니메이션과 카드 호버, 링크 CTA 중심 인터랙션",
    },
    {
      title: "Expandability",
      desc: "추후 상세 페이지 라우팅, GitHub 링크, 배포 링크, 영상 임베드 추가가 쉬운 구조",
    },
  ];

  return (
    <Section id="about">
      <MainCard>
        <SectionLabel>About</SectionLabel>
        <Title>개발 경험을 화면에서 바로 느끼게</Title>
        <Description>
          이 포트폴리오는 단순한 프로젝트 나열보다, 대표 프로젝트의 분위기와
          완성도를 먼저 전달하는 방향으로 설계했습니다. 첫 화면에서는 시선이 큰
          영상 영역으로 모이고, 이후에 프로젝트 세부 내용을 카드형 구조로
          자연스럽게 탐색하게 됩니다.
        </Description>
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
