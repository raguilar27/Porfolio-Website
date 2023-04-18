import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { AiOutlineBug } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on Full-Stack projects with various coding languages and
      frameworks. My preferred coding languages are: Java for backend web
      development, data structures, algorithms, and automated testing.
      JavaScript/React.js for frontend web deveoplment. Some of the technologies
      I want to work with more are Python for machine learning and C++/Unity for
      game deveoplment.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, Node.js, MySQL, Express.js, MongoDB, SpringBoot, Maven
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineBug size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, Selenium, WebdriverIO, ApachePOI, Rest-Assured, PostMan,
            TestNG, Cucumber, Gherkin
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
