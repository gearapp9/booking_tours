import SideMenuList from "./SideMenuList.component";

const sideListUserData: { icon: string; text: string }[] = [
  {
    icon: "icons.svg#icon-settings",
    text: "Settings",
  },
  {
    icon: "icons.svg#icon-briefcase",
    text: "My bookings",
  },

  {
    icon: "icons.svg#icon-star",
    text: "My reviews",
  },
  {
    icon: "icons.svg#icon-credit-card",
    text: "Billing",
  },
];

const UserSideMenu = () => {
  return <SideMenuList MenuType="user" sideListData={sideListUserData} />;
};

export default UserSideMenu;
