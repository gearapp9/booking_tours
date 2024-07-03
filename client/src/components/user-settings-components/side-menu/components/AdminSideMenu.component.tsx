import { AdminNav, AdminNavHeading } from "../../UserProfileContent.styles";
import SideMenuList from "./SideMenuList.component";

const sideListAdminData: { icon: string; text: string }[] = [
  {
    icon: "icons.svg#icon-map",
    text: "Manage tours",
  },
  {
    icon: "icons.svg#icon-users",
    text: "Manage users",
  },

  {
    icon: "icons.svg#icon-star",
    text: "Manage reviews",
  },
  {
    icon: "icons.svg#icon-briefcase",
    text: "Manage Booking",
  },
];

const AdminSideMenu = () => {
  return (
    <AdminNav>
      <AdminNavHeading>Admin</AdminNavHeading>
      <SideMenuList MenuType="admin" sideListData={sideListAdminData} />
    </AdminNav>
  );
};

export default AdminSideMenu;
