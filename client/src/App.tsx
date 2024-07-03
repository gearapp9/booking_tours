import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Provider } from "react-redux";
import TourPage from "./routes/tourPage/TourPage.component";
import SignIn from "./routes/sign-in/SignIn.component";
import { store, persistor } from "./store/store";
import UserSettings from "./routes/user-settings/UserSettings.component";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="/tour/:slug/*" element={<TourPage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/settings" element={<UserSettings/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
