import React from "react";
import { string } from "prop-types";
import styled from "@emotion/styled";

import ArticleDivider from "./ArticleDivider";

const Container = styled.div`
  margin: 48px 0;
  width: 100%;
`;

const Section = styled.div`
  color: #6195F7;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 24px 0;
  line-height: 150%;
`;

const Heading = ({ section, title }) => {
  return (
    <Container>
      <Section>{section}</Section>
      <Title>{title}</Title>
      <ArticleDivider />
    </Container>
  );
};

Heading.propTypes = {
  section: string.isRequired,
  title: string.isRequired,
};

export default Heading;
