import { useSelector } from "react-redux";
import {
  CardContainer,
  MainContent,
} from "../../components/shared-styles/styles.component";
import TourCard from "../../components/tour-card/TourCard.component";
import { selectAllToursData } from "../../store/tour/tourSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllToursAction } from "../../store/tour/tourReducer";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllToursAction());
  }, []);

  const toursData = useSelector(selectAllToursData);
 
 
  
  return (
    <MainContent>
      <CardContainer>
        {toursData?.map((val) => {
          
          return <TourCard key={val.id} tour={val}/>;
        })}
      </CardContainer>
    </MainContent>
  );
};

export default Home;
