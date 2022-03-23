import styled from "styled-components";
export const TechnologiesContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const TechnologyCard = styled.div`
  width: 250px;
  height: 100px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
  @media screen and (max-width: 640px) {
    width: 50%;
    height: 50px;
  }
  @media screen and (max-width: 363px) {
    width: 100%;
    height: 50px;
  }
`;
export const Technology = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #dce3e7;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  ${
    "" /* @media screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: bold;
    color: #dce3e7;
    padding: 0.5rem 0;
  } */
  }
  @media screen and (max-width: 640px) {
    font-size: 2rem;
    font-weight: bold;
    color: #dce3e7;
    padding: 0;
  }
`;
