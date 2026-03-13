import React from "react";
import styled from "styled-components";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <Top>
        <div>
          <Label>Projects</Label>
          <Title>프로젝트</Title>
        </div>
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
  scroll-margin-top: 100px;
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
