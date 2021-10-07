import styled from "@emotion/styled";
import React from "react";
import { Lottie, useLottie } from "react-lottie-hook";

import animationData from "../../assets/ilust1/ilust1.json";
import arc1 from "../../assets/ilust1/arc.svg";
import hole1 from "../../assets/ilust1/hole.svg";
import { useMobileDevice } from "../../helper/useMobileDevice";

const LottieMobileContainer = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const LottieMobile = () => {
  const { isMobile, width } = useMobileDevice();
  const [lottieRef, ,] = useLottie({
    renderer: "svg",
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData,
  });

  const centerStyle = { position: "absolute", width: width, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto' };

  if (!isMobile) return null;

  return (
    <LottieMobileContainer>
      <img
        src={arc1}
        style={centerStyle}
      />
      <div style={centerStyle}>
        <Lottie lottieRef={lottieRef} width={width} height={1.4 * width} />
      </div>
      <img
        src={hole1}
        style={centerStyle}
      />
      <div style={{ height: 1.4 * width, width: width, margin: 'auto' }}></div>
    </LottieMobileContainer>
  );
};

export default LottieMobile;
