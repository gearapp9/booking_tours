import { Tour } from "../../models/Tour/Tour";
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

const TourCard = ({tour}) => {

  
  return (
    <Card>
      <CardHeader>
        <CardPicture>
          <CardPictureOverlay>&nbsp;</CardPictureOverlay>
          <CardPictureImg src="img/tour-1-cover.jpg" alt="Tour 1" />
        </CardPicture>
        <HeadingTertirary>
          <span>The Forest Hiker</span>
        </HeadingTertirary>
      </CardHeader>

      <CardDetails>
        <CardSubHeading>Easy 5-day tour</CardSubHeading>
        {/* prettier-ignore    */}
        <CardText>Breathtaking hike through the Canadian Banff National Park</CardText>

        <CardData>
          <CardIcon>
            <use href="img/icons.svg#icon-map-pin"></use>
          </CardIcon>
          <span>Banff, Canada</span>
        </CardData>

        <CardData>
          <CardIcon>
            <use href="img/icons.svg#icon-map-pin"></use>
          </CardIcon>
          <span>April 2021</span>
        </CardData>

        <CardData>
          <CardIcon>
            <use href="img/icons.svg#icon-map-pin"></use>
          </CardIcon>
          <span>3 stops</span>
        </CardData>

        <CardData>
          <CardIcon>
            <use href="img/icons.svg#icon-map-pin"></use>
          </CardIcon>
          <span>25 people</span>
        </CardData>
      </CardDetails>

      <CardFooter>
        <p>
          <CardFooterValue>$297</CardFooterValue>
          <CardFooterText>per person</CardFooterText>
        </p>
        <CardRatings>
          <CardFooterValue>4.9</CardFooterValue>
          <CardFooterText>rating (21)</CardFooterText>
        </CardRatings>
        <DetailsLink href="#">Details</DetailsLink>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
