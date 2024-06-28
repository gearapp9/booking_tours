import styled from "styled-components";
import { max } from "../../components/styles/styles.component";


export const FooterContainer = styled.footer`
  background-color: #f7f7f7;
  padding: 6rem 4rem 3rem 4rem;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 0.75rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  @media only screen and ${max.md} {
    grid-template-columns: 1fr;
    grid-row-gap: 1.25rem;
    justify-items: center;
  }
`;
export const FooterLogo = styled.div`
  grid-row: 1 / 3;
  -ms-flex-item-align: center;
  align-self: center;
  @media only screen and ${max.md} {
    grid-row: 1;
  }
  img {
    height: 3rem;
  }
`;
export const FooterNav = styled.ul`
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-end;

  li {
    margin-left: 1.5rem;
  }
`;

export const FooterNavLink = styled.a`
  color: #777;
  text-decoration: none !important;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  &:hover {
    &:active {
      color: #55c57a;
    }
  }
`;

export const FooterCopyRight = styled.p`
  justify-self: end;
  color: #999;
  @media only screen and ${max.md} {
    justify-self: center;
  }
`;

