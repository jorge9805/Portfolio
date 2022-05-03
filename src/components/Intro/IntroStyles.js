import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  ${
    "" /* @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  } */
  }
`;
export const Typwriter = styled.span`
  display: block;
  font-size: 4rem;
  white-space: nowrap;
  border-right: 4px solid;
  border-color: transparent;
  width: 12ch;
  height: 4rem;
  overflow: hidden;
  animation: typing 2s steps(15), blink 0.5s step-end 15 alternate;
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: white;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 2rem;
  }
`;
