import React from "react";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./MenuStyles";
import logo from "../../assets/images/logo.png";
import resume from "../../assets/resume.pdf";
import { ExternalLink } from "../../styles/GlobalStyleComponents";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
const Menu = () => {
  return (
    <Container id="Menu">
      <Div1>
        <img src={logo} alt="logo" width={"27rem"} height={"27rem"} />
      </Div1>
      {/* <DiCssdeck size="4rem" style={{ marginLeft: "1.5rem" }} /> */}
      <Div2>
        <nav>
          <ul>
            <li>
              <NavLink href="#projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="#technologies">Technologies</NavLink>
            </li>
            <li>
              <NavLink href="#contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </Div2>
      <Div3>
        <SocialIcons
          href="https://github.com/jorge9805"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size="2.7rem" />
        </SocialIcons>

        <SocialIcons
          href="https://www.linkedin.com/in/jorge-fullstackdev/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size="2.7rem" />
        </SocialIcons>
        <SocialIcons href="mailto: jorgecuadradovelasquez@gmail.com">
          <AiOutlineMail size="2.7rem" />
        </SocialIcons>
        <ExternalLink href={resume} target={"_blank"}>
          Resume
        </ExternalLink>
      </Div3>
    </Container>
  );
};

export default Menu;
