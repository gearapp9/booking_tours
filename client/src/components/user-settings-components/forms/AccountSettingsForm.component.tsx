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
  UploadPhoto,
  UploadPhotoLabel,
  FormGroupRight,
  FormPhotoUpload,
  FormUserPhoto,
  UserViewFormContainer,
} from "../UserProfileContent.styles";
import { selectUser } from "../../../store/user/userSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserENAction } from "../../../store/user/userReducer";
import { getImageLocation } from "../../../utils/getImageLocation";

const formFieldsInitData: {
  name: string ;
  email: string ;
  photo: File | null;
} = {
  name: "",
  email: "",
  photo: null,
};

const AccountSettingsForm = () => {
  const [formFields, setFormFields] = useState(formFieldsInitData);
  const { name, email,photo } = formFields;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
 
  
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const file = event.target.files ? event.target.files[0] : null;
    setFormFields({ ...formFields, [name]: value, photo: file });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(updateUserENAction({ name, email,photo }));
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
          <FormUserPhoto
            src={getImageLocation(user?.photo ? user?.photo : "", "user")}
            alt="User photo"
          />

          <UploadPhoto
            type="file"
            accept="image/*"
            id="photo"
            name="photo"
            onChange={handleOnchange}
          />
          <UploadPhotoLabel htmlFor="photo">Upload photo</UploadPhotoLabel>
        </FormPhotoUpload>
        <FormGroupRight>
          <ButtonSaveSettings type="submit">Save settings</ButtonSaveSettings>
        </FormGroupRight>
      </form>
    </UserViewFormContainer>
  );
};

export default AccountSettingsForm;
