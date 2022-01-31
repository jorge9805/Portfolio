import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "224px 48px 0")};
  height: ${(props) => (props.vh ? "97vh" : "auto")};
  width: ${(props) => (props.width ? "100%" : "auto")};
  ${"" /* color: ${(props) => (props.color ? "green" : "black")}; */}
  max-width: 1300px;
  width: 88%;
  margin: auto;
  margin-bottom: ${(props) => (props.vh ? "0px" : "232px")};
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 772px) {
    margin-top: ${(props) => (props.margin ? "72px" : "0")};
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    margin-top: ${(props) => (props.margin ? "172px" : "0")};
    padding: ${(props) => (props.nopadding ? "0" : "0 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
    height: ${(props) => (props.vh ? "70vh" : "auto")};
  }
`;
export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  font-size: ${(props) => (props.main ? "75px" : "56px")};
  line-height: ${(props) => (props.main ? "77px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "27px 0 62px" : "12px 0")};
  @media screen and (max-width: 772px) {
    font-size: ${(props) => (props.main ? "56px" : "42px")};
    line-height: ${(props) => (props.main ? "56px" : "44px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media screen and (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;
export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media screen and (max-width: 768px) {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media (max-width: 768px) {
    width: 48px;
    height: 4px;
  }

  @media screen and (max-width: 640px) {
    width: 32px;
    height: 2px;
  }
`;
export const ExternalLink = styled.a`
  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace;
  font-size: 1.7rem;
  display: flex;
  alignitems: center;
  color: white;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 9px;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #eee;
    color: black;
    cursor: pointer;
  }
`;
