import { number } from "prop-types";
import styled from "@emotion/styled";

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  margin-bottom: 2rem;
`;

Content.propTypes = {
  columns: number.isRequired,
};

export default Content;
