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
import NotFound from "./Pages/NotFound/NotFound";

import DashboardHome from "./Dashboard/Home/DashboardHome";
import DashboardCourses from "./Dashboard/Courses/DashboardCourses";

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
                <Route path="/dashboard" element={<DashboardHome />} />
                <Route path="/dashboard/cours" element={<DashboardCourses />} />
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
