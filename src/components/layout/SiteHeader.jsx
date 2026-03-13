import React from "react";
import styled from "styled-components";
import { Github, Layers3 } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function SiteHeader() {
  return (
    <Header>
      <Inner>
        <RightArea>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#stack">Stack</NavLink>
          </Nav>

          <GithubLink
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </GithubLink>
        </RightArea>
      </Inner>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
  padding: 12px 16px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const NavLink = styled.a`
  padding: 10px 14px;
  border-radius: 999px;
  color: var(--text-soft);
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: var(--text);
  }
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
  color: var(--text);
  transition: all 0.2s ease;

  &:hover {
    background: #f8fafc;
  }
`;
