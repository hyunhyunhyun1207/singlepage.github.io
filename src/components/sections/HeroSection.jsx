import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function HeroSection() {
  return (
    <Section>
      <Left
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <TextGroup>
          <Headline>
            <Accent>Idea to Flow</Accent>
            <br />
            개인 포트폴리오 SPA
          </Headline>
        </TextGroup>
      </Left>
    </Section>
  );
}

const Section = styled.section`
  display: block;
  margin-top: 150px;
  margin-bottom: 150px;
  scroll-margin-top: 100px;
`;

const Left = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  align-items: center;
  text-align: center;
`;

const Headline = styled.h2`
  margin: 0;
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
  max-width: 775px;
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
