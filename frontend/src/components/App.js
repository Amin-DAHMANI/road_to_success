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
import Registration from "./Pages/Registration/Registration";
import NotFound from "./Pages/NotFound/NotFound";

import DashboardHome from "./Dashboard/Home/DashboardHome";
import DashboardAccounts from "./Dashboard/Accounts/DashboardAccounts";
import DashboardFields from "./Dashboard/Fields/DashboardFields";
import DashboardLevels from "./Dashboard/Levels/DashboardLevels";

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
                <Route path="/accueil" element={<Home />} />
                <Route path="/cours" element={<Courses />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/inscription" element={<Registration />} />
                <Route path="/dashboard" element={<DashboardHome />} />
                <Route
                  path="/dashboard/comptes"
                  element={<DashboardAccounts />}
                />
                <Route path="/dashboard/cours" element={<DashboardFields />} />
                <Route
                  path="/dashboard/niveaux"
                  element={<DashboardLevels />}
                />
                <Route path="/erreur-404" element={<NotFound />} />
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
