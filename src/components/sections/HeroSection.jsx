import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, PlayCircle, Database, Cpu } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function HeroSection() {
  return (
    <Section>
      <Left
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Badge>
          <Dot />
          Meta-inspired Portfolio Concept
        </Badge>

        <TextGroup>
          <Headline>
            프로젝트를 <Accent>몰입감 있게</Accent> 보여주는
            <br />
            개인 포트폴리오 SPA
          </Headline>
          <Description>
            밝은 메타 감성, 유리 질감 카드, 대형 타이포, 영상 중심 히어로 구성을
            바탕으로 MES 같은 대표 프로젝트는 강하게 강조하고, 나머지 프로젝트는
            깔끔한 카드 형태로 정리하는 포트폴리오 랜딩 페이지입니다.
          </Description>
        </TextGroup>

        <ButtonRow>
          <SecondaryButton
            as="a"
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub 연결</span>
            <Github size={16} />
          </SecondaryButton>
        </ButtonRow>
      </Left>

      <Right
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <PreviewOuter>
          <PreviewInner>
            <PreviewTop></PreviewTop>

            <VideoMock>
              <VideoGrid />
              <VideoContent>
                <PlayCircle size={64} />
                <VideoTitle>MES 시연 영상 영역</VideoTitle>
                <VideoDesc>유튜브 임베드 또는 mp4 미리보기 배치 가능</VideoDesc>
              </VideoContent>
            </VideoMock>

            <InfoGrid>
              {[
                { icon: Database, label: "Data Flow" },
                { icon: Cpu, label: "Monitoring" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <InfoCard key={item.label}>
                    <Icon size={20} />
                    <InfoCaption>Core Layer</InfoCaption>
                    <InfoTitle>{item.label}</InfoTitle>
                  </InfoCard>
                );
              })}
            </InfoGrid>
          </PreviewInner>
        </PreviewOuter>
      </Right>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: end;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Right = styled(motion.div)`
  position: relative;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid #bae6fd;
  background: #ecfeff;
  color: #0e7490;
  font-size: 14px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #06b6d4;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Headline = styled.h2`
  margin: 0;
  max-width: 860px;
  font-size: clamp(42px, 7vw, 72px);
  line-height: 1.08;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    br {
      display: none;
    }
  }
`;

const Accent = styled.span`
  color: #0891b2;
`;

const Description = styled.p`
  margin: 0;
  max-width: 760px;
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-soft);
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const SecondaryButton = styled(BaseButton)`
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
  color: var(--text);

  &:hover {
    background: #f8fafc;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 220px);
  gap: 12px;
`;

const StatCard = styled.div`
  padding: 20px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #64748b;
`;

const StatValue = styled.p`
  margin: 10px 0 0;
  font-size: 22px;
  font-weight: 600;
`;

const PreviewOuter = styled.div`
  overflow: hidden;
  padding: 16px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(22px);
  box-shadow: var(--shadow-strong);
`;

const PreviewInner = styled.div`
  padding: 16px;
  border-radius: 28px;
  border: 1px solid rgba(217, 230, 245, 0.9);
  background: #f8fbff;
`;

const PreviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

const PreviewLabel = styled.p`
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #94a3b8;
`;

const PreviewTitle = styled.h3`
  margin: 8px 0 0;
  font-size: 22px;
`;

const MiniBadge = styled.div`
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid #bae6fd;
  background: #ecfeff;
  color: #0e7490;
  font-size: 12px;
`;

const VideoMock = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  border: 1px solid #dbeafe;
  background:
    radial-gradient(
      circle at top left,
      rgba(34, 211, 238, 0.18),
      transparent 35%
    ),
    linear-gradient(135deg, #ffffff, #eef6ff 55%, #e8f1ff);
`;

const VideoGrid = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.6;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px);
  background-size: 28px 28px;
`;

const VideoContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #0891b2;

  svg {
    transition: transform 0.3s ease;
  }

  ${VideoMock}:hover & svg {
    transform: scale(1.08);
  }
`;

const VideoTitle = styled.p`
  margin: 16px 0 0;
  color: var(--text);
  font-size: 18px;
  font-weight: 500;
`;

const VideoDesc = styled.p`
  margin: 8px 0 0;
  color: var(--text-soft);
  font-size: 14px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  padding: 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  color: #0891b2;
`;

const InfoCaption = styled.p`
  margin: 12px 0 0;
  font-size: 14px;
  color: #64748b;
`;

const InfoTitle = styled.p`
  margin: 6px 0 0;
  font-weight: 500;
  color: var(--text);
`;
