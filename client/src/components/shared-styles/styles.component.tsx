import styled, { css } from "styled-components";

const breakPoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const min = {
  xs: `(min-width: ${breakPoints.xs})`,
  sm: `(min-width: ${breakPoints.sm})`,
  md: `(min-width: ${breakPoints.md})`,
  lg: `(min-width: ${breakPoints.lg})`,
  xl: `(min-width: ${breakPoints.xl})`,
  "2xl": `(min-width: ${breakPoints["2xl"]})`,
};

export const max = {
  xs: `(max-width: ${breakPoints.xs})`,
  sm: `(max-width: ${breakPoints.sm})`,
  md: `(max-width: ${breakPoints.md})`,
  lg: `(max-width: ${breakPoints.lg})`,
  xl: `(max-width: ${breakPoints.xl})`,
  "2xl": `(max-width: ${breakPoints["2xl"]})`,
};

export const NavContainer = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media only screen and ${max.sm} {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const MainContent = styled.main`
  background-color: #f7f7f7;
  padding: 8rem 6rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
`;

export const CardContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7rem;
`;

const buttonGridPosition = css`
  grid-row: 1 / 3;
  justify-self: end;
  -ms-flex-item-align: center;
  align-self: center;
`;

const buttonCss = css`
  font-size: 1.6rem;
  border-radius: 10rem;
  padding: 1.4rem 3rem;
  text-transform: uppercase;
  display: flex;
  text-decoration: none;
  position: relative;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  font-weight: 400;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /*Add later when we use this for the button in form*/
  border: none;
  cursor: pointer;
  ${buttonGridPosition}
`;

export const ButtonStyled = css`
  ${buttonCss}
  &:link,&:visited {
    ${buttonCss}
  }

  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    background-color: #2e864b;
  }
`;

export const ButtonGreen = css`
  background-color: #55c57a;
  color: #fff;

  &:after {
    background-color: #55c57a;
  }
`;

export const ButtonSmall = css`
  padding: 1.25rem 3rem !important;
  font-size: 1.4rem !important;
  ${buttonGridPosition}
`;

export const HeadingSecondary = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right, #7dd56f, #28b487);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;
`;
export const HeadingSecondaryMaBtLg = styled(HeadingSecondary)`
  
  margin-bottom: 3.5rem !important;
`;
export const HeadingSecondaryMaBtMd = styled(HeadingSecondary)`
margin-bottom: 3rem !important;
`
export const HeaderHero = styled.div`
  height: 100%;
`;

export const HeaderHeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  opacity: 0.85;
`;

export const HeaderHeroImg = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  -o-object-position: 50% 25%;
  object-position: 50% 25%;
`;

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;
export const FormGroupMaBtMd = styled(FormGroup)`
  margin-bottom: 3rem !important;
`;
export const FormGroupMaBtLg = styled(FormGroup)`
   margin-bottom: 3.5rem !important;
`;


export const FormLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;



export const FormInput = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: #fff;
  background-color: #f2f2f2;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* Pseudo element (a visible thing that isn't really in the DOM).
      Also needs -ms- */

  &:focus {
    outline: none;
    border-bottom: 3px solid #55c57a;
  }
  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }
  &::-webkit-input-placeholder {
    color: #bbb;
  }
`;

export const SideNav = styled.ul`
  list-style: none;

  svg {
    height: 1.9rem;
    width: 1.9rem;
    fill: #f7f7f7;
    margin-right: 2rem;
  }
`;




export const SideNavLink = styled.a`
 
    padding: 1rem 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  

  &:hover,
  &:active {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
`;

