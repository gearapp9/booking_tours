import { Form } from "react-router-dom";
import {
  FormGroup,
  FormGroupMaBtLg,
  FormInput,
  FormLabel,
  HeadingSecondaryMaBtMd,
} from "../../shared-styles/styles.component";
import {
  ButtonSaveSettings,
  UserViewFormContainer,
} from "../UserProfileContent.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserPasswordAction } from "../../../store/user/userReducer";

const formFieldsInitData: {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
} = {
  currentPassword: "",
  password: "",
  passwordConfirm: "",
};

const PasswordForm = () => {
  const [formFields, setFormFields] = useState(formFieldsInitData);
  const { passwordConfirm, currentPassword, password } = formFields;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(
        updateUserPasswordAction({ currentPassword, password, passwordConfirm })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserViewFormContainer>
      <HeadingSecondaryMaBtMd>Password Change</HeadingSecondaryMaBtMd>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel form="current">Current Password</FormLabel>
          <FormInput
            id="current"
            type="password"
            placeholder="••••••••"
            required
            minLength={8}
            onChange={handleChange}
            name="currentPassword"
            value={currentPassword}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel form="password">New Password</FormLabel>
          <FormInput
            id="password"
            type="password"
            placeholder="••••••••"
            required
            minLength={8}
            onChange={handleChange}
            name="password"
            value={password}
          />
        </FormGroup>
        <FormGroupMaBtLg>
          <FormLabel form="confirm-password">Confirm Password</FormLabel>
          <FormInput
            id="confirm-password"
            type="password"
            placeholder="••••••••"
            required
            onChange={handleChange}
            minLength={8}
            name="passwordConfirm"
            value={passwordConfirm}
          />
        </FormGroupMaBtLg>
        <ButtonSaveSettings type="submit">Save Password</ButtonSaveSettings>
      </form>
    </UserViewFormContainer>
  );
};

export default PasswordForm;
