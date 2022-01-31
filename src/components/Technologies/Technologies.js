import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiPostgresql,
  DiReact,
} from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux, SiExpress } from "react-icons/si";
import {
  SectionTitle,
  SectionDivider,
  Section,
  SectionText,
} from "../../styles/GlobalStyleComponents";
import {
  TechnologiesContainer,
  Technology,
  TechnologyCard,
} from "./TechnologiesStyles";
import Fade from "react-reveal/Fade";
const Technologies = () => {
  return (
    <Fade bottom>
      <Section nopadding id="technologies">
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
          I have experience working with the following technologies:
        </SectionText>
        <TechnologiesContainer>
          <TechnologyCard>
            <Technology>
              <DiReact /> React
            </Technology>
          </TechnologyCard>
          <TechnologyCard>
            <Technology>
              <DiJavascript /> JavaScript
            </Technology>
          </TechnologyCard>
          <TechnologyCard>
            <Technology>
              <FaNodeJs /> NodeJs
            </Technology>
          </TechnologyCard>
          <TechnologyCard>
            <Technology>
              <DiPostgresql /> PostgreSQL
            </Technology>
          </TechnologyCard>
          <TechnologyCard>
            <Technology>
              <SiRedux /> Redux
            </Technology>
          </TechnologyCard>
          <TechnologyCard>
            <Technology>
              <SiExpress /> Express
            </Technology>
          </TechnologyCard>
          <TechnologyCard>
            <Technology>
              <DiHtml5 /> Html5
            </Technology>
          </TechnologyCard>
          <TechnologyCard>
            <Technology>
              <DiCss3 /> Css
            </Technology>
          </TechnologyCard>
        </TechnologiesContainer>
      </Section>
    </Fade>
  );
};

export default Technologies;