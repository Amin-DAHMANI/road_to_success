import DashboardTableAccounts from "./DashboardTableAccounts";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";
import CreateIcon from "./../../Reusable/CreateIcon";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

import { useContext } from "react";

import { AuthContext } from "./../../../utils/context/AuthContext";

function DashboardAccounts() {
  const { UserID } = useContext(AuthContext);
  return (
    <section id="dashboardAccounts">
      <>
        <NavDashboard />
        <NavDashboardMobileButton />
      </>
      {UserID && (
        <MainDashboard>
          <DashboardTableAccounts />
          <CreateIcon />
        </MainDashboard>
      )}
    </section>
  );
}

export default DashboardAccounts;
