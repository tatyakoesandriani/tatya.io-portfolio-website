import styled from "@emotion/styled";

const Card = styled.div`
  width: 100%;
  border: 2px solid #f1f1f1;
  background-color: #1c1c1c;
  color: #f1f1f1;
  border-radius: 10px;
  margin-bottom: 60px;
  box-shadow: rgba(219, 154, 246, 0) 0px 2px 4px;
  transition: all 0.1s ease-in-out;
  &:hover {
    box-shadow: rgba(219, 154, 246) 10px 10px 0px;
    transform: translate3d(0px, -20px, 0px);
  }
`;

export default Card;
