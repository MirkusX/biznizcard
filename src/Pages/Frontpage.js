import {
  StyledDiv,
  StyledImg,
  StyledImgDiv,
  StyledSection,
} from "../Components/StyledComponents";
import biznizcard from "../images/biznizcard.avif";
/* <StyledImg src={biznizcard} /> */

export const Frontpage = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImgDiv />
        <h1>Example name</h1>
        <p>Examplejob</p>
        <p>website</p>
        <button>
          <a>Email</a>
        </button>
        <h2>About</h2>
        <p>example</p>
        <h2>interests</h2>
        <p>example</p>
        <div>
          <p>logos</p>
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
