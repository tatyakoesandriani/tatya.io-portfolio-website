import styled from "@emotion/styled";

const CardContainer = styled.div`
  margin: 5vw 0 5vw 0;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default CardContainer;