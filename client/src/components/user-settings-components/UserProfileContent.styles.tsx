import styled from "styled-components";
import {
  ButtonGreen,
  ButtonSmall,
  ButtonStyled,
  FormGroup,
} from "../shared-styles/styles.component";

export const AdminNav = styled.div`
  margin-top: 5.5rem;
`;

export const AdminNavHeading = styled.h5`
  margin: 0 5rem 1.5rem 4rem;
  padding-bottom: 3px;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #f2f2f2;
  border-bottom: 1px solid currentColor;
`;

export const UserViewContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 7rem 0;
`;

export const UserViewFormContainer = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;
`;

export const FormUserPhoto = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const FormPhotoUpload = styled(FormGroup)`
  ${FormGroup}
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.6rem;
`;

export const ButtonText = styled.a`
  color: #55c57a;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  &:hover {
    background-color: #55c57a;
    color: #fff;
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  &:active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    outline: 3px solid #55c57a;
    outline-offset: 3px;
  }
`;

export const FormGroupRight = styled(FormGroup)`
  ${FormGroup}
  text-align: right !important;
`;

export const ButtonSaveSettings = styled.button`
  ${ButtonStyled}
  ${ButtonSmall}
${ButtonGreen}
`;

export const Line = styled.div`
  margin: 6rem 0;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

export const UserView = styled.div`
  background-color: #fff;
  max-width: 120rem;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const UserViewMenu = styled.nav`
  -webkit-box-flex: 32rem;
  -ms-flex: 32rem 0 0px;
  flex: 32rem 0 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  padding: 4rem 0;
`;

export const SideNavLi = styled.li`
  margin: 1rem 0;
  border-left: 0 solid #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    border-left: 4px solid #fff !important;
  }
`;

export const SideNavActive = styled.li`
  ${SideNavLi}

  border-left: 4px solid #fff !important;
`;
export const UploadPhotoLabel = styled.label`
  color: #55c57a;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #55c57a;
    color: #fff;
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`;
export const UploadPhoto = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${UploadPhotoLabel} {
    outline: 3px solid #55c57a;
    outline-offset: 3px;
  }
`;


