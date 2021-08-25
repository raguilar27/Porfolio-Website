import React from "react";
import Link from "next/link";

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
      <SectionTitle>
        Hello, I'm
        <br />
        Rogelio Aguilar
      </SectionTitle>
      <SectionText>
        Full-Stack web developer and aspiring Software Engineer
      </SectionText>
      <Link href="../../../images/Resume.pdf">
        <Button>
          <a target="_blank">View Resume</a>
        </Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
