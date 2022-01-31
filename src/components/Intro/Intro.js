import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalStyleComponents";
import { Typwriter } from "./IntroStyles";

const Intro = () => {
  return (
    <Section vh margin>
      <Typwriter>Hi there, I am</Typwriter>
      <SectionTitle main>
        Jorge Cuadrado
        <br />
        Full-Stack Developer
      </SectionTitle>
      <SectionText>
        I have a passion for building things. I'm self taught and I'm looking
        for new challenges.
      </SectionText>
    </Section>
  );
};

export default Intro;
