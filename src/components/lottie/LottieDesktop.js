import React from "react";
import { Lottie, useLottie } from "react-lottie-hook";

import animationData from "../../assets/ilust1/ilust1.json";
import arc1 from "../../assets/ilust1/arc.svg";
import hole1 from "../../assets/ilust1/hole.svg";
import LottieElementContainer from './LottieElementContainer';
import { useMobileDevice } from "../../helper/useMobileDevice";

const LottieDesktop = () => {
  const { isMobile, width } = useMobileDevice();
  const [lottieRef, ,] = useLottie({
    renderer: "svg",
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false,
    },
    animationData,
  });

  if (isMobile) return null;

  return (
    <>
      <LottieElementContainer width={width} right={0}>
        <img
          src={arc1}
          style={{ position: "absolute", width: width, right: 0 }}
        />
      </LottieElementContainer>
      <LottieElementContainer width={width} right={0}>
        <Lottie
          lottieRef={lottieRef}
          width={width}
          height={1.4 * width}
        />
      </LottieElementContainer>
      <div>
        <img src={hole1} style={{ width: width, right: 0 }} />
      </div>
    </>
  );
};

export default LottieDesktop;
