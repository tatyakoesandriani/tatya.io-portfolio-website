import React, { useState } from "react";
import SEO from "../components/seo";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import ParticleBackground from "../components/ParticleBackground";
import { Lottie, useLottie } from "react-lottie-hook";
import animationData from "../assets/ilust1/ilust1.json";
import arc1 from "../assets/ilust1/arc.svg";
import hole1 from "../assets/ilust1/hole.svg";
import holeframe from "../assets/ilust2/holeframe.svg";
import ilust2 from "../assets/ilust2/ilust2.svg";
import cardkukun from "../assets/card/cardkukun.webp";
import cardcatapa from "../assets/card/cardcatapa.webp";
import cardta from "../assets/card/cardta.webp";
import PageFooter from "../components/footer";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import { useWindowSize } from "../helper/useWindowSize";

const LOTTIE_WIDTH = 436;
const LOTTIE_HEIGHT = 614;

const breakpoints = [1080];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

// styles
document.body.style =
  "background: #1c1c1c; padding: 0; margin: 0; top: 0; bottom: 0;";

const ThisPage = styled.main`
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
    padding: 0 24px;
  }
`;

const Heading1 = styled.h1`
  font-size: 60px;
  line-height: 71.1px;
  font-weight: 700;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const Heading2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  margin: 24px 0 48px 0;
  transform: translate(0%, 0%);
`;

const Link = styled.a`
  font-weight: 700;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #f1f1f1;
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
`;

const Btn = styled.a`
  padding: 12px 32px;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  color: #f1f1f1;
`;

const BtnIcon = styled.a`
  padding: 8px;
  position: relative;
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  margin: 0 16px 0 0;
  transition: 0.25s;
  color: #f1f1f1;
  font-size: 20px;
  line-height: 0;
  &:hover {
    fill: #1c1c1c;
    background-color: #f1f1f1;
    color: #1c1c1c;
  }
`;

const MainDiv = styled.div`
  margin: 5vw 0 5vw 0;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

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

const CardImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;
const CardTitle = styled.div`
  font-size: 40px;
  line-height 300%;
  font-weight: 700;
  padding: 24px;
`;

const CardContent = styled.div`
  font-size: 20px;
  padding: 0 24px 24px 24px;
`;

const CardChip = styled.div`
  display: flex;
  padding: 0 24px 24px 24px;
  overflow: hidden;
`;

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
  }
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
`;

const SecondOther = styled.div`
  padding: 40px;
  border: 0 0 0 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
`;
const OtherH1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 150%;
  margin: 0 0 20px 0;
`;

const OtherH2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const LottieMobile = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const LottieElementContainer = styled.div((props) => ({
  position: "absolute",
  width: props.width,
  right: props.right,
}));

const IllustrationContainer = styled.div`
  @media (max-width: 920px) {
    display: none;
  }
`;

// markup
const IndexPage = () => {
  const [open, setOpen] = useState(false);
  const windowSize = useWindowSize();
  const [lottieRef, ,] = useLottie({
    renderer: "svg",
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false,
    },
    animationData,
  });

  const width = windowSize.width < 1200 ? windowSize.width / 4 : LOTTIE_WIDTH;
  const isMobile = windowSize.width < 920;

  return (
    <>
      <ParticleBackground />
      <SEO />
      {!isMobile && <Navbar />}
      {isMobile && (
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      )}
      <ThisPage>
        <MainDiv>
          {isMobile && (
            <LottieMobile>
              <LottieElementContainer width={width} right={"33%"}>
                <img
                  src={arc1}
                  style={{ position: "absolute", width: width, right: "33%" }}
                />
              </LottieElementContainer>
              <LottieElementContainer width={width} right={0}>
                <Lottie
                  lottieRef={lottieRef}
                  width={width}
                  height={1.4 * width}
                />
              </LottieElementContainer>
              <LottieElementContainer width={width} right="33%">
                <img
                  src={hole1}
                  style={{ position: "absolute", width: width, right: "33%" }}
                />
              </LottieElementContainer>
              <div style={{ height: 1.4 * width, width: width }}></div>
            </LottieMobile>
          )}
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
            <BtnIcon
              href="mailto:tatyakoesandriani@gmail.com?subject=Hi Tatya, I would like to get to know you better!"
              target="_blank"
            >
              <AiOutlineMail />
            </BtnIcon>
            <BtnIcon href="http://linkedin.com/in/tatyak" target="_blank">
              <AiFillLinkedin />
            </BtnIcon>
            <BtnIcon href="https://tatyakoesandriani.medium.com">
              <AiOutlineMedium />
            </BtnIcon>
          </SubDivKiri1>
          <SubDivKanan1>
            {!isMobile && (
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
            )}
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
            <Btn>More About Me</Btn>
          </SubDivKanan2>
        </MainDiv>

        <Heading1>Featured Projects</Heading1>
        <CardContainer>
          <SubDivKiriCard>
            <Card>
              <CardImg src={cardkukun}></CardImg>
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
              <CardImg src={cardta}></CardImg>
              <CardTitle>Tokopedia Academy</CardTitle>
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
          </SubDivKiriCard>

          <SubDivKananCard>
            <Card>
              <CardImg src={cardcatapa}></CardImg>
              <CardTitle>CATAPA: Onboarding</CardTitle>
              <CardContent>
                CATAPA is an HR Intelligent system that helps HR to do digital
                payroll and managing human resources powered by AI. I was given
                a task to make a helpful onboarding.
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
      </ThisPage>

      <PageFooter />
    </>
  );
};

export default IndexPage;
