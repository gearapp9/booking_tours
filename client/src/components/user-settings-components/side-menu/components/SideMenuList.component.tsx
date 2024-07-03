import { getImageLocation } from "../../../../utils/getImageLocation";
import { SideNav, SideNavLink } from "../../../shared-styles/styles.component";
import { SideNavActive, SideNavLi } from "../../UserProfileContent.styles";

type SideMenuListProps = {
  MenuType: string;
  sideListData: { icon: string; text: string }[];
};

const SideMenuList = ({ MenuType, sideListData }: SideMenuListProps) => {
  const getSideListComponent = (type: string) =>
    ({
      normal: SideNavLi,
      active: SideNavActive,
    }[type]);
  return (
    <SideNav>
      {sideListData.map((data, i) => {
        const CustomSideNavLi = getSideListComponent(
          i === 0 && MenuType === "user" ? "active" : "normal"
        ) as typeof SideNavLi;
        return (
          <CustomSideNavLi key={i}>
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
