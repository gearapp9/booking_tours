import { UserView } from "./UserProfileContent.styles";
import FormUserContent from "./forms/FormUserContent.component";
import SideMenuContent from "./side-menu/SideMenuContent.component";

const UserProfileContent = () => {
  return (
    <UserView>
      <SideMenuContent />
      <FormUserContent/>
    </UserView>
  );
};

export default UserProfileContent;
