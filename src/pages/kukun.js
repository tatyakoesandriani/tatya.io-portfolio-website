import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import SEO from "../components/SEO";

import kukuncover from "../images/kukun/kukuncover.webp";
import initialresearch from "../images/kukun/initialresearch.png";
import surveyresults from "../images/kukun/surveyresults.png";
import painpoints from "../images/kukun/painpoints.png";
import hmw from "../images/kukun/hmw.png";
import up_parent from "../images/kukun/up_parent.png";
import up_child from "../images/kukun/up_child.png";
import ia from "../images/kukun/ia.jpg";
import BackgroundLeft from "../images/kukun/background1.png";
import BackgroundRight from "../images/kukun/background2.png";
import Placeholder from "../images/kukun/placeholder.png";

import Break from "../components/ui/Break.js";
import PageFooter from "../components/PageFooter";
import ArticleImage from "../components/ui/Article/ArticleImage";
import ArticlePage from "../components/ui/Article/ArticlePage";
import Heading from "../components/ui/Article/Heading";
import Content from "../components/ui/Article/Content";
import Section from "../components/ui/Article/Section";
import ArticleDivider from "../components/ui/Article/ArticleDivider";

const ArticleTitle = styled.div`
  font-size: 50px;
  margin: 56px 0 20px 0;
  font-weight: 700;
  text-align: center;
  line-height: 150%;
`;

const ArticleSubTitle = styled.div`
  margin: 0 0 56px 0;
  font-size: 30px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
`;

const CoverImage = styled.img`
  width: 100%;
`;

const Ulist = styled.ul``;

const List = styled.li``;

const ArticleSection = styled.div`
  width: 840px;
  margin: auto;
`;

const ArticleSubSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

const Col1 = styled.div`
  flex: 0.5;
  margin-right: 12px;
  border-bottom: 1px solid black;
`;

const Col2 = styled.div`
  flex: 0.5;
  margin-left: 12px;
`;

const C1 = styled.div`
  flex: 0.25;
`;

const C2 = styled.div`
  flex: 0.25;
`;

const C3 = styled.div`
  flex: 0.25;
`;

const C4 = styled.div`
  flex: 0.25;
  margin-left: auto;
  margin-right: 0;
  position: relative;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 150%;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
`;

const H_2 = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 150%;
`;

const H3 = styled.h3``;

const Pg = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
`;

const Link = styled.a`
  font-weight: 700;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #333333;
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

const Overview = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
`;

const SupImg = styled.img`
  width: 100%;
`;

