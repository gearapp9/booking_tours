import { MainContent } from "../../components/shared-styles/styles.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllToursAction } from "../../store/tour/tourReducer";
import TourCardContainer from "../../components/tour-card-container/TourCardContainer.component";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllToursAction());
  }, []);

  return (
    <MainContent>
      <TourCardContainer />
    </MainContent>
  );
};

export default Home;
