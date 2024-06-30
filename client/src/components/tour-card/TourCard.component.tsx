import { Tour } from "../../models/Tour/Tour";
import moment from "moment";
import { getImageLocation } from "../../utils/getImageLocation";
import {
  Card,
  CardHeader,
  CardPicture,
  CardPictureImg,
  CardPictureOverlay,
  CardData,
  CardDetails,
  CardFooter,
  CardFooterText,
  CardFooterValue,
  CardIcon,
  CardSubHeading,
  CardText,
  HeadingTertirary,
  CardRatings,
  DetailsLink,
} from "./tourCard.styles";

type TourCardProp = {
  tour: Tour;
};

const TourCard = ({ tour }: TourCardProp) => {
  return (
    <Card>
      <CardHeader>
        <CardPicture>
          <CardPictureOverlay>&nbsp;</CardPictureOverlay>
          <CardPictureImg
            src={getImageLocation(tour.imageCover, "tour")}
            alt={tour.name}
          />
        </CardPicture>
        <HeadingTertirary>
          <span>{tour.name}</span>
        </HeadingTertirary>
      </CardHeader>

      <CardDetails>
        <CardSubHeading>{`${tour.difficulty} ${tour.duration}-day tour`}</CardSubHeading>
        {/* prettier-ignore    */}
        <CardText>{tour.summary}</CardText>

        <CardData>
          <CardIcon>
            <use xlinkHref={getImageLocation("icons.svg#icon-map-pin")}></use>
          </CardIcon>
          <span>{tour.startLocation.description}</span>
        </CardData>

        <CardData>
          <CardIcon>
            <use xlinkHref={getImageLocation("icons.svg#icon-calendar")}></use>
          </CardIcon>
          <span>
            {moment
              .utc(
                tour.startDates[0].toLocaleString("en-us", {
                  month: "long",
                  year: "numeric",
                })
              )
              .format("MM/YY")}
          </span>
        </CardData>

        <CardData>
          <CardIcon>
            <use xlinkHref={getImageLocation("icons.svg#icon-flag")}></use>
          </CardIcon>
          <span>{`${tour.locations.length} stops`}</span>
        </CardData>

        <CardData>
          <CardIcon>
            <use xlinkHref={getImageLocation("icons.svg#icon-user")}></use>
          </CardIcon>
          <span>{`${tour.maxGroupSize} people`}</span>
        </CardData>
      </CardDetails>

      <CardFooter>
        <p>
          <CardFooterValue>{`$ ${tour.price}  `}</CardFooterValue>
          <CardFooterText>per person</CardFooterText>
        </p>
        <CardRatings>
          <CardFooterValue>{tour.ratingsAverage}</CardFooterValue>
          <CardFooterText>{`  rating (${tour.ratingsQuantity})`}</CardFooterText>
        </CardRatings>
        <DetailsLink to={`/tour/${tour.slug}`}>Details</DetailsLink>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
