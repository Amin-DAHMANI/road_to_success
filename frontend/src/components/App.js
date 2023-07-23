import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ResizeProvider } from "../utils/context/ResizeContext";
import { AllNavProvider } from "../utils/context/AllNavContext";
import { DashboardProvider } from "../utils/context/DashboardContext";

import Header from "./Structure/Header/Header";
import NavMobile from "./Structure/Nav/NavMobile";
import NavConnexion from "./Structure/Nav/NavConnexion";
import Footer from "./Structure/Footer/Footer";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Connexion from "./Pages/Connection/Connection";
import DashboardHome from "./Dashboard/DashboardHome";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResizeProvider>
          <AllNavProvider>
            <DashboardProvider>
              <Header />
              <NavMobile />
              <NavConnexion />
              <Routes>
                <Route index element={<Home />} />
                <Route exact path="/accueil" element={<Home />} />
                <Route exact path="/cours" element={<Courses />} />
                <Route
                  exact
                  path="/dashboard/accueil"
                  element={<DashboardHome />}
                />
                <Route exact path="/connexion" element={<Connexion />} />
                <Route exact path="/erreur-404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/erreur-404" />} />
              </Routes>
              <Footer />
            </DashboardProvider>
          </AllNavProvider>
        </ResizeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
