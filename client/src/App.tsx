import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TourPage from "./routes/tourPage/TourPage.component";
import SignIn from "./routes/sign-in/SignIn.component";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/tour/:slug/*" element={<TourPage />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
