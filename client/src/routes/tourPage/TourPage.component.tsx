import { useDispatch } from "react-redux";
import TourCta from "../../components/tour-page-components/tour-cta/TourCta.component";
import TourDescription from "../../components/tour-page-components/tour-description/TourDescription.component";
import TourHeader from "../../components/tour-page-components/tour-header/TourHeader.component";
import TourMap from "../../components/tour-page-components/tour-map/TourMap.component";
import TourPictures from "../../components/tour-page-components/tour-pictures/TourPictures.component";
import TourReviews from "../../components/tour-page-components/tour-reviews/TourReviews.component";
import { Fragment } from "react/jsx-runtime";

import { getTourAction } from "../../store/tour/tourReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTour, selectTourIsLoading } from "../../store/tour/tourSelector";
import { Tour } from "../../models/Tour/Tour";

const TourPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTourAction(slug ? slug : ""));
  }, []);

  const loading = useSelector(selectTourIsLoading);

  const tour = useSelector(selectTour) as Tour;


  return (
    <Fragment>
      {!loading && tour != null ? (
        <>
          <TourHeader
            name={tour.name}
            description={tour.startLocation.description}
            duration={tour.duration}
            imageCover={tour.imageCover}
          />
          <TourDescription
            description={tour.description}
            difficulty={tour.difficulty}
            guides={tour.guides}
            maxGroupSize={tour.maxGroupSize}
            name={tour.name}
            ratingsAverage={tour.ratingsAverage}
            startDates={tour.startDates}
          />
          <TourPictures images={tour.images} />
          <TourMap startLocation={tour.startLocation} locations={tour.locations} />
          <TourReviews reviews={tour.reviews ? tour.reviews : []} />
          <TourCta duration={tour.duration} images={tour.images} />
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default TourPage;
