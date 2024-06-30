import { getImageLocation } from "../../../../utils/getImageLocation";
import {
  OverviewBoxDt,
  OverviewBoxIcon,
  OverviewBoxImg,
  OverviewBoxLabel,
  OverviewBoxText,
} from "../TourDescription.styles";

type OverviewBoxProps = {
  icon: string;
  iconType: string;
  label: string;
  text: string;
};

const OverviewBoxDetail = ({
  icon,
  label,
  text,
  iconType,
}: OverviewBoxProps) => {
  return (
    <OverviewBoxDt>
      {iconType === "user" ? (
        <OverviewBoxImg
          src={getImageLocation(`${icon}`, iconType)}
          alt={text}
        />
      ) : (
        <OverviewBoxIcon>
          <use xlinkHref={getImageLocation(`${icon}`, iconType)}></use>
        </OverviewBoxIcon>
      )}

      <OverviewBoxLabel>{label}</OverviewBoxLabel>
      <OverviewBoxText>{text}</OverviewBoxText>
    </OverviewBoxDt>
  );
};

export default OverviewBoxDetail;
