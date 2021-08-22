import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>Rogelio Aguilar</SectionTitle>
      <SectionText>
        I am a Computer Science undergraduate student from UC Merced with an
        interest in front-end, back-end, and software development. Seeking a job
        to apply my experience by helping a company maintaining their website,
        fixing bugged software, and working with databases.
      </SectionText>
      <Button
        onClick={() =>
          window.open("mailto:rogelioaguilar208@gmail.com", "_blank")
        }
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
