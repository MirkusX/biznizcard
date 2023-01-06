import {
  MailIcon,
  PDiv,
  StyledButton,
  StyledDiv,
  StyledImg,
  StyledImgDiv,
  StyledP,
  StyledPDiv,
  StyledSection,
} from "../Components/StyledComponents";
import biznizcard from "../images/biznizcard.avif";
/* <StyledImg src={biznizcard} /> */

export const Frontpage = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImgDiv />
        <h1>Laura Smith</h1>
        <p>Front End Developer</p>
        <p>
          <a href="https://mirkusx.github.io/My_portfolio/">
            MirkusX.portfolio
          </a>
        </p>
        <StyledButton>
          <MailIcon />
          <a>Email</a>
        </StyledButton>
        <PDiv>
          <h2>About</h2>
          <StyledP>
            I am not Laura Smith this is a Scrimba Solo Project, if you want to
            see my projects and portfolio click the link above. I focus mainly
            on React.
          </StyledP>
          <h2>Interests</h2>
          <StyledP>
            The icons below goes to my portfolio, the image is from unsplash I
            was lucky to find the same image used on the template of the solo
            Scrimba project.
          </StyledP>
        </PDiv>
        <div>
          <p>logos</p>
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
