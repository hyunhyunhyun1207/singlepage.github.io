import React from "react";
import styled from "styled-components";

export default function BackgroundGlow() {
  return (
    <Wrap>
      <GlowTopLeft />
      <GlowTopRight />
      <GlowBottom />
      <GridOverlay />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const GlowBase = styled.div`
  position: absolute;
  border-radius: 999px;
  filter: blur(80px);
`;

const GlowTopLeft = styled(GlowBase)`
  left: -10%;
  top: -15%;
  width: 30rem;
  height: 30rem;
  background: rgba(165, 243, 252, 0.7);
`;

const GlowTopRight = styled(GlowBase)`
  right: -10%;
  top: 8%;
  width: 26rem;
  height: 26rem;
  background: rgba(186, 230, 253, 0.55);
`;

const GlowBottom = styled(GlowBase)`
  left: 20%;
  bottom: -10%;
  width: 24rem;
  height: 24rem;
  background: rgba(224, 231, 255, 0.8);
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.16) 1px, transparent 1px);
  background-size: 44px 44px;
`;
