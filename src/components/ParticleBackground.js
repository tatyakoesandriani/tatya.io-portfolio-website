import React from "react";
import Particles from "react-particles-js";
import particlesConfigStar from "./particle-config-star";
import particlesConfigBB from "./particle-config-bb";
import particlesConfigBW from "./particle-config-bw";
import particlesConfigBP from "./particle-config-bp";
import styled from "@emotion/styled";

const ParticleSection1 = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -99;
`
const ParticleSection2 = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -99;
`

export default function ParticleBackground() {
    return (
        <>
            <ParticleSection1><Particles params={particlesConfigStar}></Particles></ParticleSection1>
            <ParticleSection2><Particles params={particlesConfigBB}></Particles></ParticleSection2>
            <ParticleSection2><Particles params={particlesConfigBW}></Particles></ParticleSection2>
            <ParticleSection2><Particles params={particlesConfigBP}></Particles></ParticleSection2>
        </>
    );
}