import DashboardTableLevels from "./DashboardTableLevels";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

import { useContext } from "react";

import { AuthContext } from "./../../../utils/context/AuthContext";

function DashboardLevels() {
  const { UserID } = useContext(AuthContext);

  return (
    <section id="dashboardLevels">
      <NavDashboard />
      {UserID && (
        <MainDashboard>
          <DashboardTableLevels />
        </MainDashboard>
      )}
      <NavDashboardMobileButton />
    </section>
  );
}

export default DashboardLevels;
