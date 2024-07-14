import { useDispatch } from "react-redux";
import TourCta from "../../components/tour-page-components/tour-cta/TourCta.component";
import TourDescription from "../../components/tour-page-components/tour-description/TourDescription.component";
import TourHeader from "../../components/tour-page-components/tour-header/TourHeader.component";
import TourMap from "../../components/tour-page-components/tour-map/TourMap.component";
import TourPictures from "../../components/tour-page-components/tour-pictures/TourPictures.component";
import TourReviews from "../../components/tour-page-components/tour-reviews/TourReviews.component";
import { Fragment } from "react/jsx-runtime";
import { redirect } from "react-router-dom";
import { getTourAction } from "../../store/tour/tourReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTour, selectTourIsLoading } from "../../store/tour/tourSelector";
import { Tour } from "../../models/Tour/Tour";
import { selectUser } from "../../store/user/userSelector";
import { User } from "../../models/user/User";

const TourPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser) as User;
  if (!user) {
    return redirect("/sign-in");
  }
  useEffect(() => {
    user && dispatch(getTourAction(slug ? slug : ""));
  }, []);

  const loading = useSelector(selectTourIsLoading);

  const tour = useSelector(selectTour) as Tour;
  
  return (
    <Fragment>
      {!loading && tour != null && user != null ? (
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
          <TourMap
            startLocation={tour.startLocation}
            locations={tour.locations}
          />
          <TourReviews reviews={tour.reviews ? tour.reviews : []} />
          <TourCta id={tour.id} duration={tour.duration} images={tour.images} />
        </>
      ) : (
        "Loading..."
      )}
    </Fragment>
  );
};

export default TourPage;
