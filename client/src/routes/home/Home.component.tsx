import { MainContent } from "../../components/shared-styles/styles.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllToursAction } from "../../store/tour/tourReducer";
import TourCardContainer from "../../components/tour-card-container/TourCardContainer.component";
import { useParams, useSearchParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [tour, user, price] = [
    searchParams.get("tour"),
    searchParams.get("user"),
    searchParams.get("price"),
  ];
  const searchQuery:string|null = tour && user && price ? `?tour=${tour}&user=${user}&price=${price}` : null

  useEffect(() => {
    dispatch(getAllToursAction(searchQuery));
  }, []);

  return (
    <MainContent>
      <TourCardContainer />
    </MainContent>
  );
};

export default Home;
