import styled from "styled-components";
import { ButtonGreen, ButtonStyled } from "../../components/shared-styles/styles.component";

export const LoginForm = styled.div`
  margin: 0 auto;
  max-width: 55rem;
  background-color: #fff;
  -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
  padding: 5rem 7rem;
  border-radius: 5px;
`;

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
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

export const FormGroupMaBtMd = styled(FormGroup)`
  margin-bottom: 3rem !important;
`;

export const Form = styled.form``;
export const LoginButton = styled.button`
${ButtonStyled}
  ${ButtonGreen}
`;
