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





export const Form = styled.form``;
export const LoginButton = styled.button`
${ButtonStyled}
  ${ButtonGreen}
`;
