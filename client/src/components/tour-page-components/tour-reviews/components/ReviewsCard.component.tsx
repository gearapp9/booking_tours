import { Review } from "../../../../models/review/Review";
import { getImageLocation } from "../../../../utils/getImageLocation";
import {
  ReviewsAvatar,
  ReviewsAvatarImg,
  ReviewsCrd,
  ReviewsRating,
  ReviewsStarActive,
  ReviewsStarInactive,
  ReviewsText,
  ReviewsUser,
} from "../TourReviews.styles";

type ReviewsCardProps = {
  review: Review;
};

const ReviewsCard = ({ review }: ReviewsCardProps) => {
  return (
    <ReviewsCrd>
      <ReviewsAvatar>
        <ReviewsAvatarImg
          src={getImageLocation(review.user.photo, "user")}
          alt={review.user.name}
        />
        <ReviewsUser>{review.user.name}</ReviewsUser>
      </ReviewsAvatar>
      <ReviewsText>{review.review}</ReviewsText>
      <ReviewsRating>
        {[1, 2, 3, 4, 5].map((star) => {
          return review.rating >= star ? (
            <ReviewsStarActive key={star}>
              <use xlinkHref={getImageLocation("icons.svg#icon-star")}></use>
            </ReviewsStarActive>
          ) : (
            <ReviewsStarInactive key={star}>
              <use xlinkHref={getImageLocation("icons.svg#icon-star")}></use>
            </ReviewsStarInactive>
          );
        })}
      </ReviewsRating>
    </ReviewsCrd>
  );
};

export default ReviewsCard;
