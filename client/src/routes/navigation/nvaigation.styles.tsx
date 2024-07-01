import styled, { css } from "styled-components";
import { max, NavContainer } from "../../components/shared-styles/styles.component";
import { Link } from "react-router-dom";

// xs: "320px",
// sm: "640px",
// md: "768px",
// lg: "1024px",
// xl: "1280px",
// "2xl": "1536px",

const NavElementStyles = css`
  color: #f7f7f7;
  text-transform: uppercase;
  font-size: 1.6rem;
  text-decoration: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-weight: 400;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
`;

export const Header = styled.header`
  background-color: #444;
  padding: 0 5rem;
  height: 8rem;
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media only screen and ${max.lg} {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const NavTours = styled(NavContainer)`
  -webkit-box-flex: 0;
  -ms-flex: 0 1 40%;
  flex: 0 1 40%;

  @media only screen and ${max.lg} {
    margin-bottom: 1.5rem;
  }
  @media only screen and ${max.sm} {
    margin-bottom: 0;
  }
`;

export const NavElement = styled(Link)`
  ${NavElementStyles}
  &:link ,
    &:visited {
    ${NavElementStyles}
  }

  &:hover,
  &:active {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    text-shadow: 0 0.7rem 1rem black;
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &:focus {
    outline: none;
  }
  @media only screen and ${max.sm} {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 1.2rem;
    }
  }
`;

export const NavSearchForm = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media only screen and ${max.sm} {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    margin-bottom: 1.2rem;
  }
`;

export const NavSearchButton = styled.button`
  background: none;
  border: none;
  margin-right: 0.8rem;
  -webkit-transform: translateY(1px);
  transform: translateY(1px);
`;

export const ButtonSvg = styled.svg`
  height: 2rem;
  width: 2rem;
  fill: #f7f7f7;
`;

export const NavSearchInput = styled.input`
  font-family: inherit;
  font-weight: inherit;
  text-transform: uppercase;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #f7f7f7;
  padding-bottom: 3px;
  border-bottom: 1px solid #999;
  width: 18rem;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  ::-webkit-input-placeholder {
    color: #999;
  }
  :-ms-input-placeholder {
    color: #999;
  }
  ::-ms-input-placeholder {
    color: #999;
  }
  ::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
    width: 25rem;
    border-bottom: 1px solid currentColor;
  }
`;

export const Headerlogo = styled.div`
  img {
    height: 3.5rem;
  }

  @media only screen and ${max.lg} {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    margin-bottom: 1.5rem;
  }
`;

export const NavUser = styled(NavContainer)`
  -webkit-box-flex: 0;
  -ms-flex: 0 1 40%;
  flex: 0 1 40%;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;

export const NavUserImg = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const NavElementCtaButton = styled(NavElement)`
  padding: 1rem 3rem;
  border-radius: 10rem;
  border: 1px solid currentColor !important;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    background-color: #f7f7f7;
    color: #777;
    text-shadow: none;
    border-color: #f7f7f7;
  }
`;
