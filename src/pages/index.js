import styled from "@emotion/styled";
import React from "react";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { useMobileDevice } from "../helper/useMobileDevice";
import ParticleBackground from "../components/particles/ParticleBackground";
import PageFooter from "../components/PageFooter";
import Header from "../components/Header";
import LottieDesktop from "../components/lottie/LottieDesktop";
import LottieMobile from "../components/lottie/LottieMobile";

import holeframe from "../assets/ilust2/holeframe.svg";
import ilust2 from "../assets/ilust2/ilust2.svg";
import cardkukun from "../assets/card/cardkukun.webp";
import cardcatapa from "../assets/card/cardcatapa.webp";
import cardta from "../assets/card/cardta.webp";

import HomePage from "../components/ui/HomePage";
import Heading1 from "../components/ui/Heading1";
import Heading2 from "../components/ui/Heading2";
import Link from "../components/ui/Link";
import Button from "../components/ui/Button";
import ButtonIcon from "../components/ui/ButtonIcon";
import Card from "../components/ui/Card";
import CardImage from "../components/ui/CardImage";
import CardTitle from "../components/ui/CardTitle";
import CardChip from "../components/ui/CardChip";
import CardContainer from "../components/ui/CardContainer";
import CardContent from "../components/ui/CardContent";
import Chip from "../components/ui/Chip";
import SEO from "../components/SEO";

const MainDiv = styled.div`
  margin: 0 0 128px 0;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    margin-bottom: 6rem;
  }
`;

const SubDivKiri1 = styled.div`
  flex: 1;
  @media (min-width: 920px) {
    padding-right: 10vw;
  }
`;

const SubDivKanan1 = styled.div`
  margin-left: auto;
  margin-right: 0;
  position: relative;
`;

const SubDivKiri2 = styled.div`
  flex: 0.5;
`;

const SubDivKanan2 = styled.div`
  flex: 0.5;
  position: relative;
`;

const SubDivKiriCard = styled.div`
  margin-right: 30px;
  @media (max-width: 920px) {
    margin-right: 0;
    width: 100%;
  }
`;

const SubDivKananCard = styled.div`
  margin-left: 30px;
  @media (max-width: 920px) {
    margin-left: 0;
    width: 100%;
  }
`;

const MainDivOther = styled.div`
  margin: 5vw 0 5vw 0;
  width: 100%;
  align-items: center;
`;

const FirstOther = styled.div`
  padding: 40px;
  border-top: 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
  @media (max-width: 920px) {
    padding: 24px 0;
  }
`;

const SecondOther = styled.div`
  padding: 40px;
  border: 0 0 0 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
  @media (max-width: 920px) {
    padding: 24px 0;
  }
`;
const OtherH1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 150%;
  margin: 0 0 20px 0;

  @media (max-width: 920px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

const OtherH2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  margin-block-end: 0;
  margin-block-start: 0;

  @media (max-width: 920px) {
    font-size: 20px;
    font-weight: normal;
  }
`;

const IllustrationContainer = styled.div`
  @media (max-width: 920px) {
    display: none;
  }
`;

const IndexPage = () => {
  const { width } = useMobileDevice();

  return (
    <>
      <SEO title={"Tatya Koesandriani"} />
      <ParticleBackground />
      <Header />
      <HomePage>
        <MainDiv>
          <LottieMobile />
          <SubDivKiri1>
            <Heading1>Hi-ya, It’s Tatya!</Heading1>
            <Heading2>
              Experience Designer passionate in establishing a harmonous
              relationship between people and ever-emerging technologies by
              crafting magical experience through design.
              <br />
              <br />
              Currently casting my spells at{" "}
              <Link href="http://tokopedia.com">Tokopedia</Link>
            </Heading2>
            <ButtonIcon
              href="mailto:tatyakoesandriani@gmail.com?subject=Hi Tatya, I would like to get to know you better!"
              target="_blank"
            >
              <AiOutlineMail />
            </ButtonIcon>
            <ButtonIcon href="http://linkedin.com/in/tatyak" target="_blank">
              <AiFillLinkedin />
            </ButtonIcon>
            <ButtonIcon href="https://tatyakoesandriani.medium.com">
              <AiOutlineMedium />
            </ButtonIcon>
          </SubDivKiri1>
          <SubDivKanan1>
            <LottieDesktop />
          </SubDivKanan1>
        </MainDiv>

        <MainDiv>
          <SubDivKiri2>
            <IllustrationContainer>
              <img
                src={holeframe}
                style={{ position: "absolute", width: width }}
              />
              <img src={ilust2} style={{ width: width }} />
            </IllustrationContainer>
          </SubDivKiri2>
          <SubDivKanan2>
            <Heading1>A Little About Me..</Heading1>
            <Heading2>
              My unique quality that people sometimes found suprising is that I
              have a bachelor degree in Civil Engineering. Yet I have been
              awfully familiar with design since middle school. The last year of
              my university I was introduced with UI/UX Design and how this
              specific design field was all about the importance of usability
              rather than aesthetics.
            </Heading2>
            <Button>More About Me</Button>
          </SubDivKanan2>
        </MainDiv>

        <Heading1>Featured Projects</Heading1>
        <CardContainer>
          <SubDivKiriCard>
            <Card>
              <CardImage src={cardkukun}></CardImage>
              <CardTitle>Kukún</CardTitle>
              <CardContent>
                Family-oriented financial mobile application that can help
                parents teach financial literacy to their kids from 7–13 years
                old. Won bronze medal out of 510 other teams.
              </CardContent>
              <CardChip>
                <Chip>Mobile</Chip>
                <Chip>Case Study</Chip>
                <Chip>Competition</Chip>
              </CardChip>
            </Card>
            <Card>
              <CardImage src={cardta}></CardImage>
              <CardTitle>Tokopedia Academy</CardTitle>
              <CardContent>
                Learning ground for the future digital
                talents in Indonesia by Tokopedia. Revamped to
                let users to easily find and learn materials.
              </CardContent>
              <CardChip>
                <Chip>Mobile</Chip>
                <Chip>Case Study</Chip>
                <Chip>Competition</Chip>
              </CardChip>
            </Card>
          </SubDivKiriCard>

          <SubDivKananCard>
            <Card>
              <CardImage src={cardcatapa}></CardImage>
              <CardTitle>CATAPA: Onboarding</CardTitle>
              <CardContent>
                CATAPA is an HR Intelligent system that helps HR to do digital
                payroll and managing human resources powered by AI. Made onboarding for users to simplify learning how to use the app.
              </CardContent>
              <CardChip>
                <Chip>Desktop</Chip>
                <Chip>Case Study</Chip>
                <Chip>Intern</Chip>
              </CardChip>
            </Card>
          </SubDivKananCard>
        </CardContainer>

        <MainDivOther>
          <FirstOther>
            <OtherH1>Corona Updates</OtherH1>
            <OtherH2>Mobile App, Medium</OtherH2>
          </FirstOther>
          <SecondOther>
            <OtherH1>Shopee Redesign</OtherH1>
            <OtherH2>Mobile App, Behance</OtherH2>
          </SecondOther>
        </MainDivOther>
      </HomePage>

      <PageFooter />
    </>
  );
};

export default IndexPage;
