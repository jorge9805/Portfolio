import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  ExternalLink,
} from "../../styles/GlobalStyleComponents";
import {
  CardInfo,
  GridContainer,
  BlogCard,
  Img,
  TitleContent,
  HeaderThree,
  HeaderFour,
  Hr,
  TagList,
  Tag,
  UtilityList,
  ExternalLinks,
} from "./ProjectsStyles";

import { projects } from "../../constants/constans";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <Section nopadding id="projects">
      <Fade bottom>
        <SectionTitle>Projects</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ id, img, title, description, tags, source, visit }) => (
              <BlogCard key={id}>
                <Img src={img} alt="" />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                </TitleContent>
                <CardInfo style={{ fontSize: "17px" }}>{description}</CardInfo>
                <div>
                  <TitleContent>
                    <HeaderFour title>Stack</HeaderFour>
                  </TitleContent>
                  <TagList>
                    {tags.map((tag) => (
                      <Tag>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  {source && (
                    <ExternalLink
                      href={source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </ExternalLink>
                  )}
                  <ExternalLink href={visit} target="_blank" rel="noreferrer">
                    Visit
                  </ExternalLink>
                </UtilityList>
              </BlogCard>
            )
          )}
        </GridContainer>
      </Fade>
    </Section>
  );
};
export default Projects;
