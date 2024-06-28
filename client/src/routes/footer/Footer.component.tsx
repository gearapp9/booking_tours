import {
  FooterContainer,
  FooterCopyRight,
  FooterLogo,
  FooterNav,
  FooterNavLink,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src="img/logo-green.png" alt="Natours logo" />
      </FooterLogo>
      <FooterNav>
        {/* prettier-ignore    */}
        <li><FooterNavLink href="#"> About us</FooterNavLink></li>
        {/* prettier-ignore    */}
        <li><FooterNavLink href="#">Download apps </FooterNavLink></li>
        {/* prettier-ignore    */}
        <li><FooterNavLink href="#">Become a guide </FooterNavLink></li>
        {/* prettier-ignore    */}
        <li><FooterNavLink href="#">Careers </FooterNavLink></li>
        {/* prettier-ignore    */}
        <li><FooterNavLink href="#"> Contact</FooterNavLink></li>
        {/* prettier-ignore    */}
      </FooterNav>
      <FooterCopyRight>
        &copy; by Jonas Schmedtmann. All rights reserved.
      </FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;
