import React from "react";
import { SocialIcons } from "../Menu/MenuStyles";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalStyleComponents";
import { SocialIconsContainer } from "./ContactStyles";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import Fade from "react-reveal/Fade";
const Contact = () => {
  return (
    <Fade bottom>
      <Section nopadding id="contact">
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionText>
          I'm currently looking for new oportunities in the React and Node.js
          field. If you have any questions, feel free to reach out!
        </SectionText>
        <SocialIconsContainer>
          <SocialIcons
            href="https://github.com/jorge9805"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/jorge-fullstackdev/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons href="mailto: jorgecuadradovelasquez@gmail.com">
            <AiOutlineMail size="4rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </Section>
    </Fade>
  );
};

export default Contact;
