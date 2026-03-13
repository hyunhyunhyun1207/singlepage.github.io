import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import BackgroundGlow from "./components/common/BackgroundGlow";
import SiteHeader from "./components/layout/SiteHeader";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import StackSection from "./components/sections/StackSection";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppShell>
        <BackgroundGlow />
        <Container>
          <SiteHeader />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <StackSection />
        </Container>
      </AppShell>
    </>
  );
}

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
`;

const Container = styled.div`
  position: relative;
  width: min(var(--max-width), calc(100% - 48px));
  margin: 0 auto;
  padding: 32px 0;

  @media (max-width: 768px) {
    width: min(var(--max-width), calc(100% - 32px));
  }
`;
