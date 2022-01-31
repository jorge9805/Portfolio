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
