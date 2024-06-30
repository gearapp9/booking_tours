import { Review } from "../../../models/review/Review";
import {
  Reviews,
  SectionReviews,

} from "./TourReviews.styles";
import ReviewsCard from "./components/ReviewsCard.component";


type TourReviewsProps = {
  reviews:Review[]
}


const TourReviews = ({reviews}:TourReviewsProps) => {
  return (
    <SectionReviews>
      <Reviews>
        {
          reviews.map((review,i)=>{
            return <ReviewsCard key={i} review={review}/>
          })
        }
      </Reviews>
    </SectionReviews>
  );
};

export default TourReviews;
