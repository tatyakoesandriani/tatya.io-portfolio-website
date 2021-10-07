import styled from "@emotion/styled";
import React from "react";
import Particles from "react-particles-js";

import particlesConfigStar from "./particle-config-star";
import particlesConfigBB from "./particle-config-bb";
import particlesConfigBW from "./particle-config-bw";
import particlesConfigBP from "./particle-config-bp";

const ParticleSection1 = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: -99;
`;
const ParticleSection2 = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: -99;
`;

export default function ParticleBackground() {
  return (
    <>
      <ParticleSection1>
        <Particles params={particlesConfigStar} height="100vh" width="100vw" />
      </ParticleSection1>
      <ParticleSection2>
        <Particles params={particlesConfigBB} height="100vh" width="100vw" />
      </ParticleSection2>
      <ParticleSection2>
        <Particles params={particlesConfigBW} height="100vh" width="100vw" />
      </ParticleSection2>
      <ParticleSection2>
        <Particles params={particlesConfigBP} height="100vh" width="100vw" />
      </ParticleSection2>
    </>
  );
}
