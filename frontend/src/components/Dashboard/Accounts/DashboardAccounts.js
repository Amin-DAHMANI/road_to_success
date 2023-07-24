import DashboardTableAccounts from "./DashboardTableAccounts";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

function DashboardAccounts() {
  return (
    <section id="dashboardAccounts">
      <NavDashboard />
      <MainDashboard>
        <DashboardTableAccounts />
      </MainDashboard>
      <NavDashboardMobileButton />
    </section>
  );
}

export default DashboardAccounts;
