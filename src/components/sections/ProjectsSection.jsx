import React from "react";
import styled from "styled-components";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <Top>
        <div>
          <Label>Selected Works</Label>
          <Title>진행했던 프로젝트</Title>
        </div>
        <Description>
          대표작은 깊이 있게, 보조 프로젝트는 빠르게 이해되도록 정보 밀도를
          조절한 구성입니다.
        </Description>
      </Top>

      <List>
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </List>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 96px;
`;

const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.p`
  margin: 0;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #94a3b8;
`;

const Title = styled.h3`
  margin: 8px 0 0;
  font-size: clamp(32px, 4vw, 42px);
`;

const Description = styled.p`
  margin: 0;
  max-width: 520px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-soft);
`;

const List = styled.div`
  display: grid;
  gap: 24px;
`;
