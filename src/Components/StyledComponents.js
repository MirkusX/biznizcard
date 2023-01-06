import styled from "styled-components";
import biznizcard from "../images/biznizcard.avif";

export const StyledDiv = styled.div`
  background-color: #1a1b21;
  width: 25%;
  border-radius: 10px;
`;

export const StyledSection = styled.section`
  background-color: #23252c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledImgDiv = styled.div`
  background-image: url(${biznizcard});
  height: 25em;
  background-position: 60% 25%;
`;
