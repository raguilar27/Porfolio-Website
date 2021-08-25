import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./PerformanceStyles";
import { PerformanceData } from "../../constants/constants";

const Accomplishments = () => (
  <Section>
    <SectionTitle>Performance</SectionTitle>
    <Boxes>
      {PerformanceData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