const KukunPage = () => {
  return (
    <>
      <SEO />
      <Header />

      <ArticlePage>
        <ArticleTitle>Financial Literacy Made Easy for Children</ArticleTitle>
        <ArticleSubTitle>Kukun • Mobile App</ArticleSubTitle>
      </ArticlePage>

      <ArticleImage src={kukuncover} />

      <ArticlePage>

        <Section>
          <Heading
            section="Background"
            title="A little bit about GEMASTIK XIII"
          />
          <Content columns={2}>
            <ArticleImage src={BackgroundLeft} alt="Background" />
            <ArticleImage src={BackgroundRight} alt="Background" />
          </Content>
        </Section>

        <Break />

        <Section>
          <Heading
            section="Problem"
            title="According to data and based on our observation and personal experiences."
          />
          <Content columns={3}>
            <div>
              <ArticleImage src={Placeholder} alt="Background" />
              <H3>Complete financial missions for rewards</H3>
              <ArticleDivider />
              <Pg>Teaches the concept of earning money and thus grew a bigger appreciation towards it.</Pg>
            </div>
            <div>
              <ArticleImage src={Placeholder} alt="Background" />
              <H3>Track Incomes and <br/> Expenses</H3>
              <ArticleDivider />
              <Pg>To make children to be more conscious on their spendings and can manage it well.</Pg>
            </div>
            <div>
              <ArticleImage src={Placeholder} alt="Background" />
              <H3>Create habit of saving up for their dreams</H3>
              <ArticleDivider />
              <Pg>Lesson on preserving grit and resist temptation to get what children’s want.</Pg>
            </div>
          </Content>
        </Section>

        <ArticleSection>
          <H1>Overview</H1>
          <ArticleSubSection>
            <Col1>
              <Overview>
                Kukún is a family-oriented financial mobile application to help
                parents teach their kids financial literacy via gamification.
              </Overview>
            </Col1>
            <Col2>
              <SupImg
                src={
                  "https://image.freepik.com/free-photo/caucasian-mom-dad-hugging-children-using-tablets-phone-smiling_74855-7989.jpg"
                }
              />
            </Col2>
          </ArticleSubSection>
          <H2>Project Info and Recognition</H2>
          <Pg>
            Submission for GEMASTIK XIII 2020, a prestigious annual competition
            held by the Ministry of Education and Culture of Indonesia with 11
            different categories. Our team made it to the finalist (Top 20
            Teams) with the initial pool of 510 teams for User Experience Design
            category.
          </Pg>
          <ArticleSubSection>
            <C1>
              <H2>Time</H2>3 Months <br />
              (July 2020 - Oct 2020)
            </C1>
            <C2>
              <H2>Team</H2>
              <Link href="budiman.dev">Hafizh Budiman</Link>
            </C2>
            <C3>
              <H2>Tools</H2>
              <Ulist>
                <List>Figma</List>
                <List>Miro</List>
                <List>Balsamiq</List>
                <List>Adobe Ps</List>
              </Ulist>
            </C3>
            <C4>
              <H2>My Role</H2>
              <Ulist>
                <List>UX Researcher</List>
                <List>UX Designer</List>
                <List>UI Designer</List>
              </Ulist>
            </C4>
          </ArticleSubSection>
          <H2>Problem</H2>
          <Pg>
            According to a survey conducted by Financial Services Authority of
            Indonesia, in the year 2019, Indonesia has financial literacy index
            of 38,03%. This number is categorized as <b>below average</b>. It
            can be conclude that from that data, Indonesian citizen have yet to
            understand the importance of financial literacy itself. As an
            aftermath, roughly <b>16 million Indonesian suffered depression</b>{" "}
            mostly because of <b>financial problems</b>.
          </Pg>
          <SupImg src={initialresearch} />
          <H2>Solution</H2>
          <Pg>
            Introducing Kukún, family-oriented financial mobile application that
            can help parents teach financial literacy to their kids from 7–13
            years old. Kukún helps kids to understand about financial concepts
            and how to manage it. It includes gamification and personalization
            so learning can be much more fun to kids. Kukún also helps kids to
            grow empathy by nourishing the habit of donating to people in need.
          </Pg>
        </ArticleSection>
        <Break />
        <ArticleSection>
          <H1>Research</H1>
          <H_2>
            How do parents feels regarding the importance of financial literacy
            for their children?
          </H_2>
          <Pg>
            We decide to validate on whether or not the problem is worth
            building by asking our target market, parents. We were interested to
            know their opinion about teaching financial literacy to their
            children. Because the usage of smartphone for children is also a
            highly-debated subject, we also liked to have enlightment on that.
          </Pg>
          <SupImg src={surveyresults} />
        </ArticleSection>
        <Break />

        <ArticleSection>
          <H1>Define</H1>
          <H2>Pain Points</H2>
          <Pg>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </Pg>
          <SupImg src={painpoints} />

          <H2>User Persona</H2>
          <Pg>
            After getting an rough idea of our target user based on the
            conducted survey, we created two different personas aiming at two
            different target user of our application. The first one represents
            parents and the other one is for the kids.
          </Pg>
          <SupImg src={up_parent} />
          <SupImg src={up_child} />
        </ArticleSection>
        <Break />

        <ArticleSection>
          <H1>Ideation</H1>
          <H2>How Might We</H2>
          <Pg>
            We utilized HMW method in mapping the categorized problems into
            feasible opportunities that we could implement in our product.
          </Pg>
          <SupImg src={hmw} />
          <H2>Information Architecture</H2>
          <Pg>
            Information architecture are then designed to guide us in
            introducing orders and structure within the product. It helped us
            organize informations and improve discoverability for the users.
          </Pg>
          <SupImg src={ia} />

          <H2>Wireflows</H2>
          <Pg>
            After knowing how the flow will take place on Kukún, then we proceed
            to pour the user flows into some rough wireframes to get a better
            visual view of the App. The tool we used was Balsamiq. Few of the
            wireframes looked like these below.
          </Pg>
          {/* <SupImg src={kukunwireflows} /> */}
        </ArticleSection>
        <Break />

        <ArticleSection>
          <H1>Final Design</H1>
          <H2>Onboarding</H2>
          <Pg>
            The application starts with a splash screen featuring Kukún’s logo.
            Because the app is aimed to two different user group (child and
            parent) the first thing to come up is asking who is our user.
          </Pg>
          {/* <SupImg src={kukunob} /> */}

          <H2>Parent's Dashboard</H2>
          <H3>Login/Sign Up</H3>
          <Pg>
            After parent went throughout the onboarding, they can choose whether
            to sign up for a new account or login, according the availability of
            their account inside Kukún.
          </Pg>
          {/* <SupImg src={kukunparentslogin} /> */}

          <H3>Homepage and Notification</H3>
          <Pg>
            After logging in/signing up, parents can add their children to their
            app by entering their name and phone number. On parent’s homepage,
            they can choose which kids they wanted to see and they can also see
            their total points. There is also activity and notification. The
            difference between activity and notification is activity does not
            include urgent prompt like the child’s request to transfer points to
            e-wallet.
          </Pg>
          {/* <SupImg src={kukunparentshome} /> */}

          <H3>Mission</H3>
          <Pg>
            In the mission page, parents can see assigned missions for their
            children based on the mission’s category. Actions they can give to
            the missions are seeing their status, editing, and adding new
            mission. They can also add other category of the mission. If a child
            had done their mission and had request approval for the parents to
            verify it’s legibility, parents can approve it by tapping on the
            mission. The child then can receive points that their parent had
            promised.
          </Pg>
          {/* <SupImg src={kukunparentsmission} /> */}

          <H3>Progress</H3>
          <Pg>
            Parents can see their child’s progress in the Progress page. Here
            they can see their child’s achievements and detailed info of their
            dreams.
          </Pg>
          {/* <SupImg src={kukunparentsprogress} /> */}

          <H3>Profile</H3>
          <Pg>
            To be able to give point rewards for their children’s mission,
            parents also need to have points on their own. Parents can top up
            their points by navigating to profile page. They can also see the
            balance of their points, transfer them, do a top up, and also see
            their points’ history. Apart from the points itself, parents can
            also give actions to their profile and app settings here. Those
            actions are change their profile, invite friends, input discount
            code, see vouchers, and change the app’s language.
          </Pg>
          {/* <SupImg src={kukunparentsprofile} /> */}

          <H2>Child’s Dashboard</H2>
          <H3>Login Page</H3>
          <Pg>
            If child was chosen on the onboarding page, you would be asked your
            phone number and nothing else. This happens because your parent has
            had to filled out your number before. After entering your phone
            number, then a basic two factor authentication will be asked. In
            this page, the system already know who you are from your phone
            number.
          </Pg>
          {/* <SupImg src={kukunchildlogin} /> */}

          <H3>Personalization</H3>
          <Pg>
            For the App to be fun and enjoyable for kids, we decide to include a
            personalization by having your own in-game pet that would accompany
            you cruising inside the app. You can choose from up to 5 favorite
            animals available.
          </Pg>
          {/* <SupImg src={kukunchildpersonal} /> */}

          <H3>Homepage, Mission Gamification, and Achievements</H3>
          <Pg>
            In the child’s homepage, you will be welcomed by your pet! Here, you
            can find information about your total points and also transfer them
            to your e-wallet account. Immediately, children can also see what
            they can do with the app which are tracking their expenses and
            finish missions given by their parents.
          </Pg>

          <Pg>
            To build the habit of saving up, Kukún use gamification feature in
            which children can finish mission given by their parents. In the
            Mission page, they would find missions that they can do. They can
            change the status of the mission from “Not yet finished” to
            “Finished” and they must provide a proof by taking a picture of the
            finished mission. After that, the system will give a notification to
            their parent that the children has finished a mission and parent
            should approve that they in fact had done it. Only when it has been
            approved, children can earn points.
          </Pg>
          {/* <SupImg src={kukunchildgame1} /> */}
          {/* <SupImg src={kukunchildgame2} /> */}

          <Pg>
            If the children has finished a few tasks, they can eventually earn
            badges that resembles their achievements. It can be found along with
            finished mission in Achievements page.
          </Pg>
          {/* <SupImg src={kukunchildgame3} /> */}

          <H3>Financial Tracking</H3>
          <Pg>
            One of the challenges that we were facing while designing, is that
            the most important think about teaching children about financial
            literacy is not all about saving money, but also tracking them. We
            learned that from an expert we interviewed. In this page, children
            can track their income and expenses. Not only that, they can also
            see an overview of their money from weekly to yearly. This will
            teach the kids to be more conscious about their spendings.
          </Pg>
          <Pg>
            If the children has finished a few tasks, they can eventually earn
            badges that resembles their achievements. It can be found along with
            finished mission in Achievements page.
          </Pg>
          {/* <SupImg src={kukunchildfinancial} /> */}

          <H3>Dreams</H3>
          <Pg>
            To motivate them to save money, children can also add things that
            they want and save up for it. To also build empathy along the way,
            there will always be one category dedicated for donation for the
            people in need. It will always be updated whenever the children has
            finished one.
          </Pg>
          {/* <SupImg src={kukunchilddreams} /> */}
        </ArticleSection>
        <Break />

        <ArticleSection>
          <H1>Validation</H1>
          <Pg>
            In the end, after countless refinements, we validated our results.
            We did online usability testing to 14 users (7 parents and 7
            children) utilizing zoom, since we’re conducting it in a pandemic.
            There are five metrics that will be used to measure this product’
            usability: Task completion, critical and non-critical errors, time
            on task, and subjective evaluations. Below are the results.
          </Pg>
          {/* <SupImg src={kukunvalidation} /> */}
        </ArticleSection>
        <Break />

        <ArticleSection>
          <H1>Conclusion</H1>
          <H2>Final thoughts</H2>
          <Pg>
            There had been a lot of challenges while designing a dedicated app
            for children, as most of them have not even acquire basic logic of
            an app and more likely to trust their intuition and instincts. I
            also learned that validation process is very crucial because it
            turns out our assumption about children is not as accurate as we
            think it is when we actually tested it. Also touching a difficult
            topic (financial education for children) is not possible without
            actually consulting to an expert, which we eventually did.
          </Pg>
        </ArticleSection>
      </ArticlePage>
      <PageFooter />
    </>
  );
};

export default KukunPage;
