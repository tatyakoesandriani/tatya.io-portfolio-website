import styled from "@emotion/styled";

const Chip = styled.div`
  background-color: #f1f1f1;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #1c1c1c;
  padding: 8px 24px;
  margin-right: 12px;
  @media (max-width: 920px) {
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export default Chip;
