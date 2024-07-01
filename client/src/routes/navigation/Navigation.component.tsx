import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import { Fragment } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSelector";
import { User } from "../../models/user/User";
import { getImageLocation } from "../../utils/getImageLocation";
import { SignOutUserAction, getUserAction } from "../../store/user/userReducer";
import { useEffect } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser) as User;
  
  const signOutUser = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    try {
    
        dispatch(SignOutUserAction());
   
    } catch (error) {
    }
  };

  return (
    <Fragment>
      <Header>
        <NavTours>
          <NavElement to={"/"}>All tours</NavElement>
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
          {user ? (
            <>
              <NavElement to={"/sign-in"} onClick={signOutUser}>
                sign out
              </NavElement>
              <NavElement to={"/profile"}>
                <NavUserImg
                  src={getImageLocation(user.photo, "user")}
                  alt="User photo"
                />
                <span>{user.name.split(" ")[0]}</span>
              </NavElement>
            </>
          ) : (
            <>
              <NavElement to={"/sign-in"}>Log in</NavElement>
              <NavElementCtaButton to={"/sign-up"}>Sign up</NavElementCtaButton>
            </>
          )}
        </NavUser>
      </Header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
