import DashboardTableLevels from "./DashboardTableLevels";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

function DashboardLevels() {
  return (
    <section id="dashboardLevels">
      <NavDashboard />
      <MainDashboard>
        <DashboardTableLevels />
      </MainDashboard>
      <NavDashboardMobileButton />
    </section>
  );
}

export default DashboardLevels;
