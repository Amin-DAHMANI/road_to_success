import DashboardTableAccounts from "./DashboardTableAccounts";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

import { useContext } from "react";

import { AuthContext } from "./../../../utils/context/AuthContext";

function DashboardAccounts() {
  const { UserID } = useContext(AuthContext);
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
