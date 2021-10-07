import styled from "@emotion/styled";

const HomePage = styled.main`
  margin: auto;
  font-family: Rubik, sans-serif, serif;
  padding: 0 120px;
  color: #f1f1f1;
  @media (min-width: 1200px) {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
  @media (max-width: 920px) {
    padding: 32px;
  }
`;

export default HomePage;
