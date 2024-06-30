import moment from "moment";
import { User } from "../../../models/user/User";
import { getImageLocation } from "../../../utils/getImageLocation";
import {
  DescriptionBox,
  DescriptionText,
  HeadingSecondaryMaBtLg,
  OverviewBox,
  OverviewBoxGroup,
  OverviewBoxIcon,
  OverviewBoxImg,
  OverviewBoxLabel,
  OverviewBoxText,
  SectionDescription,
} from "./TourDescription.styles";
import OverviewBoxDetail from "./components/OverviewBox.component";

type TourDescriptionProps = {
  startDates: Date[];
  difficulty: string;
  maxGroupSize: number;
  ratingsAverage: number;
  guides: User[];
  name: string;
  description: string;
};

const TourDescription = ({
  description,
  difficulty,
  guides,
  maxGroupSize,
  name,
  ratingsAverage,
  startDates,
}: TourDescriptionProps) => {
  const date = moment
    .utc(
      startDates[0].toLocaleString("en-us", {
        month: "long",
        year: "numeric",
      })
    )
    .format("MM/YY");

  return (
    <SectionDescription>
      <OverviewBox>
        <div>
          <OverviewBoxGroup>
            <HeadingSecondaryMaBtLg>Quick facts</HeadingSecondaryMaBtLg>

            {/* prettier-ignore    */}
            <OverviewBoxDetail icon="icons.svg#icon-calendar" iconType="" label="Next date" text={date}  />
            {/* prettier-ignore    */}
            <OverviewBoxDetail icon="icons.svg#icon-trending-up" iconType="" label="Difficulty" text={difficulty} />
            {/* prettier-ignore    */}
            <OverviewBoxDetail icon="icons.svg#icon-user" iconType="" label="Participants" text={`${maxGroupSize.toString()} people`} />
            {/* prettier-ignore    */}
            <OverviewBoxDetail icon="icons.svg#icon-star" iconType="" label="Rating" text={`${ratingsAverage.toString()} / 5`} />
          </OverviewBoxGroup>
          <OverviewBoxGroup>
            <HeadingSecondaryMaBtLg>Your tour guides</HeadingSecondaryMaBtLg>
            {guides.map((guide, i) => {
              return (
                <OverviewBoxDetail
                  key={i}
                  icon={guide.photo}
                  iconType="user"
                  label={
                    guide.role === "lead-guide" ? "Lead guide" : "Tour guide"
                  }
                  text={guide.name}
                />
              );
            })}
          </OverviewBoxGroup>
        </div>
      </OverviewBox>
      <DescriptionBox>
        <HeadingSecondaryMaBtLg>{`About ${name} tour`}</HeadingSecondaryMaBtLg>

        {description.split("\n").map((val, i) => {
          return <DescriptionText key={i}>{val}</DescriptionText>;
        })}
      </DescriptionBox>
    </SectionDescription>
  );
};

export default TourDescription;
