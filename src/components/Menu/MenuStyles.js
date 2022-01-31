import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media screen and (max-width: 727px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media screen and (max-width: 727px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 1.7rem;
  ul {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 727px) {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 727px) {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
export const NavLink = styled.a`
  font-size: 1.8rem;
  line-height: 32px;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media screen and (max-width: 727px) {
    padding: 0.5rem;
  }
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
