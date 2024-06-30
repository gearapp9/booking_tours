import { getImageLocation } from "../../../utils/getImageLocation";
import { HeaderHero, HeaderHeroImg, HeaderHeroOverlay } from "../../shared-styles/styles.component";
import {
  HeadingBox,
  HeadingBoxDetail,
  HeadingBoxGroup,
  HeadingBoxIcon,
  HeadingBoxText,
  HeadingPrimary,
  HeadingPrimarySpan,
  SectionHeader,
} from "./TourHeader.styles";

type TourHeaderProps={
  imageCover:string,
  name:string,
  duration:number,
  description:string
}

const TourHeader = ({name,description,duration,imageCover}:TourHeaderProps) => {
  return (
    <SectionHeader>
      <HeaderHero>
        <HeaderHeroOverlay>&nbsp;</HeaderHeroOverlay>
        <HeaderHeroImg src={getImageLocation(imageCover,"tour")} alt='Tour 5' />
      </HeaderHero>
      <HeadingBox>
        <HeadingPrimary>
          <HeadingPrimarySpan>
            {`${name} tour`}
          </HeadingPrimarySpan>
        </HeadingPrimary>
        <HeadingBoxGroup>
          <HeadingBoxDetail>
            <HeadingBoxIcon>
              <use xlinkHref={getImageLocation("icons.svg#icon-clock")}></use>
            </HeadingBoxIcon>
            <HeadingBoxText>{`${duration} days`}</HeadingBoxText>
          </HeadingBoxDetail>

          <HeadingBoxDetail>
            <HeadingBoxIcon>
              <use xlinkHref={getImageLocation("icons.svg#icon-map-pin")}></use>
            </HeadingBoxIcon>
            <HeadingBoxText>{description}</HeadingBoxText>
          </HeadingBoxDetail>
        </HeadingBoxGroup>
      </HeadingBox>
    </SectionHeader>
  );
};

export default TourHeader;
