import { ChangeEvent, FormEvent, useState } from "react";
import {
  ButtonGreen,
  HeadingSecondaryMaBtLg,
  MainContent,
} from "../../components/shared-styles/styles.component";
import {
  FormGroup,
  FormGroupMaBtMd,
  FormInput,
  FormLabel,
  Form,
  LoginForm,
  LoginButton,
} from "./SignIn.styles";
import { login } from "../../utils/userApiCalls";
import { useDispatch } from "react-redux";
import { getUserAction } from "../../store/user/userReducer";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSelector";

const formFieldsInitData: {
  email: string;
  password: string;
} = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(formFieldsInitData);
  const { email, password } = formFields;
  const dispatch = useDispatch()
  const user= useSelector(selectUser) 
  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(formFieldsInitData);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(getUserAction({email, password}));
      resetFormFields()
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <MainContent>
      <LoginForm>
        <HeadingSecondaryMaBtLg>Log into your account</HeadingSecondaryMaBtLg>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel form="email">Email address</FormLabel>
            <FormInput
              id="email"
              type="email"
              placeholder="'you@example.com"
              required
              name="email"
              onChange={handleOnchange}
              value={email}
            />
          </FormGroup>
          <FormGroupMaBtMd>
            <FormLabel form="password">Password</FormLabel>
            <FormInput
              id="password"
              type="password"
              placeholder="'••••••••"
              required
              minLength={8}
              name="password"
              onChange={handleOnchange}
              value={password}
            />
          </FormGroupMaBtMd>
          <FormGroup>
            <LoginButton as="button" type="submit">
              Login
            </LoginButton>
          </FormGroup>
        </Form>
      </LoginForm>
    </MainContent>
  );
};

export default SignIn;
