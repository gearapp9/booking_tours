import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
