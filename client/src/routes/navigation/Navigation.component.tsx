import { Outlet, useNavigate } from "react-router-dom";

import {
  Header,
  ButtonSvg,
  Headerlogo,
  NavElement,
  NavElementCtaButton,
  NavSearchForm,
  NavSearchButton,
  NavSearchInput,
  NavTours,
  NavUser,
  NavUserImg,
} from "./nvaigation.styles";

import logoWhite from "../../assets/logo-white.png";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <NavTours>
          <NavElement>All tours</NavElement>
          {/* <NavSearchForm>
          <NavSearchButton>
            <ButtonSvg></ButtonSvg>
          </NavSearchButton>
          <NavSearchInput placeholder="Search tours" type="text" />
        </NavSearchForm> */}
        </NavTours>
        <Headerlogo>
          <img src={logoWhite} alt="Natours logo" />
        </Headerlogo>

        <NavUser>
          {/* <NavElement href="#">My bookings</NavElement>
        <NavElement href="#">
          <NavUserImg src="img/user.jpg" alt="User photo" />
          <span>Jonas</span>
        </NavElement> */}
          <NavElement as="button" onClick={() => navigate("/sign-in")}>
            Log in
          </NavElement>
          <NavElementCtaButton as="button">Sign up</NavElementCtaButton>
        </NavUser>
      </Header>
      <Outlet />
    </>
  );
};

export default Navigation;
