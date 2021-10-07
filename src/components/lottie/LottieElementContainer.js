import styled from "@emotion/styled";

const LottieElementContainer = styled.div((props) => ({
  position: "absolute",
  width: props.width,
  right: props.right,
}));

export default LottieElementContainer;