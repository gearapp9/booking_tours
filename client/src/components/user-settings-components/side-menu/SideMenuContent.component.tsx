import { UserViewMenu } from "../UserProfileContent.styles";
import AdminSideMenu from "./components/AdminSideMenu.component";
import UserSideMenu from "./components/UserSideMenu.component";

const SideMenuContent = () => {
  return (
    <UserViewMenu>
      <UserSideMenu />
      <AdminSideMenu />
    </UserViewMenu>
  );
};

export default SideMenuContent;
