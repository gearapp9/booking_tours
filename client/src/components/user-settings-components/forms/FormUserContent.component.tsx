import { Line, UserViewContent } from "../UserProfileContent.styles";
import AccountSettingsForm from "./AccountSettingsForm.component";
import PasswordForm from "./PasswordForm.component";

const FormUserContent = () => {
  return (
    <UserViewContent>
      <AccountSettingsForm />
      <Line>&nbsp;</Line>
      <PasswordForm />
    </UserViewContent>
  );
};

export default FormUserContent;
