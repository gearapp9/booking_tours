import { getImageLocation } from "../../../../utils/getImageLocation";
import { SideNav, SideNavLink } from "../../../shared-styles/styles.component";
import { SideNavActive, SideNavLi } from "./SideMenuList.styles";

const sideListData: { icon: string; text: string }[] = [
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

const SideMenuList = () => {
  const getSideListComponent = (type: string) =>
    ({
      normal: SideNavLi,
      active: SideNavActive,
    }[type]);
  return (
    <SideNav>
      {sideListData.map((data, i) => {
        const CustomSideNavLi = getSideListComponent(
          i === 0 ? "active" : "normal"
        ) as typeof SideNavLi;
        return (
          <CustomSideNavLi>
            <SideNavLink>
              <svg>
                <use xlinkHref={getImageLocation(data.icon)}></use>
              </svg>
              {` ${data.text}`}
            </SideNavLink>
          </CustomSideNavLi>
        );
      })}
    </SideNav>
  );
};

export default SideMenuList;
