import {
  FacebookIcon,
  Footer,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PDiv,
  Space,
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledH2,
  StyledImgDiv,
  StyledLink,
  StyledP,
  StyledSection,
  TwitterIcon,
} from "../Components/StyledComponents";

export const Frontpage = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImgDiv />
        <StyledH1>Laura Smith</StyledH1>
        <StyledP job>Front End Developer</StyledP>
        <StyledP link>
          <StyledLink
            href="https://mirkusx.github.io/My_portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            MirkusX.portfolio
          </StyledLink>
        </StyledP>
        <StyledButton href="mailto:marcusk.kodehode@gmail.com">
          <MailIcon />
          Email
        </StyledButton>
        <PDiv>
          <StyledH2>About</StyledH2>
          <StyledP>
            I am not Laura Smith this is a Scrimba Solo Project, if you want to
            see my projects and portfolio click the link above. I focus mainly
            on React.
          </StyledP>
          <StyledH2>Interests</StyledH2>
          <StyledP>
            The icons below goes to my GitHub profile, the image is from
            unsplash. I was lucky to find the same image used on the template of
            the solo Scrimba project.
          </StyledP>
        </PDiv>
        <Space />
        <Footer>
          <a href="https://github.com/MirkusX" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://github.com/MirkusX" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://github.com/MirkusX" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://github.com/MirkusX" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/MirkusX" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </Footer>
      </StyledDiv>
    </StyledSection>
  );
};
