import { useSelector } from "react-redux";
import { CardContainer } from "../shared-styles/styles.component";
import TourCard from "../tour-card/TourCard.component";
import {
  selectAllToursIsLoading,
  selectAllToursData,
} from "../../store/tour/tourSelector";
import { Tour } from "../../models/Tour/Tour";

const TourCardContainer = () => {
  const tours = useSelector(selectAllToursData) as Tour[]  ;
  const loading = useSelector(selectAllToursIsLoading);

  
  

  return (
    <CardContainer>
      {(!loading && tours!=null)
        ? tours?.map((tour: Tour) => {
            return <TourCard key={tour.id} tour={tour} />;
          })
        : ""}
    </CardContainer>
  );
};

export default TourCardContainer;
