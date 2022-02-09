import styled from "styled-components";
export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: center;
  padding: 0.7rem;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 640px) {
    display: flex;
    width: 100%;
  }
`;
export const Mail = styled.a`
  max-width: 1040px;
  color: #fff;
  font-size: 1.7rem;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
