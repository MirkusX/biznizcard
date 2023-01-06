import styled from "styled-components";
import biznizcard from "../images/biznizcard.avif";
import { HiOutlineMail } from "react-icons/hi";

export const StyledDiv = styled.div`
  background-color: #1a1b21;
  width: 25%;
  border-radius: 10px;
  color: white;
`;

export const StyledSection = styled.section`
  background-color: #23252c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;
`;

export const StyledImgDiv = styled.div`
  background-image: url(${biznizcard});
  height: 20em;
  background-position: 60% 20%;
  border-radius: 10px 10px 0 0;
`;

export const StyledButton = styled.button`
  width: 80%;
  padding: 0.5em;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  gap: 0.5em;
`;

export const MailIcon = styled(HiOutlineMail)``;

export const PDiv = styled.div`
  text-align: left;
  width: 80%;
  margin: 0 auto;
`;

export const StyledP = styled.p`
  color: #dcdcdc;
  font-size: 0.64rem;
`;
