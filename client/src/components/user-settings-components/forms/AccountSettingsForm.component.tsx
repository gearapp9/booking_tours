import { useSelector } from "react-redux";
import {
  FormGroup,
  FormGroupMaBtMd,
  FormInput,
  FormLabel,
  HeadingSecondaryMaBtMd,
} from "../../shared-styles/styles.component";
import {
  ButtonSaveSettings,
  ButtonText,
  FormGroupRight,
  FormPhotoUpload,
  FormUserPhoto,
  UserViewFormContainer,
} from "../UserProfileContent.styles";
import { selectUser } from "../../../store/user/userSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserENAction } from "../../../store/user/userReducer";

const formFieldsInitData: {
  name: string;
  email: string;
} = {
  name: "",
  email: "",
};

const AccountSettingsForm = () => {
  const [formFields, setFormFields] = useState(formFieldsInitData);
  const { name, email } = formFields;
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
 
  
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(updateUserENAction({name,email}))
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <UserViewFormContainer>
      <HeadingSecondaryMaBtMd>Your account settings</HeadingSecondaryMaBtMd>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel form="name">Name</FormLabel>
          <FormInput
            id="name"
            type="text"
            required
            name="name"
            onChange={handleOnchange}
            value={name}
          />
        </FormGroup>
        <FormGroupMaBtMd>
          <FormLabel form="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            required
            name="email"
            onChange={handleOnchange}
            value={email}
          />
        </FormGroupMaBtMd>
        <FormPhotoUpload>
          <FormUserPhoto src="img/user.jpg" alt="User photo" />
          <ButtonText>Choose new photo</ButtonText>
        </FormPhotoUpload>
        <FormGroupRight>
          <ButtonSaveSettings type="submit">Save settings</ButtonSaveSettings>
        </FormGroupRight>
      </form>
    </UserViewFormContainer>
  );
};

export default AccountSettingsForm;
