import styled from "styled-components";
import biznizcard from "../images/biznizcard.avif";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

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

export const StyledButton = styled.a`
  width: 80%;
  padding: 0.5em;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  gap: 0.5em;
  background: white;
  color: black;
  border-radius: 6px;
  text-decoration: none;
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
  margin-top: 0;
  ${(props) => {
    if (props.job)
      return `
    font-size: 0.8rem;
    margin-bottom: 0.550625em;
    color: #F3BF99;
    ;`;
  }}
  ${(props) => {
    if (props.link)
      return `
    font-size: 0.64rem;
    margin-bottom: 1.5em;
    `;
  }}
`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;

export const StyledH1 = styled.h1`
  margin-bottom: 0;
`;

export const StyledH2 = styled.h2`
  margin-bottom: 0;
`;

export const Footer = styled.div`
  background-color: #161619;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  padding: 1em 3em;
`;

export const Space = styled.div`
  margin: 1.5em;
`;

export const TwitterIcon = styled(FaTwitterSquare)`
  color: #918e9b;
  width: 25px;
  height: 25px;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  color: #918e9b;
  width: 25px;
  height: 25px;
`;

export const InstagramIcon = styled(FaInstagramSquare)`
  color: #918e9b;
  width: 25px;
  height: 25px;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: #918e9b;
  width: 25px;
  height: 25px;
`;

export const GithubIcon = styled(FaGithubSquare)`
  color: #918e9b;
  width: 25px;
  height: 25px;
`;
