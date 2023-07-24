import DashboardTableFields from "./DashboardTableFields";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

function DashboardFields() {
  return (
    <section id="dashboardFields">
      <NavDashboard />
      <MainDashboard>
        <DashboardTableFields />
      </MainDashboard>
      <NavDashboardMobileButton />
    </section>
  );
}

export default DashboardFields;
