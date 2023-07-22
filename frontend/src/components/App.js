import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ResizeProvider } from "../utils/context/ResizeContext";
import { NavMobileProvider } from "../utils/context/NavMobileContext";
import { NavConnexionProvider } from "../utils/context/NavConnexionContext";

import Header from "./Structure/Header/Header";
import NavMobile from "./Structure/Nav/NavMobile";
import NavConnexion from "./Structure/Nav/NavConnexion";
import Footer from "./Structure/Footer/Footer";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Connexion from "./Pages/Connection/Connection";
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResizeProvider>
          <NavMobileProvider>
            <NavConnexionProvider>
              <Header />
              <NavMobile />
              <NavConnexion />
              <Routes>
                <Route index element={<Home />} />
                <Route exact path="/accueil" element={<Home />} />
                <Route exact path="/cours" element={<Courses />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/connexion" element={<Connexion />} />
                <Route exact path="/error-404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/error-404" />} />
              </Routes>
              <Footer />
            </NavConnexionProvider>
          </NavMobileProvider>
        </ResizeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
