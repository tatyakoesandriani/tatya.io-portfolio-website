import * as React from "react";
import styled from "@emotion/styled";
import footerilust from "../assets/footer.svg";

const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding: 60px 0;
  background-color: #01924e;
  font-family: Rubik, sans-serif, serif;
`;

const FooterContainer = styled.div`
  margin: auto;
  max-width: 600px;

  @media (max-width: 920px) {
    margin: 0 24px;
  }
`;
const FooterH1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #f1f1f1;
  margin-bottom: 60px;

  @media (max-width: 920px) {
    font-size: 36px;
    font-weight: 500;
  }
`;

const ListWrapper = styled.ul`
  margin: auto;
  float: right;
  list-style-type: none;
  width: 100%;
  display: flex;
  padding-inline-start: 0;
  margin-block-start: 0;
`;

const LinkF = styled.li`
  margin: 0 40px 0 0;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #f1f1f1;
  transform: translate(0%, 0%);
  &::after {
    content: "";
    background-color: #db9af6;
    position: absolute;
    left: 12px;
    bottom: -6px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    z-index: -1;
    transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
  }
  &:hover:after {
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 920px) {
    font-weight: 500;
  }
`;
const Copyright = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #f1f1f1;
  padding: 60px 0;
  @media (max-width: 920px) {
    font-weight: 500;
  }
`;

const FooterIlust = styled.img`
  position: absolute;
  right: 350px;
  top: 100px;

  @media (max-width: 920px) {
    right: 5%;
    width: 20%;
  }
`;

const PageFooter = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterH1>Let's make your ideas possible.</FooterH1>
        <div>
          <ListWrapper>
            <LinkF>Resume</LinkF>
            <LinkF>LinkedIn</LinkF>
            <LinkF>Mail</LinkF>
          </ListWrapper>
        </div>
        <Copyright>© Made with magical powers by Tatya, 2021</Copyright>
        <FooterIlust src={footerilust}></FooterIlust>
      </FooterContainer>
    </Footer>
  );
};

export default PageFooter;
